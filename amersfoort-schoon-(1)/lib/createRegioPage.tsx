import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRegioInfo, regioData } from "@/lib/regios";
import { Footer } from "@/components/Footer";
import { Rekentool } from "@/components/Rekentool";
import { Testimonials } from "@/components/Testimonials";

// Herbruikbare fabriek voor /<dienst-slug>/[regio]/page.tsx.
// In plaats van dit hele bestand per dienst te kopieren (en per ongeluk de
// titel/H1 te vergeten aan te passen, zoals nu gebeurde bij "praktijken"),
// roep je createRegioPage(...) eenmaal aan per dienst en exporteer je het
// resultaat. Zie het gebruiksvoorbeeld onderaan.

type RegioParams = { params: { regio: string } };

interface RegioPageConfig {
  /** Zichtbare dienstnaam, bv. "Kantoorschoonmaak" of "Praktijkschoonmaak" */
  serviceName: string;
  /** Korte beschrijving voor de meta description, bv. "kantoorschoonmaak" (kleine letters, voor in een zin) */
  serviceDescriptionSlug: string;
}

export function createRegioPage({ serviceName, serviceDescriptionSlug }: RegioPageConfig) {
  function generateStaticParams() {
    return Object.keys(regioData).map((regio) => ({ regio }));
  }

  function generateMetadata({ params }: RegioParams): Metadata {
    const city = params.regio.charAt(0).toUpperCase() + params.regio.slice(1);
    return {
      title: `${serviceName} in ${city} | Puurix`,
      description: `Professionele ${serviceDescriptionSlug} in ${city} en omgeving. Vaste schoonmaakploeg, geen wurgcontracten.`,
    };
  }

  function RegioPage({ params }: RegioParams) {
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
              {serviceName} <span className="text-accent">{city}</span>
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

  return { generateStaticParams, generateMetadata, default: RegioPage };
}

/*
 * GEBRUIK — plaats dit (2 regels) in elk van je dienst-map bestanden:
 *
 * app/kantoorschoonmaak/[regio]/page.tsx:
 *   import { createRegioPage } from "@/lib/createRegioPage";
 *   export const { generateStaticParams, generateMetadata, default } =
 *     createRegioPage({ serviceName: "Kantoorschoonmaak", serviceDescriptionSlug: "kantoorschoonmaak" });
 *
 * app/tandartspraktijk-schoonmaak/[regio]/page.tsx:
 *   import { createRegioPage } from "@/lib/createRegioPage";
 *   export const { generateStaticParams, generateMetadata, default } =
 *     createRegioPage({ serviceName: "Praktijkschoonmaak", serviceDescriptionSlug: "praktijkschoonmaak" });
 *
 * Zo kan de titel/H1 nooit meer "Kantoorschoonmaak" tonen op een andere
 * dienst-pagina - er is nog maar één plek waar de pagina-logica staat.
 */