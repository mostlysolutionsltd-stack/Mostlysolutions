import type { Metadata } from 'next'
import { getService, serviceMetadata } from '@/lib/services'
import ServicePageView from '@/components/ServicePageView'

const SLUG = 'electrical-battery-london'

export const metadata: Metadata = serviceMetadata(SLUG)

export default function Page() {
  return <ServicePageView service={getService(SLUG)!} />
}
