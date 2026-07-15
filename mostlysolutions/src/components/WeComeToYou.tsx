import Link from 'next/link'
import Reveal from './Reveal'

/**
 * Full-bleed "We Come To You" band — sits between the brands marquee and the
 * reviews/stats section on the homepage.
 */
export default function WeComeToYou() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,.08)',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        padding: 'clamp(80px,11vw,150px) clamp(16px,5vw,64px)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/banners/van-branded-dusk.jpeg"
        alt=""
        aria-hidden
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,#060F1F 22%,rgba(6,15,31,.8) 52%,rgba(6,15,31,.25))' }} />
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ maxWidth: 520 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>THE WORKSHOP COMES TO YOU</div>
          <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(30px,4.5vw,52px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.05, color: '#FFFFFF' }}>
            Your Driveway Is Our Garage
          </h2>
          <p style={{ margin: '18px 0 0', fontSize: 16.5, lineHeight: 1.7, color: 'rgba(234,240,247,.8)' }}>
            Fully equipped vans, certified technicians, and dealer-grade diagnostics — parked outside your door. Home, workplace, or roadside, across Reading and
            London.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
            <a href="#booking" className="ms-btn-grad" style={{ fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}>
              Book a Callout
            </a>
            <Link
              href="/services"
              className="ms-btn-ghost"
              style={{ fontSize: 15, padding: '14px 26px', background: 'rgba(6,15,31,.35)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            >
              View All Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
