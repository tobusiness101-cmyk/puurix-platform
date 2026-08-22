import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Logo, Tekst & Werkgebied */}
          <div className="flex flex-col">
            <Link className="inline-block cursor-pointer mb-6" href="/">
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
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin className="text-accent" size="{18}"/>
                <Link className="hover:text-accent transition-colors" href="/schoonmaakbedrijf/oosterhout">
                  Oosterhout
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin className="text-accent" size="{18}"/>
                <Link className="hover:text-accent transition-colors" href="/schoonmaakbedrijf/breda">
                  Breda
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin className="text-accent" size="{18}"/>
                <Link className="hover:text-accent transition-colors" href="/schoonmaakbedrijf/tilburg">
                  Tilburg
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin className="text-accent" size="{18}"/>
                <Link className="hover:text-accent transition-colors" href="/schoonmaakbedrijf/etten-leur">
                  Etten-Leur
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin className="text-accent" size="{18}"/>
                <Link className="hover:text-accent transition-colors" href="/schoonmaakbedrijf/teteringen">
                  Teteringen
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin className="text-accent" size="{18}"/>
                <Link className="hover:text-accent transition-colors" href="/schoonmaakbedrijf/waalwijk">
                  Waalwijk
                </Link>
              </li>
              <li className="flex items-center gap-3 text-stone-600">
                <MapPin className="text-accent" size="{18}"/>
                <Link className="hover:text-accent transition-colors" href="/schoonmaakbedrijf/kaatsheuvel">
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
                  <Phone className="text-ink" size="{18}"/>
                </div>
                <span className="font-medium text-sm text-ink">+31 6 24 47 31 02</span>
              </a>
              <a href="mailto:puurixschoonmaak@gmail.com" className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-50 p-2 rounded-md border border-stone-100">
                  <Mail className="text-ink" size="{18}"/>
                </div>
                <span className="font-medium text-sm text-ink">puurixschoonmaak@gmail.com</span>
              </a>
              <a href="[https://wa.me/31624473102](https://wa.me/31624473102)" className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="bg-stone-50 p-2 rounded-md border border-stone-100">
                  <MessageCircle className="text-green-600" size="{18}"/>
                </div>
                <span className="font-medium text-sm text-ink">WhatsApp Ons Direct</span>
              </a>
            </div>
          </div>

          {/* Kolom 3: Branches & Diensten */}
          <div>
            <h4 className="font-bold text-ink text-lg mb-6">Onze Diensten</h4>
            <ul className="space-y-4 text-sm font-medium text-stone-600">
              <li>
                <Link className="hover:text-accent transition-colors" href="/kantoorschoonmaak">
                  Kantoorschoonmaak
                </Link>
              </li>
              <li>
                <Link className="hover:text-accent transition-colors" href="/tandartspraktijk-schoonmaak">
                  Praktijken & Zorginstellingen
                </Link>
              </li>
              <li>
                <Link className="hover:text-accent transition-colors" href="/opleveringsschoonmaak">
                  Opleveringsschoonmaak
                </Link>
              </li>
              <li>
                <Link className="hover:text-accent transition-colors" href="/short-stay">
                  Short-stay & Airbnb
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright & Juridische Links */}
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