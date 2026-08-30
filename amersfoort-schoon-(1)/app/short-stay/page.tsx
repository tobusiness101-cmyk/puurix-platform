import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Star, Clock, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short-stay & Airbnb Schoonmaak Oosterhout, Breda & Tilburg | Puurix",
  description: "Hotelkwaliteit wisselschoonmaak voor short-stay en Airbnb-verhuurders in Oosterhout, Breda en Tilburg. Strakke planning tussen check-out en check-in.",
};

export default function ShortStaySchoonmaakPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
              Short-stay & Airbnb Oosterhout, Breda & Tilburg
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Gegarandeerd 5-Sterren Reviews Door <span className="text-accent">Vlekkeloze Wisselschoonmaak.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Voor professionele verhuurders en beheerders draait alles om gasttevredenheid. Puurix ontzorgt uw recreatie- en short-stay objecten met hotelkwaliteit schoonmaak en strakke planningen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/zakelijke-tarieven" className="bg-accent text-primary font-bold py-4 px-8 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
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

      {/* WAAROM PUURIX VOOR SHORT-STAY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
              De Geheime Formule Voor Superhost Status
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Een slechte schoonmaakreview kost u direct toekomstige boekingen. Wij begrijpen de short-stay markt en leveren snelle, betrouwbare service zodat elke nieuwe gast binnenstapt in pure luxe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kaart 1 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Star className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Maximale Gasttevredenheid</h3>
              <p className="text-stone-600 leading-relaxed">
                Hygiëne is de nummer één factor in Airbnb-reviews. Onze schoonmakers werken met gedetailleerde checklists om hotelkwaliteit en vijfsterren-beoordelingen te garanderen.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Strakke Deadlines</h3>
              <p className="text-stone-600 leading-relaxed">
                Check-out om 11:00, check-in om 15:00? Geen probleem. Onze teams zijn flexibel en punctueel, zodat uw accommodatie altijd ruim op tijd klaar is voor de volgende gast.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Volledige Ontzorging</h3>
              <p className="text-stone-600 leading-relaxed">
                Wij doen meer dan alleen poetsen. Van het strak opmaken van bedden en het aanvullen van koffie en zeep, tot het signaleren van eventuele schades na het uitchecken.
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
                De complete turn-over service voor beheerders
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Wij richten ons uitsluitend op zakelijke verhuurders en vastgoedbeheerders. U wilt passief rendement, wij leveren de operationele executie. Wij integreren naadloos met uw planning.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Grondige reiniging van badkamers, keukens en leefruimtes",
                  "Linnenservice: wassen en strak opmaken van alle bedden",
                  "Aanvullen van verbruiksartikelen (toiletpapier, zeep, koffie)",
                  "Visuele inspectie op schade of ontbrekende inventaris",
                  "Fotografisch bewijs via een digitaal opleveringsrapport",
                  "Flexibele inzetbaarheid afgestemd op uw boekingskalender"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
               <h3 className="text-2xl font-bold text-primary mb-4">Bereken uw turn-over tarief</h3>
               <p className="text-stone-600 mb-8">
                 Weten wat het kost om uw vastgoed professioneel te laten beheren tussen boekingen door? Gebruik onze rekentool voor een direct en transparant overzicht.
               </p>
               <Link href="/zakelijke-tarieven" className="w-full block text-center bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors">
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