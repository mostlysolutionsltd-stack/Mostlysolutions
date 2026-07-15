import Link from 'next/link'

const FOOTER_SERVICES = [
  { label: 'Car Diagnostics', href: '/services/car-diagnostics-london' },
  { label: 'Mechanical Work', href: '/services/mechanical-work-london' },
  { label: 'Electrical & Batteries', href: '/services/electrical-battery-london' },
  { label: 'Detailing & Protection', href: '/services/car-detailing-london' },
]

const FOOTER_COMPANY = [
  { label: 'Home', href: '/' },
  { label: 'All Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book Service', href: '/#booking' },
]

const LEGAL = ['Privacy Policy', 'Terms of Service']

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)', background: 'var(--bg-footer)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(50px,6vw,72px) clamp(16px,5vw,48px) 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: 36 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.webp" alt="Mostly Solutions" style={{ height: 42, width: 'auto' }} />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: '.13em', color: '#FFFFFF' }}>MOSTLY SOLUTIONS</span>
                <span style={{ fontWeight: 600, fontSize: 9, letterSpacing: '.46em', color: '#57C46A', marginTop: 4 }}>LIMITED</span>
              </span>
            </div>
            <p style={{ margin: '18px 0 0', fontSize: 13.5, lineHeight: 1.65, color: 'rgba(234,240,247,.5)', maxWidth: 280 }}>
              Premium mobile automotive diagnostics and repair. Delivered to your door. Trusted across Reading and London.
            </p>
          </div>

          <div>
            <h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', color: 'rgba(234,240,247,.9)' }}>SERVICES</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FOOTER_SERVICES.map((s) => (
                <Link key={s.label} href={s.href} className="ms-footer-link" style={{ fontSize: 13.5 }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', color: 'rgba(234,240,247,.9)' }}>COMPANY</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FOOTER_COMPANY.map((c) => (
                <Link key={c.label} href={c.href} className="ms-footer-link" style={{ fontSize: 13.5 }}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', color: 'rgba(234,240,247,.9)' }}>CONTACT</h4>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.7, color: 'rgba(234,240,247,.55)' }}>
              Reading: 12 Caversham Road, RG1 7BZ
              <br />
              London: 34 Vauxhall Bridge Road, SW1V 1AX
            </p>
            <a href="tel:+441189000000" style={{ display: 'inline-block', marginTop: 12, color: '#2FA8D8', textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>
              +44 118 900 0000
            </a>
            <p style={{ margin: '8px 0 0', fontSize: 13.5, color: 'rgba(234,240,247,.55)' }}>hello@mostlysolutions.co.uk</p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 14,
            flexWrap: 'wrap',
            marginTop: 52,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,.07)',
          }}
        >
          <span style={{ fontSize: 12.5, color: 'rgba(234,240,247,.4)' }}>© 2026 MostlySolutions Ltd. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {LEGAL.map((l) => (
              <a key={l} href="#" className="ms-legal-link" style={{ fontSize: 12.5 }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
