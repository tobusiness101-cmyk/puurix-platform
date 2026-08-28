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

  // Dienst-specifieke landingspagina's (GEÜPDATET: medische-schoonmaak)
  const dienstPaginas = [
    'kantoorschoonmaak',
    'opleveringsschoonmaak',
    'short-stay',
    'medische-schoonmaak',
  ]

  // 1. Algemene regio-pagina's (/schoonmaakbedrijf/[regio])
  const regioUrls = regios.map((regio) => ({
    url: `${baseUrl}/schoonmaakbedrijf/${regio}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 2. Basis diensten-pagina's (/[dienst])
  const dienstUrls = dienstPaginas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // 3. Combinatie van dienst + regio (bijv. /medische-schoonmaak/breda)
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
      priority: 1,
    },
    ...dienstUrls,
    ...regioUrls,
    ...dienstRegioUrls,
  ]
}