'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      "MostlySolutions diagnosed a fault my main dealer couldn't find in three visits. Their technician arrived within 3 hours, fixed the issue on the spot, and it cost half what the dealer quoted. Exceptional service.",
    name: 'James Thornton',
    location: 'Reading, Berkshire',
    rating: 5,
    initials: 'JT',
  },
  {
    quote:
      "I had a breakdown on the A4 at 7am and they were with me in 45 minutes. The mechanic was professional, clean, and had my car running before 9am. I made it to my meeting. Truly outstanding.",
    name: 'Sarah Mitchell',
    location: 'London, SW6',
    rating: 5,
    initials: 'SM',
  },
  {
    quote:
      "Used them for a full service and MOT prep. The digital report they sent afterwards was incredibly detailed — photos, sensor readings, everything. It felt like a premium dealership experience at half the price.",
    name: 'David Okonkwo',
    location: 'Richmond, Surrey',
    rating: 5,
    initials: 'DO',
  },
  {
    quote:
      "Battery died in my car park at work. Called at lunchtime and had it replaced and tested by 2pm. The technician also flagged a potential issue with my alternator — exactly the kind of proactive service I needed.",
    name: 'Emma Davies',
    location: 'Reading, Berkshire',
    rating: 5,
    initials: 'ED',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#A8FF3D" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = TESTIMONIALS[current]

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #051224 0%, #081A36 50%, #0B1F3A 100%)' }}
      ref={ref}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, #1D7FF2 0%, transparent 50%), radial-gradient(circle at 75% 50%, #A8FF3D 0%, transparent 50%)',
        }}
      />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label text-lime mb-3 block">Customer Stories</span>
          <h2 className="heading-lg text-white">Trusted by Hundreds</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Testimonial Card */}
          <div className="relative overflow-hidden min-h-[260px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-full text-center px-4"
              >
                {/* Quote icon */}
                <Quote size={40} className="text-blue/40 mx-auto mb-6" />

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  <Stars count={t.rating} />
                </div>

                {/* Quote text */}
                <blockquote className="font-inter text-lg md:text-xl text-white/85 leading-relaxed mb-8 italic">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-black text-sm text-white">{t.initials}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-poppins font-bold text-white text-sm">{t.name}</div>
                    <div className="font-inter text-xs text-white/40 mt-0.5">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className="transition-all duration-300"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current ? '#A8FF3D' : 'rgba(255,255,255,0.2)',
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
