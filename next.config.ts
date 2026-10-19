import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

// Vercel's preview toolbar (vercel.live) is only injected on preview deployments.
const isPreview = process.env.VERCEL_ENV === 'preview'
const vercelLive = isPreview ? ' https://vercel.live' : ''

// Everything is same-origin. 'unsafe-inline' scripts are required because pages
// are statically prerendered (no per-request nonce) and Next/next-themes inline
// their bootstrap scripts.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${vercelLive}`,
  `style-src 'self' 'unsafe-inline'${vercelLive}`,
  `img-src 'self' data: blob:${vercelLive}`,
  `font-src 'self'${vercelLive}`,
  `connect-src 'self'${vercelLive}`,
  // Résumé page embeds /resume.pdf in an iframe.
  `frame-src 'self'${vercelLive}`,
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const baseHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: '/:path*', headers: baseHeaders },
      // CSP for HTML routes only; the PDF is left to the browser's viewer.
      {
        source: '/((?!resume\\.pdf|api/).*)',
        headers: [{ key: 'Content-Security-Policy', value: contentSecurityPolicy }],
      },
    ]
  },
  async rewrites() {
    return {
      // beforeFiles so this wins even if a static /public/resume.pdf ever reappears.
      beforeFiles: [{ source: '/resume.pdf', destination: '/api/resume' }],
      afterFiles: [],
      fallback: [],
    }
  },
}

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

export default withNextIntl(nextConfig)
