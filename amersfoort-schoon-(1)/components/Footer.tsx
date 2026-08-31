import { Phone, MessageCircle, Mail } from "lucide-react";
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Logo, Tekst & Werkgebied Kaart */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block cursor-pointer mb-6">
              <span className="font-sans text-4xl font-black tracking-tighter">
                <span className="text-ink">Puur</span>
                <span className="text-stone-600">ix</span>
              </span>
            </Link>
            <p className="text-stone-600 leading-relaxed text-sm mb-6">
              Hoogwaardige, datagedreven<br/>
              schoonmaakdiensten voor de zakelijke en particuliere markt.<br/>
              Wij garanderen een vlekkeloze operatie.
            </p>

            <h4 className="font-bold text-ink tracking-widest text-xs mb-3 uppercase">Actief In</h4>
            
            {/* TIJDELIJK VERBORGEN: Haal de {/* en */} weg zodra werkgebied.png in je public map staat */}
            {/* 
            <div className="mb-4 overflow-hidden rounded-xl border border-stone-200 shadow-sm max-w-[240px]">
              <img 
                src="/werkgebied.png" 
                alt="Werkgebied Puurix: Noord-Brabant, Gelderland & Utrecht" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            */}

            {/* Subtiele provincie-tekst eronder */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
              <span>Noord-Brabant</span>
              <span className="text-stone-300">•</span>
              <span>Gelderland</span>
              <span className="text-stone-300">•</span>
              <span>Utrecht</span>
            </div>
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
              <a href="mailto:info@puurix.nl" className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-50 p-2 rounded-md border border-stone-100">
                  <Mail size={18} className="text-ink" />
                </div>
                <span className="font-medium text-sm text-ink">info@puurix.nl</span>
              </a>
              <a href="https://wa.me/31624473102" className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-50 p-2 rounded-md border border-stone-100">
                  <MessageCircle size={18} className="text-green-600" />
                </div>
                <span className="font-medium text-sm text-ink">WhatsApp Ons Direct</span>
              </a>
            </div>
          </div>

          {/* Kolom 3: Branches & Diensten (SEO Geoptimaliseerd) */}
          <div>
            <h4 className="font-bold text-ink text-lg mb-6">Onze Diensten</h4>
            <ul className="space-y-4 text-sm font-medium text-stone-600">
              <li>
                <Link href="/kantoorschoonmaak" className="hover:text-accent transition-colors">
                  Kantoorschoonmaak
                </Link>
              </li>
              <li>
                <Link href="/medische-schoonmaak" className="hover:text-accent transition-colors">
                  Praktijken & Zorginstellingen
                </Link>
              </li>
              <li>
                <Link href="/opleveringsschoonmaak" className="hover:text-accent transition-colors">
                  Opleveringsschoonmaak
                </Link>
              </li>
              <li>
                <Link href="/short-stay" className="hover:text-accent transition-colors">
                  Short-stay & Airbnb
                </Link>
              </li>
              <li>
                <Link href="/particuliere-schoonmaak" className="hover:text-accent transition-colors">
                  Particuliere Schoonmaak
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright & Links onderaan */}
        <div className="pt-8 border-t border-stone-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-400">
          <p>&copy; {new Date().getFullYear()} Puurix. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
           <Link className="hover:text-accent transition-colors" href="/algemene-voorwaarden">
              Algemene Voorwaarden
            </Link>
            <Link className="hover:text-accent transition-colors" href="/privacybeleid">
              Privacybeleid
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};