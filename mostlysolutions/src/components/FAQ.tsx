'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'How fast can a mechanic reach my location?',
    a: "In most cases we can have a certified technician with you within 2–4 hours of booking. For emergency callouts in Reading and London, we often achieve response times under 90 minutes. You'll receive an ETA confirmation by text immediately after booking.",
  },
  {
    q: 'Do you provide roadside emergency service?',
    a: "Yes. If your vehicle breaks down and you're safe to wait, our emergency team operates 7 days a week. We carry common parts on our vans — batteries, belts, alternators — so we can fix many faults on the spot without a tow.",
  },
  {
    q: 'Can I get a quote before confirming service?',
    a: "Absolutely. Fill in our booking form or call us and we'll provide a transparent written quote before any work begins. There are no hidden fees — what we quote is what you pay.",
  },
  {
    q: 'Which vehicle types do you support?',
    a: "We service all major European, Japanese, and American brands including Audi, BMW, Mercedes, Volkswagen, Ford, Toyota, Nissan, Vauxhall, Seat, Citroen, and many more. We cover petrol, diesel, and hybrid vehicles.",
  },
  {
    q: 'Do you cover both Reading and London locations?',
    a: "Yes. We have dedicated teams in Reading (covering RG postcodes, Berkshire, and Oxfordshire) and London (covering all London boroughs). Both offices operate independently with fully-equipped mobile service units.",
  },
  {
    q: 'Is there any warranty on repairs?',
    a: "All repairs come with a 12-month / 12,000-mile parts and labour warranty. We only use OEM-grade or manufacturer-approved parts. In the unlikely event of any issue, we will return and fix it at no additional charge.",
  },
]

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="rounded-card bg-white border border-gray-100 overflow-hidden shadow-soft"
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-gray-50"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-poppins font-semibold text-base text-navy leading-snug">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: open ? '#1D7FF2' : '#EEF3F8' }}
        >
          {open ? (
            <Minus size={14} className="text-white" />
          ) : (
            <Plus size={14} className="text-blue" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-gray-100 mb-4" />
              <p className="font-inter text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Got Questions?</span>
          <h2 className="heading-lg text-navy">Frequently Asked Questions</h2>
          <p className="font-inter text-gray-500 text-base mt-4 max-w-lg mx-auto">
            Everything you need to know about our mobile automotive service.
          </p>
        </motion.div>

        {inView && (
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
