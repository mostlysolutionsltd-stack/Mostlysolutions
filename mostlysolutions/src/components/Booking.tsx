'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Loader2, Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  fullName: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  vehicleReg: z.string().min(2, 'Enter vehicle registration'),
  serviceType: z.string().min(1, 'Select a service'),
  preferredDate: z.string().min(1, 'Select a date'),
  notes: z.string().optional(),
})
type FormData = z.infer<typeof schema>

const SERVICES = [
  'Expert Automotive Diagnostics',
  'Mechanical Work',
  'Electrical & Batteries',
  'Detailing & Protection',
  'MOT Preparation',
  'Emergency Callout',
  'Other',
]

const STEPS = [
  { number: '01', label: 'Select Service', desc: 'Choose the service you need' },
  { number: '02', label: 'Choose Location', desc: 'Reading or London' },
  { number: '03', label: 'Confirm Booking', desc: "We'll confirm within 2 hours" },
]

function InputField({
  label,
  error,
  children,
  required,
}: {
  label: string
  error?: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div>
      <label className="block font-inter font-semibold text-xs text-white/60 uppercase tracking-wider mb-1.5">
        {label} {required && <span className="text-lime">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 font-inter text-xs text-red-400">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full h-12 px-4 rounded-input bg-white/10 border border-white/20 text-white placeholder-white/30 font-inter text-sm focus:outline-none focus:border-blue focus:bg-white/15 transition-all duration-200'

const selectClass = cn(inputClass, 'appearance-none cursor-pointer')

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)
  const [apiError, setApiError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setApiError('')

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const ownerTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER
    const customerTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CUSTOMER
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !ownerTemplate || !publicKey) {
      setApiError('Email service not configured. Please call us directly.')
      return
    }

    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      vehicle_reg: data.vehicleReg.toUpperCase(),
      service_type: data.serviceType,
      preferred_date: data.preferredDate,
      notes: data.notes || 'None provided',
    }

    try {
      // Notify the business owner
      await emailjs.send(serviceId, ownerTemplate, templateParams, publicKey)

      // Send customer confirmation if template is configured
      if (customerTemplate) {
        await emailjs.send(serviceId, customerTemplate, templateParams, publicKey)
      }

      setSubmitted(true)
    } catch {
      setApiError('Failed to send booking. Please try again or call us directly.')
    }
  }

  return (
    <section id="booking" className="section-padding bg-navy" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label text-lime mb-3 block">Ready to Book?</span>
          <h2 className="heading-lg text-white">Book Your Service</h2>
          <p className="font-inter text-white/50 text-base mt-4 max-w-lg mx-auto">
            Fill in the form and we'll confirm your appointment within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-card overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #051224 0%, #0B1F3A 100%)' }}
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-lime/20 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-lime" />
                </div>
                <span className="font-poppins font-black text-lg text-white uppercase tracking-wide">
                  Book Your Service
                </span>
              </div>

              <p className="font-inter text-sm text-white/50 mb-8 leading-relaxed">
                Our certified technicians come to you. No garage visits, no waiting rooms.
              </p>

              {/* Steps */}
              <div className="space-y-5 mb-10">
                {STEPS.map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-poppins font-black text-xs text-blue">{step.number}</span>
                    </div>
                    <div>
                      <div className="font-poppins font-bold text-sm text-white uppercase tracking-wide">
                        {step.label}
                      </div>
                      <div className="font-inter text-xs text-white/40 mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="border-t border-white/10 pt-6 space-y-3">
                <p className="font-inter text-xs text-white/40 uppercase tracking-wider mb-3">
                  Prefer to call?
                </p>
                <a
                  href="tel:+441189000000"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-lime flex-shrink-0" />
                  <span className="font-poppins font-bold text-lg">+44 118 900 0000</span>
                </a>
                <a
                  href="https://wa.me/441189000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-button bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-poppins font-semibold text-sm hover:bg-[#25D366]/30 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-card p-8"
            style={{ background: '#0B1F3A' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-lime" />
                </div>
                <h3 className="font-poppins font-black text-xl text-white uppercase tracking-wide mb-2">
                  Booking Received!
                </h3>
                <p className="font-inter text-sm text-white/50 max-w-sm">
                  We've sent confirmation to your email. Our team will contact you within 2 hours to
                  finalise your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Full Name" error={errors.fullName?.message} required>
                    <input
                      {...register('fullName')}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </InputField>
                  <InputField label="Email Address" error={errors.email?.message} required>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </InputField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Phone Number" error={errors.phone?.message} required>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+44 7700 000000"
                      className={inputClass}
                    />
                  </InputField>
                  <InputField label="Vehicle Registration" error={errors.vehicleReg?.message} required>
                    <input
                      {...register('vehicleReg')}
                      placeholder="AB12 CDE"
                      className={cn(inputClass, 'uppercase')}
                    />
                  </InputField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Service Type" error={errors.serviceType?.message} required>
                    <div className="relative">
                      <select {...register('serviceType')} className={selectClass} defaultValue="">
                        <option value="" disabled className="bg-navy text-white/40">
                          Select a service…
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s} className="bg-navy text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </InputField>
                  <InputField label="Preferred Date" error={errors.preferredDate?.message} required>
                    <input
                      {...register('preferredDate')}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className={cn(inputClass, 'text-white/70 [color-scheme:dark]')}
                    />
                  </InputField>
                </div>

                <InputField label="Additional Notes" error={errors.notes?.message}>
                  <textarea
                    {...register('notes')}
                    rows={3}
                    placeholder="Any specific issues or additional information…"
                    className={cn(inputClass, 'h-auto py-3 resize-none')}
                  />
                </InputField>

                {apiError && (
                  <p className="font-inter text-sm text-red-400 bg-red-500/10 rounded-input px-4 py-3 border border-red-500/20">
                    {apiError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-button bg-accent-gradient font-poppins font-black text-navy text-sm tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-medium transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>

                <p className="font-inter text-xs text-white/30 text-center">
                  By submitting you agree to be contacted by MostlySolutions regarding your booking.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
