import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'
import { BLOG_POSTS } from '@/lib/blog'

const BASE = 'https://mostlysolutions.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, changeFrequency: 'monthly', priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    ...BLOG_POSTS.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
