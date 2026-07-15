import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { InstagramGlyph } from '@/components/icons'
import { BLOG_POSTS, getPost, type ResultLink } from '@/lib/blog'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  const url = `/blog/${post.slug}`
  return {
    title: `${post.h1} | Mostly Solutions`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.h1,
      description: post.excerpt,
      url,
      type: 'article',
      locale: 'en_GB',
      images: [post.image],
    },
  }
}

// Wrap the first non-overlapping occurrence of each declared phrase in a link.
function linkifyResult(text: string, links: ResultLink[]): ReactNode {
  const ordered = [...links].sort((a, b) => b.phrase.length - a.phrase.length)
  const lower = text.toLowerCase()
  const matches: { start: number; end: number; href: string }[] = []

  for (const l of ordered) {
    const idx = lower.indexOf(l.phrase.toLowerCase())
    if (idx === -1) continue
    const end = idx + l.phrase.length
    if (matches.some((m) => idx < m.end && end > m.start)) continue
    matches.push({ start: idx, end, href: l.href })
  }

  if (matches.length === 0) return text
  matches.sort((a, b) => a.start - b.start)

  const nodes: ReactNode[] = []
  let cursor = 0
  matches.forEach((m, i) => {
    if (m.start > cursor) nodes.push(text.slice(cursor, m.start))
    nodes.push(
      <Link key={i} href={m.href} className="ms-svc-inline-link">
        {text.slice(m.start, m.end)}
      </Link>
    )
    cursor = m.end
  })
  if (cursor < text.length) nodes.push(text.slice(cursor))
  return nodes
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    image: [`https://mostlysolutions.co.uk${post.image}`],
    datePublished: post.datePublished,
    author: { '@type': 'Organization', name: 'Mostly Solutions Ltd' },
    publisher: {
      '@type': 'Organization',
      name: 'Mostly Solutions Ltd',
      logo: { '@type': 'ImageObject', url: 'https://mostlysolutions.co.uk/icon.webp' },
    },
    mainEntityOfPage: `https://mostlysolutions.co.uk/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteHeader active="blog" />

      <main>
        <article style={{ maxWidth: 840, margin: '0 auto', padding: '130px clamp(16px,5vw,48px) 0' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(234,240,247,.5)' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
              Blog
            </Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#4CC163' }}>{post.breadcrumbCategory}</span>
          </nav>

          {/* Title */}
          <h1 style={{ margin: '20px 0 0', fontSize: 'clamp(30px,4.4vw,50px)', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.08, color: '#FFFFFF' }}>
            {post.h1}
          </h1>

          {/* Meta row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginTop: 18 }}>
            <span
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: '.06em',
                padding: '6px 12px',
                borderRadius: 99,
                background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                color: '#04101F',
              }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: 13.5, color: 'rgba(234,240,247,.55)' }}>
              {post.date} · {post.area} · {post.readTime}
            </span>
          </div>

          {/* Featured image */}
          <div style={{ marginTop: 28, aspectRatio: '16 / 9', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Body */}
          <p style={{ margin: '34px 0 0', fontSize: 16.5, lineHeight: 1.8, color: 'rgba(234,240,247,.8)' }}>{post.intro}</p>

          <h2 style={{ margin: '40px 0 0', fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 800, letterSpacing: '-.015em', color: '#FFFFFF' }}>The Problem</h2>
          <p style={{ margin: '14px 0 0', fontSize: 16, lineHeight: 1.75, color: 'rgba(234,240,247,.72)' }}>{post.problem}</p>

          <h2 style={{ margin: '40px 0 0', fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 800, letterSpacing: '-.015em', color: '#FFFFFF' }}>What We Completed</h2>
          <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
            {post.checklist.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span
                  style={{
                    flex: 'none',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'linear-gradient(100deg,#4CC163,#2FA8D8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    color: '#04101F',
                    marginTop: 2,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.55, color: 'rgba(234,240,247,.82)' }}>{item}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ margin: '40px 0 0', fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 800, letterSpacing: '-.015em', color: '#FFFFFF' }}>The Result</h2>
          <p style={{ margin: '14px 0 0', fontSize: 16, lineHeight: 1.75, color: 'rgba(234,240,247,.72)' }}>{linkifyResult(post.result, post.resultLinks)}</p>

          {/* Instagram button */}
          <div style={{ marginTop: 30 }}>
            <a href={post.instagram} target="_blank" rel="noopener noreferrer" className="ms-ig-btn">
              <InstagramGlyph />
              View This Job on Instagram <span aria-hidden>↗</span>
            </a>
          </div>
        </article>

        {/* ---------- CTA band ---------- */}
        <section
          style={{
            marginTop: 'clamp(60px,8vw,100px)',
            borderTop: '1px solid rgba(255,255,255,.07)',
            background: 'linear-gradient(180deg,transparent,rgba(47,168,216,.07))',
            padding: 'clamp(56px,8vw,96px) clamp(16px,5vw,48px)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px,3.6vw,42px)', fontWeight: 800, letterSpacing: '-.02em', color: '#FFFFFF' }}>{post.ctaHeading}</h2>
            <p style={{ margin: '16px auto 0', maxWidth: 540, fontSize: 16, lineHeight: 1.65, color: 'rgba(234,240,247,.65)' }}>{post.ctaSub}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 30 }}>
              <Link href="/#booking" className="ms-btn-grad" style={{ fontSize: 15, padding: '14px 26px', boxShadow: '0 6px 24px rgba(47,168,216,.35)' }}>
                Book Service
              </Link>
              <Link href="/blog" className="ms-btn-ghost" style={{ fontSize: 15, padding: '14px 26px' }}>
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
