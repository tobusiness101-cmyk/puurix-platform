import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ParticulierCalculator } from "@/components/ParticulierCalculator";

export const metadata: Metadata = {
  title: "Prijzen Particuliere Schoonmaak | Puurix",
  description:
    "Bereken direct uw eigen prijs voor particuliere schoonmaak in Oosterhout, Breda en Tilburg. Vaste prijzen per onderdeel, geen uurtarief, geen verrassingen.",
};

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
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
            Particuliere Schoonmaak
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Duidelijke prijzen, <span className="text-accent">geen verrassingen</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Geen uurtarief waarbij u nooit weet wat de rekening wordt. Stel hieronder samen wat uw woning
            nodig heeft en zie meteen de vaste prijs.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <ParticulierCalculator />

          <div className="bg-white rounded-2xl shadow-premium p-6 md:p-10 mt-8">
            <h3 className="font-bold text-ink mb-4">Altijd inbegrepen</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-stone-600">
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/#contact"
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                Contact opnemen <ArrowRight size={20} />
              </Link>
              <p className="text-center text-sm text-stone-500 mt-4">
                Wekelijkse of tweewekelijkse schoonmaak? Vraag naar onze vaste maandprijs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}