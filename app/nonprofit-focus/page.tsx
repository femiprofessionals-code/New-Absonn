import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'
import Reveal from '@/components/Reveal'

export default function NonprofitFocusPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-[-10%] w-[60%] h-full opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, #E8EDF3 0%, transparent 60%)' }}
        />
        <div className="shell relative">
          <Reveal>
            <div className="max-w-4xl">
              <span className="eyebrow">Our Expertise</span>
              <h1 className="mt-6 text-balance">
                Built for the unique needs of <em className="italic text-navy font-normal">non-profit organizations.</em>
              </h1>
              <p className="lede mt-7 max-w-2xl">
                Non-profit finance is different. We speak your language and understand the realities of mission-driven work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-rule py-16">
        <div className="shell">
          <Reveal>
            <div className="section-header section-header-center mb-12">
              <span className="eyebrow">Our Non-Profit Impact</span>
              <h2 className="mt-5">Supporting mission-driven organizations <em className="italic text-navy font-normal">across sectors and scales.</em></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t-2 border-ink">
            {[
              { num: 150, suffix: '+', label: 'Non-Profits Served' },
              { num: 500, prefix: '$', suffix: 'M+', label: 'Assets Managed' },
              { num: 25, suffix: '+', label: 'Countries Represented' },
              { num: 100, suffix: '%', label: 'Client Satisfaction' },
            ].map((s, i, arr) => (
              <Reveal key={i} delay={i * 80} className={`py-8 px-4 lg:px-6 first:pl-0 ${i < arr.length - 1 ? 'lg:border-r border-rule' : ''} ${i % 2 === 0 ? 'border-r lg:border-r' : ''} ${i < 2 ? 'border-b lg:border-b-0' : ''} border-rule`}>
                <p className="font-serif font-light text-navy" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '0.95', letterSpacing: '-0.025em' }}>
                  <AnimatedCounter end={s.num} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-text leading-snug">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Why Non-Profits Need Specialized Support</span>
              <h2 className="mt-5 text-balance">Four reasons generalist firms <em className="italic text-navy font-normal">fall short.</em></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {[
              { t: 'Fund Accounting & Restricted Gifts', b: 'Proper tracking is not optional. It is foundational to maintaining donor trust and regulatory compliance.' },
              { t: 'Regulatory Complexity', b: 'Form 990, state registrations, and evolving IRS guidance require specialized knowledge and constant vigilance.' },
              { t: 'Stakeholder Accountability', b: 'You report to boards, donors, grantors, and regulators. Each with different expectations and requirements.' },
              { t: 'Resource Constraints', b: 'Maximize program spending while maintaining institutional controls that protect your mission.' },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="border-t-2 border-ink pt-6">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-slate">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-4 font-serif text-2xl font-normal text-ink leading-tight text-balance">{p.t}</h3>
                  <p className="mt-3 text-text leading-relaxed">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <Reveal>
            <div className="section-header section-header-center">
              <span className="eyebrow">Sectors We Serve</span>
              <h2 className="mt-5 text-balance">Mission-driven work <em className="italic text-navy font-normal">across the spectrum.</em></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Social Services', 'Healthcare', 'Education', 'Arts & Culture', 'Environment', 'International', 'Advocacy', 'Foundations'].map((s, i) => (
              <Reveal key={s} delay={i * 50}>
                <div className="bg-white border border-rule rounded-sm px-6 py-8 text-center hover:border-navy hover:-translate-y-0.5 transition-all">
                  <p className="font-serif text-lg text-ink">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">What Makes Us Different</span>
              <h2 className="mt-5 text-balance">Deep non-profit expertise meets <em className="italic text-navy font-normal">institutional-grade operations.</em></h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { t: 'Non-Profit Native', b: 'We understand restricted funds, grant compliance, 990s, and donor stewardship.' },
              { t: 'Institutional Quality', b: 'Big Four audit experience and Fortune 500 financial controls applied to non-profits.' },
              { t: 'Scalable Solutions', b: 'From startup non-profits to established institutions, we grow with you.' },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <div className="bg-paper-warm border border-rule rounded-sm p-8 h-full hover:-translate-y-1 hover:shadow-lift hover:border-navy transition-all">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-navy">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl font-normal text-ink leading-tight">{p.t}</h3>
                  <p className="mt-4 text-text leading-relaxed">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white relative overflow-hidden" style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="shell">
          <div className="grid lg:grid-cols-12 gap-x-16 gap-y-8 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow eyebrow-light">Ready to Experience the Difference?</span>
              <h2 className="mt-5 text-white font-serif font-normal text-balance max-w-[22ch]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                Specialized non-profit financial support that transforms operations.
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed max-w-2xl text-[1.0625rem]">
                Discover how specialized non-profit financial support can transform your operations.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/services" className="btn-on-dark">
                Explore Services
                <Arrow />
              </Link>
              <Link href="/schedule" className="btn-ghost-on-dark">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}
