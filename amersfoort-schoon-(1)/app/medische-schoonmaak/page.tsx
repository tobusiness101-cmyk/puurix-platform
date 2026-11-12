import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { Testimonials } from "@/components/Testimonials";
import { ShieldCheck, Stethoscope, CheckCircle2, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { formatCityName, regioData } from "@/lib/regios";

export const metadata = constructMetadata({
  title: "Medische Schoonmaak & Praktijkschoonmaak (WIP)",
  description:
    "Gespecialiseerde schoonmaak voor tandartspraktijken, huisartsen en zorginstellingen conform de WIP-richtlijnen voor infectiepreventie.",
  path: "/medische-schoonmaak",
});

export default function MedischeSchoonmaakPage() {
  const regioSlugs = Object.keys(regioData);

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0B2E27] text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-white/10 text-[#E6D3AC] text-xs font-bold tracking-wider uppercase mb-6 border border-white/20">
              <Stethoscope className="h-3.5 w-3.5" /> Medische &amp; Praktijkschoonmaak
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Hygiëne volgens protocol voor een <span className="text-[#E6D3AC]">veilige praktijk.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl">
              In de mondzorg en eerstelijnszorg draait alles om patiëntveiligheid en het uitsluiten van kruisbesmetting. Puurix ontzorgt uw tandartspraktijk, huisartsenpost of kliniek met vaste schoonmaakteams die werken volgens strikte hygiëne- en WIP-richtlijnen.
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
                Adviesgesprek aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM PUURIX IN DE ZORG */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-medium text-primary sm:text-4xl mb-6">
              Geen ruimte voor fouten rondom de behandelkamer
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Een medische praktijk vraagt om een andere discipline dan een regulier kantoor. Wij werken met kleurgecodeerde microvezelsystemen en vaste protocollen per ruimte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Conform WIP- &amp; SRI-richtlijnen</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Onze werkinstructies sluiten aan op de geldende richtlijnen voor infectiepreventie in onder meer mondzorgpraktijken, fysiotherapiepraktijken en gezondheidscentra.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <Activity className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Kruisbesmetting voorkomen</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Door strikt gescheiden materialen te gebruiken voor sanitair, wachtruimtes en algemene behandelzones voorkomen we de overdracht van micro-organismen.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <Stethoscope className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Focus op patiëntenzorg</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Uw behandelaars en assistenten kunnen zich volledig richten op de patiënt, terwijl ons vaste team buiten spreekuren zorgt voor een frisse en verzorgde praktijk.
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
                Onze medische schoonmaakprotocollen in de praktijk
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Vooraf inventariseren we samen met de praktijkmanager de kritische en niet-kritische zones, zodat exact vastligt welke werkzaamheden ons team uitvoert en wat bij de behandelassistenten blijft.
              </p>

              <ul className="space-y-4">
                {[
                  "Reinigen en desinfecteren van afgesproken contactoppervlakken (deurklinken, balies, leuningen)",
                  "Zorgvuldig vloer- en oppervlakteonderhoud in behandelkamers en sterilisatieruimtes",
                  "Diepgaande sanitaire reiniging voor zowel patiënten- als personeelstoiletten",
                  "Representatieve en stofvrije presentatie van wachtkamer, receptie en entree",
                  "Werkzaamheden buiten patiënturen met een vast, gescreend en herkenbaar team",
                  "Vaste logboekregistratie en periodieke kwaliteitscontrole",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 bg-white p-8 md:p-12 border border-[#DDD9CC]">
              <h3 className="text-2xl font-semibold text-primary mb-4">Wat kost praktijkschoonmaak op maat?</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Elke praktijk heeft een eigen indeling en bezettingsgraad. Gebruik onze transparante rekentool voor een directe prijsindicatie op basis van uw vierkante meters en gewenste frequentie.
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

      {/* LOKALE REGIO-LINKS VOOR MEDISCHE SCHOONMAAK */}
      <section className="py-20 bg-white border-t border-[#DDD9CC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-medium text-primary mb-3">
            Medische &amp; praktijkschoonmaak per stad
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Kies uw plaats voor onze dienstverlening aan tandartspraktijken, huisartsen en zorglocaties:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {regioSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/medische-schoonmaak/${slug}`}
                className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2 text-xs sm:text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Medische schoonmaak {formatCityName(slug)}
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