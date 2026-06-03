'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const FRAME_COUNT = 240

const steps = [
  { num: '01', title: 'Farm Sourcing', desc: 'Direct from trusted Kerala farms. No middlemen, no markup — just farm-fresh produce entering the chain at full value.' },
  { num: '02', title: 'Grading & Processing', desc: 'Every batch is graded at the farm, then cleaned and sorted to strict benchmarks at our processing facilities.' },
  { num: '03', title: 'Packaging & Dispatch', desc: 'Standardised bulk packing — crates, cartons, or export configurations — tailored per buyer and destination.' },
  { num: '04', title: 'Delivery & Export', desc: 'Domestic wholesale networks and international logistics operating from a single, end-to-end supply chain.' },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    const img = imagesRef.current[index]
    if (!canvas || !img?.complete || img.naturalWidth === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
    const dx = (canvas.width - img.naturalWidth * scale) / 2
    const dy = (canvas.height - img.naturalHeight * scale) / 2
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, dx, dy, img.naturalWidth * scale, img.naturalHeight * scale)
  }, [])

  // Keep canvas pixel dimensions synced to its CSS size
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const sync = () => {
      const p = canvas.parentElement
      if (!p) return
      canvas.width = p.clientWidth
      canvas.height = p.clientHeight
      renderFrame(currentFrameRef.current)
    }
    sync()
    const ro = new ResizeObserver(sync)
    if (canvas.parentElement) ro.observe(canvas.parentElement)
    return () => ro.disconnect()
  }, [renderFrame])

  // Preload all frames; draw frame 0 as soon as it loads
  useEffect(() => {
    const images: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null)
    imagesRef.current = images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = `/frames/frame_${String(i + 1).padStart(4, '0')}.png`
      img.onload = () => {
        images[i] = img
        if (i === 0) renderFrame(0)
      }
    }
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [renderFrame])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.min(Math.floor(latest * FRAME_COUNT), FRAME_COUNT - 1)
    currentFrameRef.current = frameIndex
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => renderFrame(frameIndex))

    const step = Math.min(Math.floor(latest * steps.length), steps.length - 1)
    setActiveStep(step)
  })

  return (
    <section id="how-it-works">
      {/* Tall container — scroll height drives the animation */}
      <div ref={containerRef} style={{ height: `${steps.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex flex-col lg:flex-row">

            {/* ── Left: frame canvas ── */}
            <div className="relative flex-none bg-[#111] h-[45vh] lg:h-full lg:w-[55%]">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            </div>

            {/* ── Right: step content ── */}
            <div className="flex-1 relative flex flex-col justify-between px-8 lg:px-14 py-10 overflow-hidden">

              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/hero.avif)' }}
              />
              {/* Blur + dark overlay */}
              <div className="absolute inset-0 backdrop-blur-md bg-black/50" />

              {/* Content sits above the overlay */}
              {/* Top — section heading */}
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#4ADE80] mb-4">
                  Our Process
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  From Field to<br />Your Door
                </h2>
                <p className="text-white/50 mt-4 text-base">
                  4 steps. Farm to market.
                </p>
              </div>

              {/* Middle — active step */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[#4ADE80] mb-5">
                  Step {steps[activeStep].num}
                </p>
                <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5">
                  {steps[activeStep].title}
                </h3>
                <div className="w-12 h-[2px] bg-[#4ADE80] mb-5 rounded-full" />
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-sm">
                  {steps[activeStep].desc}
                </p>
              </motion.div>

              {/* Bottom — progress + hint */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 rounded-full"
                      style={{
                        width: i === activeStep ? 36 : 10,
                        backgroundColor: i === activeStep ? '#4ADE80' : 'rgba(255,255,255,0.2)',
                        transition: 'all 350ms ease',
                      }}
                    />
                  ))}
                  <span className="ml-2 text-base tabular-nums text-white/40">
                    {String(activeStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 text-sm text-white/30 pointer-events-none transition-opacity duration-500"
                  style={{ opacity: activeStep === 0 ? 1 : 0 }}
                >
                  <span>Scroll to explore</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
