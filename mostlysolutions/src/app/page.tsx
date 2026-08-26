import Loader from '@/components/Loader'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import BrandsMarquee from '@/components/BrandsMarquee'
import WeComeToYou from '@/components/WeComeToYou'
import Reviews from '@/components/Reviews'
import Stories from '@/components/Stories'
import Locations from '@/components/Locations'
import AreasWeServe from '@/components/AreasWeServe'
import FAQ from '@/components/FAQ'
import Booking from '@/components/Booking'
import SiteFooter from '@/components/SiteFooter'
import WhatsAppFab from '@/components/WhatsAppFab'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mostlysolutions.com/#business',
  name: 'Mostly Solutions Ltd',
  description:
    'Premium mobile automotive diagnostics and repair delivered to your door across Reading and London.',
  url: 'https://mostlysolutions.com',
  image: 'https://mostlysolutions.com/icon.webp',
  telephone: '0800 208 4745',
  email: 'mostlysolutionsltd@gmail.com',
  priceRange: '££',
  areaServed: ['London', 'Guildford', 'Reading', 'Oxford', 'Watford', 'Hemel Hempstead', 'High Wycombe', 'Slough', 'St Albans'],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Reading',
      postalCode: 'RG1',
      addressCountry: 'GB',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      postalCode: 'HA2',
      addressCountry: 'GB',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <BrandsMarquee />
        <WeComeToYou />
        <Reviews />
        <Stories />
        <Locations />
        <AreasWeServe />
        <FAQ />
        <Booking />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
