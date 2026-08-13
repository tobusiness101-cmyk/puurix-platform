import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { ShieldCheck, Stethoscope, CheckCircle2, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

export default function TandartspraktijkSchoonmaakPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
              Medische Schoonmaak Oosterhout, Breda & Tilburg
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              WIP-Richtlijnen Naleven? <br/>Wij Garanderen Een <span className="text-accent">Steriele Praktijk.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              In de zorg draait alles om patiëntveiligheid en het voorkomen van kruisbesmetting. Puurix ontzorgt uw tandartspraktijk of zorginstelling met gespecialiseerde zakelijke schoonmaak op het allerhoogste niveau.
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

      {/* WAAROM PUURIX IN DE ZORG */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
              Geen Ruimte Voor Fouten In De Behandelkamer
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Een reguliere schoonmaker is niet getraind voor de medische sector. Wij begrijpen de protocollen en werken met kleurgecodeerde materialen om elke vorm van besmetting uit te sluiten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kaart 1 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">100% WIP-Conform</h3>
              <p className="text-stone-600 leading-relaxed">
                Onze processen sluiten naadloos aan op de Richtlijn Infectiepreventie. Van de wachtkamer tot de behandelstoel, wij garanderen audit-proof resultaten.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Activity className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Kruisbesmetting Uitgesloten</h3>
              <p className="text-stone-600 leading-relaxed">
                Door strikt te werken met gescheiden microvezelsystemen en professionele medische desinfectiemiddelen voorkomen we de verspreiding van bacteriën en virussen.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Focus Op Patiëntenzorg</h3>
              <p className="text-stone-600 leading-relaxed">
                Uw assistenten en artsen zijn er voor de patiënten, niet voor de schoonmaak. Wij nemen de volledige facilitaire zorg uit handen, zodat uw team optimaal presteert.
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
                Onze medische schoonmaakprotocollen in de praktijk
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Wij werken uitsluitend met zakelijke B2B-contracten voor praktijken en zorginstellingen. Daardoor weten we precies wat er nodig is om uw pand elke ochtend weer steriel en veilig te openen voor uw patiënten.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Desinfecteren van alle contactoppervlakken (deurklinken, balies, pinapparaten)",
                  "Steriel reinigen van behandelkamers volgens de strengste hygiëne-eisen",
                  "Sanitairreiniging met diepgaande bacteriële bestrijding",
                  "Vloeronderhoud geschikt voor medische omgevingen",
                  "Nette en hygiënische presentatie van de wachtruimte",
                  "Vaste, herkenbare schoonmakers die de protocollen kennen"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
               <h3 className="text-2xl font-bold text-primary mb-4">Wat kost praktijkschoonmaak op maat?</h3>
               <p className="text-stone-600 mb-8">
                 Elke praktijk is anders, maar hygiëne is nooit een optie. Gebruik onze transparante rekentool om direct te zien wat een veilig en steriel pand voor u kost.
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