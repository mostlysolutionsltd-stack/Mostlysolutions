'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    title: 'Expert Automotive Diagnostics',
    description:
      'OBD-II scanning, ECU analysis, live sensor data, and fault code resolution using Bosch-grade equipment.',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80',
    badge: 'Diagnostics',
    badgeColor: '#1D7FF2',
  },
  {
    title: 'Mechanical Work',
    description:
      'Brakes, suspension, exhausts, servicing, and MOT prep. Full mechanical repairs at your location.',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80',
    badge: 'Mechanical',
    badgeColor: '#A8FF3D',
  },
  {
    title: 'Electrical & Batteries',
    description:
      'Alternator testing, battery health checks, starter motor replacement, and full electrical diagnostics.',
    image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80',
    badge: 'Electrical',
    badgeColor: '#4DA4FF',
  },
  {
    title: 'Detailing & Protection',
    description:
      'Professional ceramic coating, paint correction, deep interior cleaning, and protective treatments.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
    badge: 'Detailing',
    badgeColor: '#8BE02E',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">What We Offer</span>
          <h2 className="heading-lg text-navy">Our Services</h2>
          <p className="font-inter text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Everything your vehicle needs, delivered to your door by certified technicians.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group bg-white rounded-card overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full font-poppins font-bold text-xs uppercase tracking-wider"
                  style={{
                    background: service.badgeColor,
                    color: service.badgeColor === '#A8FF3D' || service.badgeColor === '#8BE02E' ? '#081A36' : '#fff',
                  }}
                >
                  {service.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-poppins font-bold text-lg text-navy mb-3 uppercase tracking-wide leading-tight">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-gray-500 leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 font-poppins font-bold text-xs uppercase tracking-wider text-blue hover:text-blue-dark transition-colors group/link"
                >
                  Book This Service
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
