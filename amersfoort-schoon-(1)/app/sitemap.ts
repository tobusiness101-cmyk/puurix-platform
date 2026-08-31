import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://puurix.nl'

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
    'alphen-chaam',
    'dongen',
    'drimmelen',
    'geertruidenberg',
    'gilze-en-rijen',
    'loon-op-zand',
    'barneveld',
    'ede',
    'nijkerk',
    'scherpenzeel',
    'leusden',
    'renswoude',
    'veenendaal',
    'woudenberg',
  ]

  // Diensten landingspagina's
  const dienstPaginas = [
    'kantoorschoonmaak',
    'opleveringsschoonmaak',
    'short-stay',
    'medische-schoonmaak',
  ]

  // Vaste, extra landingspagina's
  const vastePaginas = [
    'particuliere-schoonmaak',
    'zakelijke-tarieven',
    'algemene-voorwaarden',
    'privacybeleid'
  ]

  // Actieve projecten / case studies
  const projecten = [
    'bouwoplevering-station-breda',
    'kantoor-dieptereiniging-oosterhout'
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

  // 4. Vaste pagina's (tarieven & voorwaarden)
  const vasteUrls = vastePaginas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: slug.includes('tarieven') || slug.includes('particuliere') ? 0.8 : 0.3,
  }))

  // 5. Project pagina's (/projecten/[slug])
  const projectUrls = projecten.map((slug) => ({
    url: `${baseUrl}/projecten/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

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
    ...vasteUrls,
    ...projectUrls,
  ]
}