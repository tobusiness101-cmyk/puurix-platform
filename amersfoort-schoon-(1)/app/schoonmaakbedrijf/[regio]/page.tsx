import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Services } from "@/components/Services";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { TrustMarquee } from "@/components/TrustMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { formatCityName, getRegioInfo, regioData } from "@/lib/regios";
import { constructMetadata } from "@/lib/seo";

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
            Een schone werkplek is het visitekaartje van uw onderneming. Voor kantoren, praktijken, horeca en accommodaties stemmen we het schoonmaakplan af op het gebruik van uw locatie en de gewenste werktijden.
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
      <section className="bg-[#F5F3EE] py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold text-primary">Schoonmaakdiensten in {city}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary/70">Bekijk onze diensten en ontdek welke aanpak past bij uw locatie.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              ["Kantoorschoonmaak", "/kantoorschoonmaak"],
              ["Medische schoonmaak", "/medische-schoonmaak"],
              ["Opleveringsschoonmaak", "/opleveringsschoonmaak"],
              ["Short-stay schoonmaak", "/short-stay"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="border border-[#DDD9CC] bg-white px-4 py-3 text-sm font-semibold text-accent hover:border-accent">{label}</Link>
            ))}
          </div>
        </div>
      </section>
      <QuoteCalculator />
      <Footer />
      <StickyContact />
    </main>
  );
}
