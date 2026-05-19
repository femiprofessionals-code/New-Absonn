'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-[30px] left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        scrolled ? 'border-rule shadow-[0_1px_0_rgba(0,0,0,0.02)]' : 'border-transparent'
      }`}
    >
      <div className="shell flex items-center justify-between h-[4rem] sm:h-[4.5rem] lg:h-[4.75rem]">
        <Logo size="md" priority className="lg:hidden" />
        <Logo size="lg" priority className="hidden lg:inline-block" />

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
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
          className="lg:hidden flex flex-col gap-1.5 p-3 -mr-3 min-w-[44px] min-h-[44px] items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-6 h-[1.5px] bg-ink transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`w-6 h-[1.5px] bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-[1.5px] bg-ink transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[calc(100vh-4rem)] border-t border-rule bg-white' : 'max-h-0'
        }`}
      >
        <div className="shell py-6 sm:py-8">
          <nav className="flex flex-col">
            {NAV.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-4 border-b border-rule text-lg font-medium transition-colors min-h-[44px] flex items-center ${active ? 'text-navy' : 'text-ink hover:text-navy'}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <Link
            href="/schedule"
            className="mt-6 sm:mt-8 inline-flex w-full items-center justify-center gap-2 px-6 py-4 text-base font-medium bg-navy text-white rounded-sm min-h-[52px]"
          >
            Schedule Consultation
            <Arrow />
          </Link>
        </div>
      </div>
    </header>
  )
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}
