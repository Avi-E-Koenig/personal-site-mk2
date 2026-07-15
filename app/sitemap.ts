import type { MetadataRoute } from 'next'
import { baseUrl } from '@/lib/seo'

const paths = ['', '/case-studies', '/mindset', '/resume', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    alternates: {
      languages: {
        en: `${baseUrl}${path}`,
        he: `${baseUrl}/he${path}`,
      },
    },
  }))
}
