import Reveal from './Reveal'

const SERVICES = [
  {
    tag: 'Quote After Inspection',
    eyebrow: 'Diagnostics',
    title: 'Expert Automotive Diagnostics',
    desc: 'OBD-II scanning, ECU analysis, live sensor data, and fault code resolution using Bosch-grade equipment.',
    img: '/services/diagnostics.webp',
  },
  {
    tag: 'Quote After Inspection',
    eyebrow: 'Mechanical',
    title: 'Mechanical Work',
    desc: 'Brakes, suspension, exhausts, servicing, and MOT prep. Full mechanical repairs at your location.',
    img: '/services/mechanical.webp',
  },
  {
    tag: 'Condition-Based Quote',
    eyebrow: 'Electrical',
    title: 'Electrical & Batteries',
    desc: 'Alternator testing, battery health checks, starter motor replacement, and full electrical diagnostics.',
    img: '/services/electrical.webp',
  },
  {
    tag: 'Condition-Based Quote',
    eyebrow: 'Detailing',
    title: 'Detailing & Protection',
    desc: 'Professional ceramic coating, paint correction, deep interior cleaning, and protective treatments.',
    img: '/services/detailing.webp',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: 'clamp(72px,10vw,128px) clamp(16px,5vw,64px)', maxWidth: 1280, margin: '0 auto' }}>
      <Reveal style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.3em', color: 'var(--blue)', textTransform: 'uppercase' }}>
          Our Specialties
        </div>
        <h2 style={{ margin: '18px 0 0', fontSize: 'clamp(32px,5vw,54px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.05 }}>
          Everything Your Car Needs, <span className="ms-grad-text">At Your Door</span>
        </h2>
        <p style={{ margin: '18px auto 0', maxWidth: 560, fontSize: 16.5, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>
          Four core disciplines, one mobile team. Fully-equipped vans, dealer-grade tools, and technicians who come to you.
        </p>
      </Reveal>

      <div
        style={{
          marginTop: 'clamp(40px,6vw,64px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
          gap: 24,
        }}
      >
        {SERVICES.map((svc) => (
          <Reveal key={svc.title} className="ms-svc-card">
            <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={svc.img} alt={svc.title} className="ms-svc-img" loading="lazy" />
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
                  background: 'rgba(4,10,22,.72)',
                  border: '1px solid rgba(255,255,255,.14)',
                  backdropFilter: 'blur(6px)',
                  color: 'var(--green-line)',
                }}
              >
                {svc.tag}
              </span>
            </div>
            <div style={{ padding: '26px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>
                {svc.eyebrow}
              </div>
              <h3 style={{ margin: '10px 0 0', fontSize: 21, fontWeight: 700, letterSpacing: '-.01em' }}>{svc.title}</h3>
              <p style={{ margin: '12px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(234,240,247,.62)', flex: 1 }}>
                {svc.desc}
              </p>
              <a href="#booking" className="ms-svc-booklink" style={{ marginTop: 20, fontSize: 14.5, display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                Book this service <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
