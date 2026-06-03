'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Building2, UtensilsCrossed, Hotel, ShoppingCart, Truck, GraduationCap, CheckCircle2, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const businessTypes = [
  {
    icon: ShoppingCart,
    title: 'Supermarkets',
    overview: 'High-volume, consistent supply across all vegetable categories with dedicated shelf-life management.',
    advantages: ['Priority sourcing slots', 'Category-based pricing tiers', 'Private-label packaging'],
    benefits: ['Same-day restocking', 'Automated weekly ordering', 'Dedicated relationship manager'],
  },
  {
    icon: Building2,
    title: 'Grocery Chains',
    overview: 'Multi-location supply coordination with centralised billing and delivery scheduling across all branches.',
    advantages: ['Multi-branch logistics', 'Centralised invoicing', 'Chain-wide pricing agreements'],
    benefits: ['Branch-level tracking', 'Weekly consumption reports', 'Volume-based discounts'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    overview: 'Chef-grade produce with precise spec matching, flexible order sizes, and next-day availability.',
    advantages: ['Spec-matched produce', 'Flexible order quantities', 'Seasonal menu support'],
    benefits: ['Next-day delivery', 'Small batch friendly', 'Recipe-specific sourcing'],
  },
  {
    icon: Hotel,
    title: 'Hotels',
    overview: 'Multi-kitchen supply management for properties of any size with cold-chain integrity guaranteed.',
    advantages: ['Multi-kitchen coordination', 'Banquet event scaling', 'FSSAI compliant documentation'],
    benefits: ['Event-based order support', 'Morning delivery windows', 'Dedicated F&B support'],
  },
  {
    icon: Truck,
    title: 'Distributors',
    overview: 'High-volume wholesale allocation with trailer-load pricing and regional distribution support.',
    advantages: ['Trailer-load pricing', 'Regional allocation', 'Co-distribution options'],
    benefits: ['Bulk loading schedules', 'Priority harvest allocation', 'Market-linked pricing'],
  },
  {
    icon: GraduationCap,
    title: 'Institutional Buyers',
    overview: 'Government, hospital, and school supply with tender-compliant documentation and consistent pricing.',
    advantages: ['Tender-ready documentation', 'Compliance certifications', 'Volume guarantees'],
    benefits: ['Long-term contracts', 'Price-lock agreements', 'Audit support'],
  },
]

const orderSteps = [
  { num: '01', title: 'Browse Products', desc: 'Explore our full catalog with live pricing and availability across 50+ vegetable categories.' },
  { num: '02', title: 'Request Quote', desc: 'Submit your weekly requirements. Our team responds with pricing within 2 business hours.' },
  { num: '03', title: 'Order Confirmation', desc: 'Review and confirm the order. Payment terms and delivery schedule are locked in at this stage.' },
  { num: '04', title: 'Packaging', desc: 'Your order is picked, graded, and packed to your specification at our processing facility.' },
  { num: '05', title: 'Dispatch', desc: 'Cold-chain vehicles depart according to your agreed delivery window. Tracking link shared.' },
  { num: '06', title: 'Delivery', desc: 'Produce arrives at your dock — fresh, labelled, and ready for immediate use or storage.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function BusinessSolutions() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <main className="pt-16 bg-[#FFFDF7]">
      {/* Hero */}
      <section className="py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-4">Business Solutions</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] tracking-tight leading-[1.08] mb-6">
              Built for Every <br />
              <span className="text-[#2E7D32]">Bulk Buyer</span>
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed max-w-xl">
              Designed to serve businesses of every size with a simple and reliable wholesale ordering workflow.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E7D32] text-white font-medium text-sm hover:bg-[#1B5E20] transition-colors"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                href="#order-process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] font-medium text-sm hover:bg-[#F9FAF5] transition-all"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Types Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-3">Who We Serve</p>
            <h2 className="text-4xl font-bold text-[#1F2937] tracking-tight">Wholesale for Every Sector</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-lg hover:shadow-black/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0F7F0] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#2E7D32]" />
                  </div>
                  <h3 className="font-semibold text-[#1F2937] text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-5">{b.overview}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Supply Advantages</p>
                      <ul className="space-y-1">
                        {b.advantages.map((a) => (
                          <li key={a} className="flex items-center gap-2 text-xs text-[#6B7280]">
                            <CheckCircle2 size={12} className="text-[#4CAF50] flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Ordering Benefits</p>
                      <ul className="space-y-1">
                        {b.benefits.map((b2) => (
                          <li key={b2} className="flex items-center gap-2 text-xs text-[#6B7280]">
                            <CheckCircle2 size={12} className="text-[#FF8F00] flex-shrink-0" />
                            {b2}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Order Process Timeline */}
      <section id="order-process" className="py-24 bg-[#F9FAF5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-3">The Process</p>
            <h2 className="text-4xl font-bold text-[#1F2937] tracking-tight mb-4">Order in 6 Simple Steps</h2>
            <p className="text-[#6B7280] leading-relaxed">From first contact to delivered produce — a streamlined workflow designed for business buyers.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {orderSteps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="relative"
              >
                {i < orderSteps.length - 1 && (
                  <div className="absolute left-5 top-11 bottom-0 w-px bg-[#E5E7EB]" />
                )}
                <button
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  className="w-full flex items-start gap-5 pb-8 text-left group"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all z-10 relative"
                    style={{
                      borderColor: activeStep === i ? '#2E7D32' : '#E5E7EB',
                      backgroundColor: activeStep === i ? '#2E7D32' : 'white',
                      color: activeStep === i ? 'white' : '#9CA3AF',
                    }}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[#1F2937] group-hover:text-[#2E7D32] transition-colors">{step.title}</h3>
                      <ChevronDown
                        size={16}
                        className="text-[#9CA3AF] transition-transform"
                        style={{ transform: activeStep === i ? 'rotate(180deg)' : 'none' }}
                      />
                    </div>
                    <AnimatePresence>
                      {activeStep === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-sm text-[#6B7280] leading-relaxed mt-2 overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Ready to get started?</h2>
            <p className="text-[#6B7280] mb-8">Custom pricing within 2 hours. No commitment required.</p>
            <Link
              href="mailto:wholesale@freshsource.in"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2E7D32] text-white font-semibold hover:bg-[#1B5E20] transition-colors shadow-lg shadow-[#2E7D32]/20"
            >
              Request Pricing <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
