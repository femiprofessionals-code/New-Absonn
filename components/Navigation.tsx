'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Our Focus', href: '/nonprofit-focus' },
  { label: 'Approach', href: '/approach' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-[30px] left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        scrolled ? 'border-rule shadow-[0_1px_0_rgba(0,0,0,0.02)]' : 'border-transparent'
      }`}
    >
      <div className="shell flex items-center justify-between h-[4.75rem]">
        <Link href="/" className="flex items-center gap-3 text-ink" aria-label="Absonn home">
          <Logomark />
          <span className="font-serif text-[1.5rem] font-medium leading-none">Absonn</span>
          <span className="hidden lg:inline-block text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-slate border-l border-rule pl-3.5 ml-1">
            Advisory
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.9375rem] font-medium transition-colors ${active ? 'text-navy' : 'text-ink hover:text-navy'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/schedule"
          className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium bg-navy text-white rounded-sm hover:bg-navy-deep transition-colors"
        >
          Schedule Consultation
          <Arrow />
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-6 h-px bg-ink transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`w-6 h-px bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-ink transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[80vh] border-t border-rule bg-white' : 'max-h-0'
        }`}
      >
        <div className="shell py-8">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 border-b border-rule text-lg font-medium text-ink hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/schedule"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-navy text-white rounded-sm"
          >
            Schedule Consultation
            <Arrow />
          </Link>
        </div>
      </div>
    </header>
  )
}

export function Logomark({ className = 'w-7 h-7', strokeColor = '#0E2A47' }: { className?: string; strokeColor?: string }) {
  return (
    <span className={className}>
      <svg viewBox="0 0 28 28" fill="none" className="w-full h-full block">
        <rect x="0.5" y="0.5" width="27" height="27" rx="1.5" stroke={strokeColor} strokeWidth="1" />
        <path d="M7 22L13.5 6L20 22M10 17H17" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    </span>
  )
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}
