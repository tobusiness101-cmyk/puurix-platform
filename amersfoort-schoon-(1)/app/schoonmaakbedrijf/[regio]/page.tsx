import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, MapPin, ArrowRight } from "lucide-react";
import { Services } from "@/components/Services";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { TrustMarquee } from "@/components/TrustMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { formatCityName, getClusterCities, getRegioInfo, regioData } from "@/lib/regios";
import { constructMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(regioData).map((regio) => ({ regio }));
}

export async function generateMetadata({ params }: { params: { regio: string } }): Promise<Metadata> {
  const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
  if (!regioData[safeRegio]) return {};

  const city = formatCityName(safeRegio);
  const info = getRegioInfo(safeRegio);

  return constructMetadata({
    title: `Schoonmaakbedrijf ${city} | Kantoor, Praktijk & Oplevering`,
    description: `Zakelijk schoonmaakbedrijf in ${city} (${info.bedrijventerreinen}) en omgeving. Vaste schoonmaakploeg voor kantoren, praktijken, hotels en bouwoplevering.`,
    path: `/schoonmaakbedrijf/${safeRegio}`,
  });
}

export default function RegioPage({ params }: { params: { regio: string } }) {
  const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
  if (!regioData[safeRegio]) notFound();

  const city = formatCityName(safeRegio);
  const info = getRegioInfo(safeRegio);
  const nearbyClusterSlugs = getClusterCities(info.cluster, safeRegio).slice(0, 6);

  return (
    <main className="relative w-full overflow-hidden">
      <section className="relative bg-[#0B2E27] pt-40 pb-24 text-center">
        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <span className="mb-6 inline-flex items-center gap-2 border border-white/25 bg-white/10 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-[#E6D3AC]">
            <MapPin className="h-3.5 w-3.5" /> {info.cluster} • {city}
          </span>
          <h1 className="mb-6 text-4xl font-medium text-white md:text-6xl">
            Schoonmaakbedrijf <span className="text-[#E6D3AC]">{city}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Professionele schoonmaak voor bedrijven, instellingen en vastgoed in {city}. {info.highlight}
          </p>
        </div>
      </section>

      <div className="bg-background py-8">
        <TrustMarquee />
      </div>

      <section className="bg-white py-20 border-b border-[#DDD9CC]">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Lokale B2B Aanpak
              </span>
              <h2 className="mt-3 mb-5 text-3xl font-medium text-primary sm:text-4xl">
                Waarom bedrijven in {city} kiezen voor Puurix
              </h2>
              <p className="mb-5 text-base leading-7 text-stone-600">
                Een schone werkplek of accommodatie is het visitekaartje van uw organisatie. In {city} richten wij ons op {info.b2bFocus}. Wij koppelen een vast, ingewerkt schoonmaakteam aan uw pand en werken op tijden die uw bedrijfsvoering niet verstoren.
              </p>
              {info.omgeving.length > 0 && (
                <p className="text-sm font-semibold text-stone-700">
                  Naast {city} ook actief in: {info.omgeving.join(", ")}.
                </p>
              )}
            </div>

            <div className="border border-[#DDD9CC] bg-[#F5F3EE] p-8">
              <div className="flex items-center gap-3 text-accent font-bold text-sm uppercase tracking-wider mb-3">
                <Building2 className="h-5 w-5" />
                Bedrijventerreinen & Locaties in {city}
              </div>
              <p className="text-base font-semibold text-ink mb-3">
                {info.bedrijventerreinen}
              </p>
              <p className="text-sm leading-6 text-stone-600 mb-6">
                Gevestigd op een van deze werklocaties of elders in de gemeente {city}? Wij komen graag vrijblijvend langs voor een schouw op locatie en een helder schoonmaakplan.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                Plan een kennismaking in {city} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Services />

      {/* SPECIFIEKE DIENSTEN IN DEZE STAD + OMLIGGENDE GEMEENTEN */}
      <section className="bg-[#F5F3EE] py-16 border-t border-[#DDD9CC]">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-medium text-primary">
              Zakelijke schoonmaakdiensten in {city}
            </h2>
            <p className="mt-3 text-stone-600">
              Kies de gewenste expertise in {city} voor specifieke werkwijzen en tariefindicaties:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [`Kantoorschoonmaak ${city}`, `/kantoorschoonmaak/${safeRegio}`],
              [`Medische schoonmaak ${city}`, `/medische-schoonmaak/${safeRegio}`],
              [`Opleveringsschoonmaak ${city}`, `/opleveringsschoonmaak/${safeRegio}`],
              [`Hotels & Short-stay ${city}`, `/short-stay/${safeRegio}`],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between border border-[#DDD9CC] bg-white p-5 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <span>{label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-accent" />
              </Link>
            ))}
          </div>

          {nearbyClusterSlugs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#DDD9CC] text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-4">
                Ook actief in omliggende gemeenten ({info.cluster})
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {nearbyClusterSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/schoonmaakbedrijf/${slug}`}
                    className="border border-[#DDD9CC] bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:border-accent hover:text-accent transition-colors"
                  >
                    Schoonmaakbedrijf {formatCityName(slug)}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <QuoteCalculator />
      <Footer />
      <StickyContact />
    </main>
  );
}