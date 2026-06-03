import React from 'react'

const features = [
  {
    title: 'Generational Expertise',
    description: 'Three generations of farming and trading knowledge — from coastal Kerala fields to structured export operations. Trust built through decades, not marketing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Circular Trade Efficiency',
    description: 'A self-sustaining supply model: goods move outward, value returns inward. Continuous reinvestment into operations ensures sustainability and cost efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Export-Grade Quality',
    description: 'Every batch meets strict international quality expectations. Specialised packaging, handling systems, and compliance protocols built for cross-border trade.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Global Market Access',
    description: 'From Manjeri and Calicut to international buyers — our network connects farms directly to domestic wholesale and overseas export channels.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Bulk Order Ready',
    description: 'Infrastructure built for scale. From local market volumes to large-scale export orders, the same seamless process and dedicated support handles every size.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Direct Pricing, No Middlemen',
    description: 'Eliminating intermediary layers is in our DNA. Direct farm relationships since day one mean market-best prices passed straight to our buyers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
]

export default function WhyChooseUs2() {
  return (
    <section className="bg-[#F9FAF8] py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-bold text-xs tracking-widest uppercase block mb-4">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Why Partner With KCN Traders
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Built on a foundation of simple farming and steady expansion — the same principles that carried okra from a coastal field to global markets now serve every order we fulfil.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-24 text-center max-w-4xl mx-auto flex flex-col items-center">
          <blockquote className="text-xl md:text-2xl font-medium text-green-700 italic leading-snug mb-6">
            "Freshness must reach directly to the market without losing value."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-gray-300" />
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              The Founding Principle of KCN Traders
            </p>
            <div className="h-px w-12 bg-gray-300" />
          </div>
        </div>

      </div>
    </section>
  )
}
