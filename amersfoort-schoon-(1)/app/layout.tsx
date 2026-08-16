import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PromoBanner } from "@/components/PromoBanner";
import { GoogleAnalytics } from '@next/third-parties/google'; // Import voor Analytics

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puurix Schoonmaakbedrijf | Premium schoonmaakdiensten",
  description: "Professionele en betrouwbare schoonmaak voor de zakelijke en particuliere markt. Vraag direct een offerte aan bij Puurix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <PromoBanner />
        <Navbar />
        {children}
        
        {/* Gestructureerde Data voor Lokale SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Puurix",
              "image": "https://www.puurixschoonmaak.nl/logo.jpg",
              "url": "https://www.puurixschoonmaak.nl",
              "telephone": "+31624473102",
              "email": "to.business101@gmail.com",
              "areaServed": [
                { "@type": "City", "name": "Oosterhout" },
                { "@type": "City", "name": "Breda" },
                { "@type": "City", "name": "Tilburg" },
                { "@type": "City", "name": "Etten-Leur" },
                { "@type": "City", "name": "Teteringen" },
                { "@type": "City", "name": "Waalwijk" },
                { "@type": "City", "name": "Kaatsheuvel" },
                { "@type": "City", "name": "Amersfoort" }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "‹straat + huisnummer›",
                "postalCode": "4904",
                "addressLocality": "Oosterhout",
                "addressRegion": "Noord-Brabant",
                "addressCountry": "NL"
              },
              "priceRange": "€€"
            }),
          }}
        />

        {/* Google Analytics script wordt hier veilig geladen */}
        <GoogleAnalytics gaId="G-L4GV9859J5" />
      </body>
    </html>
  );
}
