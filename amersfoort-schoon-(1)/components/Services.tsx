import { Activity, ArrowRight, Building2, Coffee, Sparkles, Tent, Briefcase } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Kantoren",
    description: "Dagelijks of wekelijks onderhoud van werkplekken, sanitair en vergaderruimtes.",
    icon: Briefcase,
    href: "/kantoorschoonmaak",
  },
  {
    title: "Horeca & hotels",
    description: "Een verzorgde lobby, keuken en gastenkamer, afgestemd op uw planning.",
    icon: Coffee,
    href: "/short-stay",
  },
  {
    title: "Zorg & praktijken",
    description: "Nauwkeurige en discrete schoonmaak met aandacht voor hygiëne en protocol.",
    icon: Activity,
    href: "/medische-schoonmaak",
  },
  {
    title: "Oplevering",
    description: "Bouw- en opleveringsschoonmaak voor een nette, sleutelklaar opgeleverde ruimte.",
    icon: Sparkles,
    href: "/opleveringsschoonmaak",
  },
  {
    title: "Short-stay & recreatie",
    description: "Frisse accommodaties en een betrouwbare wisselschoonmaak voor elke nieuwe gast.",
    icon: Tent,
    href: "/short-stay",
  },
  {
    title: "Bedrijfspanden & entree",
    description: "Schone algemene ruimtes die prettig zijn voor medewerkers, bezoekers en bewoners.",
    icon: Building2,
    href: "/#contact",
  },
];

export const Services = () => (
  <section id="diensten" className="border-y border-[#DDD9CC] bg-white">
    <div className="container mx-auto flex max-w-[1300px] flex-col gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Diensten</span>
        <h2 className="mt-4 text-4xl font-medium leading-[1.04] text-ink sm:text-5xl lg:text-[3.75rem]">
          Schoonmaak voor plekken waar het ertoe doet.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group flex min-h-[285px] flex-col gap-5 border-t-2 border-accent bg-[#F5F3EE] p-7 transition-transform duration-200 hover:-translate-y-1 sm:p-8"
            >
              <Icon aria-hidden="true" className="h-9 w-9 text-accent" strokeWidth={1.6} />
              <div>
                <h3 className="text-2xl font-semibold text-ink sm:text-[1.75rem]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-base sm:leading-7">{service.description}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 border-t border-[#DDD9CC] pt-4 text-sm font-semibold text-accent">
                Bekijk de dienst
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);
