import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FAFAFA',
          secondary: '#F5F5F5',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          muted: '#6B6B6B',
          inverse: '#FFFFFF',
        },
        border: {
          default: '#E5E5E5',
          subtle: '#F0F0F0',
          accent: '#D1D5DB',
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
        h1: ['1.875rem', { lineHeight: '1.2', fontWeight: '600' }], // 30px mobile
        'h1-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 40px desktop
        h2: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px mobile
        'h2-md': ['2rem', { lineHeight: '1.3', fontWeight: '600' }], // 32px desktop
        h3: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px mobile
        'h3-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px desktop
        h4: ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }], // 18px mobile
        'h4-md': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }], // 20px desktop
      },
      maxWidth: {
        content: '48rem', // max-w-3xl
        wide: '64rem', // max-w-4xl
      },
      spacing: {
        'section-tight': '3rem',
        'section-normal': '5rem',
        'section-loose': '8rem',
      },
    },
  },
  plugins: [],
}
export default config

