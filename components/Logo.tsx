'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Variant = 'dark' | 'light'
type Size = 'sm' | 'md' | 'lg' | 'xl'

const SIZES: Record<Size, { w: number; h: number }> = {
  sm: { w: 110, h: 33 },
  md: { w: 150, h: 45 },
  lg: { w: 200, h: 60 },
  xl: { w: 260, h: 78 },
}

type Props = {
  variant?: Variant
  size?: Size
  href?: string | null
  priority?: boolean
  className?: string
  animateOnMount?: boolean
}

export default function Logo({
  variant = 'dark',
  size = 'md',
  href = '/',
  priority = false,
  className = '',
  animateOnMount = true,
}: Props) {
  const [mounted, setMounted] = useState(!animateOnMount)
  const { w, h } = SIZES[size]
  const src = variant === 'light' ? '/logo-white.png' : '/logo.png'

  useEffect(() => {
    if (!animateOnMount) return
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [animateOnMount])

  const img = (
    <Image
      src={src}
      alt="Absonn"
      width={w}
      height={h}
      priority={priority}
      className="block h-auto w-auto select-none"
      style={{ maxHeight: `${h}px` }}
    />
  )

  const wrapperClass = `logo-anim inline-block transition-transform duration-300 ease-out ${
    mounted ? 'logo-mounted' : 'logo-pre'
  } ${className}`

  if (href === null) {
    return <span className={wrapperClass}>{img}</span>
  }

  return (
    <Link
      href={href}
      aria-label="Absonn home"
      className={`${wrapperClass} hover:scale-[1.04] active:scale-[0.98]`}
    >
      {img}
    </Link>
  )
}
