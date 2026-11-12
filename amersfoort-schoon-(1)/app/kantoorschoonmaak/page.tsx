import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { Testimonials } from "@/components/Testimonials";
import { TrendingUp, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { formatCityName, regioData } from "@/lib/regios";

export const metadata = constructMetadata({
  title: "Kantoorschoonmaak Amersfoort, Barneveld, Dordrecht & Brabant",
  description:
    "Professionele kantoorschoonmaak voor bedrijven in regio Amersfoort, Barneveld (Gelderse Vallei), Dordrecht (Drechtsteden) en Noord-Brabant. Vaste schoonmaakploeg en heldere prijzen.",
  path: "/kantoorschoonmaak",
});

export default function KantoorSchoonmaakPage() {
  const regioSlugs = Object.keys(regioData);

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0B2E27] text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-white/10 text-[#E6D3AC] text-xs font-bold tracking-wider uppercase mb-6 border border-white/20">
              <MapPin className="h-3.5 w-3.5" /> Kantoorschoonmaak • Gelderse Vallei, Amersfoort, Drechtsteden &amp; Brabant
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Een schoon kantoor dat <span className="text-[#E6D3AC]">prettig werkt.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl">
              Met een vaste schoonmaakaanpak blijven werkplekken, sanitair, ontvangstruimtes en vergaderzalen dagelijks of wekelijks verzorgd. Wij stemmen onze werktijden af op uw kantoor in regio Amersfoort, Barneveld, Dordrecht of Brabant.
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
                Offerte op maat aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische voordelen van structureel kantooronderhoud */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-medium text-primary sm:text-4xl mb-6">
              Een verzorgde werkplek maakt verschil
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Een schone, opgeruimde omgeving geeft medewerkers en bezoekers een prettige ontvangst. Puurix maakt afspraken over taken, planning en aanspreekpunt vooraf duidelijk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <TrendingUp className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Tot 46% minder verzuim gerapporteerd</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Een ISSA-whitepaper beschrijft tot 46% minder verzuim bij het Healthy Workplace Project. Dat programma combineerde gedragsverandering met hand- en oppervlakthygiëne; het is geen garantie voor elk kantoor of schoonmaakcontract.{" "}
                <a href="https://www.aics.com/wp-content/uploads/ISSA-Value-of-Clean-White-Paper.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">
                  Lees de ISSA-whitepaper
                </a>.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">101% hogere testscores in Green+ omstandigheden</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Een gecontroleerde studie met 24 deelnemers vond hogere cognitieve testscores bij meer ventilatie en lagere VOC-niveaus dan in de conventionele kantoorconditie. Dit meet binnenmilieu, niet schoonmaak alleen.{" "}
                <a href="https://dash.harvard.edu/entities/publication/73120379-1584-6bd4-e053-0100007fdf3b" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">
                  Bekijk de Harvard-studie
                </a>.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <HeartHandshake className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Meer dan 1 op 3 noemt hygiëne als vertrekfactor</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                In een Ambius-enquête onder 3.000 Noord-Amerikaanse volwassenen noemde meer dan een derde slechte hygiëne en netheid als mogelijke reden om een baan te verlaten.{" "}
                <a href="https://pub-int.ambius.com/resources/insights/smarter-healthier-spaces-study" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline">
                  Bekijk de enquêteresultaten
                </a>.
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
                Uw kantoor, vlekkeloos en representatief. Elke week weer.
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We beginnen met uw wensen, de indeling van het kantoor en de momenten waarop schoonmaak het beste uitkomt. Daarna leggen we de taken en frequentie vast, zodat u weet wat ons vaste team wanneer oppakt.
              </p>

              <ul className="space-y-4">
                {[
                  "Grondige reiniging van werkplekken, bureaus, vergadertafels en contactpunten",
                  "Sanitairreiniging en pantry-onderhoud met focus op frisheid en hygiëne",
                  "Stofvrij houden van vergaderruimtes, entrees en ontvangsthallen",
                  "Vloeronderhoud (stofzuigen, wissen, dweilen en vlekverwijdering)",
                  "Legen van prullenbakken en gescheiden afvalverwerking",
                  "Vaste, herkenbare schoonmakers en heldere afspraken zonder wurgcontracten",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 bg-white p-8 md:p-12 border border-[#DDD9CC]">
              <h3 className="text-2xl font-semibold text-primary mb-4">Wat kost onze B2B kantoorschoonmaak?</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Geen vage offertetrajecten of verborgen kosten. Gebruik onze online rekentool en zie direct een richtprijs voor uw kantooroppervlakte en gewenste schoonmaakfrequentie.
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

      {/* LOKALE REGIO-LINKS VOOR KANTOORSCHOONMAAK */}
      <section className="py-20 bg-white border-t border-[#DDD9CC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-medium text-primary mb-3">
            Kantoorschoonmaak per stad &amp; regio
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Kies uw vestigingsplaats voor informatie over onze kantoorschoonmaak op lokale bedrijventerreinen:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {regioSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/kantoorschoonmaak/${slug}`}
                className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2 text-xs sm:text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Kantoorschoonmaak {formatCityName(slug)}
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