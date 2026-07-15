'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode
  locale: string
  messages: Record<string, unknown>
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
