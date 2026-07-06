'use client'

import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const REVIEWS = [
  {
    text: "MostlySolutions diagnosed a fault my main dealer couldn't find in three visits. Their technician arrived within 3 hours, fixed the issue on the spot, and it cost half what the dealer quoted. Exceptional service.",
    name: 'James Thornton',
    loc: 'Reading, Berkshire',
  },
  {
    text: 'Affordable pricing for labour and parts, polite, respectful and trustworthy. I would definitely recommend their services to friends and family. Relieved to have found them.',
    name: 'Taiyeba Rahman',
    loc: 'London',
  },
  {
    text: 'Battery died outside my office in Vauxhall. They arrived within the hour, tested the charging system properly instead of just swapping parts, and had me moving again by lunch.',
    name: 'Daniel Okafor',
    loc: 'Vauxhall, London',
  },
  {
    text: 'Brake pads and discs done on my driveway while I worked from home. Clean, tidy, and they walked me through the old parts before disposal. Garage-level work without the garage.',
    name: 'Sophie Millar',
    loc: 'Caversham, Reading',
  },
  {
    text: 'Booked an MOT prep the night before — confirmed in minutes, technician arrived on time, found a failing bulb and a worn wiper I would have failed on. Passed first time.',
    name: 'Arjun Patel',
    loc: 'Slough, Berkshire',
  },
  {
    text: 'The ceramic coating and interior detail made my three-year-old car feel showroom-new. Meticulous work, and they came to me on a Sunday. Worth every penny.',
    name: 'Emma Lawson',
    loc: 'Richmond, London',
  },
]

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')

export default function Reviews() {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIdx((i) => (i + 1) % REVIEWS.length)
        setFading(false)
      }, 450)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const go = (i: number) => {
    setIdx(i)
    setFading(false)
  }

  const r = REVIEWS[idx]

  return (
    <section id="reviews" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px)' }}>
      <Reveal
        style={{
          maxWidth: 860,
          margin: '0 auto',
          textAlign: 'center',
          background: 'rgba(255,255,255,.035)',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 24,
          padding: 'clamp(36px,5vw,60px)',
        }}
      >
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>CUSTOMER STORIES</div>
        <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(26px,3.4vw,38px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
          Trusted by Hundreds
        </h2>

        <div style={{ minHeight: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div
            style={{
              transition: 'opacity .45s ease, transform .45s ease',
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(10px)' : 'translateY(0)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 22 }}>
              {[0, 1, 2, 3, 4].map((s) => (
                <span key={s} className="ms-grad-text" style={{ fontSize: 19, lineHeight: 1 }}>
                  ★
                </span>
              ))}
            </div>
            <p
              style={{
                margin: '20px auto 0',
                maxWidth: 680,
                fontSize: 'clamp(16px,1.9vw,19px)',
                lineHeight: 1.7,
                color: 'rgba(234,240,247,.8)',
                fontStyle: 'italic',
                textWrap: 'pretty',
              }}
            >
              &ldquo;{r.text}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 24 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 14,
                  color: '#04101F',
                }}
              >
                {initials(r.name)}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: '#FFFFFF' }}>{r.name}</div>
                <div style={{ fontSize: 12.5, color: 'rgba(234,240,247,.5)' }}>{r.loc}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Show review ${i + 1}`}
              style={{
                border: 'none',
                cursor: 'pointer',
                height: 7,
                borderRadius: 99,
                transition: 'width .3s ease, background .3s ease',
                width: i === idx ? 26 : 7,
                background: i === idx ? 'linear-gradient(100deg,#4CC163,#2FA8D8)' : 'rgba(255,255,255,.2)',
              }}
            />
          ))}
        </div>

        {/* Driving car motif */}
        <div
          style={{
            position: 'relative',
            height: 72,
            marginTop: 34,
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)',
            maskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)',
          }}
        >
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 18, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent)' }} />
          <div style={{ position: 'absolute', bottom: 20, left: 0, animation: 'msDrive 13s linear infinite', willChange: 'transform' }}>
            <div style={{ position: 'relative' }}>
              <svg width="92" height="30" viewBox="0 0 92 30" fill="none">
                <defs>
                  <linearGradient id="msCarG" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#4CC163" />
                    <stop offset="1" stopColor="#2FA8D8" />
                  </linearGradient>
                </defs>
                <path d="M4 22c0-6 4-9 14-10l9-7c2-1.5 5-2 10-2h14c7 0 12 3 16 8l3 3c8 1 14 3 14 8v2H4v-2z" fill="url(#msCarG)" />
                <circle cx="24" cy="24" r="5" fill="#0B1830" stroke="#EAF0F7" strokeOpacity=".7" strokeWidth="2" />
                <circle cx="68" cy="24" r="5" fill="#0B1830" stroke="#EAF0F7" strokeOpacity=".7" strokeWidth="2" />
              </svg>
              <div style={{ position: 'absolute', right: -54, top: 13, width: 56, height: 8, borderRadius: '50%', background: 'linear-gradient(90deg,rgba(234,240,247,.4),transparent)' }} />
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 22, left: 0, animation: 'msDrive 21s linear infinite', animationDelay: '-9s', opacity: 0.4, willChange: 'transform' }}>
            <svg width="64" height="21" viewBox="0 0 92 30" fill="none">
              <path d="M4 22c0-6 4-9 14-10l9-7c2-1.5 5-2 10-2h14c7 0 12 3 16 8l3 3c8 1 14 3 14 8v2H4v-2z" fill="#EAF0F7" />
              <circle cx="24" cy="24" r="5" fill="#060F1F" />
              <circle cx="68" cy="24" r="5" fill="#060F1F" />
            </svg>
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 0, animation: 'msDrive 29s linear infinite', animationDelay: '-19s', opacity: 0.18, willChange: 'transform' }}>
            <svg width="46" height="15" viewBox="0 0 92 30" fill="none">
              <path d="M4 22c0-6 4-9 14-10l9-7c2-1.5 5-2 10-2h14c7 0 12 3 16 8l3 3c8 1 14 3 14 8v2H4v-2z" fill="#EAF0F7" />
              <circle cx="24" cy="24" r="5" fill="#060F1F" />
              <circle cx="68" cy="24" r="5" fill="#060F1F" />
            </svg>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
