import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { TrendingUp, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function KantoorSchoonmaakPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
              Kantoorschoonmaak Oosterhout, Breda & Tilburg
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Productiviteit Verhogen? Schone Werkplek Geeft <span className="text-accent">+15% Focus.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Kantoorschoonmaak is geen kostenpost, maar een strategische investering. Puurix Schoonmaak transformeert uw kantoor van een verzuimrisico naar een productieve, ultra-schone werkomgeving.
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

      {/* ROI & DATA SECTION (Jouw Copywriting!) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
              De Onzichtbare Kosten Van Een Stoffige Werkplek
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Een gemiddeld bureau bevat 400 keer meer bacteriën dan een toiletbril. Dit leidt direct tot uitval en verloren werktijd. Ontdek de harde ROI van een schoon kantoor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kaart 1 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Verlaag Ziekteverzuim met 46%</h3>
              <p className="text-stone-600 leading-relaxed">
                Stijgend ziekteverzuim kost u duizenden euro's. Professionele kantoordesinfectie en gerichte oppervlaktehygiëne dringen het verzuim drastisch terug.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">+101% Cognitieve Scores</h3>
              <p className="text-stone-600 leading-relaxed">
                Uit Harvard-onderzoek blijkt dat goede luchtkwaliteit en lage stofconcentraties leiden tot aanzienlijk hogere testscores. Wij zorgen voor schone lucht en focus.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Voorkom Talentverlies</h3>
              <p className="text-stone-600 leading-relaxed">
                Wist u dat 42% van de werknemers ontslag overweegt bij structureel slechte hygiëne? 76% eist het. Een schoon kantoor is een direct teken van goed werkgeverschap.
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
                Uw kantoor, vlekkeloos en representatief. Elke dag weer.
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Naast de harde data over productiviteit en gezondheid, zorgen we er simpelweg voor dat uw pand er altijd perfect uitziet voor uw medewerkers en bezoekers. Geen visuele rommel meer die uw team mentaal uitput.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Grondige reiniging van werkplekken, bureaus en monitoren",
                  "Sanitairreiniging met focus op desinfectie en hygiëne",
                  "Stofvrij maken van vergaderruimtes en ontvangsthallen",
                  "Vloeronderhoud (stofzuigen, dweilen, vlekverwijdering)",
                  "Legen van prullenbakken en afvalverwerking",
                  "Vaste, betrouwbare schoonmakers zonder wurgcontracten"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
               <h3 className="text-2xl font-bold text-primary mb-4">Wat kost onze B2B kantoorschoonmaak?</h3>
               <p className="text-stone-600 mb-8">
                 Geen vage offertetrajecten of verborgen kosten. Gebruik onze transparante rekentool en zie direct wat een schone, productieve werkplek voor uw kantoor kost.
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