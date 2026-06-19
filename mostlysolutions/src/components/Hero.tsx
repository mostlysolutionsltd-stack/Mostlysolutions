'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'
import { ChevronDown, Loader2 } from 'lucide-react'

const FRAME_COUNT = 112
const framePath = (i: number) =>
  `/frames/frame-${String(i + 1).padStart(3, '0')}.webp`

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const, delay },
  }),
}

/**
 * Two scroll stages tied to the car animation.
 *   intro  : visible at rest, fades out as you scroll in
 *   second : reveals in the second half, holds to the end
 * Values are fractions of total scroll (0 = top, 1 = bottom).
 */
const STAGE = {
  introFade: [0, 0.3, 0.42] as const,
  secondIn: [0.5, 0.62] as const,
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1])

  // Stage 1 — intro
  const introOpacity = useTransform(scrollYProgress, [...STAGE.introFade], [1, 1, 0])
  const introY = useTransform(scrollYProgress, [0, STAGE.introFade[2]], [0, -60])

  // Stage 2 — "just a phone call away"
  const secondOpacity = useTransform(
    scrollYProgress,
    [STAGE.secondIn[0], STAGE.secondIn[1]],
    [0, 1]
  )
  const secondY = useTransform(
    scrollYProgress,
    [STAGE.secondIn[0], STAGE.secondIn[1]],
    [50, 0]
  )

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])

  const render = useCallback((index: number) => {
    const canvas = canvasRef.current
    const img = imagesRef.current[Math.round(index)]
    if (!canvas || !img || !img.complete) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight
    const scale = Math.max(cw / iw, ch / ih)
    const dw = iw * scale
    const dh = ih * scale
    const dx = (cw - dw) / 2
    const dy = (ch - dh) / 2

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, dx, dy, dw, dh)
  }, [])

  useEffect(() => {
    let loadedCount = 0
    const imgs: HTMLImageElement[] = []
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image()
      img.src = framePath(i)
      img.onload = () => {
        loadedCount++
        setProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
        if (i === 0) render(0)
        if (loadedCount === FRAME_COUNT) setLoaded(true)
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === FRAME_COUNT) setLoaded(true)
      }
      imgs[i] = img
    }
    imagesRef.current = imgs
  }, [render])

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      render(frameIndex.get())
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [render, frameIndex])

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    render(latest)
  })

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative bg-navy-dark"
      style={{ height: '220vh' }}
      aria-label="Hero"
    >
      {/* Pinned viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Frame canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ display: 'block' }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent" />

        {/* Loader */}
        {!loaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-navy-dark">
            <Loader2 size={28} className="text-lime animate-spin mb-4" />
            <div className="font-poppins font-black text-2xl text-white tabular-nums">
              {progress}%
            </div>
            <div className="section-label text-white/40 mt-2">Loading Experience</div>
            <div className="mt-5 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-accent-gradient transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* ── Stage 1: Intro ───────────────────────────── */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="container-site absolute inset-0 z-10 flex flex-col justify-center [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
        >
          <div className="max-w-2xl" style={{ paddingTop: '88px' }}>
            <motion.div
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-lime" />
              <span className="section-label text-lime">Mobile Mechanics</span>
            </motion.div>

            <motion.h1
              custom={0.25}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="heading-display mb-6 text-white"
            >
              UK&apos;s #1 Mobile
              <br />
              <span className="text-lime">Car Repairing</span>
            </motion.h1>

            <motion.p
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-10 max-w-lg font-inter text-lg leading-relaxed text-white/70"
            >
              Expert mechanical support at your doorstep. We bring the garage to
              you, anywhere in England with elite standards.
            </motion.p>

            <motion.div
              custom={0.55}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <a href="#booking" className="btn-primary">
                Book Service
              </a>
              <a href="#services" className="btn-secondary">
                Explore Specialties
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Stage 2: Just a phone call away ──────────── */}
        <motion.div
          style={{ opacity: secondOpacity, y: secondY }}
          className="container-site absolute inset-0 z-10 flex flex-col justify-center [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
        >
          <div className="max-w-2xl" style={{ paddingTop: '88px' }}>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-blue-light" />
              <span className="section-label text-blue-light">Always Available</span>
            </div>

            <h2 className="heading-display mb-6 text-white">
              Just a Phone
              <br />
              <span className="text-blue-light">Call Away</span>
            </h2>

            <p className="mb-10 max-w-lg font-inter text-lg leading-relaxed text-white/70">
              Reliable mobile mechanic repairs carried out at your home, workplace,
              or chosen location. Fast booking, expert technicians, and professional
              service you can trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="btn-primary">
                Book Service
              </a>
              <a href="#services" className="btn-secondary">
                Explore Specialties
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40"
        >
          <span className="font-inter text-xs uppercase tracking-widest">
            Scroll to Explore
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
