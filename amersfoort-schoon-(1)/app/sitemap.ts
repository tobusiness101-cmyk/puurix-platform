import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://puurix.nl'
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

  // Dienst-specifieke landingpagina's
  const dienstPaginas = [
    'kantoorschoonmaak',
    'opleveringsschoonmaak',
    'short-stay',
    'tandartspraktijk-schoonmaak',
  ]

  const dienstUrls = dienstPaginas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
// Voeg dit toe in je sitemap.ts net voor de return statement:
  const kantoorRegioUrls = regios.map((regio) => ({
    url: `${baseUrl}/kantoorschoonmaak/${regio}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...regioUrls,
    ...dienstUrls,
  ]
}