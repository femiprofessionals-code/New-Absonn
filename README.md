# Absonn Website

Next.js 15 + TypeScript + Tailwind + Supabase. Live content from absonn.com with motion enhancements.

## Setup

```bash
npm install
cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Home (animated counters, credential card, value props)
- `/services` — Back-Office + CFO Advisory, with sticky service intros
- `/about` — Why Absonn exists, core values, approach
- `/nonprofit-focus` — Specialization, 8-sector marquee
- `/approach` — 5-step process, guiding principles
- `/insights` — Editorial queue
- `/contact` — Form + email categories
- `/schedule` — 4-section consultation intake

## Dynamic Components

- `Reveal` — fade + slide-up on scroll (`<Reveal delay={120}>...`)
- `AnimatedCounter` — counts 0 → target on scroll (`<AnimatedCounter end={150} suffix="+" />`)
- `Marquee` — infinite horizontal scroll (`<Marquee items={...} speed={45} />`)
- `HeroBlob` — gradient blob with mouse parallax
- `useInView` — Intersection Observer hook in `lib/`

Vanilla CSS + Intersection Observer. No Framer Motion.

## Build

```bash
npm run build
npm start
```

## Notes

- Supabase tables: `contact_form_submissions` and `consultation_requests`
- The schedule form pads `current_finance_team` and `primary_driver` with "Not specified" to satisfy NOT NULL constraints while keeping the simpler form UI
- All copy ported from live absonn.com pages
