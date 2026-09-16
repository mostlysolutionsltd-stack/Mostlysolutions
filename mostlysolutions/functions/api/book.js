/**
 * Cloudflare Pages Function — POST /api/book
 *
 * Receives the booking form payload and sends an email via the Resend HTTP API.
 * Runs on Cloudflare's Workers runtime (no SMTP), so it uses fetch() to Resend.
 *
 * Required Cloudflare Pages environment variable (Settings → Environment variables):
 *   RESEND_API_KEY   — your Resend API key (store as an encrypted secret)
 *
 * Optional overrides (sensible defaults are used if unset):
 *   BOOKING_TO       — recipient inbox   (default: Mostlysolutionsltd@gmail.com)
 *   BOOKING_FROM     — verified sender   (default: onboarding@resend.dev — Resend's
 *                      test sender, which can only deliver to the account-owner email.
 *                      Once you verify your own domain in Resend, set this to e.g.
 *                      "MostlySolutions <bookings@yourdomain.co.uk>" to send anywhere.)
 */

// Must be lowercase to match the Resend account address exactly — Resend's
// test-mode recipient check is case-sensitive, so "Mostly…" would be rejected.
const DEFAULT_TO = 'mostlysolutionsltd@gmail.com'
const DEFAULT_FROM = 'MostlySolutions Website <onboarding@resend.dev>'

function esc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function onRequestPost(context) {
  const { request, env } = context

  if (!env.RESEND_API_KEY) {
    return json({ success: false, message: 'Email service is not configured.' }, 500)
  }

  let data
  try {
    data = await request.json()
  } catch {
    return json({ success: false, message: 'Invalid request.' }, 400)
  }

  const name = String(data.name || '').trim()
  const email = String(data.email || '').trim()
  const phone = String(data.phone || '').trim()
  const reg = String(data.reg || '').trim()
  const service = String(data.service || '').trim()
  const date = String(data.date || '').trim()
  const notes = String(data.notes || '').trim()

  // Server-side guard so we never send an empty/spam booking.
  if (!name || !email || !phone || !reg || !service || !date) {
    return json({ success: false, message: 'Please fill in all required fields.' }, 400)
  }

  const rows = [
    ['Full Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Vehicle Registration', reg],
    ['Service', service],
    ['Preferred Date', date],
    ['Notes', notes || '—'],
  ]

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0b1a2b">
      <h2 style="margin:0 0 16px">New Booking Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;border:1px solid #e3e8ef;background:#f6f8fb;font-weight:700;white-space:nowrap">${esc(k)}</td>
                 <td style="padding:8px 12px;border:1px solid #e3e8ef">${esc(v)}</td>
               </tr>`
          )
          .join('')}
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#6b7787">Sent from the MostlySolutions website booking form.</p>
    </div>`

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')

  const to = (env.BOOKING_TO || DEFAULT_TO).toLowerCase()
  const from = env.BOOKING_FROM || DEFAULT_FROM

  const payload = {
    from,
    to: [to],
    subject: `New Booking — ${service} (${name})`,
    html,
    text,
  }
  // Only set reply_to once a real domain is verified (BOOKING_FROM configured).
  // In Resend's test mode, an external reply_to can trip the recipient check.
  if (env.BOOKING_FROM) {
    payload.reply_to = email // replies go straight to the customer
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      return json({ success: false, message: 'Could not send email.', detail }, 502)
    }

    return json({ success: true })
  } catch {
    return json({ success: false, message: 'Could not reach the email service.' }, 502)
  }
}

// Reject non-POST methods cleanly.
export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return json({ success: false, message: 'Method not allowed.' }, 405)
  }
  return onRequestPost(context)
}
