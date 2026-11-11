import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { formatCityName, regioData } from "@/lib/regios";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Werkgebied: schoonmaak in Brabant, Gelderland en Utrecht",
  description:
    "Bekijk in welke steden Puurix zakelijke en particuliere schoonmaak verzorgt. Vraag naar de mogelijkheden in uw plaats en directe omgeving.",
  path: "/werkgebied",
});

export default function WerkgebiedPage() {
  const regions = Object.entries(regioData);

  return (
    <main className="min-h-screen bg-[#F5F3EE] text-ink">
      <section className="bg-[#0B2E27] pb-16 pt-36 text-white sm:pb-20 sm:pt-44">
        <div className="container mx-auto max-w-[1100px] px-6 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E6D3AC]">Waar we werken</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">Schoonmaak in uw regio</h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-white/75">
            Puurix werkt in steden en plaatsen in Brabant, Gelderland en Utrecht. Kies uw plaats voor informatie over onze lokale dienstverlening.
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-[1100px] px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Plaatsen in ons werkgebied</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map(([slug, info]) => (
            <li key={slug}>
              <Link href={`/schoonmaakbedrijf/${slug}`} className="group flex h-full min-h-36 flex-col justify-between border border-[#DDD9CC] bg-white p-6 transition-colors hover:border-accent">
                <span>
                  <span className="block text-xl font-semibold text-ink">Schoonmaak in {formatCityName(slug)}</span>
                  <span className="mt-2 block text-sm leading-6 text-stone-600">{info.omgeving.length > 0 ? `Ook in ${info.omgeving.slice(0, 3).join(", ")}` : "Vraag naar de mogelijkheden in de omgeving."}</span>
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">Bekijk de regio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
