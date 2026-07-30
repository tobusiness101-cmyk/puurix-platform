import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Aangepast naar de canonical URL mét www.
  const baseUrl = 'https://www.puurixschoonmaak.nl'

  const regios = [
    'amersfoort',
    'oosterhout',
    'breda',
    'tilburg',
    'rotterdam',
    'utrecht',
    'amsterdam'
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
