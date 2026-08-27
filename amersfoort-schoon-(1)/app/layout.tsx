import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PromoBanner } from "@/components/PromoBanner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MetaPixel } from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://puurix.nl"),
  title: {
    default: "Puurix Schoonmaakbedrijf | Premium Schoonmaakdiensten",
    template: "%s | Puurix",
  },
  description:
    "Professionele en betrouwbare schoonmaak voor de zakelijke en particuliere markt in Oosterhout, Breda, Tilburg en Amersfoort. Vraag direct een offerte aan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Puurix Schoonmaakbedrijf | Premium Schoonmaakdiensten",
    description:
      "Vaste schoonmaakploeg, transparante tarieven en 20% welkomstkorting op zakelijke schoonmaak.",
    url: "https://puurix.nl",
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
      <body className={inter.className}>
        <PromoBanner/>
        <Navbar/>
        {children}

        {/* Gestructureerde Data voor Lokale SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Puurix",
              image: "https://puurix.nl/logo.jpg",
              url: "https://puurix.nl",
              telephone: "+31624473102",
              email: "puurixschoonmaak@gmail.com",
              areaServed: [
                { "@type": "City", "name": "Oosterhout" },
                { "@type": "City", "name": "Breda" },
                { "@type": "City", "name": "Tilburg" },
                { "@type": "City", "name": "Etten-Leur" },
                { "@type": "City", "name": "Teteringen" },
                { "@type": "City", "name": "Waalwijk" },
                { "@type": "City", "name": "Kaatsheuvel" },
                { "@type": "City", "name": "Amersfoort" }
              ],
              address: {
                "@type": "PostalAddress",
                postalCode: "4904",
                addressLocality: "Oosterhout",
                addressRegion: "Noord-Brabant",
                addressCountry: "NL"
              },
              priceRange: "€€"
            }),
          }}
        />

        {/* Analytics & Meta Pixel */}
        <GoogleAnalytics gaId="G-L4GV9859J5"/>
        <MetaPixel/>
      </body>
    </html>
  );
}