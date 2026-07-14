'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Simplified fixed glass nav for the standalone service pages.
 * Logo returns to the homepage; a single gradient pill jumps to the booking form.
 */
export default function ServiceNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
        background: scrolled ? 'rgba(5,12,26,.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,.08)' : 'transparent'}`,
        transition: 'background .35s ease, border-color .35s ease, backdrop-filter .35s ease',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', flex: 'none' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.webp" alt="Mostly Solutions" style={{ height: 44, width: 'auto', display: 'block' }} />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontWeight: 800, fontSize: 14, letterSpacing: '.13em', color: '#FFFFFF' }}>MOSTLY SOLUTIONS</span>
          <span style={{ fontWeight: 600, fontSize: 9.5, letterSpacing: '.46em', color: '#57C46A', marginTop: 4 }}>LIMITED</span>
        </span>
      </Link>

      <Link
        href="/#booking"
        className="ms-btn-grad"
        style={{ fontSize: 13, padding: '10px 18px', boxShadow: '0 4px 18px rgba(47,168,216,.35)', flex: 'none' }}
      >
        Book Service
      </Link>
    </div>
  )
}
