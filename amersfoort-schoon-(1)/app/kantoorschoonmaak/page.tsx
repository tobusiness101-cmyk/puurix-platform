import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { TrendingUp, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Kantoorschoonmaak in Brabant, Gelderland en Utrecht",
  description: "Professionele kantoorschoonmaak voor bedrijven in Brabant, Gelderland en Utrecht. Een vast team, heldere afspraken en een offerte op maat.",
  path: "/kantoorschoonmaak",
});

export default function KantoorSchoonmaakPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
              Kantoorschoonmaak Oosterhout, Breda & Tilburg
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Een schoon kantoor dat <span className="text-accent">prettig werkt.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Met een vaste schoonmaakaanpak blijven werkplekken, sanitair en vergaderruimtes verzorgd. We stemmen de planning af op uw bedrijf en de ruimtes die u gebruikt.
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

      {/* Praktische voordelen van structureel kantooronderhoud */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
              Een verzorgde werkplek maakt verschil
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Een schone, opgeruimde omgeving geeft medewerkers en bezoekers een prettige ontvangst. Puurix maakt afspraken over taken, planning en aanspreekpunt vooraf duidelijk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kaart 1 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Tot 46% minder verzuim gerapporteerd</h3>
              <p className="text-stone-600 leading-relaxed">
                Een ISSA-whitepaper beschrijft tot 46% minder verzuim bij het Healthy Workplace Project. Dat programma combineerde gedragsverandering met hand- en oppervlakthygiëne; het is geen garantie voor elk kantoor of schoonmaakcontract. <a href="https://www.aics.com/wp-content/uploads/ISSA-Value-of-Clean-White-Paper.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">Lees de ISSA-whitepaper</a>.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">101% hogere testscores in Green+ omstandigheden</h3>
              <p className="text-stone-600 leading-relaxed">
                Een gecontroleerde studie met 24 deelnemers vond hogere cognitieve testscores bij meer ventilatie en lagere VOC-niveaus dan in de conventionele kantoorconditie. Dit meet binnenmilieu, niet schoonmaak alleen. <a href="https://dash.harvard.edu/entities/publication/73120379-1584-6bd4-e053-0100007fdf3b" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">Bekijk de Harvard-studie</a>.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Meer dan 1 op 3 noemt hygiëne als vertrekfactor</h3>
              <p className="text-stone-600 leading-relaxed">
                In een Ambius-enquête onder 3.000 Noord-Amerikaanse volwassenen noemde meer dan een derde slechte hygiëne en netheid als mogelijke reden om een baan te verlaten. De 76% in dezelfde enquête betrof een combinatie van factoren, waaronder werk-privébalans, luchtkwaliteit en mentale ondersteuning. <a href="https://pub-int.ambius.com/resources/insights/smarter-healthier-spaces-study" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">Bekijk de enquêteresultaten</a>.
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
                We beginnen met uw wensen, de indeling van het kantoor en de momenten waarop schoonmaak het beste uitkomt. Daarna leggen we de taken en frequentie vast, zodat u weet wat het team wanneer oppakt.
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
