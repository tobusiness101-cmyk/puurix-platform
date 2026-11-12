import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { StickyContact } from "@/components/StickyContact";
import { constructMetadata } from "@/lib/seo";
import { company } from "@/lib/company";

export const metadata: Metadata = constructMetadata({
  title: "Horeca Schoonmaak & Scholen | Regio Barneveld & Amersfoort",
  description:
    "Ontdek waarom HACCP horeca-schoonmaak en GGD-proof schoonmaak voor scholen in regio Barneveld en Amersfoort vraagt om een gespecialiseerde aanpak.",
  path: "/kennisbank/horeca-en-scholen-schoonmaak",
});

export default function KennisbankArtikelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Horeca Schoonmaak en Schoonmaak voor Scholen & Kinderopvang in Regio Barneveld en Amersfoort",
    author: {
      "@type": "Organization",
      name: "Puurix",
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: "https://puurix.nl/logo.jpg",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#F5F3EE] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* HERO SECTION */}
      <section className="bg-[#0B2E27] pt-36 pb-20 text-white">
        <div className="container mx-auto px-6 max-w-[1000px] sm:px-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E6D3AC]">
            <MapPin className="h-4 w-4" />
            <span>Kennisbank • B2B Schoonmaak</span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Waarom "ogenschijnlijk schoon" een risico is voor uw <span className="text-[#E6D3AC]">reputatie.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Een diepgaande blik op gespecialiseerde HACCP-schoonmaak voor de horeca en GGD-proof schoonmaak voor scholen en kinderopvang in de Gelderse Vallei en regio Amersfoort.
          </p>
        </div>
      </section>

      {/* ARTIKEL CONTENT */}
      <article className="container mx-auto px-6 py-16 sm:px-8 sm:py-24 max-w-[1000px]">
        <div className="prose prose-lg max-w-none text-stone-600 prose-headings:font-display prose-headings:font-medium prose-headings:text-ink prose-a:text-accent prose-a:font-semibold">
          <p className="lead text-xl text-ink font-medium">
            Het is dinsdagochtend 06:15 uur in de bossen rondom Lunteren. Terwijl de nevel nog boven de Veluwe hangt en de eerste forenzen de A30 en A1 opdraaien richting Barneveld en Amersfoort, brandt het licht al in de grootkeuken van een conferentiehotel. De avond ervoor hebben honderdveertig zakelijke gasten hier gedineerd.
          </p>

          <p>
            Als de chef-kok om 07:00 uur binnenstapt om de voorbereidingen voor het ontbijt en de lunch te treffen, mag er geen spoortje vet meer te voelen zijn op de RVS-werkbanken. Geen aangekoekte randen bij de afzuiginstallatie. Geen muffe geur bij de afvoerputjes.
          </p>
          <p>
            Twee kilometer verderop, in een kinderdagverblijf en basisschool in Barneveld, speelt zich exact hetzelfde spannende moment af. Om 08:00 uur kruipen peuters over de PVC-vloer en raken honderden kinderhandjes dezelfde deurklinken, kranen en tafels aan.
          </p>

          <h2 className="text-3xl mt-12 mb-6">De aanpak: Van zichtbaar vuil naar microbiologische veiligheid</h2>
          <p>
            Wie twintig jaar geleden een schoonmaakbedrijf inhuurde voor een schoolgebouw in Leusden of een brasserie in Voorthuizen, beoordeelde het resultaat met het blote oog. Rook het lokaal naar citroen? Dan was het pand "schoon". Vandaag de dag weten we vanuit de microbiologie dat een ruimte die lekker ruikt nog steeds een bron van kruisbesmetting kan zijn.
          </p>

          <div className="bg-white border border-[#DDD9CC] p-8 my-10">
            <h3 className="text-xl font-semibold text-ink mb-4 mt-0">De 3 pijlers van Puurix voor B2B-schoonmaak:</h3>
            <ul className="space-y-3 m-0 p-0 list-none">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                <span><strong>Protocollaire zekerheid:</strong> Naleving van de HACCP-richtlijnen in keukens en horeca, en de GGD-hygiëne-eisen in het onderwijs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                <span><strong>Operationele onzichtbaarheid:</strong> Schoonmaken in de vroege ochtenduren, na sluitingstijd of tijdens schoolvakanties.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                <span><strong>Menselijke continuïteit:</strong> Werken met een vast, herkenbaar en ingewerkt team uit de eigen regio.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl mt-12 mb-6">Professionele Horeca Schoonmaak (HACCP)</h2>
          <p>
            De horeca in de Gelderse Vallei en regio Amersfoort draait op volle toeren. In de horeca wordt uw zaak op twee plekken tegelijk beoordeeld: voor de schermen door uw gasten, en achter de schermen door de Nederlandse Voedsel- en Warenautoriteit (NVWA).
          </p>
          <p>
            In een grootkeuken hecht zwevend bakvet zich als een onzichtbare film aan tegels en vloeren. Zonder de juiste alkalische ontvetters en schrobzuigkracht ontstaat er een <em>biofilm</em> — een beschermlaagje waaronder bacteriën zoals Salmonella en E. coli zich vermenigvuldigen. Onze teams voor horeca schoonmaak in Amersfoort, Barneveld, Lunteren en Ede werken buiten uw openingstijden om dit proces professioneel te doorbreken.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Schoonmaak voor Scholen &amp; Kinderopvang (GGD)</h2>
          <p>
            Een gemiddeld klaslokaal op een basisschool heeft een veel hogere bezettingsgraad dan een kantoor. Tel daar op een kinderdagverblijf (KDV) of buitenschoolse opvang (BSO) bij op dat jonge kinderen een immuunsysteem hebben dat nog in ontwikkeling is.
          </p>
          <p>
            De GGD toetst kinderopvanglocaties streng op gezondheid en veiligheid (hygiënerichtlijnen LCHV). Wij zorgen voor de dagelijkse klamvochtige reiniging en de strikte scheiding van schoonmaakmaterialen (kleurcodering per zone). Tijdens de schoolvakanties schakelen wij op voor de periodieke dieptereiniging en het machinaal conserveren van de vloeren.
          </p>

          <h2 className="text-3xl mt-16 mb-8">Waarin verschilt Puurix van traditionele schoonmaak?</h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#0B2E27] text-white">
                  <th className="p-4 border border-[#DDD9CC] font-semibold">Kenmerk</th>
                  <th className="p-4 border border-[#DDD9CC] font-semibold">Traditioneel / Eigen beheer</th>
                  <th className="p-4 border border-[#DDD9CC] font-semibold bg-accent">Puurix B2B Schoonmaak</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-4 border border-[#DDD9CC] font-medium text-ink">Protocollen</td>
                  <td className="p-4 border border-[#DDD9CC]">Weinig focus op HACCP of GGD.</td>
                  <td className="p-4 border border-[#DDD9CC] font-semibold text-accent">100% ingericht op HACCP, GGD &amp; WIP.</td>
                </tr>
                <tr className="bg-[#F5F3EE]">
                  <td className="p-4 border border-[#DDD9CC] font-medium text-ink">Personeel</td>
                  <td className="p-4 border border-[#DDD9CC]">Hoog verloop of kwetsbaar bij ziekte.</td>
                  <td className="p-4 border border-[#DDD9CC] font-semibold text-accent">Vast, ingewerkt team + achtervang.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border border-[#DDD9CC] font-medium text-ink">Werktijden</td>
                  <td className="p-4 border border-[#DDD9CC]">Tijdens kantooruren (storend).</td>
                  <td className="p-4 border border-[#DDD9CC] font-semibold text-accent">Vroege ochtend, avond &amp; schoolvakanties.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6">Klaar voor een locatie waar u geen omkijken naar heeft?</h2>
          <p>
            Bij Puurix beginnen we nooit met een standaardformulier op afstand, maar met een eerlijke kennismaking op uw locatie. We lopen samen door uw keuken, restaurant, leslokalen of opvanggroepen en brengen de kritische punten in kaart.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/zakelijke-tarieven"
              className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-hover no-underline"
            >
              Bereken uw zakelijke tarief <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center border border-[#DDD9CC] bg-white px-7 py-4 text-sm font-bold text-ink transition-colors hover:border-accent no-underline"
            >
              Kennismaking inplannen
            </Link>
          </div>
        </div>
      </article>

      {/* INTERNE LOKALE LINKS */}
      <section className="bg-white border-y border-[#DDD9CC] py-16">
        <div className="container mx-auto px-6 max-w-[1000px] sm:px-8 text-center">
          <h3 className="text-2xl font-medium text-ink mb-6">Actief in de Gelderse Vallei &amp; Amersfoort</h3>
          <p className="text-sm text-stone-600 mb-8 max-w-2xl mx-auto">
            Als regionale schoonmaakpartner werken wij met vaste teams in uw directe omgeving:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/schoonmaakbedrijf/barneveld" className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2 text-sm font-semibold text-ink hover:text-accent hover:border-accent transition-colors">
              Schoonmaakbedrijf Barneveld
            </Link>
            <Link href="/schoonmaakbedrijf/amersfoort" className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2 text-sm font-semibold text-ink hover:text-accent hover:border-accent transition-colors">
              Schoonmaakbedrijf Amersfoort
            </Link>
            <Link href="/schoonmaakbedrijf/ede" className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2 text-sm font-semibold text-ink hover:text-accent hover:border-accent transition-colors">
              Schoonmaakbedrijf Ede
            </Link>
          </div>
        </div>
      </section>

      <QuoteCalculator />
      <Footer />
      <StickyContact />
    </main>
  );
}