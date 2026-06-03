'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Products', href: '/#categories' },
  { label: 'How it Works', href: '/#how-it-works' },
  { label: 'Business Solutions', href: '/business-solutions' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-[#FFFDF7]/90 border-b border-[#E5E7EB]' : 'bg-black/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/KCN logo png.png"
            alt="KCN Traders"
            width={180}
            height={72}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={`px-3 py-2 text-sm rounded-md transition-all ${
                  scrolled
                    ? 'text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F9FAF5]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/faq"
            className={`text-sm transition-colors ${scrolled ? 'text-[#6B7280] hover:text-[#1F2937]' : 'text-white/80 hover:text-white'}`}
          >
            Sign In
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg bg-[#2E7D32] text-white text-sm font-medium hover:bg-[#1B5E20] transition-colors"
          >
            Get Wholesale Pricing
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F9FAF5]' : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-[#FFFDF7] border-b border-[#E5E7EB] px-6 py-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-[#6B7280] hover:text-[#1F2937] border-b border-[#F3F4F6] last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 py-2.5 px-4 rounded-lg bg-[#2E7D32] text-white text-sm font-medium text-center"
            >
              Get Wholesale Pricing
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
