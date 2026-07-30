import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Aangepast naar de URL mét www.
    sitemap: 'https://www.puurixschoonmaak.nl/sitemap.xml',
  }
}
