import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://puurixschoonmaak.nl'

  // Alle actieve steden/regio's
  const regios = [
    'oosterhout',
    'breda',
    'tilburg',
    'etten-leur',
    'teteringen',
    'waalwijk',
    'kaatsheuvel',
    'amersfoort',
  ]

  // Diensten landingspagina's (inclusief de paraplu medische-schoonmaak)
  const dienstPaginas = [
    'kantoorschoonmaak',
    'opleveringsschoonmaak',
    'short-stay',
    'medische-schoonmaak',
  ]

  // 1. Regio overzichtspagina's (/schoonmaakbedrijf/[regio])
  const regioUrls = regios.map((regio) => ({
    url: `${baseUrl}/schoonmaakbedrijf/${regio}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 2. Hoofdpagina's per dienst (/[dienst])
  const dienstUrls = dienstPaginas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // 3. Dynamische combinaties van dienst + regio (/[dienst]/[regio])
  const dienstRegioUrls = dienstPaginas.flatMap((dienst) =>
    regios.map((regio) => ({
      url: `${baseUrl}/${dienst}/${regio}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...dienstUrls,
    ...regioUrls,
    ...dienstRegioUrls,
  ]
}
