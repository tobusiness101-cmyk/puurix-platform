import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.puurixschoonmaak.nl'

  // De complete lijst met al jouw lokale steden
  const regios = [
    'oosterhout',
    'breda',
    'tilburg',
    'etten-leur',
    'teteringen',
    'waalwijk',
    'kaatsheuvel',
    'amersfoort'
  ]

  const regioUrls = regios.map((regio) => ({
    url: `${baseUrl}/schoonmaakbedrijf/${regio}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...regioUrls,
  ]
}