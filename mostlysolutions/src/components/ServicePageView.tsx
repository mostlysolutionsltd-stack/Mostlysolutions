import Link from 'next/link'
import type { ReactNode } from 'react'
import { SERVICE_ANCHORS, type ServiceContent } from '@/lib/services'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import ServiceFAQAccordion from './ServiceFAQ'
import { WhatsAppGlyph } from './icons'

const WHATSAPP_HREF = 'https://wa.me/447722019897'

const HERO_OVERLAY =
  'linear-gradient(100deg,#060F1F 28%,rgba(6,15,31,.82) 55%,rgba(6,15,31,.45)), linear-gradient(180deg,rgba(6,15,31,.45),transparent 40%,#060F1F 97%)'

const HERO_IMAGE: Record<string, string> = {
  'car-diagnostics-london': '/services/diagnostics.webp',
  'mechanical-work-london': '/services/mechanical.webp',
  'electrical-battery-london': '/services/electrical.webp',
  'car-detailing-london': '/services/detailing.webp',
}

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

export default function ServicePageView({ service }: { service: ServiceContent }) {
  const { slug } = service
  const heroImage = HERO_IMAGE[slug] ?? '/services/diagnostics.webp'

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
      <SiteHeader active="services" />

      <main>
        {/* ---------- Banner hero ---------- */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '150px clamp(16px,5vw,48px) 70px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt={`${service.breadcrumb} — mobile service by Mostly Solutions`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: HERO_OVERLAY }} />
          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(234,240,247,.5)' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/services" style={{ color: 'inherit', textDecoration: 'none' }}>
                Services
              </Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#4CC163' }}>{service.breadcrumb}</span>
            </nav>

            <h1 style={{ margin: '20px 0 0', fontSize: 'clamp(34px,5.2vw,60px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.05, color: '#FFFFFF' }}>
              {service.h1}
            </h1>
            <p style={{ margin: '16px 0 0', fontSize: 'clamp(16px,1.8vw,20px)', fontWeight: 600, color: '#4CC163' }}>{service.tagline}</p>
            <p style={{ margin: '18px 0 0', maxWidth: 640, fontSize: 16, lineHeight: 1.7, color: 'rgba(234,240,247,.78)' }}>{linkify(service.intro, slug)}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
              <Link href="/#booking" className="ms-btn-grad" style={{ fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}>
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
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(28px,4vw,56px)',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ flex: '1.55 1 340px', display: 'flex', flexDirection: 'column', gap: 34 }}>
            {service.sections.map((sec) => (
              <div key={sec.h2}>
                <h2 style={{ margin: 0, fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-.015em' }}>{sec.h2}</h2>
                {sec.paras.map((p, i) => (
                  <p key={i} style={{ margin: '14px 0 0', fontSize: 15, lineHeight: 1.75, color: 'rgba(234,240,247,.68)' }}>
                    {linkify(p, slug)}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Checklist card */}
          <div
            style={{
              flex: '1 1 300px',
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

        {/* ---------- "We Bring the Workshop to You" image band ---------- */}
        <section style={{ position: 'relative', overflow: 'hidden', margin: 'clamp(60px,8vw,100px) 0 0', padding: 'clamp(70px,9vw,120px) clamp(16px,5vw,48px)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banners/van-terrace.jpeg"
            alt=""
            aria-hidden
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,#060F1F 20%,rgba(6,15,31,.78) 52%,rgba(6,15,31,.3))' }} />
          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 480 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>NO GARAGE VISIT NEEDED</div>
              <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(26px,3.4vw,40px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF', lineHeight: 1.1 }}>
                We Bring the Workshop to You
              </h2>
              <p style={{ margin: '16px 0 0', fontSize: 16, lineHeight: 1.7, color: 'rgba(234,240,247,.78)' }}>
                Fully equipped vans and certified technicians at your home, workplace, or roadside — across Reading and London.
              </p>
              <Link href="/#booking" className="ms-btn-grad" style={{ display: 'inline-block', marginTop: 26, fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}>
                Book a Callout
              </Link>
            </div>
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
            <h2 style={{ margin: 0, fontSize: 'clamp(26px,3.6vw,42px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>{service.ctaHeading}</h2>
            <p style={{ margin: '16px auto 0', maxWidth: 540, fontSize: 16, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>
              Fast booking, expert technicians, and honest advice — wherever you are in London or Reading.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 30 }}>
              <Link href="/#booking" className="ms-btn-grad" style={{ fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}>
                Book Service
              </Link>
              <a href="tel:+441189000000" className="ms-btn-ghost" style={{ fontSize: 15, padding: '14px 26px' }}>
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
