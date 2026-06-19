import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Locations from '@/components/Locations'
import FAQ from '@/components/FAQ'
import Booking from '@/components/Booking'
import WhyChooseUs from '@/components/WhyChooseUs'
import SupportedBrands from '@/components/SupportedBrands'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Locations />
        <FAQ />
        <Booking />
        <WhyChooseUs />
        <SupportedBrands />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
