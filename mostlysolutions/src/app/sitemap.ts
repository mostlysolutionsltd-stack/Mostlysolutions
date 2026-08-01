import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'
import { BLOG_POSTS } from '@/lib/blog'

const BASE = 'https://mostlysolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${BASE}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: 'weekly', priority: 1 },
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
