import Link from 'next/link'
import CTABand from '@/components/CTABand'
import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import HeroBlob from '@/components/HeroBlob'

export default function HomePage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-20 lg:pb-24 relative overflow-hidden">
        <HeroBlob />
        <div className="shell relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy-tint border border-navy/15 rounded-full text-xs font-semibold tracking-wide text-navy">
              <Sparkle />
              Trusted by 150+ Mission-Driven Organizations Worldwide
            </span>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center mt-10">
            <div>
              <Reveal delay={80}>
                <h1 className="text-balance">
                  Where Mission Meets <em className="italic text-navy font-normal">Excellence</em>
                  <span className="block mt-3 text-text-soft font-serif italic font-light" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                    Institutional-Grade Financial Operations
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="lede mt-8 max-w-2xl">
                  Delivering world-class back-office and strategic CFO advisory to non-profits worldwide. Empowering you to focus on impact, not infrastructure.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-11 flex flex-wrap gap-3.5 items-center">
                  <Link href="/schedule" className="btn-primary">Transform Your Operations<Arrow /></Link>
                  <Link href="/services" className="btn-secondary">Explore Services</Link>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-14 pt-8 border-t border-rule grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6">
                  {[
                    { label: 'SEC Compliant', icon: 'shield' },
                    { label: '150+ Organizations', icon: 'users' },
                    { label: '$500M+ Managed', icon: 'chart' },
                    { label: '15+ Years Experience', icon: 'star' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-sm bg-navy-tint flex items-center justify-center text-navy flex-shrink-0">
                        <TrustIcon name={item.icon} />
                      </span>
                      <span className="text-sm font-medium text-ink leading-snug">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <aside className="bg-white border border-rule rounded-sm overflow-hidden shadow-card">
                <div className="bg-gradient-to-br from-navy to-navy-deep text-white px-8 py-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <span className="eyebrow eyebrow-light !text-white/70 mb-4">Why Absonn</span>
                  <h3 className="font-serif text-2xl font-normal leading-snug text-white mt-3">
                    Fortune 500-caliber finance operations for organizations changing the world.
                  </h3>
                  <p className="mt-4 text-sm text-white/75 leading-relaxed">
                    From foundational bookkeeping to strategic CFO leadership. We scale with you as your organization grows.
                  </p>
                </div>
                <div className="px-8 py-7">
                  <ul className="divide-y divide-rule-soft">
                    {[
                      ['Back-Office', 'Comprehensive Support'],
                      ['CFO Advisory', 'Strategic Leadership'],
                      ['Compliance', 'Audit-Ready Always'],
                      ['Reporting', 'Board & Funder Grade'],
                      ['Scale', 'Startup to Established'],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between items-baseline py-3 gap-4">
                        <span className="text-xs font-medium tracking-wider uppercase text-slate flex-shrink-0">{label}</span>
                        <span className="text-sm text-ink font-medium text-right">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 py-4 bg-paper-warm border-t border-rule flex items-center justify-between gap-4 text-xs text-slate">
                  <span className="inline-flex items-center gap-1.5 text-navy font-medium"><Check />Mission-aligned</span>
                  <span>Global Reach</span>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-rule py-20 lg:py-24">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="eyebrow justify-center">Results That Speak For Themselves</span>
              <h2 className="mt-5">Trusted worldwide. <em className="italic text-navy font-normal">Proven excellence.</em></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { value: 150, prefix: '', suffix: '+', label: 'Non-Profits Served' },
              { value: 500, prefix: '$', suffix: 'M+', label: 'Assets Managed' },
              { value: 100, prefix: '', suffix: '%', label: 'Client Retention' },
              { value: 15, prefix: '', suffix: '+', label: 'Years Excellence' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="text-center">
                  <p className="font-serif font-light text-navy" style={{ fontSize: 'clamp(3rem, 5.5vw, 4.5rem)', lineHeight: '1', letterSpacing: '-0.025em' }}>
                    <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-4 text-sm font-medium text-text-soft tracking-wide">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-header section-header-center">
              <span className="eyebrow justify-center">What We Do</span>
              <h2 className="mt-5">Your Mission Deserves <em className="italic text-navy font-normal">World-Class Operations</em></h2>
              <p className="lede mt-6">
                Non-profits are expected to do more with less. Yet your financial operations must meet institutional standards. Absonn bridges that gap with sophisticated back-office support and strategic CFO advisory.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {SERVICE_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <article className="bg-white border border-rule rounded-sm p-8 h-full transition-all duration-300 hover:border-navy hover:-translate-y-1 hover:shadow-card group flex flex-col">
                  <div className="w-12 h-12 rounded-sm bg-navy-tint flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-ink">{card.title}</h3>
                  <p className="mt-4 text-text leading-relaxed flex-1">{card.body}</p>
                  <Link href={card.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:gap-2.5 transition-[gap]">
                    Explore Services<Arrow />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Our Difference</span>
              <h2 className="mt-5">Institutional Quality, <em className="italic text-navy font-normal">Mission-Driven Focus</em></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-14">
            {VALUE_PROPS.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <span className="font-serif font-light text-navy block transition-transform group-hover:scale-110" style={{ fontSize: '2.5rem', lineHeight: '1' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-normal text-ink leading-tight">{v.title}</h4>
                    <p className="mt-3 text-text leading-relaxed">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Ready to Begin"
        headline="Transform Your Financial Operations Today"
        body="Whether you are scaling, preparing for an audit, or simply need more confidence in your numbers, we are here to help you achieve institutional excellence. A 30-minute strategic call. No obligation. Tailored insights. Immediate value."
        primaryLabel="Schedule Your Free Consultation"
      />
    </>
  )
}

const SERVICE_CARDS = [
  { title: 'Back-Office Outsourcing', body: 'Comprehensive bookkeeping, compliance, and financial operations support, from monthly close to audit coordination.', href: '/services#back-office', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg> },
  { title: 'CFO Advisory', body: 'Strategic financial leadership without the full-time cost. Budgeting, board reporting, and multi-year planning.', href: '/services#cfo-advisory', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg> },
  { title: 'Built for Non-Profits', body: 'We understand restricted funds, grant compliance, 990s, and the unique challenges of mission-driven finance.', href: '/nonprofit-focus', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg> },
]

const VALUE_PROPS = [
  { title: 'Fortune 500 Standards', body: 'We apply the same rigor, controls, and reporting frameworks used by the world\u2019s leading financial institutions.' },
  { title: 'Non-Profit Expertise', body: 'Deep fluency in fund accounting, grant compliance, donor stewardship, and the regulatory landscape that governs your work.' },
  { title: 'Scalable Partnership', body: 'From foundational bookkeeping to strategic CFO leadership, we scale with you as your organization grows.' },
  { title: 'Global Reach, Local Understanding', body: 'Serving organizations worldwide with particular strength in U.S. tax-exempt entities and compliance requirements.' },
]

function Arrow() { return <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg> }
function Check() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg> }
function Sparkle() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" /></svg> }
function TrustIcon({ name }: { name: string }) {
  if (name === 'shield') return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  if (name === 'users') return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
  if (name === 'chart') return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg>
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87L8.91 8.26 12 2z" /></svg>
}
