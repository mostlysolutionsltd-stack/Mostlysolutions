'use client'

import { useState } from 'react'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'Which areas do you cover?',
    a: 'We cover Reading, Greater London, and everywhere along the M4 corridor. For jobs outside these areas, get in touch — we regularly arrange callouts across the South East.',
  },
  {
    q: 'How quickly can a mechanic reach me?',
    a: 'Our average response is a 15-minute callback from booking. Same-day visits are usually available in Reading and London; emergency callouts are prioritised.',
  },
  {
    q: 'Are your mechanics certified?',
    a: 'Yes — every technician is IMI-certified with 10+ years of hands-on experience across major European and Japanese brands.',
  },
  {
    q: 'Is the work guaranteed?',
    a: 'All repairs use OEM-grade parts backed by a 12-month warranty. No cheap alternatives, ever.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Card, bank transfer, and cash — paid only once the work is complete and you are happy. Transparent pricing with no hidden charges.',
  },
  {
    q: 'Can you prepare my car for its MOT at home?',
    a: 'Absolutely. We carry out full MOT preparation at your home or workplace, covering brakes, lights, emissions checks, and common failure points.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(-1)

  return (
    <section id="faq" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px)', maxWidth: 840, margin: '0 auto' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: 44 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>GOT QUESTIONS?</div>
        <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(32px,4.4vw,52px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
          Frequently Asked Questions
        </h2>
      </Reveal>

      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="ms-faq-item">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 14,
                  background: 'none',
                  border: 'none',
                  padding: '19px 22px',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 15.5, fontWeight: 600, color: '#FFFFFF' }}>{f.q}</span>
                <span
                  style={{
                    flex: 'none',
                    fontSize: 16,
                    color: '#4CC163',
                    transition: 'transform .3s ease',
                    transform: `rotate(${isOpen ? 45 : 0}deg)`,
                  }}
                >
                  ＋
                </span>
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows .3s ease',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ margin: 0, padding: '0 22px 20px', fontSize: 14.5, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
