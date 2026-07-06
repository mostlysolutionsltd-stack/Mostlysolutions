'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/**
 * Reveal-on-scroll wrapper (ports the prototype's IntersectionObserver logic).
 * Elements already inside the first viewport are never hidden; anything below
 * ~0.92·vh starts hidden and fades/rises in once it scrolls into view.
 */
export default function Reveal({
  children,
  className = '',
  style,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  as?: keyof JSX.IntrinsicElements
}) {
  const ref = useRef<HTMLElement>(null)
  const [hidden, setHidden] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const vh = window.innerHeight || 800
    const rect = el.getBoundingClientRect()
    // Only hide elements that start well below the fold
    if (rect.top <= vh * 0.92) return

    setHidden(true)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setShown(true)
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const revealClass = hidden ? (shown ? 'ms-reveal-hidden ms-reveal-shown' : 'ms-reveal-hidden') : ''

  const Component = Tag as keyof JSX.IntrinsicElements
  return (
    // @ts-expect-error — ref typing across the polymorphic tag is safe here
    <Component ref={ref} className={`${className} ${revealClass}`.trim()} style={style}>
      {children}
    </Component>
  )
}
