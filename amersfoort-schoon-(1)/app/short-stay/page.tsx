import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/StickyContact";
import { Testimonials } from "@/components/Testimonials";
import { Star, Clock, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { formatCityName, regioData } from "@/lib/regios";

export const metadata = constructMetadata({
  title: "Hotelschoonmaak, Vakantieparken & Short-stay",
  description:
    "Professionele housekeeping, hotelschoonmaak en wisselschoonmaak voor hotels, vakantieparken, B&B's en zakelijke short-stay verhuurders.",
  path: "/short-stay",
});

export default function ShortStaySchoonmaakPage() {
  const regioSlugs = Object.keys(regioData);

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#0B2E27] text-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-white/10 text-[#E6D3AC] text-xs font-bold tracking-wider uppercase mb-6 border border-white/20">
              <Star className="h-3.5 w-3.5" /> Hotels, Vakantieparken &amp; Short-stay
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Maximale gastwaardering door <span className="text-[#E6D3AC]">vlekkeloze kamers &amp; wissels.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl">
              Voor hotels, recreatieparken, groepsaccommodaties en zakelijke short-stay verhuurders bepaalt hygiëne direct de reviewscore. Puurix verzorgt betrouwbare housekeeping, wisselschoonmaak en het onderhoud van algemene ruimtes en lobby&apos;s.
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
                Samenwerking bespreken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM PUURIX VOOR HOTELS & RECREATIE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-medium text-primary sm:text-4xl mb-6">
              Betrouwbare uitvoering voor hospitality &amp; verblijfsrecreatie
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Of u nu een hotel runt, een vakantiepark of groepsaccommodatie beheert, of zakelijke short-stay appartementen verhuurt: elke nieuwe gast verwacht een frisse, tot in de puntjes verzorgde ruimte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <Star className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Consistente hotelkwaliteit</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Netheid is de belangrijkste factor in gastbeoordelingen op Booking.com, Google en Airbnb. Onze teams werken met vaste kamer- en bungalowchecklists voor een uniforme oplevering.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <Clock className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Strakke wisseltijden (Check-out / Check-in)</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Op wisseldagen (zoals maandag en vrijdag op vakantieparken of dagelijkse hotelwissels tussen 11:00 en 15:00 uur) schalen wij gericht op zodat elke eenheid stipt op tijd gereed is.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-8 border border-[#DDD9CC]">
              <div className="bg-white w-14 h-14 border border-[#DDD9CC] flex items-center justify-center mb-6">
                <Sparkles className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Kamers, lobby&apos;s &amp; faciliteiten</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Naast gastenkamers en vakantiewoningen verzorgen wij ook de dagelijkse reiniging van recepties, ontbijtzalen, vergaderruimtes en centrale sanitaire voorzieningen.
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
                Complete housekeeping &amp; turnover-service voor beheerders
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Wij werken voor hotels, boutique B&amp;B&apos;s, recreatieparken, groepsaccommodaties en zakelijke short-stay portefeuilles. Onze planning sluit naadloos aan op uw reserveringssysteem en receptie.
              </p>

              <ul className="space-y-4">
                {[
                  "Grondige reiniging en desinfectie van badkamers, sanitair, keukens en leefruimtes",
                  "Linnenwissel en het strak opmaken van bedden volgens uw huisstandaard",
                  "Onderhoud van algemene hotelruimtes: lobby, gangen, trappenhuizen en ontbijtruimte",
                  "Aanvullen van gastenartikelen (zeep, koffie/thee, papierwaren) volgens afspraak",
                  "Directe terugkoppeling bij geconstateerde schade of technische mankementen",
                  "Flexibele capaciteit tijdens piekperiodes, weekenden en vakantieseizoenen",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 bg-white p-8 md:p-12 border border-[#DDD9CC]">
              <h3 className="text-2xl font-semibold text-primary mb-4">Bereken uw zakelijke tarief</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Benieuwd naar de mogelijkheden voor structurele housekeeping, periodieke dieptereiniging van hotelkamers of wisselschoonmaak? Bereken direct een indicatie of plan een kennismaking op locatie.
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

      {/* LOKALE REGIO-LINKS VOOR HOTELS & SHORT-STAY */}
      <section className="py-20 bg-white border-t border-[#DDD9CC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-medium text-primary mb-3">
            Hotel-, recreatie- &amp; short-stay schoonmaak per regio
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Kies uw gemeente voor onze lokale wisselschoonmaak en hospitality-diensten:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {regioSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/short-stay/${slug}`}
                className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2 text-xs sm:text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Hotel &amp; Short-stay {formatCityName(slug)}
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