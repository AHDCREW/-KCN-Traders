'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '3rd', label: 'Generation Business' },
  { value: 'Pan-India', label: 'Distribution Network' },
  { value: 'Global', label: 'Export Reach' },
  { value: 'Direct', label: 'Farm Sourcing' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-x-0 bottom-0 h-32 backdrop-blur-md [mask-image:linear-gradient(to_top,black_40%,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4CAF50] mb-5"
        >
          KCN / K.C. Nammakkal Traders
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl"
        >
          From Local Fields
          <br />
          <span className="text-[#4CAF50]">to Global Markets.</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl"
        >
          What began with a single field of okra in coastal Kerala has grown into a structured agro-export network supplying fresh produce across India and abroad.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E7D32] text-white font-medium text-sm hover:bg-[#1B5E20] transition-colors shadow-lg shadow-black/20"
          >
            Partner With Us
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/#categories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Explore Products
          </Link>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/15 max-w-2xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
