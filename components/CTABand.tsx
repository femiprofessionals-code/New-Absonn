import Link from 'next/link'

type Props = {
  eyebrow?: string
  headline: string
  body?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function CTABand({
  eyebrow = 'Ready to Begin',
  headline,
  body,
  primaryHref = '/schedule',
  primaryLabel = 'Schedule a consultation',
  secondaryHref = '/contact',
  secondaryLabel = 'Send a message',
}: Props) {
  return (
    <section className="bg-navy text-white relative overflow-hidden" style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="shell">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-8 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-light">{eyebrow}</span>
            <h2 className="mt-5 text-white font-serif font-normal text-balance max-w-[22ch]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              {headline}
            </h2>
            {body && (
              <p className="mt-6 text-white/80 leading-relaxed max-w-2xl text-[1.0625rem]">{body}</p>
            )}
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <Link href={primaryHref} className="btn-on-dark">
              {primaryLabel}
              <Arrow />
            </Link>
            <Link href={secondaryHref} className="btn-ghost-on-dark">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}
