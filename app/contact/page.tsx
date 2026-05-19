'use client'

import Link from 'next/link'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import HeroBlob from '@/components/HeroBlob'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please email info@absonn.com directly.')
    }
  }

  return (
    <>
      <section className="pt-24 sm:pt-32 lg:pt-44 pb-12 sm:pb-16 relative overflow-hidden">
        <HeroBlob />
        <div className="shell relative">
          <div className="max-w-4xl">
            <Reveal><span className="eyebrow">Contact Us</span></Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance">Let's Start a <em className="italic text-navy font-normal">Conversation</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede mt-7 max-w-2xl">Have questions or ready to explore support options? We are here to help.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-rule">
        <div className="shell">
          <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-display-md mb-2">Send Us a Message</h2>
                <p className="text-text mb-8">We'll respond within one business day.</p>
                {status === 'success' ? (
                  <div className="border-t-2 border-navy pt-8">
                    <span className="eyebrow">Message Received</span>
                    <h3 className="mt-4 font-serif text-3xl text-ink">Thank you. <em className="italic text-navy font-normal">We will be in touch.</em></h3>
                    <p className="mt-5 text-text leading-relaxed">
                      Your message was delivered to <span className="text-ink font-medium">info@absonn.com</span>.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href="/schedule" className="btn-primary">Book a consultation<Arrow /></Link>
                      <Link href="/" className="btn-secondary">Back to home</Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="field-label">Name *</label>
                        <input id="name" type="text" required className="field-input" placeholder="Full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="email" className="field-label">Email *</label>
                        <input id="email" type="email" required className="field-input" placeholder="you@organization.org" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="organization" className="field-label">Organization</label>
                      <input id="organization" type="text" className="field-input" placeholder="Non-profit, foundation, or institution name" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="message" className="field-label">Message *</label>
                      <textarea id="message" required rows={6} className="field-textarea" placeholder="Tell us about your organization and how we can help." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    {status === 'error' && (
                      <div className="border-l-2 border-red-700 bg-red-50 p-4 text-sm text-red-800 rounded-sm">{errorMsg}</div>
                    )}
                    <div className="pt-2">
                      <button type="submit" disabled={status === 'loading'} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                        <Arrow />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            <aside>
              <Reveal delay={120}>
                <h2 className="text-display-md mb-8">Other Ways to Connect</h2>
              </Reveal>
              <Reveal delay={180}>
                <div className="bg-paper-warm border border-rule rounded-sm p-7 mb-6">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-navy">Prefer to Schedule?</p>
                  <p className="mt-3 font-serif text-xl text-ink leading-snug">Book a 30-minute consultation to discuss your needs.</p>
                  <Link href="/schedule" className="mt-5 btn-primary w-full justify-between">Schedule Consultation<Arrow /></Link>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="bg-paper-warm border border-rule rounded-sm p-7 mb-6">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-navy mb-4">Email Us Directly</p>
                  <ul className="space-y-4">
                    {[
                      ['General', 'info@absonn.com'],
                      ['New Engagements', 'engagements@absonn.com'],
                      ['Leadership', 'leadership@absonn.com'],
                    ].map(([label, email]) => (
                      <li key={label} className="border-b border-rule last:border-b-0 pb-3 last:pb-0">
                        <p className="text-xs text-slate uppercase tracking-wide mb-1">{label}</p>
                        <a href={`mailto:${email}`} className="font-serif text-base text-ink hover:text-navy transition-colors">{email}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="bg-paper-warm border border-rule rounded-sm p-7">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-navy">Serving Organizations Worldwide</p>
                  <p className="mt-3 text-sm text-text leading-relaxed">We work with non-profit organizations across the globe, with particular strength in U.S. tax-exempt entities.</p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

function Arrow() { return <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg> }
