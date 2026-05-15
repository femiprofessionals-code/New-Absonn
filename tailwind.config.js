/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Navy — primary brand
        navy: '#0E2A47',
        'navy-deep': '#061629',
        'navy-soft': '#1B3A5D',
        'navy-tint': '#E8EDF3',
        // Ink — text
        ink: '#0A0E14',
        text: '#2A3340',
        'text-soft': '#4B5563',
        slate: '#6B7280',
        'slate-light': '#9CA3AF',
        // Backgrounds — warm neutral
        paper: '#FFFFFF',
        'paper-warm': '#FCFBF9',
        'paper-soft': '#F7F6F3',
        'paper-tint': '#F0EEEA',
        // Borders
        rule: '#E7E4DE',
        'rule-soft': '#F1EFEB',
        'rule-strong': '#C9C4BA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2rem, 3.5vw, 2.875rem)', { lineHeight: '1.12', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.012em' }],
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        lede: ['clamp(1.125rem, 1.3vw, 1.25rem)', { lineHeight: '1.6' }],
      },
      maxWidth: {
        shell: '80rem',
        narrow: '64rem',
      },
      boxShadow: {
        card: '0 1px 0 rgba(14, 42, 71, 0.04), 0 8px 32px -12px rgba(14, 42, 71, 0.08), 0 24px 64px -24px rgba(14, 42, 71, 0.12)',
        soft: '0 4px 16px -4px rgba(14, 42, 71, 0.1)',
        lift: '0 12px 32px -16px rgba(14, 42, 71, 0.15)',
      },
    },
  },
  plugins: [],
}
