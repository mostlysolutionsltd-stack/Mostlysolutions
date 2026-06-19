'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Star, Clock } from 'lucide-react'

const STATS = [
  {
    icon: Users,
    value: '5,000+',
    label: 'Satisfied Customers',
    description: 'Across Reading and London',
    accent: '#4DA4FF',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Customer Rating',
    description: 'Based on verified reviews',
    accent: '#A8FF3D',
  },
  {
    icon: Clock,
    value: '15 min',
    label: 'Average Response',
    description: 'From booking to callback',
    accent: '#1D7FF2',
  },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" className="bg-navy py-16 lg:py-20" ref={ref}>
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="relative overflow-hidden rounded-card p-8 group"
              style={{ background: '#0B1F3A', boxShadow: '0 20px 50px rgba(0,0,0,.15)' }}
            >
              {/* Background glow */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: stat.accent }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${stat.accent}18` }}
              >
                <stat.icon size={22} style={{ color: stat.accent }} />
              </div>

              <div className="font-poppins font-black text-4xl text-white mb-1">
                {stat.value}
              </div>
              <div className="font-poppins font-bold text-base text-white/90 mb-1 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="font-inter text-sm text-white/40">{stat.description}</div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-40"
                style={{ background: `linear-gradient(90deg, ${stat.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
