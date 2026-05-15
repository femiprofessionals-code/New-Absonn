import Link from 'next/link'
import CTABand from '@/components/CTABand'
import Reveal from '@/components/Reveal'
import HeroBlob from '@/components/HeroBlob'

export default function InsightsPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-16 relative overflow-hidden">
        <HeroBlob />
        <div className="shell relative">
          <div className="max-w-4xl">
            <Reveal><span className="eyebrow">Insights</span></Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance">Practitioner Perspectives <em className="italic text-navy font-normal">on the Work</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede mt-7 max-w-2xl">
                Long-form notes on the questions that come up across engagements. Closing the books. Surviving an audit. Pricing a federal grant. Building a reserve policy. New content publishing soon.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8">
                <Link href="/schedule" className="btn-link">Have a topic you'd like covered?<Arrow /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm border-y border-rule">
        <div className="shell">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Editorial Queue</span>
              <h2 className="mt-5 text-balance">The questions we hear most, <em className="italic text-navy font-normal">answered in depth.</em></h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-6">
            {QUEUE.map((q, i) => (
              <Reveal key={q.title} delay={i * 80}>
                <article className="bg-white border border-rule rounded-sm p-8 flex flex-col h-full transition-all duration-300 hover:border-navy hover:-translate-y-1 hover:shadow-card group">
                  <div className="flex justify-between text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-slate pb-5 border-b border-rule mb-6">
                    <span className="text-navy">{q.category}</span>
                    <span>{q.eta}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-ink leading-tight">{q.title}</h3>
                  <p className="mt-4 text-text leading-relaxed flex-1">{q.body}</p>
                  <p className="mt-6 text-[0.8125rem] text-slate">{q.readTime}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Until We Publish" headline="The conversation is the best place to start." body="A free 30-minute consultation answers more than any field note can. We tailor every recommendation to the specifics of your organization." />
    </>
  )
}

const QUEUE = [
  { category: 'Audit Readiness', eta: 'Q2 2026', readTime: 'Estimated 8 min read', title: 'The thirteen-month close that ends the February scramble.', body: 'Why most non-profits experience audit as a crisis and how a slightly earlier close changes the entire dynamic with the auditor.' },
  { category: 'Federal Grants', eta: 'Q2 2026', readTime: 'Estimated 12 min read', title: 'Indirect cost rates: when most non-profits leave money on the table.', body: 'The 10% de minimis rate, when to negotiate a NICRA, and why small non-profits routinely underprice federal awards.' },
  { category: 'Governance', eta: 'Q3 2026', readTime: 'Estimated 6 min read', title: 'How to write a reserve policy your board will actually adopt.', body: 'Three months operating, six months, twelve months. The actual math and the language behind a defensible reserve target.' },
  { category: 'Reporting', eta: 'Q3 2026', readTime: 'Estimated 10 min read', title: 'Functional expense allocation without losing sleep.', body: 'Time studies, square footage, FTE-based methods. Which methodology survives audit and which ones quietly fail.' },
]

function Arrow() { return <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg> }
