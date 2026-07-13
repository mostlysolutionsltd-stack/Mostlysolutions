'use client'

import { useState, type FormEvent, type ChangeEvent, type FocusEvent } from 'react'
import Reveal from './Reveal'

const STEPS = [
  { num: '01', title: 'Select Service', sub: 'Choose the service you need' },
  { num: '02', title: 'Choose Location', sub: 'Reading or London' },
  { num: '03', title: 'Confirm Booking', sub: "We'll confirm within 2 hours" },
]

const SERVICE_OPTIONS = [
  'Expert Automotive Diagnostics',
  'Mechanical Work',
  'Electrical & Batteries',
  'Detailing & Protection',
  'MOT Preparation',
  'Emergency Callout',
  'Other',
]

const inputStyle = {
  gridColumn: '1 / -1',
} as const

const WHATSAPP_NUMBER = '447722019897'

type Booking = {
  name: string
  email: string
  phone: string
  reg: string
  service: string
  date: string
  notes: string
}

function whatsappUrl(b: Booking) {
  const lines = [
    'Hi MostlySolutions, I just booked a mobile mechanic:',
    '',
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
    `Vehicle Reg: ${b.reg}`,
    `Service: ${b.service}`,
    `Preferred Date: ${b.date}`,
    ...(b.notes ? [`Notes: ${b.notes}`] : []),
  ]
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

type Values = { name: string; email: string; phone: string; reg: string; service: string; date: string; notes: string }
type Errors = Partial<Record<keyof Values, string>>

const EMPTY_VALUES: Values = { name: '', email: '', phone: '', reg: '', service: '', date: '', notes: '' }
// Fields with a green ✓ affordance when valid.
const CHECK_FIELDS: (keyof Values)[] = ['name', 'email', 'phone', 'reg']

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [lastBooking, setLastBooking] = useState<Booking | null>(null)

  const [values, setValues] = useState<Values>(EMPTY_VALUES)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({})
  const [shake, setShake] = useState(false)
  // Local (not UTC) YYYY-MM-DD for the date `min` attribute and past-date checks.
  const [todayISO] = useState(() => new Date().toLocaleDateString('en-CA'))

  const submitLabel = sending ? 'Sending…' : sendError ? 'Try Again — Confirm Booking' : 'Confirm Booking'

  // Returns '' when valid, else the message to display.
  const validateField = (name: keyof Values, raw: string): string => {
    const v = raw.trim()
    switch (name) {
      case 'name':
        if (v.length < 2) return 'Please enter your full name'
        if (!/^[A-Za-z][A-Za-z\s'\-.]*$/.test(v)) return 'Name can only contain letters'
        return ''
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v)) return 'Enter a valid email address (e.g. name@example.com)'
        return ''
      case 'phone': {
        const cleaned = v.replace(/[\s\-()]/g, '')
        if (!/^(\+44\d{9,10}|0\d{9,10})$/.test(cleaned)) return 'Enter a valid UK phone number (07… or +44…)'
        return ''
      }
      case 'reg': {
        const cleaned = v.replace(/\s/g, '').toUpperCase()
        if (!/^[A-Z0-9]{2,8}$/.test(cleaned)) return 'Enter a valid UK registration (e.g. AB12 CDE)'
        return ''
      }
      case 'service':
        if (!v) return 'Please select a service'
        return ''
      case 'date':
        if (!v) return 'Please choose a date'
        if (v < todayISO) return 'Date cannot be in the past'
        return ''
      default:
        return ''
    }
  }

  const isValid = (name: keyof Values) =>
    Boolean(touched[name]) && values[name].trim() !== '' && validateField(name, values[name]) === ''

  const borderFor = (name: keyof Values) => {
    if (errors[name]) return '#F0716B'
    if (isValid(name)) return 'rgba(76,193,99,.55)'
    return 'rgba(255,255,255,.12)'
  }

  // Live input masks + re-validate once a field already shows an error.
  const handleChange =
    (name: keyof Values) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      let val = e.target.value
      if (name === 'phone') val = val.replace(/[^\d+\s\-()]/g, '')
      if (name === 'reg') val = val.toUpperCase()
      setValues((prev) => ({ ...prev, [name]: val }))
      setErrors((prev) => (prev[name] ? { ...prev, [name]: validateField(name, val) } : prev))
    }

  const handleBlur =
    (name: keyof Values, required = true) =>
    (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const val = e.target.value
      setTouched((prev) => ({ ...prev, [name]: true }))
      // Empty, non-required field on blur stays neutral — no error, no check.
      if (!required && !val.trim()) {
        setErrors((prev) => ({ ...prev, [name]: '' }))
        return
      }
      setErrors((prev) => ({ ...prev, [name]: validateField(name, val) }))
    }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending) return

    // Validate every required field at once.
    const fields: (keyof Values)[] = ['name', 'email', 'phone', 'reg', 'service', 'date']
    const nextErrors: Errors = {}
    fields.forEach((f) => {
      const err = validateField(f, values[f])
      if (err) nextErrors[f] = err
    })
    setTouched((prev) => ({ ...prev, name: true, email: true, phone: true, reg: true, service: true, date: true }))

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setShake(true)
      return
    }
    setErrors({})

    const data = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      reg: values.reg.trim(),
      service: values.service,
      date: values.date,
      notes: values.notes.trim(),
    }
    setSending(true)
    setSendError(false)
    setErrorMsg('')
    try {
      // Cloudflare Pages Function — sends the booking via Resend (see functions/api/book.js)
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const raw = await res.text()
      let result: { success?: boolean; message?: string; detail?: string } | null = null
      try {
        result = JSON.parse(raw)
      } catch {
        // Not JSON — the endpoint likely wasn't found (got HTML) or crashed.
        throw new Error(`Unexpected response (HTTP ${res.status}). The /api/book function may not be deployed.`)
      }
      if (!res.ok || !result?.success) {
        throw new Error(result?.message || result?.detail || `Send failed (HTTP ${res.status}).`)
      }
      setLastBooking(data)
      setSubmitted(true)
      setSending(false)
    } catch (err) {
      // Don't hijack the page with a mailto: redirect — show an inline
      // message and let the customer retry or reach us by phone/WhatsApp.
      const msg = err instanceof Error ? err.message : 'Something went wrong.'
      // eslint-disable-next-line no-console
      console.error('Booking submit failed:', msg)
      setErrorMsg(msg)
      setSending(false)
      setSendError(true)
    }
  }

  return (
    <section
      id="booking"
      style={{
        background: 'linear-gradient(180deg,transparent,rgba(47,168,216,.06))',
        borderTop: '1px solid rgba(255,255,255,.06)',
      }}
    >
      <div
        style={{
          padding: 'clamp(70px,9vw,120px) clamp(16px,5vw,48px)',
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(310px,100%),1fr))',
          gap: 'clamp(28px,4vw,60px)',
          alignItems: 'start',
        }}
      >
        <Reveal>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>READY TO BOOK?</div>
          <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(32px,4.4vw,50px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
            Book Your Service
          </h2>
          <p style={{ margin: '16px 0 0', fontSize: 16, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>
            Our certified technicians come to you. No garage visits, no waiting rooms. We&apos;ll confirm your appointment within 2 hours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34 }}>
            {STEPS.map((stp) => (
              <div key={stp.num} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    flex: 'none',
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    border: '1px solid rgba(76,193,99,.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#4CC163',
                  }}
                >
                  {stp.num}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF' }}>{stp.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(234,240,247,.55)' }}>{stp.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 36,
              padding: '20px 24px',
              background: 'rgba(255,255,255,.035)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 14,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(234,240,247,.55)' }}>Prefer to call?</div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 8 }}>
              <a href="tel:+441189000000" style={{ color: '#2FA8D8', textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                +44 118 900 0000
              </a>
              <a href="https://wa.me/447722019897" target="_blank" rel="noopener noreferrer" style={{ color: '#4CC163', textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal
          style={{
            background: 'rgba(8,20,42,.75)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 20,
            padding: 'clamp(24px,3vw,36px)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  fontSize: 28,
                  color: '#04101F',
                }}
              >
                ✓
              </div>
              <h3 style={{ margin: '22px 0 0', fontSize: 24, fontWeight: 800, color: '#FFFFFF' }}>Booking Received!</h3>
              <p style={{ margin: '12px auto 0', maxWidth: 340, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(234,240,247,.65)' }}>
                Thanks — we&apos;ll confirm your appointment within 2 hours. Keep your phone handy.
              </p>
              {lastBooking && (
                <a
                  href={whatsappUrl(lastBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 9,
                    marginTop: 26,
                    padding: '13px 24px',
                    borderRadius: 99,
                    background: '#25D366',
                    color: '#04101F',
                    fontSize: 14.5,
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(37,211,102,.35)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.5 9.5 0 01-4.83-1.32l-.35-.2-3.59.94.96-3.5-.23-.36a9.45 9.45 0 01-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.79a9.42 9.42 0 012.78 6.71c0 5.24-4.26 9.5-9.5 9.5zm8.08-17.57A11.4 11.4 0 0012.05.5C5.76.5.65 5.61.65 11.9c0 2.09.55 4.13 1.59 5.93L.5 23.5l5.82-1.53a11.35 11.35 0 005.72 1.46h.01c6.29 0 11.4-5.11 11.4-11.4 0-3.05-1.19-5.91-3.32-8.1z" />
                  </svg>
                  Also send via WhatsApp
                </a>
              )}
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: 24,
                  background: 'none',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: 99,
                  color: '#EAF0F7',
                  fontSize: 13.5,
                  fontWeight: 600,
                  padding: '11px 22px',
                  cursor: 'pointer',
                }}
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={submitForm}
              className={shake ? 'ms-shake' : undefined}
              onAnimationEnd={() => setShake(false)}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: 14 }}
            >
              {([
                { name: 'name', placeholder: 'Full Name *', type: 'text', autoComplete: 'name' },
                { name: 'email', placeholder: 'Email Address *', type: 'email', autoComplete: 'email' },
                { name: 'phone', placeholder: 'Phone Number *', type: 'tel', autoComplete: 'tel' },
                { name: 'reg', placeholder: 'Vehicle Registration *', type: 'text', autoComplete: 'off' },
              ] as const).map((f) => (
                <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ position: 'relative' }}>
                    <input
                      name={f.name}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      placeholder={f.placeholder}
                      className="ms-input"
                      value={values[f.name]}
                      onChange={handleChange(f.name)}
                      onBlur={handleBlur(f.name)}
                      aria-invalid={Boolean(errors[f.name])}
                      style={{
                        borderColor: borderFor(f.name),
                        paddingRight: CHECK_FIELDS.includes(f.name) ? 40 : undefined,
                        transition: 'border-color .3s ease',
                      }}
                    />
                    {isValid(f.name) && (
                      <span
                        aria-hidden
                        style={{
                          position: 'absolute',
                          right: 14,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontSize: 14,
                          color: '#4CC163',
                          pointerEvents: 'none',
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </div>
                  {errors[f.name] && (
                    <span style={{ fontSize: 12, color: '#F0716B', paddingLeft: 4 }}>{errors[f.name]}</span>
                  )}
                </div>
              ))}
              <div style={{ ...inputStyle, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <select
                  name="service"
                  className="ms-input"
                  value={values.service}
                  onChange={handleChange('service')}
                  onBlur={handleBlur('service')}
                  aria-invalid={Boolean(errors.service)}
                  style={{ borderColor: borderFor('service'), transition: 'border-color .3s ease' }}
                >
                  <option value="" disabled>
                    Select a service… *
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} style={{ color: '#04101F' }}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span style={{ fontSize: 12, color: '#F0716B', paddingLeft: 4 }}>{errors.service}</span>
                )}
              </div>
              <div style={{ ...inputStyle, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <input
                  type="date"
                  name="date"
                  min={todayISO}
                  className="ms-input"
                  value={values.date}
                  onChange={handleChange('date')}
                  onBlur={handleBlur('date')}
                  aria-invalid={Boolean(errors.date)}
                  style={{ colorScheme: 'dark', borderColor: borderFor('date'), transition: 'border-color .3s ease' }}
                />
                {errors.date && (
                  <span style={{ fontSize: 12, color: '#F0716B', paddingLeft: 4 }}>{errors.date}</span>
                )}
              </div>
              <textarea
                name="notes"
                placeholder="Additional Notes"
                rows={3}
                className="ms-input"
                value={values.notes}
                onChange={handleChange('notes')}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
              <button
                type="submit"
                className="ms-btn-grad"
                style={{ gridColumn: '1 / -1', fontSize: 15.5, padding: 16, boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}
              >
                {submitLabel}
              </button>
              {sendError && (
                <div
                  style={{
                    gridColumn: '1 / -1',
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'rgba(255,99,99,.08)',
                    border: '1px solid rgba(255,99,99,.3)',
                    fontSize: 13,
                    lineHeight: 1.55,
                    color: 'rgba(234,240,247,.8)',
                    textAlign: 'center',
                  }}
                >
                  Sorry, we couldn&apos;t send that just now. Please try again, or reach us directly:{' '}
                  <a href="tel:+441189000000" style={{ color: '#2FA8D8', fontWeight: 700, textDecoration: 'none' }}>
                    +44 118 900 0000
                  </a>{' '}
                  {errorMsg && (
                    <span style={{ display: 'block', marginTop: 8, fontSize: 11.5, opacity: 0.7 }}>({errorMsg})</span>
                  )}
                  ·{' '}
                  <a href="https://wa.me/447722019897" target="_blank" rel="noopener noreferrer" style={{ color: '#4CC163', fontWeight: 700, textDecoration: 'none' }}>
                    WhatsApp
                  </a>
                </div>
              )}
              <p style={{ gridColumn: '1 / -1', margin: 0, fontSize: 11.5, lineHeight: 1.5, color: 'rgba(234,240,247,.4)', textAlign: 'center' }}>
                By submitting you agree to be contacted by MostlySolutions regarding your booking.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
