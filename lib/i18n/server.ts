import { cookies } from 'next/headers'

export const locales = ['en', 'he'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')?.value
  
  if (localeCookie && locales.includes(localeCookie as Locale)) {
    return localeCookie as Locale
  }
  
  return defaultLocale
}

