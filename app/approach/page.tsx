import CTABand from '@/components/CTABand'
import Reveal from '@/components/Reveal'
import HeroBlob from '@/components/HeroBlob'

export default function ApproachPage() {
  return (
    <>
      <section className="pt-24 sm:pt-32 lg:pt-44 pb-12 sm:pb-16 relative overflow-hidden">
        <HeroBlob />
        <div className="shell relative">
          <div className="max-w-4xl">
            <Reveal><span className="eyebrow">Our Methodology</span></Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance">
                Institutional Quality, <em className="italic text-navy font-normal">Delivered With Mission in Mind</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede mt-7 max-w-2xl">
                Our approach combines Fortune 500-caliber operations with deep non-profit fluency and understanding.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">The Process</span>
              <h2 className="mt-5">Our <em className="italic text-navy font-normal">5-Step Process</em></h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-rule-strong" aria-hidden />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
              {STEPS.map((s, i) => (
                <Reveal key={s.t} delay={i * 100}>
                  <div className="lg:pr-6 group">
                    <div className="w-12 h-12 bg-navy text-white rounded-sm flex items-center justify-center font-serif text-xl mb-5 relative z-10 group-hover:bg-navy-deep transition-colors">{i + 1}</div>
                    <h3 className="font-serif text-xl font-normal text-ink leading-tight">{s.t}</h3>
                    <p className="mt-3 text-sm text-text leading-relaxed">{s.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-header section-header-center">
              <span className="eyebrow justify-center">Our Standards</span>
              <h2 className="mt-5">Guiding <em className="italic text-navy font-normal">Principles</em></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="bg-white border border-rule rounded-sm p-7 h-full transition-all duration-300 hover:border-navy hover:-translate-y-1 hover:shadow-card group">
                  <div className="w-10 h-10 rounded-sm bg-navy-tint flex items-center justify-center text-navy mb-5 group-hover:bg-navy group-hover:text-white transition-colors">{p.icon}</div>
                  <h4 className="font-serif text-xl font-normal text-ink leading-tight">{p.t}</h4>
                  <p className="mt-3 text-sm text-text leading-relaxed">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Why It Works</span>
              <h2 className="mt-5">What <em className="italic text-navy font-normal">Sets Us Apart</em></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {APART.map((a, i) => (
              <Reveal key={a.t} delay={i * 100}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <span className="font-serif font-light text-navy block" style={{ fontSize: '2.5rem', lineHeight: '1' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-normal text-ink leading-tight">{a.t}</h4>
                    <p className="mt-3 text-text leading-relaxed">{a.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Ready to Get Started?" headline="Experience the Absonn approach." body="Schedule a consultation to discuss your needs." primaryLabel="Schedule Consultation" />
    </>
  )
}

const STEPS = [
  { t: 'Discovery & Assessment', b: 'Understanding your current state, pain points, and goals through comprehensive analysis.' },
  { t: 'Tailored Service Design', b: 'Custom packages based on your size, complexity, and growth stage. No cookie-cutter solutions.' },
  { t: 'Seamless Onboarding', b: 'Clean handoffs with minimal disruption to your daily operations and team workflows.' },
  { t: 'Ongoing Delivery', b: 'Monthly execution with continuous improvement and proactive process optimization.' },
  { t: 'Strategic Partnership', b: 'Regular check-ins, responsive support, and collaborative growth planning.' },
]

const PRINCIPLES = [
  { t: 'Quality First', b: 'Every deliverable reviewed by senior team members before reaching you.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87L8.91 8.26 12 2z" /></svg> },
  { t: 'Mission Aligned', b: 'We succeed when your organization achieves greater impact.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg> },
  { t: 'Transparency', b: 'No black boxes. You always understand what we are doing and why.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> },
  { t: 'Continuous Improvement', b: 'Proactive optimization and staying ahead of regulatory changes.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16M3 21v-5h5" /></svg> },
  { t: 'Responsive Partnership', b: 'Quick turnarounds on questions and collaborative problem-solving.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
  { t: 'Institutional Standards', b: 'Fortune 500 rigor applied to mission-driven organizations.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
]

const APART = [
  { t: 'Experienced Team', b: 'Former Big Four auditors, Fortune 500 finance leaders, and non-profit CFOs bringing decades of combined expertise.' },
  { t: 'Proven Frameworks', b: 'Battle-tested methodologies refined across hundreds of non-profit engagements and institutional clients.' },
  { t: 'Technology Enabled', b: 'Modern cloud-based systems with real-time reporting and secure document management.' },
  { t: 'Risk Management', b: 'Comprehensive internal controls and audit-ready documentation to protect your organization.' },
]
