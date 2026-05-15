import Link from 'next/link'
import { Logomark } from './Navigation'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-deep text-white/70 pt-20 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="shell">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-white">
              <Logomark strokeColor="white" />
              <span className="font-serif text-2xl font-medium leading-none">Absonn</span>
            </Link>
            <p className="mt-6 text-[0.9375rem] text-white/65 leading-relaxed max-w-sm">
              Institutional-grade finance operations for non-profit organizations, private foundations, and educational institutions.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-2.5 text-sm">
              <a href="mailto:engagements@absonn.com" className="text-white/85 hover:text-white transition-colors">
                engagements@absonn.com
              </a>
              <span className="text-white/85">Washington, D.C. — Eastern Time</span>
              <Link href="/schedule" className="text-white/85 hover:text-white transition-colors">
                Schedule a consultation
              </Link>
            </div>
          </div>

          <FooterCol
            title="Services"
            items={[
              ['Monthly Bookkeeping', '/services'],
              ['Fractional CFO', '/services'],
              ['Audit Support', '/services'],
              ['Grant Reporting', '/services'],
            ]}
          />
          <FooterCol
            title="Practice"
            items={[
              ['Our Approach', '/approach'],
              ['Non-Profit Focus', '/nonprofit-focus'],
              ['About', '/about'],
              ['Insights', '/insights'],
            ]}
          />
          <FooterCol
            title="Contact"
            items={[
              ['Schedule a Call', '/schedule'],
              ['Send a Message', '/contact'],
              ['LinkedIn', 'https://linkedin.com'],
            ]}
          />
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:justify-between gap-3 text-[0.8125rem] text-white/50">
          <span>© {year} Absonn Advisory LLC. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="text-white text-[0.6875rem] font-semibold tracking-[0.14em] uppercase mb-5">{title}</h4>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-[0.9375rem] text-white/70 hover:text-white transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
