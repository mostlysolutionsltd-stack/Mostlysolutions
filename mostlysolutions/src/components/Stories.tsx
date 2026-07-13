'use client'

import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const IG_PROFILE = 'https://www.instagram.com/mostlysolutions'

type Post = {
  src: string
  tag: string
  caption: string
  href: string
}

const POSTS: Post[] = [
  {
    src: '/assets/ig/post1-brakes.jpg',
    tag: 'Brakes · Audi RS5 Quattro',
    caption: 'Front brake pads & discs replaced — strong, smooth stopping power restored.',
    href: 'https://www.instagram.com/p/DViU0YyDO2W/?img_index=1',
  },
  {
    src: '/assets/ig/post2-clutch.jpg',
    tag: 'Clutch · Audi Q3',
    caption: 'Full clutch replacement on the driveway — gearbox out, new kit in, smooth shifting restored.',
    href: 'https://www.instagram.com/p/DWn56kfjMct/',
  },
  {
    src: '/assets/ig/post3-discovery.jpg',
    tag: 'Brakes · Land Rover Discovery',
    caption: 'Front pads & discs replaced at home — reliable stopping power back on the road.',
    href: 'https://www.instagram.com/p/DadVvXrjbAs/?img_index=1',
  },
  {
    src: '/assets/ig/post4-cat.jpg',
    tag: 'Exhaust · BMW 3 Series',
    caption: 'Catalytic converter replaced — exhaust efficiency and emissions control restored.',
    href: 'https://www.instagram.com/p/DVf-kC3jL6t/?img_index=1',
  },
  {
    src: '/assets/ig/post5-alternator.jpg',
    tag: 'Electrical · Audi Q3 TDI Quattro',
    caption: 'Alternator replaced on-site — old vs new, no garage visit needed.',
    href: 'https://www.instagram.com/p/DRKU4m_DBk0/?img_index=1',
  },
  {
    src: '/assets/ig/post6-transferbox.jpg',
    tag: 'Drivetrain · BMW 4 Series',
    caption: 'Transfer box replaced & serviced — smooth, balanced power delivery restored.',
    href: 'https://www.instagram.com/p/DWlQjQRDJED/?img_index=1',
  },
]

function InstagramGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="url(#msIgG)" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.4" stroke="url(#msIgG)" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.4" fill="#4CC163" />
      <defs>
        <linearGradient id="msIgG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4CC163" />
          <stop offset="1" stopColor="#2FA8D8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Stories() {
  const [hoverIdx, setHoverIdx] = useState(-1)
  const [compact, setCompact] = useState(false) // < 640px shows every tile in its hovered state
  const [followHover, setFollowHover] = useState(false)

  useEffect(() => {
    const onResize = () => {
      setCompact(window.innerWidth < 640)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section
      id="gallery"
      style={{ padding: 'clamp(70px,9vw,110px) clamp(16px,5vw,48px)', maxWidth: 1240, margin: '0 auto' }}
    >
      <Reveal
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
          marginBottom: 44,
        }}
      >
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.24em', color: '#4CC163' }}>
            REAL JOBS · REAL RESULTS
          </div>
          <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(32px,4.4vw,52px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>
            Stories From the Road
          </h2>
          <p style={{ margin: '14px 0 0', maxWidth: 520, fontSize: 16, lineHeight: 1.6, color: 'rgba(234,240,247,.6)' }}>
            A look at recent callouts, straight from our Instagram.
          </p>
        </div>
        <a
          href={IG_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setFollowHover(true)}
          onMouseLeave={() => setFollowHover(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            color: '#EAF0F7',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 700,
            padding: '13px 24px',
            borderRadius: 99,
            border: `1px solid ${followHover ? 'rgba(76,193,99,.5)' : 'rgba(255,255,255,.2)'}`,
            background: 'rgba(255,255,255,.04)',
            transform: followHover ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'border-color .3s ease, transform .3s ease',
          }}
        >
          <InstagramGlyph />
          @mostlysolutions
        </a>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: 22 }}>
        {POSTS.map((post, i) => {
          const hov = hoverIdx === i || compact
          return (
            <div key={post.src}>
              <Reveal
                style={{
                  position: 'relative',
                  borderRadius: 18,
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,.035)',
                  border: `1px solid ${hov ? 'rgba(76,193,99,.45)' : 'rgba(255,255,255,.08)'}`,
                  aspectRatio: '1 / 1',
                  transform: hov ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: hov ? '0 22px 48px rgba(0,0,0,.5), 0 0 0 1px rgba(76,193,99,.15)' : 'none',
                  transition: 'border-color .45s ease, transform .45s cubic-bezier(.2,.7,.2,1), box-shadow .45s ease',
                }}
              >
                <div
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(-1)}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  {/* photo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.src}
                    alt={post.caption}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: hov ? 'scale(1.07)' : 'scale(1)',
                      transition: 'transform .8s cubic-bezier(.2,.7,.2,1)',
                    }}
                  />
                  {/* scrim */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                      background: 'linear-gradient(180deg,rgba(4,10,22,.05),rgba(4,10,22,.25) 55%,rgba(4,10,22,.92))',
                      opacity: hov ? 1 : 0,
                      transition: 'opacity .5s ease',
                    }}
                  />
                  {/* service chip */}
                  <div style={{ position: 'absolute', top: 14, left: 14, pointerEvents: 'none' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: '#04101F',
                        background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                        padding: '6px 12px',
                        borderRadius: 99,
                      }}
                    >
                      {post.tag}
                    </span>
                  </div>
                  {/* arrow button */}
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View post on Instagram"
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      fontSize: 16,
                      color: '#EAF0F7',
                      background: 'rgba(5,12,26,.6)',
                      backdropFilter: 'blur(6px)',
                      WebkitBackdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255,255,255,.22)',
                      opacity: hov ? 1 : 0,
                      transform: hov ? 'translateY(0)' : 'translateY(-8px)',
                      transition: 'opacity .45s ease, transform .45s cubic-bezier(.2,.7,.2,1)',
                    }}
                  >
                    ↗
                  </a>
                  {/* caption block */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: '20px 18px 16px',
                      pointerEvents: 'none',
                      opacity: hov ? 1 : 0,
                      transform: hov ? 'translateY(0)' : 'translateY(18px)',
                      transition: 'opacity .5s ease, transform .55s cubic-bezier(.2,.7,.2,1)',
                    }}
                  >
                    <div style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.5, color: '#FFFFFF' }}>
                      {post.caption}
                    </div>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-ig-viewlink"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        marginTop: 10,
                        pointerEvents: 'auto',
                        color: '#2FA8D8',
                        textDecoration: 'none',
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      View post on Instagram ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>

      <p style={{ textAlign: 'center', margin: '34px 0 0', fontSize: 14, color: 'rgba(234,240,247,.55)' }}>
        See every job we post →{' '}
        <a href={IG_PROFILE} target="_blank" rel="noopener noreferrer" style={{ color: '#2FA8D8', fontWeight: 600, textDecoration: 'none' }}>
          Follow us on Instagram
        </a>
      </p>
    </section>
  )
}
