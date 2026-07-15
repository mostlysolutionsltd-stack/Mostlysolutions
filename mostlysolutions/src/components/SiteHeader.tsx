'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Shared fixed glass header for all sub-pages (services, blog, posts).
 * Solid variant — always `rgba(5,12,26,.85)` + blur + bottom border.
 * `active` highlights the current top-level section.
 */
type Active = 'home' | 'services' | 'blog' | null

const LINKS: { label: string; href: string; key: Active }[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Services', href: '/services', key: 'services' },
  { label: 'Blog', href: '/blog', key: 'blog' },
]

function Wordmark() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icon.webp" alt="Mostly Solutions" style={{ height: 44, width: 'auto', display: 'block' }} />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontWeight: 800, fontSize: 14, letterSpacing: '.13em', color: '#FFFFFF' }}>MOSTLY SOLUTIONS</span>
        <span style={{ fontWeight: 600, fontSize: 9.5, letterSpacing: '.46em', color: '#57C46A', marginTop: 4 }}>LIMITED</span>
      </span>
    </>
  )
}

export default function SiteHeader({ active = null }: { active?: Active }) {
  const [wide, setWide] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth >= 920
      setWide(w)
      if (w) setMenuOpen(false)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const linkStyle = (isActive: boolean) => ({
    fontSize: 13.5,
    fontWeight: 500,
    letterSpacing: '.02em',
    padding: '9px 13px',
    whiteSpace: 'nowrap' as const,
    color: isActive ? '#FFFFFF' : undefined,
    background: isActive ? 'rgba(255,255,255,.06)' : undefined,
  })

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '12px clamp(16px,4vw,44px)',
          background: 'rgba(5,12,26,.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', flex: 'none' }}>
          <Wordmark />
        </Link>

        {wide ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {LINKS.map((lnk) => (
                <Link key={lnk.href} href={lnk.href} className="ms-navlink" style={linkStyle(active === lnk.key)}>
                  {lnk.label}
                </Link>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 'none' }}>
              <Link
                href="/#booking"
                className="ms-btn-grad"
                style={{ fontSize: 13, padding: '10px 18px', boxShadow: '0 4px 18px rgba(47,168,216,.35)' }}
              >
                Book Service
              </Link>
            </div>
          </>
        ) : (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
            style={{
              background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.16)',
              borderRadius: 10,
              width: 44,
              height: 44,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: 'block', width: 18, height: 2, background: '#EAF0F7', borderRadius: 2 }} />
            ))}
          </button>
        )}
      </div>

      {menuOpen && !wide && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(4,10,22,.97)',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px clamp(16px,5vw,40px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.webp" alt="Mostly Solutions" style={{ height: 44, width: 'auto' }} />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'rgba(255,255,255,.07)',
                border: '1px solid rgba(255,255,255,.16)',
                borderRadius: 10,
                width: 44,
                height: 44,
                color: '#EAF0F7',
                fontSize: 18,
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 40 }}>
            {LINKS.map((lnk) => (
              <Link
                key={lnk.href}
                href={lnk.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: active === lnk.key ? '#57C46A' : '#EAF0F7',
                  textDecoration: 'none',
                  fontSize: 26,
                  fontWeight: 700,
                  padding: '12px 4px',
                  borderBottom: '1px solid rgba(255,255,255,.07)',
                }}
              >
                {lnk.label}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 'auto', paddingBottom: 14 }}>
            <a
              href="tel:+441189000000"
              onClick={() => setMenuOpen(false)}
              className="ms-callpill"
              style={{ flex: 1, textAlign: 'center', fontSize: 15, padding: 15 }}
            >
              Call Now
            </a>
            <Link
              href="/#booking"
              onClick={() => setMenuOpen(false)}
              className="ms-btn-grad"
              style={{ flex: 1, textAlign: 'center', fontSize: 15, padding: 15 }}
            >
              Book Service
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
