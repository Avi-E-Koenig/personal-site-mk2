import type { Config } from 'tailwindcss'

/**
 * Colors are driven by CSS custom properties (RGB triplets) defined in
 * globals.css, so every semantic token has a light AND a dark value and
 * flips automatically when the `.dark` class is set on <html>.
 * The `accent` ramp is intentionally static (works on both themes).
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          paper: 'rgb(var(--bg-paper) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
          inverse: 'rgb(var(--text-inverse) / <alpha-value>)',
        },
        border: {
          default: 'rgb(var(--border-default) / <alpha-value>)',
          subtle: 'rgb(var(--border-subtle) / <alpha-value>)',
          accent: 'rgb(var(--border-accent) / <alpha-value>)',
        },
        accent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        hebrew: ['var(--font-heebo)', 'Assistant', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        h1: ['1.875rem', { lineHeight: '1.15', fontWeight: '700' }], // 30px mobile
        'h1-md': ['2.75rem', { lineHeight: '1.1', fontWeight: '700' }], // 44px desktop
        h2: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px mobile
        'h2-md': ['2rem', { lineHeight: '1.3', fontWeight: '600' }], // 32px desktop
        h3: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px mobile
        'h3-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px desktop
        h4: ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }], // 18px mobile
        'h4-md': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }], // 20px desktop
      },
      maxWidth: {
        content: '48rem', // reading width
        wide: '64rem',
      },
      spacing: {
        'section-tight': '3rem',
        'section-normal': '5rem',
        'section-loose': '8rem',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 12px -2px rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
