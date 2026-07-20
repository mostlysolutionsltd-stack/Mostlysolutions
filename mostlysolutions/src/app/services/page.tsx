import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { WhatsAppGlyph } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Mobile Automotive Services in London | Mostly Solutions',
  description:
    'Discover professional mobile automotive services in London, including car diagnostics, mechanical repairs, electrical and battery services, plus vehicle detailing delivered to your location.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Mobile Automotive Services in London | Mostly Solutions',
    description:
      'Discover professional mobile automotive services in London, including car diagnostics, mechanical repairs, electrical and battery services, plus vehicle detailing delivered to your location.',
    url: '/services',
    type: 'website',
    locale: 'en_GB',
  },
}

const WHATSAPP_HREF = 'https://wa.me/447722019897'

const HERO_OVERLAY =
  'radial-gradient(60% 55% at 50% 40%, rgba(47,168,216,.1), transparent 70%), linear-gradient(180deg,rgba(6,15,31,.78),rgba(6,15,31,.55) 45%,#060F1F 100%)'

const ROWS = [
  {
    n: '01',
    tag: 'Diagnostics',
    title: 'Mobile Car Diagnostics',
    slug: 'car-diagnostics-london',
    img: '/services/diagnostics.webp',
    desc: 'Bosch diagnostic equipment brought to your location — engine warning lights, ECU faults, sensors, and full vehicle health checks.',
    bullets: ['Engine light & ECU scanning', 'Battery & charging testing', 'ABS, airbag & sensor diagnostics'],
  },
  {
    n: '02',
    tag: 'Mechanical',
    title: 'Mechanical Work',
    slug: 'mechanical-work-london',
    img: '/services/mechanical.webp',
    desc: 'Brakes, suspension, steering, cooling systems, and engine components — garage-standard repairs completed on your driveway.',
    bullets: ['Brakes & suspension', 'Cooling & engine components', 'Steering, belts & maintenance'],
  },
  {
    n: '03',
    tag: 'Electrical',
    title: 'Electrical & Batteries',
    slug: 'electrical-battery-london',
    img: '/services/electrical.webp',
    desc: 'Battery testing and replacement, alternator repairs, wiring faults, and dashboard warning light diagnosis at your location.',
    bullets: ['Battery testing & doorstep replacement', 'Alternator & starter repairs', 'Wiring & warning lights'],
  },
  {
    n: '04',
    tag: 'Detailing',
    title: 'Detailing & Protection',
    slug: 'car-detailing-london',
    img: '/services/detailing.webp',
    desc: 'Deep cleaning, paint correction, ceramic coating, and long-lasting paint protection — showroom finish at your home.',
    bullets: ['Deep clean & hand wash', 'Paint correction & polishing', 'Ceramic coating & protection'],
  },
]

export default function ServicesLanding() {
  return (
    <>
      <SiteHeader active="services" />

      <main>
        {/* ---------- Seamless banner hero ---------- */}
        <section style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banners/van-branded-hood.jpeg"
            alt="Mostly Solutions branded van with a mechanic working at a car bonnet"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 32%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: HERO_OVERLAY }} />
          <div
            style={{
              position: 'relative',
              maxWidth: 860,
              margin: '0 auto',
              padding: 'clamp(140px,16vw,190px) clamp(16px,5vw,48px) clamp(56px,7vw,84px)',
            }}
          >
            <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(234,240,247,.5)' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#4CC163' }}>Services</span>
            </nav>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 22,
                padding: '8px 16px',
                borderRadius: 99,
                border: '1px solid rgba(255,255,255,.16)',
                background: 'rgba(255,255,255,.05)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4CC163', animation: 'msPulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.18em', color: 'rgba(234,240,247,.85)' }}>WHAT WE OFFER</span>
            </div>

            <h1 style={{ margin: '22px 0 0', fontSize: 'clamp(36px,5.4vw,62px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.05, color: '#FFFFFF' }}>
              Our Mobile Mechanic <span className="ms-grad-text">Services</span> in London
            </h1>
            <p style={{ margin: '16px 0 0', fontSize: 'clamp(16px,1.8vw,20px)', fontWeight: 600, color: '#4CC163' }}>
              Professional Vehicle Repairs at Your Doorstep
            </p>
            <p style={{ margin: '18px auto 0', maxWidth: 660, fontSize: 16, lineHeight: 1.7, color: 'rgba(234,240,247,.78)' }}>
              From advanced diagnostics to full mechanical repairs, electrical work, and professional detailing — our certified technicians bring the complete
              workshop to your home, workplace, or roadside location. Choose a service below to learn more.
            </p>
          </div>
        </section>

        {/* ---------- Alternating service rows ---------- */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,5vw,48px) clamp(40px,6vw,72px)' }}>
          {ROWS.map((r, i) => (
            <div
              key={r.slug}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: i % 2 === 1 ? 'row-reverse' : 'row',
                gap: 'clamp(26px,4vw,54px)',
                alignItems: 'center',
                padding: 'clamp(30px,4vw,44px) 0',
                borderTop: '1px solid rgba(255,255,255,.07)',
              }}
            >
              {/* Image side */}
              <Link
                href={`/services/${r.slug}`}
                style={{ flex: '1 1 380px', position: 'relative', display: 'block', aspectRatio: '16 / 10', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(.92) contrast(1.04)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(6,15,31,.7))' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    padding: '6px 12px',
                    borderRadius: 99,
                    background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                    color: '#04101F',
                  }}
                >
                  {r.tag}
                </span>
              </Link>

              {/* Text side */}
              <div style={{ flex: '1.15 1 340px' }}>
                <div className="ms-grad-text" style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-.01em' }}>
                  {r.n}
                </div>
                <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.1 }}>
                  <Link href={`/services/${r.slug}`} className="ms-card-title-link">
                    {r.title}
                  </Link>
                </h2>
                <p style={{ margin: '14px 0 0', fontSize: 15, lineHeight: 1.7, color: 'rgba(234,240,247,.68)' }}>{r.desc}</p>
                <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {r.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
                      <span
                        style={{
                          flex: 'none',
                          width: 19,
                          height: 19,
                          borderRadius: '50%',
                          background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 10.5,
                          color: '#04101F',
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(234,240,247,.8)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
                  <Link href={`/services/${r.slug}`} className="ms-btn-grad" style={{ fontSize: 14, padding: '12px 22px', boxShadow: '0 6px 24px rgba(47,168,216,.3)' }}>
                    View Service
                  </Link>
                  <Link href="/#booking" className="ms-btn-ghost" style={{ fontSize: 14, padding: '12px 22px' }}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ---------- CTA band ---------- */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(64px,9vw,110px) clamp(16px,5vw,48px)', textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banners/van-street-wide.jpeg"
            alt=""
            aria-hidden
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#060F1F 4%,rgba(6,15,31,.82) 45%,rgba(6,15,31,.88))' }} />
          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px,3.6vw,42px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
              Not Sure Which Service You Need?
            </h2>
            <p style={{ margin: '16px auto 0', maxWidth: 540, fontSize: 16, lineHeight: 1.65, color: 'rgba(234,240,247,.72)' }}>
              Tell us the symptoms and our technicians will advise the right fix — honest guidance, no obligation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 30 }}>
              <Link href="/#booking" className="ms-btn-grad" style={{ fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}>
                Book Service
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
      </main>

      <SiteFooter />
    </>
  )
}
