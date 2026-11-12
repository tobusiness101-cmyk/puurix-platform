import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PrivacyConsent } from "@/components/PrivacyConsent";
import { company } from "@/lib/company";
import { formatCityName, regioData } from "@/lib/regios";

export const metadata: Metadata = {
  metadataBase: new URL("https://puurix.nl"),
  title: {
    default: "Puurix Schoonmaakbedrijf | Zakelijke & Particuliere Schoonmaak",
    template: "%s | Puurix",
  },
  description:
    "Professionele schoonmaak voor kantoren, praktijken, hotels en bouwopleveringen in Amersfoort, Barneveld, Dordrecht, Breda en omgeving. Vraag direct een offerte aan.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Puurix Schoonmaakbedrijf | Premium Schoonmaakdiensten",
    description:
      "Professionele schoonmaak voor bedrijven en instellingen in de Gelderse Vallei, regio Amersfoort, Drechtsteden en Noord-Brabant. Vraag vrijblijvend een offerte aan.",
    siteName: "Puurix Schoonmaakbedrijf",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Puurix Schoonmaakbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puurix Schoonmaakbedrijf",
    description: "Professionele en betrouwbare schoonmaakdiensten op maat.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://puurix.nl/#business",
    name: company.name,
    legalName: company.legalName,
    image: "https://puurix.nl/logo.jpg",
    url: company.url,
    telephone: company.telephone,
    email: company.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.streetAddress,
      postalCode: company.address.postalCode,
      addressLocality: company.address.addressLocality,
      addressRegion: company.address.addressRegion,
      addressCountry: company.address.addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    areaServed: Object.keys(regioData).map((slug) => ({
      "@type": "City",
      name: formatCityName(slug),
    })),
  };

  return (
    <html lang="nl">
      <body className="font-sans">
        <Navbar />
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <PrivacyConsent />
      </body>
    </html>
  );
}