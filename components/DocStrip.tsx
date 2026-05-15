export default function DocStrip() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-navy-deep text-white/65 text-[11px] tracking-[0.12em] uppercase font-medium py-2">
      <div className="shell flex justify-between gap-8 items-center">
        <span>Absonn Advisory — Non-Profit Finance Operations</span>
        <div className="flex gap-6 items-center">
          <span className="hidden sm:block">Washington, D.C. · Eastern Time</span>
          <a href="mailto:engagements@absonn.com" className="text-white hover:text-white/80 transition-colors">
            engagements@absonn.com
          </a>
        </div>
      </div>
    </div>
  )
}
