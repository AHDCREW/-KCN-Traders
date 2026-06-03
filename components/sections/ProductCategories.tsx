'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const categories = [
  { name: 'Okra (Vendakka)', count: 'Flagship Export Crop', emoji: '🫛', bg: 'from-[#E8F5E9] to-[#C8E6C9]', accent: '#2E7D32' },
  { name: 'Leafy Vegetables', count: '24 varieties', emoji: '🥬', bg: 'from-[#F1F8E9] to-[#DCEDC8]', accent: '#558B2F' },
  { name: 'Root Vegetables', count: '18 varieties', emoji: '🥕', bg: 'from-[#FFF8E1] to-[#FFECB3]', accent: '#FF8F00' },
  { name: 'Fruit Vegetables', count: '21 varieties', emoji: '🍅', bg: 'from-[#FCE4EC] to-[#F8BBD9]', accent: '#C2185B' },
  { name: 'Onion & Garlic', count: '8 varieties', emoji: '🧅', bg: 'from-[#F3E5F5] to-[#E1BEE7]', accent: '#7B1FA2' },
  { name: 'Seasonal Produce', count: 'Region & season-based', emoji: '🌽', bg: 'from-[#FFFDE7] to-[#FFF9C4]', accent: '#F57F17' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function ProductCategories() {
  return (
    <section id="categories" className="py-24 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7D32] mb-3">What We Supply</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2937] tracking-tight">
              Fresh Produce <br className="hidden sm:block" />Categories
            </h2>
            <p className="text-[#6B7280] mt-3 max-w-lg leading-relaxed">
              From our flagship okra crop — where this legacy began — to a full range of export-grade vegetables sourced from trusted regional farms.
            </p>
          </div>
          <a href="#contact" className="text-sm font-medium text-[#2E7D32] hover:text-[#1B5E20] flex items-center gap-1 transition-colors">
            Request full catalog <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white hover:shadow-xl hover:shadow-black/5 transition-all cursor-pointer"
            >
              <div className={`h-44 bg-gradient-to-br ${cat.bg} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                  {cat.emoji}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-5 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">{cat.name}</h3>
                  <p className="text-sm text-[#6B7280]">{cat.count}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: cat.accent + '15' }}
                >
                  <ArrowUpRight size={14} style={{ color: cat.accent }} />
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                style={{ backgroundColor: cat.accent }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
