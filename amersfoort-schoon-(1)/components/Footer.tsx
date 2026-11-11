import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { company } from "@/lib/company";

const services = [
  { label: "Kantoorschoonmaak", href: "/kantoorschoonmaak" },
  { label: "Zorg & praktijken", href: "/medische-schoonmaak" },
  { label: "Opleveringsschoonmaak", href: "/opleveringsschoonmaak" },
  { label: "Short-stay", href: "/short-stay" },
  { label: "Particuliere schoonmaak", href: "/particuliere-schoonmaak" },
  { label: "Werkgebied", href: "/werkgebied" },
];

export const Footer = () => (
  <footer className="border-t border-white/15 bg-[#131D35] text-[#F5F3EE]">
    <div className="container mx-auto grid max-w-[1300px] gap-12 px-6 py-14 sm:px-8 md:grid-cols-3 lg:px-10">
      <div>
        <Link href="/" className="inline-block font-display text-3xl font-semibold tracking-tight text-white">
          Puurix<span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-gold align-baseline" />
        </Link>
        <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
          Professionele schoonmaak voor zakelijke en particuliere klanten. Een vast team, heldere afspraken en zichtbaar resultaat.
        </p>
        <div className="mt-7 flex items-start gap-3 text-sm text-white/70">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E6D3AC]" />
          Noord-Brabant, Gelderland & Utrecht
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-white">Onze diensten</h2>
        <ul className="mt-5 space-y-3 text-sm text-white/70">
          {services.map((service) => (
            <li key={service.href}>
              <Link href={service.href} className="transition-colors hover:text-[#E6D3AC]">{service.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold text-white">Contact</h2>
        <ul className="mt-5 space-y-4 text-sm">
          <li>
            <a href="tel:+31624473102" className="inline-flex items-center gap-3 text-white/75 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-[#E6D3AC]" /> +31 6 24 47 31 02
            </a>
          </li>
          <li>
            <a href="mailto:info@puurix.nl" className="inline-flex items-center gap-3 text-white/75 transition-colors hover:text-white">
              <Mail className="h-4 w-4 text-[#E6D3AC]" /> info@puurix.nl
            </a>
          </li>
          <li>
            <a href="https://wa.me/31624473102" className="inline-flex items-center gap-3 text-white/75 transition-colors hover:text-white">
              <MessageCircle className="h-4 w-4 text-[#E6D3AC]" /> WhatsApp
            </a>
          </li>
        </ul>
        <p className="mt-6 text-xs text-white/50">KvK {company.registrationNumber}</p>
      </div>
    </div>

    <div className="border-t border-white/15">
      <div className="container mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/55 sm:px-8 md:flex-row md:text-left lg:px-10">
        <p>&copy; {new Date().getFullYear()} Puurix. Alle rechten voorbehouden.</p>
        <div className="flex gap-5">
          <Link className="transition-colors hover:text-white" href="/algemene-voorwaarden">Algemene voorwaarden</Link>
          <Link className="transition-colors hover:text-white" href="/privacybeleid">Privacybeleid</Link>
        </div>
      </div>
    </div>
  </footer>
);
