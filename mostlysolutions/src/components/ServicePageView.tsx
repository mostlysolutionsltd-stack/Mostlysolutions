import Link from 'next/link'
import type { ReactNode } from 'react'
import { SERVICE_ANCHORS, type ServiceContent } from '@/lib/services'
import ServiceNav from './ServiceNav'
import ServiceFAQAccordion from './ServiceFAQ'

const WHATSAPP_HREF = 'https://wa.me/447722019897'

// Wrap the first mention of each *other* service in a link to its page.
function linkify(text: string, currentSlug: string): ReactNode {
  const candidates = SERVICE_ANCHORS.filter((a) => a.slug !== currentSlug)
    .flatMap((a) => a.phrases.map((phrase) => ({ slug: a.slug, phrase })))
    .sort((x, y) => y.phrase.length - x.phrase.length)

  const lower = text.toLowerCase()
  const usedSlug = new Set<string>()
  const matches: { start: number; end: number; slug: string }[] = []

  for (const c of candidates) {
    if (usedSlug.has(c.slug)) continue
    const idx = lower.indexOf(c.phrase.toLowerCase())
    if (idx === -1) continue
    const end = idx + c.phrase.length
    const overlaps = matches.some((m) => idx < m.end && end > m.start)
    if (overlaps) continue
    matches.push({ start: idx, end, slug: c.slug })
    usedSlug.add(c.slug)
  }

  if (matches.length === 0) return text
  matches.sort((a, b) => a.start - b.start)

  const nodes: ReactNode[] = []
  let cursor = 0
  matches.forEach((m, i) => {
    if (m.start > cursor) nodes.push(text.slice(cursor, m.start))
    nodes.push(
      <Link key={`${m.slug}-${i}`} href={`/services/${m.slug}`} className="ms-svc-inline-link">
        {text.slice(m.start, m.end)}
      </Link>
    )
    cursor = m.end
  })
  if (cursor < text.length) nodes.push(text.slice(cursor))
  return nodes
}

function WhatsAppGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ flex: 'none' }}>
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.5 9.5 0 01-4.83-1.32l-.35-.2-3.59.94.96-3.5-.23-.36a9.45 9.45 0 01-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.79a9.42 9.42 0 012.78 6.71c0 5.24-4.26 9.5-9.5 9.5zm8.08-17.57A11.4 11.4 0 0012.05.5C5.76.5.65 5.61.65 11.9c0 2.09.55 4.13 1.59 5.93L.5 23.5l5.82-1.53a11.35 11.35 0 005.72 1.46h.01c6.29 0 11.4-5.11 11.4-11.4 0-3.05-1.19-5.91-3.32-8.1z" />
    </svg>
  )
}

export default function ServicePageView({ service }: { service: ServiceContent }) {
  const { slug } = service

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ServiceNav />

      <main>
        {/* ---------- Hero band ---------- */}
        <section
          style={{
            padding: '150px clamp(16px,5vw,48px) 70px',
            background:
              'radial-gradient(60% 60% at 12% 0%, rgba(47,168,216,.12), transparent 70%), radial-gradient(55% 55% at 100% 100%, rgba(76,193,99,.08), transparent 70%)',
          }}
        >
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(234,240,247,.5)' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/#services" style={{ color: 'inherit', textDecoration: 'none' }}>
                Services
              </Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#4CC163' }}>{service.breadcrumb}</span>
            </nav>

            <h1
              style={{
                margin: '20px 0 0',
                fontSize: 'clamp(34px,5.2vw,60px)',
                fontWeight: 800,
                letterSpacing: '-.025em',
                lineHeight: 1.05,
                color: '#FFFFFF',
              }}
            >
              {service.h1}
            </h1>
            <p style={{ margin: '16px 0 0', fontSize: 'clamp(16px,1.8vw,20px)', fontWeight: 600, color: '#4CC163' }}>
              {service.tagline}
            </p>
            <p style={{ margin: '18px 0 0', maxWidth: 720, fontSize: 16, lineHeight: 1.7, color: 'rgba(234,240,247,.72)' }}>
              {linkify(service.intro, slug)}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
              <Link
                href="/#booking"
                className="ms-btn-grad"
                style={{ fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}
              >
                Book This Service
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-wa-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 15, padding: '14px 26px' }}
              >
                <WhatsAppGlyph />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Body ---------- */}
        <section
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 clamp(16px,5vw,48px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
            gap: 'clamp(28px,4vw,56px)',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
            {service.sections.map((sec) => (
              <div key={sec.h2}>
                <h2 style={{ margin: 0, fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-.015em' }}>
                  {sec.h2}
                </h2>
                {sec.paras.map((p, i) => (
                  <p
                    key={i}
                    style={{ margin: '14px 0 0', fontSize: 15, lineHeight: 1.75, color: 'rgba(234,240,247,.68)' }}
                  >
                    {linkify(p, slug)}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Checklist card */}
          <div
            style={{
              background: 'rgba(255,255,255,.035)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 18,
              padding: 28,
              position: 'sticky',
              top: 96,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: '#FFFFFF' }}>{service.checklistTitle}</h2>
            <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
              {service.checklist.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span
                    style={{
                      flex: 'none',
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      color: '#04101F',
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'rgba(234,240,247,.82)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section style={{ maxWidth: 840, margin: '0 auto', padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>GOT QUESTIONS?</div>
            <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <ServiceFAQAccordion faqs={service.faqs} />
        </section>

        {/* ---------- CTA band ---------- */}
        <section
          style={{
            borderTop: '1px solid rgba(255,255,255,.07)',
            background: 'linear-gradient(180deg,transparent,rgba(47,168,216,.07))',
            padding: 'clamp(56px,8vw,96px) clamp(16px,5vw,48px)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px,3.6vw,42px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
              {service.ctaHeading}
            </h2>
            <p style={{ margin: '16px auto 0', maxWidth: 540, fontSize: 16, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>
              Fast booking, expert technicians, and honest advice — wherever you are in London.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 30 }}>
              <Link
                href="/#booking"
                className="ms-btn-grad"
                style={{ fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}
              >
                Book Service
              </Link>
              <a href="tel:+441189000000" className="ms-btn-ghost" style={{ fontSize: 15, padding: '14px 26px' }}>
                Call Now
              </a>
            </div>
            <p style={{ margin: '40px 0 0', fontSize: 13, color: 'rgba(234,240,247,.4)' }}>
              © 2026 MostlySolutions Ltd ·{' '}
              <Link href="/" className="ms-footer-link" style={{ fontWeight: 600 }}>
                Back to Home
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
