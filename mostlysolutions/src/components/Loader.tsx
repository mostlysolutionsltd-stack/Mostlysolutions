'use client'

import { useEffect, useState } from 'react'

const MIN_MS = 650 // avoid a jarring flash on fast loads
const MAX_MS = 5000 // hard cap — never let the loader get stuck

export default function Loader() {
  const [hiding, setHiding] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let done = false

    document.body.style.overflow = 'hidden'

    const finish = () => {
      if (done) return
      done = true
      const elapsed = performance.now() - start
      const wait = Math.max(0, MIN_MS - elapsed)
      window.setTimeout(() => {
        setHiding(true)
        document.body.style.overflow = ''
        // remove from the DOM after the fade-out transition
        window.setTimeout(() => setGone(true), 600)
      }, wait)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }
    const cap = window.setTimeout(finish, MAX_MS)

    return () => {
      window.removeEventListener('load', finish)
      window.clearTimeout(cap)
      document.body.style.overflow = ''
    }
  }, [])

  if (gone) return null

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#060F1F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 26,
        opacity: hiding ? 0 : 1,
        visibility: hiding ? 'hidden' : 'visible',
        transition: 'opacity .55s ease, visibility .55s ease',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon.webp"
        alt="MostlySolutions"
        style={{ height: 76, width: 'auto', animation: 'msLogoPulse 1.6s ease-in-out infinite' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
        <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: '.15em', color: '#FFFFFF' }}>MOSTLY SOLUTIONS</span>
        <span style={{ fontWeight: 600, fontSize: 9.5, letterSpacing: '.46em', color: '#57C46A', marginTop: 5 }}>LIMITED</span>
      </div>
      <div style={{ position: 'relative', width: 160, height: 3, borderRadius: 3, background: 'rgba(255,255,255,.1)', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '40%',
            height: '100%',
            borderRadius: 3,
            background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
            animation: 'msLoadBar 1.15s cubic-bezier(.4,0,.2,1) infinite',
          }}
        />
      </div>
    </div>
  )
}
