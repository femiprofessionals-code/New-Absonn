import CTABand from '@/components/CTABand'
import Reveal from '@/components/Reveal'
import HeroBlob from '@/components/HeroBlob'

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 sm:pt-32 lg:pt-44 pb-12 sm:pb-16 relative overflow-hidden">
        <HeroBlob />
        <div className="shell relative">
          <div className="max-w-4xl">
            <Reveal><span className="eyebrow">Our Services</span></Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance">
                Comprehensive Financial Operations for <em className="italic text-navy font-normal">Mission-Driven Organizations</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede mt-7 max-w-2xl">
                From day-to-day bookkeeping to strategic CFO advisory, Absonn delivers the full spectrum of back-office support non-profits need to operate with confidence and scale responsibly.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                {['Back-Office Excellence', 'Strategic CFO Advisory', 'Compliance Assured'].map((t) => (
                  <span key={t} className="px-4 py-2 bg-navy-tint border border-navy/15 rounded-full text-xs font-semibold tracking-wide text-navy">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="back-office" className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-navy">Service Offering / 01</span>
                <h2 className="mt-5 text-balance">Back-Office <em className="italic text-navy font-normal">Outsourcing</em></h2>
                <p className="mt-6 text-text leading-relaxed text-lg max-w-prose">
                  Comprehensive, day-to-day financial operations support designed for non-profit organizations.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-white border border-rule rounded-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-ink">Available for new engagements</span>
                </div>
              </div>
            </Reveal>
            <div className="bg-white border border-rule rounded-sm overflow-hidden">
              {BACK_OFFICE.map((item, i) => (
                <Reveal key={item} delay={i * 40}>
                  <div className={`flex items-baseline gap-5 px-6 py-5 transition-colors hover:bg-paper-warm group ${i < BACK_OFFICE.length - 1 ? 'border-b border-rule' : ''}`}>
                    <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-slate flex-shrink-0 w-8 group-hover:text-navy transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-lg text-ink leading-snug">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cfo-advisory" className="section">
        <div className="shell">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-navy">Strategic Leadership / 02</span>
                <h2 className="mt-5 text-balance">CFO Advisory <em className="italic text-navy font-normal">Services</em></h2>
                <p className="mt-6 text-text leading-relaxed text-lg max-w-prose">
                  Strategic financial guidance and executive-level reporting without the full-time CFO cost.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-white border border-rule rounded-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-ink">Available for new engagements</span>
                </div>
              </div>
            </Reveal>
            <div className="bg-white border border-rule rounded-sm overflow-hidden">
              {CFO_ADVISORY.map((item, i) => (
                <Reveal key={item} delay={i * 40}>
                  <div className={`flex items-baseline gap-5 px-6 py-5 transition-colors hover:bg-paper-warm group ${i < CFO_ADVISORY.length - 1 ? 'border-b border-rule' : ''}`}>
                    <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-slate flex-shrink-0 w-8 group-hover:text-navy transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-lg text-ink leading-snug">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <Reveal>
            <div className="section-header section-header-center">
              <span className="eyebrow justify-center">Why Absonn</span>
              <h2 className="mt-5">Why Organizations <em className="italic text-navy font-normal">Choose Absonn</em></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((w, i) => (
              <Reveal key={w.t} delay={i * 100}>
                <div className="bg-white border border-rule rounded-sm p-8 h-full transition-all duration-300 hover:border-navy hover:-translate-y-1 hover:shadow-card group">
                  <div className="w-12 h-12 rounded-sm bg-navy-tint flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors">{w.icon}</div>
                  <h3 className="font-serif text-2xl font-normal text-ink leading-tight">{w.t}</h3>
                  <p className="mt-4 text-text leading-relaxed">{w.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Ready to Elevate" headline="Ready to Elevate Your Financial Operations?" body="Let's discuss how Absonn can support your mission with world-class back-office services." primaryLabel="Schedule a Consultation" />
    </>
  )
}

const BACK_OFFICE = [
  'Bookkeeping & General Ledger Management',
  'Accounts Payable & Receivable',
  'Month-End Close & Financial Reporting',
  'Restricted Fund Tracking',
  'Audit Preparation & Auditor Coordination',
  'Payroll Coordination & Vendor Management',
  'Internal Controls & Policy Documentation',
  'Grant and Donor Financial Reporting',
  'Finance and Operations Technology Optimization',
]

const CFO_ADVISORY = [
  'Budgeting & Multi-Year Financial Planning',
  'Cash Runway & Liquidity Management',
  'Board and Leadership Financial Reporting',
  'KPI Dashboards & Executive Analytics',
  'Interim / Fractional CFO Support',
  'Grant Strategy and Funding Readiness',
  'Financial Governance & Sustainability Planning',
]

const WHY_CHOOSE = [
  { t: 'Proven Expertise', b: 'Deep experience in non-profit finance, grant compliance, and regulatory requirements.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87L8.91 8.26 12 2z" /></svg> },
  { t: 'Scalable Solutions', b: 'From startup non-profits to established institutions, we grow with you.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg> },
  { t: 'Institutional Quality', b: 'Fortune 500 standards applied to mission-driven organizations.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
]
