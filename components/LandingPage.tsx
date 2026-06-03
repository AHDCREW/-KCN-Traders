import Hero from '@/components/sections/Hero'
import TrustSection from '@/components/sections/TrustSection'
import HowItWorks from '@/components/sections/HowItWorks'
// import ProductCategories from '@/components/sections/ProductCategories'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      {/* <TrustSection /> */}
      <HowItWorks />
      {/* <ProductCategories /> */}
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
