import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { InfoSections } from "@/components/InfoSections";
import { Pricing } from "@/components/Pricing";
import { Rekentool } from "@/components/Rekentool";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";

import { features } from "@/lib/features";
import { regioData, formatCityName } from "@/lib/regios";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const toonTestimonials = false;

  // Genereer dynamisch alle steden uit lib/regios.ts voor het schema
  const areaServed = Object.keys(regioData).map((slug) => ({
    "@type": "City",
    name: formatCityName(slug),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://puurix.nl/#business",
    name: "Puurix",
    url: "https://puurix.nl",
    telephone: "+31624473102",
    email: "info@puurix.nl",
    image: "https://puurix.nl/logo.jpg",
    areaServed: areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Oldenbarnevelderweg",
      postalCode: "[3772 GD]", 
      addressLocality: "Barneveld",
      addressRegion: "Gelderland",
      addressCountry: "NL",
    },
    priceRange: "€€",
  };

  return (
    <main className="relative w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
     
      {features.hero && <Hero />}
      <PromoBanner />
      {features.services && <Services />}
      <HowItWorks />
      {features.quoteCalculator && <QuoteCalculator />}
      {features.infoSections && <InfoSections />}
      <Pricing />
      {features.beforeAfterSlider && <BeforeAfterSlider />}
      {toonTestimonials && <Testimonials />}
      {features.faq && <Faq />}
      {features.leadMagnet && <LeadMagnet />}
      {features.footer && <Footer />}
      {features.stickyContact && <StickyContact />}
    </main>
  );
}