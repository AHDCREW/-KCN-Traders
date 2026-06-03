'use client'
import { useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'

const TOTAL_FRAMES = 240

const steps = [
  {
    num: '01',
    title: 'Farming With Purpose',
    desc: 'What began with okra fields in coastal Kerala. Produce taken directly to local markets — no intermediaries, no margin stacking. Freshness reaches the buyer without losing value.',
  },
  {
    num: '02',
    title: 'Regional Market Expansion',
    desc: 'From Manjeri to Calicut and surrounding trading hubs. This phase introduced logistics thinking — understanding that different markets need different timing, and relationships matter as much as products.',
  },
  {
    num: '03',
    title: 'Structured Supply Chain',
    desc: 'The circular trade system: goods move outward, essential value returns inward. A self-sustaining model that strengthened efficiency, reduced waste, and built long-term operational sustainability.',
  },
  {
    num: '04',
    title: 'Export & Global Reach',
    desc: 'International export channels supplying premium produce to overseas buyers. Compliance with strict global quality standards, specialised packaging, and cross-border distribution — connecting Kerala farms to world markets.',
  },
]

function padFrame(n: number) {
  return `/frames/frame_${String(n).padStart(4, '0')}.webp`
}

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFrame, setCurrentFrame] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const prevIndexRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(latest * (TOTAL_FRAMES - 1)) + 1))
    setCurrentFrame(frame)

    const next = Math.min(steps.length - 1, Math.floor(latest * steps.length))
    if (next !== prevIndexRef.current) {
      setDirection(next > prevIndexRef.current ? 1 : -1)
      prevIndexRef.current = next
      setActiveIndex(next)
    }
  })

  return (
    <div ref={containerRef} style={{ height: '500vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#071410]">

        {/* ── Full-bleed frame — covers entire viewport so right blur has content behind it ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src={padFrame(currentFrame)}
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Very light global tint — keeps left side visible */}
          <div className="absolute inset-0 bg-[#071410]/30" />
        </div>

        {/* ── Layout on top ── */}
        <div className="relative z-10 flex h-full">

          {/* LEFT: frame shows through clearly */}
          <div className="w-[55%] relative flex flex-col justify-between py-9 px-9">
            {/* Bottom vignette on left only */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071410]/60 to-transparent pointer-events-none" />

            {/* Supply Chain label */}
            <div className="flex items-center gap-3 relative z-10">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-white/60">
                Supply Chain
              </span>
              <span className="w-px h-3 bg-white/20" />
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[10px] font-mono text-[#4CAF50]/90 tracking-widest"
              >
                0{activeIndex + 1}&nbsp;/&nbsp;0{steps.length}
              </motion.span>
            </div>

            {/* Progress bar */}
            <div className="relative z-10">
              <div className="relative h-px w-full bg-white/15">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#4CAF50]"
                  style={{ width: progressWidth }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4CAF50]"
                  style={{
                    left: progressWidth,
                    boxShadow: '0 0 10px 3px rgba(76,175,80,0.65)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: frosted glass blur panel — blurs the live frame behind it */}
          <div
            className="w-[45%] h-full flex flex-col items-start justify-center px-12 pr-16 relative overflow-hidden"
            style={{
              backdropFilter: 'blur(36px) brightness(0.7) saturate(1.4)',
              WebkitBackdropFilter: 'blur(36px) brightness(0.7) saturate(1.4)',
              background: 'rgba(7, 20, 16, 0.38)',
              borderLeft: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Soft left-edge feather */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#071410]/40 to-transparent pointer-events-none" />

            {/* Step pill indicators */}
            <div className="flex items-center gap-2.5 mb-12">
              {steps.map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    width: i === activeIndex ? '2rem' : '0.45rem',
                    backgroundColor:
                      i === activeIndex ? '#4CAF50' : i < activeIndex ? '#2a5a35' : '#152920',
                    opacity: i === activeIndex ? 1 : i < activeIndex ? 0.55 : 0.28,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'inline-block', height: '3px', borderRadius: '9999px' }}
                />
              ))}
            </div>

            {/* One step at a time */}
            <div className="relative w-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, y: direction * 52, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: direction * -52, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  {/* Large Playfair number */}
                  <span
                    className="font-display font-bold select-none block leading-none mb-5"
                    style={{
                      fontSize: 'clamp(5rem, 10vw, 9rem)',
                      color: '#4CAF50',
                      textShadow: '0 0 80px rgba(76,175,80,0.4)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {steps[activeIndex].num}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display font-bold text-white leading-tight mb-4"
                    style={{
                      fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {steps[activeIndex].title}
                  </h3>

                  {/* Animated accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '2.5rem' }}
                    transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px bg-[#4CAF50] mb-5"
                  />

                  {/* Description */}
                  <p className="text-[#8aac9a] text-sm leading-[1.9] max-w-sm font-sans">
                    {steps[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scroll hint */}
            <motion.div
              animate={{ opacity: activeIndex === 0 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 left-12 flex items-center gap-2 text-[11px] text-white/25 font-sans tracking-widest uppercase pointer-events-none"
            >
              <span>Scroll to explore</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                ↓
              </motion.span>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
