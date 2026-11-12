import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin, Building2 } from "lucide-react";
import { formatCityName, getClusterCities, getRegioInfo, regioData } from "@/lib/regios";
import { getService } from "@/lib/seo-services";
import { constructMetadata } from "@/lib/seo";
import { company } from "@/lib/company";
import { Footer } from "@/components/Footer";
import { Rekentool } from "@/components/Rekentool";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { StickyContact } from "@/components/StickyContact";

interface RegioPageConfig {
  serviceName: string;
  basePath: string;
}

const SERVICE_SLUG_MAP: Record<string, string> = {
  "kantoorschoonmaak": "kantoor-schoonmaken",
  "medische-schoonmaak": "medische-schoonmaak",
  "opleveringsschoonmaak": "opleveringsschoonmaak",
  "short-stay": "short-stay-schoonmaak",
};

const ALL_SERVICES = [
  { label: "Kantoorschoonmaak", path: "kantoorschoonmaak" },
  { label: "Medische & Praktijkschoonmaak", path: "medische-schoonmaak" },
  { label: "Opleveringsschoonmaak (Bouw)", path: "opleveringsschoonmaak" },
  { label: "Hotels, Recreatie & Short-stay", path: "short-stay" },
];

export function createRegioPage({ serviceName, basePath }: RegioPageConfig) {
  function generateStaticParams() {
    return Object.keys(regioData).map((regio) => ({ regio }));
  }

  function generateMetadata({ params }: { params: { regio: string } }): Metadata {
    const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
    if (!regioData[safeRegio]) return {};

    const city = formatCityName(safeRegio);
    const info = getRegioInfo(safeRegio);

    return constructMetadata({
      title: `${serviceName} ${city} | Zakelijke Schoonmaak`,
      description: `Professionele ${serviceName.toLowerCase()} in ${city} (${info.bedrijventerreinen})${
        info.omgeving.length > 0 ? ` en ${info.omgeving.slice(0, 3).join(", ")}` : ""
      }. Vaste schoonmaakploeg, heldere afspraken en offerte op maat.`,
      path: `/${basePath}/${safeRegio}`,
      robots: { index: true, follow: true },
    });
  }

  function RegioPage({ params }: { params: { regio: string } }) {
    const safeRegio = decodeURIComponent(params.regio).trim().toLowerCase();
    if (!regioData[safeRegio]) notFound();

    const city = formatCityName(safeRegio);
    const info = getRegioInfo(safeRegio);
    const serviceData = getService(SERVICE_SLUG_MAP[basePath] ?? basePath);
    const nearbyClusterSlugs = getClusterCities(info.cluster, safeRegio).slice(0, 6);

    const localizedFaqs = [
      ...(serviceData?.faq ?? []),
      {
        question: `Op welke bedrijventerreinen en locaties in ${city} voeren jullie ${serviceName.toLowerCase()} uit?`,
        answer: `Wij zijn in heel ${city} actief, waaronder op ${info.bedrijventerreinen}${
          info.omgeving.length > 0
            ? ` en in omliggende plaatsen zoals ${info.omgeving.join(", ")}`
            : ""
        }. Wij koppelen een vast, regionaal team aan uw pand.`,
      },
    ];

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: `${serviceName} ${city}`,
          serviceType: serviceName,
          provider: {
            "@type": "ProfessionalService",
            "@id": "https://puurix.nl/#business",
            name: company.name,
            telephone: company.telephone,
            email: company.email,
            url: company.url,
          },
          areaServed: [
            { "@type": "City", name: city },
            ...info.omgeving.map((place) => ({ "@type": "Place", name: place })),
          ],
          url: `https://puurix.nl/${basePath}/${safeRegio}`,
          description: `Professionele ${serviceName.toLowerCase()} in ${city} voor ${info.b2bFocus}.`,
        },
        {
          "@type": "FAQPage",
          mainEntity: localizedFaqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    };

    return (
      <main className="min-h-screen bg-[#F5F3EE] text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* HERO */}
        <section className="bg-[#0B2E27] pt-36 pb-20 text-white">
          <div className="container mx-auto max-w-[1150px] px-6 sm:px-8">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E6D3AC]">
              <MapPin className="h-4 w-4" />
              <span>Zakelijke schoonmaak • {city} &amp; omgeving</span>
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-medium leading-tight sm:text-6xl">
              {serviceName} in <span className="text-[#E6D3AC]">{city}</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Op zoek naar een betrouwbare B2B-partner voor {serviceName.toLowerCase()} in {city}?{" "}
              {info.highlight}
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2 border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-[#E6D3AC]">
              <Building2 className="h-4 w-4 shrink-0" />
              <span>
                <strong>Werkgebied {city}:</strong> {info.bedrijventerreinen}
                {info.omgeving.length > 0 && ` (+ ${info.omgeving.join(", ")})`}
              </span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="#rekentool"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#F5F3EE] px-7 text-sm font-bold text-accent transition-colors hover:bg-[#E6D3AC]"
              >
                Bereken direct uw tarief in {city}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center border border-[#F5F3EE]/70 px-7 text-sm font-bold text-[#F5F3EE] transition-colors hover:bg-[#F5F3EE] hover:text-accent"
              >
                Vrijblijvende offerte aanvragen
              </Link>
            </div>
          </div>
        </section>

        {/* VAKINHOUDELIJKE B2B CONTENT + BEDRIJVENTERREINEN */}
        <section className="border-b border-[#DDD9CC] bg-white py-20">
          <div className="container mx-auto max-w-[1150px] px-6 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Maatwerk voor {city}
                </span>
                <h2 className="mt-3 text-3xl font-medium text-ink sm:text-4xl">
                  {serviceData?.title ?? `${serviceName} afgestemd op uw locatie in ${city}`}
                </h2>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  {serviceData?.intro}{" "}
                  In {city} richten wij ons specifiek op {info.b2bFocus}. Of uw pand nu gevestigd is op{" "}
                  <strong>{info.bedrijventerreinen}</strong> of in het centrum van {city}: wij stemmen de
                  schoonmaakfrequentie en werktijden volledig af op uw bedrijfsvoering.
                </p>

                {serviceData && (
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {serviceData.sections.map((sec) => (
                      <article
                        key={sec.heading}
                        className="border border-[#DDD9CC] bg-[#F5F3EE] p-6"
                      >
                        <h3 className="text-xl font-semibold text-ink">{sec.heading}</h3>
                        <p className="mt-2 text-sm leading-6 text-stone-600">{sec.body}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              {/* CHECKLIST & LOKALE BELOFTE */}
              <aside className="flex flex-col justify-between border border-[#DDD9CC] bg-[#F5F3EE] p-7 sm:p-8 h-fit">
                <div>
                  <h3 className="text-2xl font-semibold text-ink">
                    Wat wij verzorgen in {city}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    {serviceData?.promise ?? "Een vaste schoonmaakploeg en duidelijke afspraken."}
                  </p>

                  {serviceData && (
                    <ul className="mt-6 space-y-3.5">
                      {serviceData.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-medium text-ink">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-8 border-t border-[#DDD9CC] pt-6">
                  <p className="text-xs uppercase tracking-wider font-bold text-accent">
                    Voor wie in {city}?
                  </p>
                  <p className="mt-1 text-sm text-stone-600">
                    {serviceData?.audience ?? info.b2bFocus}
                  </p>
                  <Link
                    href={`/schoonmaakbedrijf/${safeRegio}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    Bekijk ons volledige aanbod in {city} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* LOKALE VEELGESTELDE VRAGEN */}
        <section className="border-b border-[#DDD9CC] bg-[#F5F3EE] py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-3xl font-medium text-ink sm:text-4xl">
              Veelgestelde vragen over {serviceName.toLowerCase()} in {city}
            </h2>
            <div className="mt-8 space-y-4">
              {localizedFaqs.map((faq) => (
                <div key={faq.question} className="border border-[#DDD9CC] bg-white p-6">
                  <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KRUISLINKS: ANDERE DIENSTEN IN DEZE STAD + OMLIGGENDE STEDEN */}
        <section className="bg-white py-16 border-b border-[#DDD9CC]">
          <div className="container mx-auto max-w-[1150px] px-6 sm:px-8">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-medium text-ink">
                  Andere schoonmaakdiensten in {city}
                </h2>
                <p className="mt-2 text-sm text-stone-600">
                  Combineer of bekijk onze overige zakelijke specialisaties in {city}:
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {ALL_SERVICES.filter((s) => s.path !== basePath).map((s) => (
                    <Link
                      key={s.path}
                      href={`/${s.path}/${safeRegio}`}
                      className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {s.label} {city}
                    </Link>
                  ))}
                  <Link
                    href={`/schoonmaakbedrijf/${safeRegio}`}
                    className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:border-accent"
                  >
                    Schoonmaakbedrijf {city} (Overzicht)
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-ink">
                  {serviceName} in de regio rond {city}
                </h2>
                <p className="mt-2 text-sm text-stone-600">
                  Ons team is dagelijks actief in de directe omgeving van {city}:
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {nearbyClusterSlugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/${basePath}/${slug}`}
                      className="border border-[#DDD9CC] bg-[#F5F3EE] px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {serviceName} {formatCityName(slug)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Rekentool />
        <QuoteCalculator />
        <Footer />
        <StickyContact />
      </main>
    );
  }

  return { generateStaticParams, generateMetadata, Component: RegioPage };
}