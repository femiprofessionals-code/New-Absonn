'use client'

import { useEffect, useRef } from 'react'

export default function HeroBlob() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip parallax on touch devices and small screens
    const isTouch = window.matchMedia('(hover: none)').matches
    const isSmall = window.innerWidth < 768
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || isSmall || reduced) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 30
      targetY = (e.clientY / window.innerHeight - 0.5) * 30
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05
      el.style.transform = `translate(${currentX}px, ${currentY}px)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden
      ref={ref}
      className="absolute top-0 right-[-10%] w-[60%] h-full opacity-50 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at top right, #E8EDF3 0%, transparent 60%)' }}
    />
  )
}
