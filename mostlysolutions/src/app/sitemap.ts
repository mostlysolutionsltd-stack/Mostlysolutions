import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'

const BASE = 'https://mostlysolutions.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1 },
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
