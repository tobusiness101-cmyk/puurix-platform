import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Quality } from "@/components/Quality";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";

import { features } from "@/lib/features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Schoonmaakbedrijf voor bedrijven en particulieren",
  description:
    "Puurix verzorgt zakelijke en particuliere schoonmaak. Een vast team, heldere afspraken en een offerte op maat.",
};

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {features.hero && <Hero />}
      {features.services && <Services />}
      <HowItWorks />
      <Quality />
      {features.quoteCalculator && <QuoteCalculator />}
      {features.footer && <Footer />}
      {features.stickyContact && <StickyContact />}
    </main>
  );
}
