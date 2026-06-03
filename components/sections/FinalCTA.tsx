'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-[#F9FAF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="rounded-3xl bg-[#2E7D32] px-8 md:px-16 py-16 md:py-20 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#4CAF50]/20 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#1B5E20]/30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A5D6A7] mb-4">Join Our Network</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Ready to Source Direct From the Farm?
            </h2>
            <p className="text-[#C8E6C9] leading-relaxed text-lg mb-10">
              Connect with KCN Traders — a growing agro-export ecosystem built on experience, trust, and steady expansion. Domestic wholesale or international export, we handle both.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:trade@kcntraders.in"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#2E7D32] font-semibold text-sm hover:bg-[#F9FAF5] transition-colors shadow-lg shadow-black/10"
              >
                Request a Quote
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                <Phone size={16} />
                Call Our Trade Desk
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { val: 'Direct', label: 'Farm-to-buyer pricing' },
                { val: 'Export', label: 'International supply ready' },
                { val: 'Legacy', label: 'Generational trust' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-sm text-[#A5D6A7] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
