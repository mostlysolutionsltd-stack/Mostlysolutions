'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

const LOCATIONS = [
  {
    city: 'Reading Office',
    address: '12 Caversham Road, Reading, RG1 7BZ',
    phone: '+44 118 900 0000',
    hours: 'Mon–Sat: 7am – 8pm',
    mapUrl: 'https://maps.google.com/?q=Reading+RG1+7BZ',
    accent: '#1D7FF2',
  },
  {
    city: 'London Office',
    address: '34 Vauxhall Bridge Road, London, SW1V 1AX',
    phone: '+44 207 000 0000',
    hours: 'Mon–Sun: 8am – 9pm',
    mapUrl: 'https://maps.google.com/?q=Vauxhall+Bridge+Road+London',
    accent: '#A8FF3D',
  },
]

export default function Locations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Where to Find Us</span>
          <h2 className="heading-lg text-navy">Reading and London Office Details</h2>
          <p className="font-inter text-gray-500 text-base mt-4 max-w-lg mx-auto">
            Two strategic locations covering the M4 corridor and Greater London.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="relative rounded-card border border-gray-100 p-8 bg-white shadow-soft hover:shadow-medium transition-all duration-300 group overflow-hidden"
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-card"
                style={{ background: `linear-gradient(90deg, ${loc.accent}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-poppins font-black text-xl text-navy uppercase tracking-wide">
                    {loc.city}
                  </h3>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${loc.accent}18` }}
                >
                  <MapPin size={18} style={{ color: loc.accent }} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm text-gray-600">{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400 flex-shrink-0" />
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, '')}`}
                    className="font-inter text-sm font-semibold text-gray-800 hover:text-blue transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gray-400 flex-shrink-0" />
                  <span className="font-inter text-sm text-gray-600">{loc.hours}</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-poppins font-bold text-xs uppercase tracking-wider transition-colors duration-200"
                  style={{ color: loc.accent }}
                >
                  <ExternalLink size={13} />
                  Open in Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
