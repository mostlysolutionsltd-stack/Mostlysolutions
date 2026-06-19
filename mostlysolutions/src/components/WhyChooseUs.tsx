'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Car, ShieldCheck, Cpu, BadgePoundSterling, Wrench } from 'lucide-react'

const FEATURES = [
  {
    icon: Car,
    title: 'Mobile Service',
    description:
      'We come to your home, office, or roadside — no need to arrange transport or take time off work.',
    accent: '#1D7FF2',
  },
  {
    icon: ShieldCheck,
    title: 'Experienced Technicians',
    description:
      'All our mechanics are IMI-certified with 10+ years of hands-on experience across major brands.',
    accent: '#A8FF3D',
  },
  {
    icon: Cpu,
    title: 'Specialist Equipment',
    description:
      'Bosch-grade diagnostic scanners, oscilloscopes, and manufacturer-specific programming tools.',
    accent: '#4DA4FF',
  },
  {
    icon: BadgePoundSterling,
    title: 'Cost Effective Solutions',
    description:
      'No workshop overheads — we pass the savings to you. Transparent pricing, no hidden charges.',
    accent: '#8BE02E',
  },
  {
    icon: Wrench,
    title: 'Quality Parts',
    description:
      'We only use OEM-grade parts backed by a 12-month warranty. No cheap alternatives, ever.',
    accent: '#1D7FF2',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why" className="section-padding bg-white" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Why MostlySolutions</span>
          <h2 className="heading-lg text-navy">Why Choose Us</h2>
          <p className="font-inter text-gray-500 text-base mt-4 max-w-lg mx-auto">
            The premium mobile automotive experience — because your time and vehicle deserve better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center text-center p-6 rounded-card border border-gray-100 bg-white shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ background: `${feature.accent}15` }}
              >
                <feature.icon
                  size={26}
                  style={{ color: feature.accent }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-poppins font-bold text-sm text-navy uppercase tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-xs text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
