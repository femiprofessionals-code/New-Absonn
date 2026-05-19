import CTABand from '@/components/CTABand'
import AnimatedCounter from '@/components/AnimatedCounter'
import Reveal from '@/components/Reveal'

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 sm:pt-32 lg:pt-44 pb-12 sm:pb-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-[-10%] w-[60%] h-full opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, #E8EDF3 0%, transparent 60%)' }}
        />
        <div className="shell relative">
          <Reveal>
            <div className="max-w-4xl">
              <span className="eyebrow">About Absonn</span>
              <h1 className="mt-6 text-balance">
                Where institutional excellence meets <em className="italic text-navy font-normal">mission-driven purpose.</em>
              </h1>
              <p className="lede mt-7 max-w-2xl">
                Absonn was founded on a simple belief: non-profit organizations deserve the same caliber of financial operations as the world&apos;s leading institutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-rule py-16">
        <div className="shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t-2 border-ink">
            {[
              { num: 150, suffix: '+', label: 'Organizations Served' },
              { num: 15, suffix: '+', label: 'Years Experience' },
              { num: 500, prefix: '$', suffix: 'M+', label: 'Assets Managed' },
              { num: 100, suffix: '%', label: 'Client Satisfaction' },
            ].map((s, i, arr) => (
              <Reveal key={i} delay={i * 80} className={`py-10 px-4 lg:px-6 first:pl-0 ${i < arr.length - 1 ? 'lg:border-r border-rule' : ''} ${i % 2 === 0 ? 'border-r lg:border-r' : ''} ${i < 2 ? 'border-b lg:border-b-0' : ''} border-rule`}>
                <p className="font-serif font-light text-navy" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '0.95', letterSpacing: '-0.025em' }}>
                  <AnimatedCounter end={s.num} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-sm text-text leading-snug">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <span className="eyebrow">Why Absonn Exists</span>
              <h2 className="mt-5 text-balance">Bridging the gap between mission and <em className="italic text-navy font-normal">institutional rigor.</em></h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-5 text-text leading-[1.75] max-w-prose">
                <p>Too many exceptional non-profits struggle with financial operations. Not due to lack of commitment, but because back-office functions are expensive, complex, and do not scale easily.</p>
                <p>Meanwhile, expectations have never been higher. Boards want sophisticated analytics. Funders demand audit-ready reports. Regulators require meticulous compliance.</p>
                <p>Absonn bridges that gap. We bring Fortune 500-caliber capabilities to organizations changing the world, at a scale that makes sense for non-profits.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Our Core Values</span>
              <h2 className="mt-5 text-balance">Four principles that guide <em className="italic text-navy font-normal">every engagement.</em></h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Institutional Rigor', b: 'We hold ourselves to the highest standards because your stakeholders deserve nothing less.' },
              { t: 'Mission Alignment', b: 'We believe financial operations should enable your work, not distract from it.' },
              { t: 'Transparent Partnership', b: 'No black boxes. You will always understand what we are doing and why.' },
              { t: 'Continuous Improvement', b: 'We stay ahead of regulatory changes, technology shifts, and best practices.' },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="bg-white border border-rule rounded-sm p-7 h-full hover:-translate-y-1 hover:shadow-lift hover:border-navy transition-all">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-navy">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-serif text-xl font-normal text-ink leading-tight">{v.t}</h3>
                  <p className="mt-3 text-sm text-text leading-relaxed">{v.b}</p>
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
              <span className="eyebrow">Our Approach</span>
              <h2 className="mt-5 text-balance">We combine institutional expertise with <em className="italic text-navy font-normal">deep understanding</em> of the non-profit sector.</h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { t: 'Experienced Team', b: 'Former Big Four auditors, Fortune 500 finance leaders, and non-profit CFOs.' },
              { t: 'Proven Methods', b: 'Battle-tested frameworks refined across hundreds of non-profit engagements.' },
              { t: 'Quality Focus', b: 'Every deliverable reviewed by senior team members before it reaches you.' },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <div className="border-t-2 border-ink pt-6 h-full">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-slate">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl font-normal text-ink leading-tight">{p.t}</h3>
                  <p className="mt-4 text-text leading-relaxed">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Let's Build Something Together"
        headline="We'd love to learn about your organization."
        body="Whether you need back-office support or strategic CFO guidance, we'd love to learn about your organization. A free 30-minute consultation, no obligation."
        primaryLabel="Schedule a Consultation"
      />
    </>
  )
}
