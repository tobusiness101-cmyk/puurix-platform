import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Services } from "@/components/Services";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { TrustMarquee } from "@/components/TrustMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { getRegioInfo, regioData, formatRegionName } from "@/lib/regios";

export function generateStaticParams() {
  return Object.keys(regioData).map((regio) => ({ regio }));
}

export function generateMetadata({ params }: { params: { regio: string } }): Metadata {
  const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
  if (!regioData[safeRegio]) return {};
  
  const city = formatRegionName(safeRegio);
  const canonical = `https://puurix.nl/schoonmaakbedrijf/${safeRegio}`;

  return {
    title: `Schoonmaakbedrijf ${city}`,
    description: `Professionele schoonmaakdiensten in ${city} en omgeving voor bedrijven en particulieren.`,
    alternates: { canonical },
    openGraph: {
      title: `Schoonmaakbedrijf ${city} | Puurix`,
      description: `Professionele schoonmaakdiensten in ${city} en omgeving.`,
      url: canonical,
      siteName: "Puurix",
      locale: "nl_NL",
      type: "website",
    },
  };
}

export default function RegioPage({ params }: { params: { regio: string } }) {
  const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
  if (!regioData[safeRegio]) notFound();

  const city = formatRegionName(safeRegio);
  const info = getRegioInfo(safeRegio);

  return (
    <main className="relative w-full overflow-hidden">
      <section className="relative bg-primary pt-40 pb-24 text-center">
        <div className="container relative z-10 mx-auto px-6">
          <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-white">
            Werkzaam in {city}
          </span>
          <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl">
            Schoonmaakbedrijf <span className="text-white/70">{city}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Professionele schoonmaak voor bedrijven en particuliere locaties in {city}. {info.highlight}
          </p>
        </div>
      </section>

      <div className="bg-background py-8">
        <TrustMarquee />
      </div>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary">
            Schoonmaak in {city} en omgeving
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-primary/70">
            We stemmen de schoonmaak af op het type locatie, de gebruiksintensiteit en de gewenste frequentie.
          </p>
          {info.omgeving.length > 0 && (
            <p className="text-sm font-semibold tracking-wide text-primary/60">
              Ook actief in: {info.omgeving.join(", ")}.
            </p>
          )}
        </div>
      </section>

      <HowItWorks />
      <Services />
      <QuoteCalculator />
      <Footer />
      <StickyContact />
    </main>
  );
}
