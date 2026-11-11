import type { MetadataRoute } from 'next'
import { regioData } from '@/lib/regios'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://puurix.nl'

  // Alle actieve steden/regio's
  const regios = Object.keys(regioData)
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
    'privacybeleid',
    'werkgebied'
  ]

  // Actieve projecten / case studies
  const projecten = [
    'bouwoplevering-breda',
    'kantoor-dieptereiniging-oosterhout'
  ]

  // 1. Regio overzichtspagina's (/schoonmaakbedrijf/[regio])
  const regioUrls = regios.map((regio) => ({
    url: `${baseUrl}/schoonmaakbedrijf/${regio}`,
    priority: 0.8,
  }))

  // 2. Hoofdpagina's per dienst (/[dienst])
  const dienstUrls = dienstPaginas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    priority: 0.9,
  }))

  // 4. Vaste pagina's (tarieven & voorwaarden)
  const vasteUrls = vastePaginas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    priority: slug.includes('tarieven') || slug.includes('particuliere') ? 0.8 : 0.3,
  }))

  // 5. Project pagina's (/projecten/[slug])
  const projectUrls = projecten.map((slug) => ({
    url: `${baseUrl}/projecten/${slug}`,
    priority: 0.6,
  }))

  return [
    {
      url: `${baseUrl}`,
      priority: 1.0,
    },
    ...dienstUrls,
    ...regioUrls,
    ...vasteUrls,
    ...projectUrls,
  ]
}
