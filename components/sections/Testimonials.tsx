'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    company: 'Gulf Export Partner',
    buyer: 'Ahmed Al Rashid',
    role: 'Import & Trade Director',
    rating: 5,
    review: 'KCN Traders has been our most reliable source for fresh Indian vegetables. The export documentation, packaging quality, and consistency of produce grade have made them our first-choice partner for regional distribution.',
  },
  {
    company: 'Calicut Wholesale Hub',
    buyer: 'Suresh Nambiar',
    role: 'Senior Procurement Manager',
    rating: 5,
    review: 'We have worked with this network since their early trading days in Calicut. What sets them apart is that the quality commitment has never changed — even as their scale expanded from regional to international markets.',
  },
  {
    company: 'South India Retail Chain',
    buyer: 'Meera Krishnan',
    role: 'Category Head — Fresh Produce',
    rating: 5,
    review: 'The direct farm-to-shelf approach eliminates the quality loss that comes with multiple handling layers. Their circular trade model means we get consistent supply at genuinely competitive prices, every week without exception.',
  },
  {
    company: 'Institutional Catering Group',
    buyer: 'Rajan Pillai',
    role: 'Head of Supply Operations',
    rating: 5,
    review: 'For bulk institutional orders, reliability is everything. KCN Traders understands that — their generational experience shows in how they handle scale without compromising on freshness or delivery timelines.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-3">Partner Stories</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2937] tracking-tight">
              Trusted Across Markets
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#2E7D32] hover:text-[#2E7D32] transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#2E7D32] hover:text-[#2E7D32] transition-all"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            >
              <div className="lg:col-span-3 bg-white rounded-2xl border border-[#E5E7EB] p-8 lg:p-10">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#FF8F00]" fill="#FF8F00" />
                  ))}
                </div>
                <blockquote className="text-[#1F2937] text-lg leading-relaxed font-medium mb-8">
                  &ldquo;{testimonials[current].review}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-[#F3F4F6]">
                  <div className="w-10 h-10 rounded-full bg-[#F0F7F0] flex items-center justify-center text-sm font-bold text-[#2E7D32]">
                    {testimonials[current].buyer[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937] text-sm">{testimonials[current].buyer}</p>
                    <p className="text-xs text-[#6B7280]">{testimonials[current].role} · {testimonials[current].company}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-4">
                {testimonials
                  .filter((_, i) => i !== current)
                  .slice(0, 2)
                  .map((t) => (
                    <div
                      key={t.company}
                      onClick={() => {
                        const idx = testimonials.findIndex((x) => x.company === t.company)
                        setDirection(idx > current ? 1 : -1)
                        setCurrent(idx)
                      }}
                      className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F9FAF5] hover:bg-white hover:border-[#D1D5DB] hover:shadow-sm transition-all cursor-pointer"
                    >
                      <p className="text-sm text-[#6B7280] line-clamp-2 mb-3">&ldquo;{t.review}&rdquo;</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#F0F7F0] flex items-center justify-center text-[10px] font-bold text-[#2E7D32]">
                          {t.buyer[0]}
                        </div>
                        <p className="text-xs font-medium text-[#1F2937]">{t.buyer}</p>
                        <span className="text-[#E5E7EB]">·</span>
                        <p className="text-xs text-[#6B7280]">{t.company}</p>
                      </div>
                    </div>
                  ))}

                <div className="flex items-center gap-1.5 mt-auto pt-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                      className="h-1 rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? 20 : 6,
                        backgroundColor: i === current ? '#2E7D32' : '#E5E7EB',
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
