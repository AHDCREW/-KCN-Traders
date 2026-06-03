'use client'
import { motion } from 'framer-motion'
import { Sprout, RefreshCw, ShieldCheck, Globe, Boxes, TrendingDown } from 'lucide-react'

const reasons = [
  { icon: Sprout, title: 'Generational Expertise', desc: 'Three generations of farming and trading knowledge — from coastal Kerala fields to structured export operations. Trust built through decades, not marketing.' },
  { icon: RefreshCw, title: 'Circular Trade Efficiency', desc: 'A self-sustaining supply model: goods move outward, value returns inward. Continuous reinvestment into operations ensures sustainability and cost efficiency.' },
  { icon: ShieldCheck, title: 'Export-Grade Quality', desc: 'Every batch meets strict international quality expectations. Specialised packaging, handling systems, and compliance protocols built for cross-border trade.' },
  { icon: Globe, title: 'Global Market Access', desc: 'From Manjeri and Calicut to international buyers — our network connects farms directly to domestic wholesale and overseas export channels.' },
  { icon: Boxes, title: 'Bulk Order Ready', desc: 'Infrastructure built for scale. From local market volumes to large-scale export orders, the same seamless process and dedicated support handles every size.' },
  { icon: TrendingDown, title: 'Direct Pricing, No Middlemen', desc: 'Eliminating intermediary layers is in our DNA. Direct farm relationships since day one mean market-best prices passed straight to our buyers.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F9FAF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-3">Our Advantage</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Why Partner With KCN Traders
          </h2>
          <p className="text-[#6B7280] mt-4 leading-relaxed">
            Built on a foundation of simple farming and steady expansion — the same principles that carried okra from a coastal field to global markets now serve every order we fulfil.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                variants={cardVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-md hover:shadow-black/5 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F0F7F0] flex items-center justify-center mb-4">
                  <Icon size={16} className="text-[#2E7D32]" />
                </div>
                <h3 className="font-semibold text-[#1F2937] mb-2">{r.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{r.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Core principle pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <blockquote className="text-lg sm:text-xl font-medium text-[#2E7D32] italic max-w-xl mx-auto">
            &ldquo;Freshness must reach directly to the market without losing value.&rdquo;
          </blockquote>
          <p className="text-xs text-[#9CA3AF] mt-2 uppercase tracking-widest">— The founding principle of KCN Traders</p>
        </motion.div>
      </div>
    </section>
  )
}
