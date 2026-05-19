'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'none'
  className?: string
}

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }: Props) {
  const [shown, setShown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const node = ref.current

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [delay])

  const transform = !shown
    ? direction === 'up'
      ? 'translateY(24px)'
      : direction === 'left'
        ? 'translateX(-24px)'
        : 'none'
    : 'none'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform,
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
