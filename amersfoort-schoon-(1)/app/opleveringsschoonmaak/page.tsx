import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { Testimonials } from "@/components/Testimonials";
import { ClipboardCheck, Camera, Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { formatCityName, regioData } from "@/lib/regios";

export const metadata = constructMetadata({
  title: "Opleveringsschoonmaak & Bouwschoonmaak",
  description:
    "Vlekkeloze opleveringsschoonmaak en eindschoonmaak na nieuwbouw, verbouw of renovatie voor aannemers, vastgoedbeheerders en bedrijven.",
  path: "/opleveringsschoonmaak",
});

export default function OpleveringsschoonmaakPage() {
  const regioSlugs = Object.keys(regioData);

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0B2E27] text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-white/10 text-[#E6D3AC] text-xs font-bold tracking-wider uppercase mb-6 border border-white/20">
              <Sparkles className="h-3.5 w-3.5" /> Bouw- &amp; Opleveringsschoonmaak
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Bouwproject afronden? Wij garanderen een <span className="text-[#E6D3AC]">vlekkeloze oplevering.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl">
              Voor aannemers, projectontwikkelaars, vastgoedbeheerders en bedrijven die verhuizen is de opleverdatum heilig. Puurix verzorgt de complete bouwschoonmaak en eindschoonmaak zodat uw pand direct instapklaar is bij de sleuteloverdracht.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/zakelijke-tarieven"
                className="bg-[#F5F3EE] text-accent font-bold py-4 px-8 hover:bg-[#E6D3AC] transition-colors flex items-center justify-center gap-2"
              >
                Bereken Direct Uw Prijs <ArrowRight size={20} />
              </Link>
              <Link
                href="/#contact"
                className="border border-white/50 text-white font-semibold py-4 px-8 hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Project bespreken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM PUURIX VOOR DE BOUW & VASTGOED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-medium text-primary sm:text-4xl mb-6">
              Uw visitekaartje bij de sleuteloverdracht
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Niets is zo storend als een opdrachtgever of huurder die tijdens de eindinspectie stuit op fijnstof, cementsluier of verfresten. Wij nemen die zorg volledig uit handen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <Clock className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Strakke planning rondom uw deadline</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Loopt de afbouw uit? Wij schakelen flexibel mee met uw uitvoerder of projectleider, zodat de eindschoonmaak altijd op tijd vóór de oplevering gereed is.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <ClipboardCheck className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Cementsluier &amp; fijnstof verwijderen</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Wij verwijderen veilig en vakkundig hardnekkig bouwstof, cementsluier op nieuw tegelwerk, kitresten, verfdruppels en beschermfolies op kozijnen en glas.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <Camera className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Eindcontrole &amp; fotorapportage</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Wij werken met vaste opleverchecklists per ruimte en kunnen de opgeleverde staat vastleggen voor uw bouwdossier of projectadministratie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAT WIJ DOEN SECTION */}
      <section className="py-24 bg-[#F5F3EE] border-t border-[#DDD9CC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-medium text-primary sm:text-4xl mb-6">
                Complete bouwschoonmaak voor kantoren, bedrijfshallen en woningbouw
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Of het nu gaat om een gerenoveerde kantoorverdieping, een nieuw bedrijfspand of een serie opgeleverde woningen: wij leveren het project volledig gebruiksklaar op.
              </p>

              <ul className="space-y-4">
                {[
                  "Volledig fijnstofvrij maken van wanden, kozijnen, plinten, kabelgoten en vloeren",
                  "Vakkundig verwijderen van cementsluier en voegresten in sanitaire groepen",
                  "Streeploze glasbewassing (inclusief het veilig verwijderen van stickers en folie)",
                  "Dieptereiniging van nieuw geplaatste pantry's, keukens en toiletten",
                  "Machinaal of handmatig reinigen van bedrijfsvloeren, PVC, tegels en tapijt",
                  "Bezemschoon of sleutelklaar opleveren conform de eisen van het bestek",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 bg-white p-8 md:p-12 border border-[#DDD9CC]">
              <h3 className="text-2xl font-semibold text-primary mb-4">Wat kost een zakelijke opleveringsschoonmaak?</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Geen verrassingen achteraf voor uw projectbegroting. Bereken direct een eenmalige richtprijs per m² in onze online rekentool of vraag een schouw op de bouwplaats aan.
              </p>
              <Link
                href="/zakelijke-tarieven"
                className="w-full block text-center bg-accent text-white font-bold py-4 hover:bg-accent-hover transition-colors"
              >
                Start de Rekentool
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOKALE REGIO-LINKS VOOR OPLEVERINGSSCHOONMAAK */}
      <section className="py-20 bg-white border-t border-[#DDD9CC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-medium text-primary mb-3">
            Opleveringsschoonmaak per stad &amp; regio
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Bekijk onze lokale bouwschoonmaak en opleveringsservice in uw gemeente:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {regioSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/opleveringsschoonmaak/${slug}`}
                className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2 text-xs sm:text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Opleveringsschoonmaak {formatCityName(slug)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
      <StickyContact />
    </div>
  );
}