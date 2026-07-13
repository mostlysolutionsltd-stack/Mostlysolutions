import Loader from '@/components/Loader'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import BrandsMarquee from '@/components/BrandsMarquee'
import Reviews from '@/components/Reviews'
import Stories from '@/components/Stories'
import Locations from '@/components/Locations'
import FAQ from '@/components/FAQ'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <BrandsMarquee />
        <Reviews />
        <Stories />
        <Locations />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
