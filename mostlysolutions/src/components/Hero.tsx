'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: '5,000+', label: 'Satisfied Customers', sub: 'Across Reading and London' },
  { value: '4.9/5', label: 'Customer Rating', sub: 'Based on verified reviews' },
  { value: '15 min', label: 'Average Response', sub: 'From booking to callback' },
]

const gradWord = {
  background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
} as const

const ctaRow = {
  display: 'flex',
  gap: 14,
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: 34,
} as const

function HeroCtas() {
  return (
    <div style={ctaRow}>
      <a
        href="#booking"
        className="ms-btn-grad"
        style={{ fontSize: 15.5, padding: '16px 32px', boxShadow: '0 8px 30px rgba(47,168,216,.4)' }}
      >
        Book Service
      </a>
      <a href="#services" className="ms-btn-ghost" style={{ fontSize: 15.5, padding: '16px 32px' }}>
        Explore Specialties
      </a>
    </div>
  )
}

const stageBase = {
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '100px clamp(16px,5vw,48px) 80px',
  willChange: 'transform,opacity',
} as const

export default function Hero() {
  const introRef = useRef<HTMLVideoElement>(null)
  const loopRef = useRef<HTMLVideoElement>(null)
  const stage1Ref = useRef<HTMLDivElement>(null)
  const stage2Ref = useRef<HTMLDivElement>(null)
  const pctRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onResize = () => setCompact(window.innerWidth < 640)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // On mobile, bias the crop left so the bonnet/headlights are framed
  const videoObjPos = compact ? '28% center' : 'center'

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const intro = introRef.current
    const loop = loopRef.current
    if (!intro) return

    // Kick off autoplay
    intro.muted = true
    intro.play().catch(() => {})

    if (reduce) return

    let curP = 0
    let targetP = 0
    let loopStarted = false
    let raf = 0

    const wins: [number, number][] = [
      [-0.5, 0.3],
      [0.48, 1.5],
    ]
    const stages = [stage1Ref.current, stage2Ref.current]

    const loopFn = () => {
      const dur = intro.duration
      if (dur) {
        targetP = Math.min(intro.currentTime / Math.max(dur - 0.06, 0.1), 1)

        const nearEnd = intro.currentTime >= dur - 0.45
        if (loop && (nearEnd || intro.ended) && !loopStarted) {
          loopStarted = true
          loop.muted = true
          loop.loop = true
          loop.play().catch(() => {})
          loop.style.opacity = '1'
        }
        if (!loopStarted && intro.paused && !intro.ended) {
          intro.muted = true
          intro.play().catch(() => {})
        }
        if (loopStarted) {
          targetP = 1
          if (loop && loop.ended) {
            loop.currentTime = 0
            loop.play().catch(() => {})
          }
        }
      }

      curP += (targetP - curP) * 0.08
      const p = curP

      stages.forEach((el, i) => {
        if (!el) return
        const wnd = wins[i]
        const o = Math.max(0, Math.min((p - wnd[0]) / 0.09, (wnd[1] - p) / 0.09, 1))
        const mid = (Math.max(wnd[0], 0) + Math.min(wnd[1], 1)) / 2
        const dir = p < mid ? 1 : -1
        el.style.opacity = String(o)
        el.style.transform = `translateY(${dir * (1 - o) * 44}px) scale(${1 - (1 - o) * 0.04})`
        el.style.pointerEvents = o > 0.5 ? 'auto' : 'none'
      })

      const clamped = Math.max(0, Math.min(p, 1))
      if (progressRef.current) progressRef.current.style.transform = `scaleY(${clamped})`
      if (pctRef.current) pctRef.current.textContent = `${Math.round(clamped * 100)}%`

      raf = requestAnimationFrame(loopFn)
    }
    raf = requestAnimationFrame(loopFn)

    // Replay the intro when the hero scrolls away and returns
    let heroSeen = true
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) {
            heroSeen = false
          } else if (!heroSeen) {
            heroSeen = true
            loopStarted = false
            curP = 0
            targetP = 0
            if (loop) {
              loop.pause()
              loop.style.opacity = '0'
              loop.currentTime = 0
            }
            intro.style.opacity = '1'
            intro.currentTime = 0
            intro.play().catch(() => {})
          }
        })
      },
      { threshold: 0.15 }
    )
    if (heroRef.current) io.observe(heroRef.current)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  return (
    <div
      ref={heroRef}
      id="top"
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Video layers (overscanned for a subtle cinematic framing) */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: '-14%', bottom: '-14%' }}>
        <video
          ref={introRef}
          muted
          playsInline
          preload="auto"
          poster="/hero-poster.webp"
          src="/hero-video.mp4"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: videoObjPos }}
        />
        <video
          ref={loopRef}
          muted
          playsInline
          loop
          preload="auto"
          src="/hero-loop.mp4"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: videoObjPos,
            opacity: 0,
            transition: 'opacity .5s ease',
          }}
        />
      </div>

      {/* Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg,rgba(6,15,31,.72) 0%,rgba(6,15,31,.55) 40%,#060F1F 96%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(60% 50% at 50% 42%,rgba(47,168,216,.14),transparent 70%)',
        }}
      />

      {/* Progress rail (hidden < 640px) */}
      {!compact && (
        <div
          style={{
            position: 'absolute',
            right: 'clamp(14px,3vw,36px)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span ref={pctRef} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', color: 'rgba(234,240,247,.5)' }}>
            0%
          </span>
          <div style={{ width: 2, height: 140, background: 'rgba(255,255,255,.12)', borderRadius: 2, overflow: 'hidden' }}>
            <div
              ref={progressRef}
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg,#4CC163,#2FA8D8)',
                transform: 'scaleY(0)',
                transformOrigin: 'top',
              }}
            />
          </div>
        </div>
      )}

      {/* Stage 1 */}
      <div ref={stage1Ref} style={{ ...stageBase, opacity: 1 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            padding: '8px 16px',
            borderRadius: 99,
            border: '1px solid rgba(255,255,255,.16)',
            background: 'rgba(255,255,255,.05)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4CC163', animation: 'msPulse 2s ease-in-out infinite' }} />
          <span style={{ fontSize: compact ? 10.5 : 12.5, fontWeight: 600, letterSpacing: compact ? '.12em' : '.18em', color: 'rgba(234,240,247,.85)' }}>
            MOBILE MECHANICS · ALWAYS AVAILABLE
          </span>
        </div>
        <h1
          style={{
            margin: compact ? '18px 0 0' : '26px 0 0',
            maxWidth: 1060,
            fontSize: 'clamp(30px,8vw,94px)',
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: '-.025em',
            color: '#FFFFFF',
            textWrap: 'balance',
          }}
        >
          UK&apos;s #1 Mobile
          <br />
          Car <span style={gradWord}>Repairing</span>
        </h1>
        <p
          style={{
            margin: '22px auto 0',
            maxWidth: 620,
            fontSize: 'clamp(15px,1.6vw,18.5px)',
            lineHeight: 1.65,
            color: 'rgba(234,240,247,.72)',
          }}
        >
          Expert mechanical support at your doorstep. We bring the garage to you — home, workplace, or roadside —
          anywhere in England, with elite standards.
        </p>
        <HeroCtas />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(24px,5vw,64px)',
            flexWrap: 'wrap',
            marginTop: compact ? 36 : 56,
          }}
        >
          {STATS.map((st) => (
            <div key={st.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(26px,3.4vw,40px)', fontWeight: 800, letterSpacing: '-.02em', ...gradWord }}>
                {st.value}
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.1em', color: 'rgba(234,240,247,.65)', marginTop: 4, textTransform: 'uppercase' }}>
                {st.label}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(234,240,247,.4)', marginTop: 2 }}>{st.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stage 2 */}
      <div ref={stage2Ref} style={{ ...stageBase, opacity: 0, pointerEvents: 'none' }}>
        <div style={{ fontSize: 'clamp(13px,1.4vw,15px)', fontWeight: 700, letterSpacing: '.34em', color: '#2FA8D8', textTransform: 'uppercase' }}>
          Modern Diagnostics
        </div>
        <h2
          style={{
            margin: '20px 0 0',
            maxWidth: 1060,
            fontSize: 'clamp(28px,7vw,82px)',
            lineHeight: 1.06,
            fontWeight: 800,
            letterSpacing: '-.025em',
            color: '#FFFFFF',
            textWrap: 'balance',
          }}
        >
          Expert <span style={gradWord}>Diagnostics</span> &amp; Performance
        </h2>
        <p
          style={{
            margin: '22px auto 0',
            maxWidth: 620,
            fontSize: 'clamp(15px,1.6vw,18.5px)',
            lineHeight: 1.65,
            color: 'rgba(234,240,247,.72)',
          }}
        >
          State-of-the-art diagnostic equipment and performance tuning delivered right to your driveway.
        </p>
        <HeroCtas />
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          bottom: 26,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.28em', color: 'rgba(234,240,247,.45)' }}>
          SCROLL TO EXPLORE
        </span>
        <div style={{ width: 1, height: 34, background: 'linear-gradient(180deg,rgba(234,240,247,.5),transparent)' }} />
      </div>
    </div>
  )
}
