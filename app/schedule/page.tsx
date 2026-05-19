'use client'

import { useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

const ORG_TYPES = [
  '501(c)(3) Non-Profit',
  'Foundation',
  'Educational Institution',
  'Other',
]

const BUDGETS = ['Under $500K', '$500K - $2M', '$2M - $5M', '$5M+']

const EMPLOYEE_COUNTS = ['1 – 5', '6 – 25', '26 – 100', '101 – 500', '500+']

const FINANCE_TEAMS = [
  'No internal finance staff',
  'Part-time bookkeeper',
  'Full-time bookkeeper',
  'Finance manager / controller',
  'Full finance team with CFO',
]

const SYSTEMS = [
  'QuickBooks Online',
  'QuickBooks Desktop',
  'Sage Intacct',
  'NetSuite',
  'Blackbaud Financial Edge',
  'Other',
  'Spreadsheets only',
  'Not sure',
]

const SERVICES = [
  { id: 'bookkeeping', label: 'Bookkeeping' },
  { id: 'cfo', label: 'CFO Advisory' },
  { id: 'audit', label: 'Audit Support' },
  { id: 'grants', label: 'Grant Reporting' },
  { id: 'unsure', label: 'Not sure' },
]

const DRIVERS = [
  'Upcoming audit',
  'Board pressure for cleaner reporting',
  'New funder requirements',
  'Staff transition (CFO/Controller departure)',
  'Growth requiring more discipline',
  'Compliance concerns',
  'Strategic finance planning',
  'Other',
]

const TIMELINES = ['Immediately', '1-2 months', '3-6 months', 'Exploratory']

export default function SchedulePage() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [data, setData] = useState({
    organization_name: '',
    contact_name: '',
    contact_title: '',
    email: '',
    phone: '',
    org_type: '',
    annual_budget: '',
    employee_count: '',
    current_finance_team: '',
    current_systems: '',
    services_interested: [] as string[],
    biggest_challenges: '',
    primary_driver: '',
    ideal_timeline: '',
    preferred_contact_time: '',
    additional_notes: '',
  })

  const update = (k: string, v: unknown) => setData((d) => ({ ...d, [k]: v }))
  const toggleService = (id: string) =>
    setData((d) => ({
      ...d,
      services_interested: d.services_interested.includes(id)
        ? d.services_interested.filter((x) => x !== id)
        : [...d.services_interested, id],
    }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j?.error || 'Submission failed')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please email engagements@absonn.com.')
    }
  }

  const canNext1 = data.organization_name && data.contact_name && data.contact_title && data.email && data.org_type
  const canNext2 = data.annual_budget && data.current_finance_team
  const canSubmit =
    data.services_interested.length > 0 && data.biggest_challenges && data.primary_driver && data.ideal_timeline

  return (
    <>
      <section className="pt-24 sm:pt-32 lg:pt-44 pb-10 sm:pb-12 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-[-10%] w-[60%] h-full opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, #E8EDF3 0%, transparent 60%)' }}
        />
        <div className="shell relative">
          <Reveal>
            <div className="max-w-4xl">
              <span className="eyebrow">Schedule Consultation</span>
              <h1 className="mt-6 text-balance">
                Schedule your <em className="italic text-navy font-normal">free consultation.</em>
              </h1>
              <p className="lede mt-7 max-w-2xl">
                Let's discuss your needs and how Absonn can help. A 30-minute strategic call with no obligation, tailored insights, and immediate value.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight border-t border-rule">
        <div className="shell">
          {status === 'success' ? (
            <Reveal>
              <div className="max-w-3xl mx-auto text-center py-12">
                <span className="eyebrow justify-center">Intake Received</span>
                <h2 className="mt-5 text-balance">
                  Thank you. <em className="italic text-navy font-normal">We will be in touch within one business day.</em>
                </h2>
                <p className="lede mt-6 mx-auto">
                  A senior practitioner will review your intake and reach out to schedule the 30-minute call. We will come prepared with the right questions.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <Link href="/" className="btn-primary">Back to home</Link>
                  <Link href="/insights" className="btn-secondary">Read insights</Link>
                </div>
              </div>
            </Reveal>
          ) : (
            <div className="grid lg:grid-cols-[3fr_9fr] gap-8 sm:gap-10 lg:gap-16">
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-slate">Progress</p>
                <ol className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                  {['Organization Basics', 'Organization Profile', 'Services & Challenges'].map((s, i) => {
                    const n = i + 1
                    const active = step === n
                    const done = step > n
                    return (
                      <li key={s} className="flex gap-4 items-start">
                        <span
                          className={`w-8 h-8 rounded-sm border flex items-center justify-center text-xs font-semibold flex-shrink-0 transition-colors ${
                            done
                              ? 'bg-navy border-navy text-white'
                              : active
                                ? 'bg-white border-navy text-navy'
                                : 'bg-white border-rule text-slate'
                          }`}
                        >
                          {done ? <Check /> : n}
                        </span>
                        <div className="pt-1">
                          <p className={`text-sm font-medium ${active ? 'text-ink' : done ? 'text-navy' : 'text-slate'}`}>
                            {s}
                          </p>
                          {done && <p className="text-[0.6875rem] tracking-[0.12em] uppercase text-navy mt-1">Complete</p>}
                          {active && <p className="text-[0.6875rem] tracking-[0.12em] uppercase text-slate mt-1">In progress</p>}
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </aside>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <FormSection num="01" eyebrow="Organization Basics" title="Tell us about your organization.">
                    <Field label="Organization Name *">
                      <input type="text" required className="field-input" placeholder="Your nonprofit, foundation, or institution" value={data.organization_name} onChange={(e) => update('organization_name', e.target.value)} />
                    </Field>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Field label="Your Name *">
                        <input type="text" required className="field-input" placeholder="Full name" value={data.contact_name} onChange={(e) => update('contact_name', e.target.value)} />
                      </Field>
                      <Field label="Your Title *">
                        <input type="text" required className="field-input" placeholder="e.g. Executive Director" value={data.contact_title} onChange={(e) => update('contact_title', e.target.value)} />
                      </Field>
                      <Field label="Email *">
                        <input type="email" required className="field-input" placeholder="you@organization.org" value={data.email} onChange={(e) => update('email', e.target.value)} />
                      </Field>
                      <Field label="Phone">
                        <input type="tel" className="field-input" placeholder="Optional" value={data.phone} onChange={(e) => update('phone', e.target.value)} />
                      </Field>
                    </div>
                    <Field label="Organization Type *">
                      <Select value={data.org_type} onChange={(v) => update('org_type', v)} options={ORG_TYPES} placeholder="Select..." />
                    </Field>

                    <div className="pt-6 flex sm:justify-end">
                      <button type="button" onClick={() => setStep(2)} disabled={!canNext1} className="btn-primary w-full sm:w-auto justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                        Continue
                        <Arrow />
                      </button>
                    </div>
                  </FormSection>
                )}

                {step === 2 && (
                  <FormSection num="02" eyebrow="Organization Profile" title="Help us size the picture.">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Field label="Annual Budget *">
                        <Select value={data.annual_budget} onChange={(v) => update('annual_budget', v)} options={BUDGETS} placeholder="Select..." />
                      </Field>
                      <Field label="Employee Count">
                        <Select value={data.employee_count} onChange={(v) => update('employee_count', v)} options={EMPLOYEE_COUNTS} placeholder="Select..." />
                      </Field>
                      <Field label="Current Finance Team *">
                        <Select value={data.current_finance_team} onChange={(v) => update('current_finance_team', v)} options={FINANCE_TEAMS} placeholder="Select..." />
                      </Field>
                      <Field label="Accounting System">
                        <Select value={data.current_systems} onChange={(v) => update('current_systems', v)} options={SYSTEMS} placeholder="Select..." />
                      </Field>
                    </div>

                    <div className="pt-6 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-3">
                      <button type="button" onClick={() => setStep(1)} className="btn-secondary justify-center">
                        <ArrowBack /> Back
                      </button>
                      <button type="button" onClick={() => setStep(3)} disabled={!canNext2} className="btn-primary justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                        Continue
                        <Arrow />
                      </button>
                    </div>
                  </FormSection>
                )}

                {step === 3 && (
                  <FormSection num="03" eyebrow="Services & Challenges" title="What brings you here?">
                    <Field label="Services of Interest * (Select all)" sub="Which services interest you?">
                      <CheckGrid options={SERVICES} value={data.services_interested} onToggle={toggleService} />
                    </Field>

                    <Field label="Primary Driver *">
                      <Select value={data.primary_driver} onChange={(v) => update('primary_driver', v)} options={DRIVERS} placeholder="What's driving this?" />
                    </Field>

                    <Field label="Biggest Challenges *" sub="A few sentences. The audit, the board, the staffing, the systems.">
                      <textarea required rows={4} className="field-textarea" placeholder="Tell us what is hardest right now." value={data.biggest_challenges} onChange={(e) => update('biggest_challenges', e.target.value)} />
                    </Field>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Field label="Timeline *">
                        <Select value={data.ideal_timeline} onChange={(v) => update('ideal_timeline', v)} options={TIMELINES} placeholder="Select..." />
                      </Field>
                      <Field label="Best Time to Reach You">
                        <input type="text" className="field-input" placeholder="e.g. Weekday mornings, ET" value={data.preferred_contact_time} onChange={(e) => update('preferred_contact_time', e.target.value)} />
                      </Field>
                    </div>

                    <Field label="Additional Notes">
                      <textarea rows={3} className="field-textarea" placeholder="Optional context: funders, board dynamics, prior advisors, audit history." value={data.additional_notes} onChange={(e) => update('additional_notes', e.target.value)} />
                    </Field>

                    {status === 'error' && (
                      <div className="border-l-2 border-red-700 bg-red-50 p-4 text-sm text-red-800 rounded-sm">{errorMsg}</div>
                    )}

                    <div className="pt-6 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-3">
                      <button type="button" onClick={() => setStep(2)} className="btn-secondary justify-center">
                        <ArrowBack /> Back
                      </button>
                      <button type="submit" disabled={!canSubmit || status === 'loading'} className="btn-primary justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                        {status === 'loading' ? 'Submitting…' : 'Submit & Schedule'}
                        <Arrow />
                      </button>
                    </div>
                  </FormSection>
                )}
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function FormSection({ num, eyebrow, title, children }: { num: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t-2 border-ink pt-8 space-y-6">
      <div>
        <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-navy">
          Step {num} / {eyebrow}
        </p>
        <h2 className="mt-4">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function Field({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      {sub && <p className="text-xs text-slate mt-1 mb-3">{sub}</p>}
      <div>{children}</div>
    </div>
  )
}

function Select({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string }) {
  return (
    <select className="field-select" value={value} onChange={(e) => onChange(e.target.value)} required>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  )
}

function CheckGrid({ options, value, onToggle }: { options: { id: string; label: string }[]; value: string[]; onToggle: (id: string) => void }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map((o) => {
        const checked = value.includes(o.id)
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onToggle(o.id)}
            className={`text-left px-4 py-3 border rounded-sm transition-all ${
              checked
                ? 'border-navy bg-navy text-white'
                : 'border-rule-strong bg-white text-ink hover:border-navy'
            }`}
          >
            <span className="text-sm font-medium block leading-snug">{o.label}</span>
          </button>
        )
      })}
    </div>
  )
}

function Arrow() {
  return <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>
}

function ArrowBack() {
  return <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0 rotate-180"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>
}

function Check() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0"><path d="M5 12l5 5L20 7" /></svg>
}
