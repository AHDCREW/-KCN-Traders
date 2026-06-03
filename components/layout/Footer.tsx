import Link from 'next/link'
import Image from 'next/image'

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Export Partners', href: '#' },
    ],
  },
  {
    heading: 'Trade',
    links: [
      { label: 'Products', href: '/#categories' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Business Solutions', href: '/business-solutions' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#FFFDF7] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/images/KCN logo png.png"
                alt="KCN Traders"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-[200px]">
              From Kerala&apos;s coastal fields to global markets — a growing agro-export legacy built on experience and trust.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold text-[#1F2937] uppercase tracking-wider mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF]">© 2024 KCN / K.C. Nammakkal Traders. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#9CA3AF]">APEDA Registered</span>
            <span className="text-[#E5E7EB]">·</span>
            <span className="text-xs text-[#9CA3AF]">FSSAI Certified</span>
            <span className="text-[#E5E7EB]">·</span>
            <span className="text-xs text-[#9CA3AF]">Export Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
