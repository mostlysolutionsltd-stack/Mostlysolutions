import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { BLOG_POSTS } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Workshop Blog — Mobile Mechanic Job Stories | Mostly Solutions',
  description:
    'Real job stories, repair guides, and honest advice from our mobile mechanics across Reading and London. Every post is a real vehicle we fixed at a doorstep.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Workshop Blog — Mobile Mechanic Job Stories | Mostly Solutions',
    description:
      'Real job stories, repair guides, and honest advice from our mobile mechanics across Reading and London.',
    url: '/blog',
    type: 'website',
    locale: 'en_GB',
  },
}

const HERO_OVERLAY =
  'linear-gradient(100deg,#060F1F 28%,rgba(6,15,31,.82) 55%,rgba(6,15,31,.45)), linear-gradient(180deg,rgba(6,15,31,.45),transparent 40%,#060F1F 97%)'

export default function BlogIndex() {
  return (
    <>
      <SiteHeader active="blog" />

      <main>
        {/* ---------- Banner hero ---------- */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '170px clamp(16px,5vw,48px) 80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banners/van-street-wide.jpeg"
            alt="Mostly Solutions mobile mechanic van on a night-time London street"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: HERO_OVERLAY }} />
          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(234,240,247,.5)' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#4CC163' }}>Blog</span>
            </nav>
            <h1 style={{ margin: '20px 0 0', fontSize: 'clamp(34px,5.2vw,60px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.05, color: '#FFFFFF' }}>
              Workshop Blog — Real Jobs, Real Fixes
            </h1>
            <p style={{ margin: '18px 0 0', maxWidth: 640, fontSize: 16, lineHeight: 1.7, color: 'rgba(234,240,247,.78)' }}>
              Job stories, repair guides, and honest advice from our mobile mechanics across Reading and London. Every post is a real vehicle we fixed at a
              customer&apos;s doorstep.
            </p>
          </div>
        </section>

        {/* ---------- Post grid ---------- */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(50px,7vw,80px) clamp(16px,5vw,48px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: 22 }}>
            {BLOG_POSTS.map((p) => (
              <div key={p.slug} className="ms-svc-card">
                <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.imageAlt} className="ms-svc-img" loading="lazy" />
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
                    {p.category}
                  </span>
                </div>
                <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(234,240,247,.45)' }}>{p.dateArea}</div>
                  <h2 style={{ margin: '10px 0 0', fontSize: 18.5, fontWeight: 700, letterSpacing: '-.01em', lineHeight: 1.3 }}>
                    <Link href={`/blog/${p.slug}`} className="ms-card-title-link">
                      {p.h1}
                    </Link>
                  </h2>
                  <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.6, color: 'rgba(234,240,247,.62)', flex: 1 }}>{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="ms-learn-link" style={{ marginTop: 18, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                    Read the Full Story <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
