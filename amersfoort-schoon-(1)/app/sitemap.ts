import type { MetadataRoute } from "next";
import { regioData } from "@/lib/regios";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://puurix.nl";
  const lastModified = new Date();

  // Alle actieve steden/regio's uit lib/regios.ts (inclusief Amersfoort/Barneveld e.o. & Dordrecht/Drechtsteden)
  const regios = Object.keys(regioData);

  // Diensten landingspagina's
  const dienstPaginas = [
    "kantoorschoonmaak",
    "opleveringsschoonmaak",
    "short-stay",
    "medische-schoonmaak",
  ];

  // Vaste landingspagina's met gerichte prioriteit
  const vasteUrls: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/werkgebied`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/zakelijke-tarieven`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/particuliere-schoonmaak`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/algemene-voorwaarden`, lastModified, priority: 0.3 },
    { url: `${baseUrl}/privacybeleid`, lastModified, priority: 0.3 },
  ];

  // Actieve projecten / case studies
  const projecten = [
    "bouwoplevering-breda",
    "kantoor-dieptereiniging-oosterhout",
  ];

  // 1. Hoofdpagina's per dienst (/[dienst])
  const dienstUrls: MetadataRoute.Sitemap = dienstPaginas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    priority: 0.9,
  }));

  // 2. Regio overzichtspagina's (/schoonmaakbedrijf/[regio])
  const regioUrls: MetadataRoute.Sitemap = regios.map((regio) => ({
    url: `${baseUrl}/schoonmaakbedrijf/${regio}`,
    lastModified,
    priority: 0.85,
  }));

  // 3. Verrijkte B2B Dienst + Regio combinaties (/[dienst]/[regio])
  const dienstRegioUrls: MetadataRoute.Sitemap = dienstPaginas.flatMap((dienst) =>
    regios.map((regio) => ({
      url: `${baseUrl}/${dienst}/${regio}`,
      lastModified,
      priority: 0.8,
    }))
  );

  // 4. Project pagina's (/projecten/[slug])
  const projectUrls: MetadataRoute.Sitemap = projecten.map((slug) => ({
    url: `${baseUrl}/projecten/${slug}`,
    lastModified,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      priority: 1.0,
    },
    ...dienstUrls,
    ...vasteUrls,
    ...regioUrls,
    ...dienstRegioUrls,
    ...projectUrls,
  ];
}