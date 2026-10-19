import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
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
