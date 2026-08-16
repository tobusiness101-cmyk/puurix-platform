import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { ClipboardCheck, Camera, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opleveringsschoonmaak Oosterhout, Breda & Tilburg | Puurix",
  description: "Vlekkeloze opleveringsschoonmaak na bouw, verbouw of verhuizing voor aannemers, projectontwikkelaars en makelaars in Oosterhout, Breda en Tilburg.",
};

export default function OpleveringsschoonmaakPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
              Opleveringsschoonmaak Oosterhout, Breda & Tilburg
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Bouwproject Afronden? Wij Garanderen Een <span className="text-accent">Vlekkeloze Oplevering.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Voor aannemers, projectontwikkelaars en makelaars is de deadline heilig. Puurix zorgt voor de perfecte eindschoonmaak, inclusief strakke checklists en fotografisch bewijs, zodat u met een gerust hart de sleutel kunt overdragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#rekentool" className="bg-accent text-primary font-bold py-4 px-8 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                Bereken Direct Uw Prijs <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
          <div className="w-[800px] h-[800px] bg-accent rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* WAAROM PUURIX VOOR DE BOUW & VASTGOED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
              Uw Visitekaartje Bij De Sleuteloverdracht
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Niets is zo vervelend als een koper die klaagt over bouwstof of verfresten tijdens de eindinspectie. Wij nemen die stress weg en maken van de oplevering een feestelijk moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kaart 1 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Deadlines Zijn Heilig</h3>
              <p className="text-stone-600 leading-relaxed">
                Loopt de bouw uit? Geen probleem. Onze teams zijn extreem flexibel en plannen de eindschoonmaak zo in dat uw opleverdatum nooit in gevaar komt.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ClipboardCheck className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Zwaar Bouwvuil Verwijderen</h3>
              <p className="text-stone-600 leading-relaxed">
                Wij pakken het hardnekkige werk aan: het veilig verwijderen van cementsluier, kitresten, verfspetters en hardnekkig bouwstof in alle hoeken en kieren.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Camera className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Fotografisch Bewijs</h3>
              <p className="text-stone-600 leading-relaxed">
                Geen discussies achteraf. Wij werken met strakke digitale checklists en leveren een compleet fotografisch opleveringsrapport aan voor in uw bouwdossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAT WIJ DOEN SECTION (Praktisch) */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
                De ultieme eindschoonmaak voor uw project
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Of het nu gaat om een nieuwbouwwoning, een gerenoveerd kantoorpand of een compleet bedrijfscentrum: wij maken het instapklaar. Wij ontzorgen de aannemer en verblijden de koper.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Volledig stofvrij maken van plafonds, wanden en vloeren",
                  "Vakkundig verwijderen van cementsluier en voegresten",
                  "Streeploze glasbewassing (inclusief het verwijderen van stickers/kit)",
                  "Dieptereiniging van nieuw geïnstalleerd sanitair en keukens",
                  "Vloeren bezemschoon, stofzuigklaar of volledig gedweild opleveren",
                  "Opleveringsrapport met foto's direct naar de projectleider"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
               <h3 className="text-2xl font-bold text-primary mb-4">Wat kost een zakelijke opleveringsschoonmaak?</h3>
               <p className="text-stone-600 mb-8">
                 Geen verrassingen achteraf voor uw projectbegroting. Gebruik onze online rekentool en bereken direct de kosten voor een vlekkeloze oplevering van uw pand.
               </p>
               <Link href="/#rekentool" className="w-full block text-center bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors">
                 Start de Rekentool
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      <Footer />
    </div>
  );
}