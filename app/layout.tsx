import type { Metadata } from 'next'
import { Inter, Heebo } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getLocale } from '@/lib/i18n/server'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Avi Koenig - Senior Backend-Oriented Full-Stack Developer',
  description: 'Senior backend-oriented full-stack developer specializing in understanding, stabilizing, and safely evolving existing production systems under real-world constraints.',
  icons: {
    icon: '/assets/site.ico',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = (await import(`@/messages/${locale}.json`)).default

  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${inter.variable} ${heebo.variable} font-sans`}>
        <Providers locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

