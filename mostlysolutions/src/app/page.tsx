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
import FAQ from '@/components/FAQ'
import Booking from '@/components/Booking'
import SiteFooter from '@/components/SiteFooter'
import WhatsAppFab from '@/components/WhatsAppFab'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mostlysolutions.co.uk/#business',
  name: 'Mostly Solutions Ltd',
  description:
    'Premium mobile automotive diagnostics and repair delivered to your door across Reading and London.',
  url: 'https://mostlysolutions.co.uk',
  image: 'https://mostlysolutions.co.uk/icon.webp',
  telephone: '+44 118 900 0000',
  email: 'hello@mostlysolutions.co.uk',
  priceRange: '££',
  areaServed: ['Reading', 'London'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '12 Caversham Road',
      addressLocality: 'Reading',
      postalCode: 'RG1 7BZ',
      addressCountry: 'GB',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '34 Vauxhall Bridge Road',
      addressLocality: 'London',
      postalCode: 'SW1V 1AX',
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
        <FAQ />
        <Booking />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
