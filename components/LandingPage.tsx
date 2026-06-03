import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
// import ProductCategories from '@/components/sections/ProductCategories'
import WhyChooseUs2 from '@/components/sections/WhyChooseUs2'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      {/* <TrustSection /> */}
      <HowItWorks />
      {/* <ProductCategories /> */}
      <WhyChooseUs2 />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
