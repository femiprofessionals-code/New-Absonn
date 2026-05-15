'use client'

type Props = {
  items: string[]
  speed?: number
}

export default function Marquee({ items, speed = 50 }: Props) {
  const duplicated = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-8" aria-hidden="true">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {duplicated.map((item, i) => (
          <span key={i} className="flex items-center gap-12 font-serif text-2xl text-ink/85 font-normal flex-shrink-0">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-navy/30" />
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-warm to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-warm to-transparent pointer-events-none" />
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
