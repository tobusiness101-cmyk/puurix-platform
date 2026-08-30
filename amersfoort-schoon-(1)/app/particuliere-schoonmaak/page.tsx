import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prijzen Particuliere Schoonmaak | Puurix",
  description:
    "Duidelijke, vaste prijzen voor particuliere schoonmaak in Oosterhout, Breda en Tilburg. Geen verrassingen achteraf, vaste schoonmaakploeg.",
};

// Prijslijst: houd dit in lijn met de bedragen in de Rekentool, mocht je
// die ooit los aanpassen - beide plekken tonen nu onafhankelijk van elkaar
// hetzelfde bedrag, maar delen (nog) geen gemeenschappelijke databron.
const priceList = [
  { label: "1-slaapkamer appartement", price: "€60,-", note: "per beurt" },
  { label: "Eengezinswoning", price: "€85,-", note: "per beurt" },
  { label: "Ramen wassen (buitenzijde)", price: "+ €15,-", note: "als toevoeging" },
];

const included = [
  "Grondige reiniging op maat",
  "Vaste, betrouwbare schoonmaker",
  "Flexibel in te plannen",
  "Professionele schoonmaakmiddelen",
];

export default function ParticuliereSchoonmaakPage() {
  return (
    <div className="min-h-screen bg-stone-50">
     {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          
          {/* De nieuwe navigatielink */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-medium transition-colors">
            <ArrowRight size={16} className="rotate-180" /> Terug naar home
          </Link>

          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
            Particuliere Schoonmaak
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Duidelijke prijzen, <span className="text-accent">geen verrassingen</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Voor privéplaatsen hanteren we een vaste budgetprijs. Hieronder de volledige prijslijst
            voor particuliere schoonmaak in Oosterhout, Breda en Tilburg.
          </p>
        </div>
      </section>

      {/* PRIJSTABEL */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-premium p-6 md:p-10">
            <h2 className="text-2xl font-bold text-ink mb-6">Prijslijst particulier</h2>
            <ul className="divide-y divide-stone-200">
              {priceList.map((item) => (
                <li key={item.label} className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium text-ink">{item.label}</p>
                    <p className="text-sm text-stone-500">{item.note}</p>
                  </div>
                  <span className="text-xl font-black text-ink shrink-0 ml-4">{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-stone-200">
              <h3 className="font-bold text-ink mb-4">Altijd inbegrepen</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-600">
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Link
                href="/#contact"
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                Contact opnemen <ArrowRight size={20} />
              </Link>
              <p className="text-center text-sm text-stone-500 mt-4">
                Andere woningtype of specifieke wensen? We stellen graag een offerte op maat op.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}