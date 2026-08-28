import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRegioInfo, regioData } from "@/lib/regios";
import { Footer } from "@/components/Footer";
import { Rekentool } from "@/components/Rekentool";
import { Testimonials } from "@/components/Testimonials";

export function generateStaticParams() {
  return Object.keys(regioData).map((regio) => ({ regio }));
}

export function generateMetadata({ params }: { params: { regio: string } }): Metadata {
  const city = params.regio.charAt(0).toUpperCase() + params.regio.slice(1);
  return {
    title: `Kantoorschoonmaak in ${city} | Puurix`,
    description: `Professionele kantoorschoonmaak in ${city} en omgeving. Vaste schoonmaakploeg, geen wurgcontracten.`,
  };
}

export default function KantoorRegioPage({ params }: { params: { regio: string } }) {
  if (!regioData[params.regio]) notFound();

  const city = params.regio.charAt(0).toUpperCase() + params.regio.slice(1);
  const info = getRegioInfo(params.regio);

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="pt-32 pb-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-accent font-bold uppercase tracking-wider mb-4 block">
            Uw lokale partner in {city}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Kantoorschoonmaak <span className="text-accent">{city}</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Op zoek naar een betrouwbare schoonmaakpartner in {city}? {info.highlight}
          </p>
          {info.omgeving.length > 0 && (
            <p className="text-sm text-white/50">
              Ook actief in: {info.omgeving.join(", ")}.
            </p>
          )}
        </div>
      </section>

      <Rekentool />
      <Testimonials />
      <Footer />
    </main>
  );
}