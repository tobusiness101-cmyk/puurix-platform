import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Puurix Schoonmaakbedrijf",
  description: "De algemene leverings- en betalingsvoorwaarden van Puurix Schoonmaakbedrijf.",
};

export default function VoorwaardenPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <main className="container mx-auto max-w-4xl px-6 pt-36 pb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
          Algemene Voorwaarden
        </h1>
        <p className="text-sm text-slate-500 mb-8">Laatst bijgewerkt: 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200">
          <section>
            <h2 className="text-lg font-bold text-primary mb-2">1. Toepasselijkheid</h2>
            <p>
              Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten geleverd door Puurix Schoonmaakbedrijf (KvK: 42149299).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">2. Offertes & Overeenkomsten</h2>
            <p>
              Alle offertes zijn geheel vrijblijvend, tenzij uitdrukkelijk anders vermeld. Aan berekeningen uit de online rekentool kunnen geen rechten worden ontleend; deze gelden als indicatieve prijsopgave.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">3. Uitvoering van de werkzaamheden</h2>
            <p>
              Puurix voert de werkzaamheden uit naar beste inzicht en vermogen en conform de geldende veiligheids- en hygiënerichtlijnen (zoals WIP-richtlijnen bij zorginstellingen). De opdrachtgever zorgt voor tijdige toegang tot het pand en werkende nutsvoorzieningen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary mb-2">4. Betaling en Tarieven</h2>
            <p>
              Facturatie vindt plaats volgens de afgesproken termijnen. Tenzij anders overeengekomen geldt een betalingstermijn van 14 dagen na factuurdatum. Alle genoemde zakelijke bedragen zijn exclusief btw.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}