'use client'

import { useState } from 'react'
import type { ServiceFAQ } from '@/lib/services'

/** Accordion matching the homepage FAQ pattern — one open at a time, ＋ rotates 45°. */
export default function ServiceFAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  const [open, setOpen] = useState(-1)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {faqs.map((f, i) => {
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
            <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows .3s ease' }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ margin: 0, padding: '0 22px 20px', fontSize: 14.5, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
