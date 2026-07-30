import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Logo, Tekst & Werkgebied */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block cursor-pointer mb-6">
              <span className="font-sans text-4xl font-black tracking-tighter">
                <span className="text-ink">Puur</span>
                <span className="text-stone-600">ix</span>
              </span>
            </Link>
            <p className="text-stone-600 leading-relaxed text-sm mb-8">
              Hoogwaardige, datagedreven<br/>
              schoonmaakdiensten voor de zakelijke markt.<br/>
              Wij garanderen een vlekkeloze operatie.
            </p>

            <h4 className="font-bold text-ink tracking-widest text-xs mb-4 uppercase">Werkgebied</h4>
            <ul className="space-y-3 text-sm font-medium">
              
              {/* Lokale SEO Links */}
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={18} className="text-accent" />
                <Link href="/schoonmaakbedrijf/oosterhout" className="hover:text-accent transition-colors">
                  Oosterhout
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={18} className="text-accent" />
                <Link href="/schoonmaakbedrijf/breda" className="hover:text-accent transition-colors">
                  Breda
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={18} className="text-accent" />
                <Link href="/schoonmaakbedrijf/tilburg" className="hover:text-accent transition-colors">
                  Tilburg
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={18} className="text-accent" />
                <Link href="/schoonmaakbedrijf/etten-leur" className="hover:text-accent transition-colors">
                  Etten-Leur
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={18} className="text-accent" />
                <Link href="/schoonmaakbedrijf/teteringen" className="hover:text-accent transition-colors">
                  Teteringen
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={18} className="text-accent" />
                <Link href="/schoonmaakbedrijf/waalwijk" className="hover:text-accent transition-colors">
                  Waalwijk
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin size={18} className="text-accent" />
                <Link href="/schoonmaakbedrijf/kaatsheuvel" className="hover:text-accent transition-colors">
                  Kaatsheuvel
                </Link>
              </li>

            </ul>
          </div>

          {/* Kolom 2: Contact */}
          <div>
            <h4 className="font-bold text-ink text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+31624473102" className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-50 p-2 rounded-md border border-stone-100">
                  <Phone size={18} className="text-ink" />
                </div>
                <span className="font-medium text-sm text-ink">+31 6 24 47 31 02</span>
              </a>
              <a href="mailto:to.business101@gmail.com" className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-50 p-2 rounded-md border border-stone-100">
                  <Mail size={18} className="text-ink" />
                </div>
                <span className="font-medium text-sm text-ink">to.business101@gmail.com</span>
              </a>
              <a href="https://wa.me/31624473102" className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-50 p-2 rounded-md border border-stone-100">
                  <MessageCircle size={18} className="text-green-600" />
                </div>
                <span className="font-medium text-sm text-ink">WhatsApp Ons Direct</span>
              </a>
            </div>
          </div>

          {/* Kolom 3: Branches */}
          <div>
            <h4 className="font-bold text-ink text-lg mb-6">Branches</h4>
            <ul className="space-y-4 text-sm font-medium text-stone-600">
              <li>Kantoorpanden</li>
              <li>Short-stay & Airbnb</li>
              <li>Zorginstellingen</li>
              <li>Horeca & Recreatie</li>
              <li>Bouw Opleveringen</li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright & Links onderaan */}
        <div className="pt-8 border-t border-stone-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-400">
          <p>&copy; {new Date().getFullYear()} Puurix. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent transition-colors">Algemene Voorwaarden</Link>
            <Link href="#" className="hover:text-accent transition-colors">Privacybeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};