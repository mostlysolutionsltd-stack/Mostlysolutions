'use client'

import { useState, type FormEvent } from 'react'
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

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)

  const submitLabel = sending ? 'Sending…' : sendError ? 'Try Again — Confirm Booking' : 'Confirm Booking'

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    if (sending) return
    const fd = new FormData(form)
    const data: Record<string, string> = {
      _subject: 'New Booking Request — MostlySolutions Website',
      _template: 'table',
      'Full Name': String(fd.get('name') || ''),
      Email: String(fd.get('email') || ''),
      Phone: String(fd.get('phone') || ''),
      'Vehicle Registration': String(fd.get('reg') || ''),
      Service: String(fd.get('service') || ''),
      'Preferred Date': String(fd.get('date') || ''),
      Notes: String(fd.get('notes') || '') || '—',
    }
    setSending(true)
    setSendError(false)
    try {
      const res = await fetch('https://formsubmit.co/ajax/Mostlysolutionsltd@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('send failed')
      setSubmitted(true)
      setSending(false)
    } catch {
      const body = Object.entries(data)
        .filter(([k]) => !k.startsWith('_'))
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
      window.location.href =
        'mailto:Mostlysolutionsltd@gmail.com?subject=' +
        encodeURIComponent('New Booking Request') +
        '&body=' +
        encodeURIComponent(body)
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
            <form onSubmit={submitForm} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: 14 }}>
              <input required name="name" placeholder="Full Name *" className="ms-input" />
              <input required type="email" name="email" placeholder="Email Address *" className="ms-input" />
              <input required type="tel" name="phone" placeholder="Phone Number *" className="ms-input" />
              <input required name="reg" placeholder="Vehicle Registration *" className="ms-input" />
              <select required name="service" defaultValue="" className="ms-input" style={inputStyle}>
                <option value="" disabled>
                  Select a service… *
                </option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} style={{ color: '#04101F' }}>
                    {opt}
                  </option>
                ))}
              </select>
              <input required type="date" name="date" className="ms-input" style={{ ...inputStyle, colorScheme: 'dark' }} />
              <textarea name="notes" placeholder="Additional Notes" rows={3} className="ms-input" style={{ ...inputStyle, resize: 'vertical' }} />
              <button
                type="submit"
                className="ms-btn-grad"
                style={{ gridColumn: '1 / -1', fontSize: 15.5, padding: 16, boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}
              >
                {submitLabel}
              </button>
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
