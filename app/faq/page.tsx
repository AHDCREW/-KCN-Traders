'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is the minimum order quantity?',
    a: 'Our minimum order quantity is 50 kg per delivery for standard accounts. For enterprise accounts and institutional buyers, we can accommodate custom MOQs. Contact our sales team to discuss what works for your business.',
  },
  {
    q: 'How are vegetables sourced?',
    a: 'All produce is sourced directly from our network of 500+ verified partner farms. Each farm undergoes an initial audit for certifications (FSSAI, Good Agricultural Practices) and quality practices. We do not use secondary markets or spot-buying — every batch is traceable to a specific farm and harvest date.',
  },
  {
    q: 'What delivery regions are supported?',
    a: 'We currently cover all major metro areas and their surrounding districts. Our cold-chain fleet operates in Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Chennai, and Ahmedabad. Inter-city supply for large orders (1,000 kg+) is available on a scheduled basis. Contact us to confirm coverage for your location.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery is next-day for orders placed before 6 PM. We offer same-day delivery windows in select metros for urgent requirements. Scheduled weekly deliveries can be set up for recurring buyers — our system will auto-confirm based on your preset order template.',
  },
  {
    q: 'How is quality maintained?',
    a: 'Quality is maintained at every stage of the supply chain. Farm-level: produce is graded at harvest. Processing: industrial cleaning and secondary grading. Storage: temperature-controlled cold rooms. Transit: refrigerated vehicles with IoT temperature logging. On delivery: physical inspection at handover. You receive a quality certificate with every order.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI, and credit terms for established accounts. Enterprise accounts can apply for net-30 or net-60 credit terms after a 90-day trading history. We also support purchase orders for institutional buyers.',
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <main className="pt-16 bg-[#FFFDF7] min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-4">Support</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1F2937] tracking-tight mb-5">
              Frequently Asked <br />Questions
            </h1>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Everything you need to know about sourcing wholesale produce through FreshSource.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-[#E5E7EB]">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-medium text-[#1F2937] pr-6 group-hover:text-[#2E7D32] transition-colors">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#2E7D32] transition-colors">
                    {open === i
                      ? <Minus size={14} className="text-[#2E7D32]" />
                      : <Plus size={14} className="text-[#6B7280] group-hover:text-[#2E7D32] transition-colors" />
                    }
                  </div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[#6B7280] leading-relaxed text-[0.95rem]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-2xl bg-[#F9FAF5] border border-[#E5E7EB] text-center"
          >
            <h3 className="font-semibold text-[#1F2937] text-lg mb-2">Still have questions?</h3>
            <p className="text-sm text-[#6B7280] mb-6">Our sales team responds within 2 hours on business days.</p>
            <a
              href="mailto:support@freshsource.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E7D32] text-white font-medium text-sm hover:bg-[#1B5E20] transition-colors"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
