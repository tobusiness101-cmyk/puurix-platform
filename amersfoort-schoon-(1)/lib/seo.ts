import type { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  path: string; // Bijv. "/schoonmaakbedrijf/barneveld" of "/zakelijke-tarieven"
  image?: string;
}

export function constructMetadata({
  title,
  description,
  path,
  image = "/logo.jpg",
}: MetadataProps): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `https://puurix.nl${cleanPath}`;

  return {
    title, // layout.tsx template plakt hier automatisch '| Puurix' achter voor de browser tab
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Puurix`,
      description,
      url,
      siteName: "Puurix Schoonmaakbedrijf",
      locale: "nl_NL",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} | Puurix`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Puurix`,
      description,
      images: [image],
    },
  };
}