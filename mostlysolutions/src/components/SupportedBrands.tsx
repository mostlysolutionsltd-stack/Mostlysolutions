'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BRANDS = [
  { name: 'Audi', abbr: 'A' },
  { name: 'BMW', abbr: 'B' },
  { name: 'Mercedes', abbr: 'MB' },
  { name: 'Volkswagen', abbr: 'VW' },
  { name: 'Seat', abbr: 'S' },
  { name: 'Vauxhall', abbr: 'V' },
  { name: 'Citroen', abbr: 'C' },
  { name: 'Ford', abbr: 'F' },
  { name: 'Toyota', abbr: 'T' },
  { name: 'Nissan', abbr: 'N' },
]

export default function SupportedBrands() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Supported Vehicles</span>
          <h2 className="heading-lg text-navy">Brands We Service</h2>
          <p className="font-inter text-gray-500 text-base mt-4 max-w-lg mx-auto">
            From European luxury to Japanese reliability — our technicians are trained across all major brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl shadow-soft border border-gray-100 p-5 flex flex-col items-center justify-center gap-3 hover:scale-[1.04] hover:shadow-medium transition-all duration-300 cursor-default group"
            >
              {/* Brand logo placeholder — replace with actual SVG logos */}
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="font-poppins font-black text-sm text-white">{brand.abbr}</span>
              </div>
              <span className="font-poppins font-semibold text-sm text-gray-700 uppercase tracking-wider">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center font-inter text-sm text-gray-400 mt-8"
        >
          Don't see your brand?{' '}
          <a href="#booking" className="text-blue hover:underline font-semibold">
            Contact us
          </a>{' '}
          — we likely service it.
        </motion.p>
      </div>
    </section>
  )
}
