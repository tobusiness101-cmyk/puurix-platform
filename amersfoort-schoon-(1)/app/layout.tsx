import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PrivacyConsent } from "@/components/PrivacyConsent";
import { company } from "@/lib/company";
import { formatCityName, regioData } from "@/lib/regios";

export const metadata: Metadata = {
  metadataBase: new URL("https://puurix.nl"),
  title: {
    default: "Puurix Schoonmaakbedrijf | Premium Schoonmaakdiensten",
    template: "%s | Puurix", // Voegt automatisch '' toe aan alle onderliggende pagina's
  },
  description:
    "Professionele en betrouwbare schoonmaak voor de zakelijke en particuliere markt in Brabant en de regio Amersfoort-Gelderland. Vraag direct een offerte aan.",
  robots: {
    index: true,
    follow: true,
  },
  // 'alternates: { canonical: "/" }' is hier bewust verwijderd!
  openGraph: {
    title: "Puurix Schoonmaakbedrijf | Premium Schoonmaakdiensten",
    description:
      "Professionele schoonmaak voor bedrijven en particulieren in Brabant, Gelderland en Utrecht. Vraag vrijblijvend een offerte aan.",
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
  return (
    <html lang="nl">
      <body className="font-sans">
        <Navbar />
        {children}

        {/* Eén consistente bedrijfsvermelding vanuit lib/company.ts. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://puurix.nl/#business",
              name: company.name,
              image: "https://puurix.nl/logo.jpg",
              url: company.url,
              telephone: company.telephone,
              email: company.email,
              areaServed: Object.keys(regioData).map((slug) => ({
                "@type": "City",
                name: formatCityName(slug),
              })),
            }),
          }}
        />

        <PrivacyConsent />
      </body>
    </html>
  );
}
