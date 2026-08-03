import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { TrustMarquee } from "@/components/TrustMarquee";
import { getRegioInfo, regioData } from "@/lib/regios";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return Object.keys(regioData).map((regio) => ({ regio }));
}
// --- DE MAGISCHE SEO CODE VOOR GOOGLE ---
export async function generateMetadata({ params }: { params: { regio: string } }): Promise<Metadata> {
  const formattedRegion = params.regio
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Schoonmaakbedrijf ${formattedRegion} | Puurix`,
    description: `Op zoek naar een betrouwbare schoonmaakpartner in ${formattedRegion}? Puurix levert professionele schoonmaakdiensten op maat voor bedrijven en particulieren.`,
  };
}
// --- EINDE SEO CODE ---

// Dit zorgt ervoor dat we de naam uit de URL kunnen lezen
export default function RegioPage({ params }: { params: { regio: string } }) {
  if (!regioData[params.regio]) {
  notFound();
}
  // Maakt van "oosterhout" of "provincie-utrecht" mooi "Oosterhout" of "Provincie Utrecht"
  const formattedRegion = params.regio
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="relative w-full overflow-hidden">
      
      {/* 1. Unieke Lokale SEO Header */}
      <section className="relative pt-40 pb-24 bg-primary text-center">
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-6">
          <span className="mb-6 mx-auto inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-extrabold tracking-widest text-white uppercase">
            Werkzaam in {formattedRegion}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Schoonmaakbedrijf <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">{formattedRegion}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Op zoek naar een betrouwbare, professionele schoonmaakpartner in {formattedRegion}? Wij zorgen voor een stralend schone en representatieve werkomgeving voor uw bedrijf.
          </p>
        </div>
      </section>

      {/* 2. Vertrouwenslogo's (Optioneel) */}
      <div className="bg-background py-8">
        <TrustMarquee />
      </div>

      {/* 3. Een SEO-geoptimaliseerde tekstsectie over de regio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Waarom kiezen voor ons in {formattedRegion}?
          </h2>
          <p className="text-primary/70 text-lg leading-relaxed mb-6">
            Een schone werkplek is het visitekaartje van uw onderneming. Of u nu een kantoor, winkel of horecazaak heeft in {formattedRegion}, wij leveren maatwerk. We werken met een vast, herkenbaar schoonmaakteam uit de regio, waardoor we snel kunnen schakelen en altijd dichtbij zijn.
          </p>
        </div>
      </section>

      {/* 4. We hergebruiken jouw bestaande, perfect werkende componenten! */}
      <Services />
      <QuoteCalculator />
      <Footer />
      <StickyContact />
      
    </main>
  );
}
