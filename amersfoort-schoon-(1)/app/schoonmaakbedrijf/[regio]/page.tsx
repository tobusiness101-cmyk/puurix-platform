import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Services } from "@/components/Services";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { TrustMarquee } from "@/components/TrustMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { getRegioInfo, regioData } from "@/lib/regios";
import { constructMetadata } from "@/lib/seo";

// Zorgt voor nette weergave van steden met koppeltekens
function formatCityName(slug: string): string {
  const overrides: Record<string, string> = {
    "etten-leur": "Etten-Leur",
    "alphen-chaam": "Alphen-Chaam",
    "gilze-en-rijen": "Gilze en Rijen",
    "loon-op-zand": "Loon op Zand",
  };
  if (overrides[slug]) return overrides[slug];
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return Object.keys(regioData).map((regio) => ({ regio }));
}

export async function generateMetadata({ params }: { params: { regio: string } }): Promise<Metadata> {
  const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
  if (!regioData[safeRegio]) return {};

  const city = formatCityName(safeRegio);

  return constructMetadata({
    title: `Schoonmaakbedrijf ${city}`,
    description: `Professionele schoonmaakdiensten in ${city} en omgeving voor bedrijven en particulieren.`,
    path: `/schoonmaakbedrijf/${safeRegio}`,
  });
}

export default function RegioPage({ params }: { params: { regio: string } }) {
  const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
  if (!regioData[safeRegio]) notFound();

  const city = formatCityName(safeRegio);
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
            Waarom kiezen voor ons in {city}?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-primary/70">
            Een schone werkplek is het visitekaartje van uw onderneming. Of u nu een kantoor, winkel of horecazaak heeft in {city}, wij leveren maatwerk. {info.highlight}
          </p>
          {info.omgeving.length > 0 && (
            <p className="text-sm font-semibold tracking-wide text-primary/60">
              Ook actief in de omgeving van {city}: {info.omgeving.join(", ")}.
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