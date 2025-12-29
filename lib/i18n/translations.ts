import { getLocale } from './server'
import enMessages from '@/messages/en.json'
import heMessages from '@/messages/he.json'

const messages = {
  en: enMessages,
  he: heMessages,
}

export async function getTranslations(namespace?: string) {
  const locale = await getLocale()
  const localeMessages = messages[locale] as any

  if (!namespace) {
    return (key: string) => {
      const keys = key.split('.')
      let value: any = localeMessages
      for (const k of keys) {
        value = value?.[k]
      }
      return value || key
    }
  }

  const namespaceMessages = localeMessages[namespace] || {}

  return (key: string) => {
    const keys = key.split('.')
    let value: any = namespaceMessages
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }
}

