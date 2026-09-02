import { Phone, MessageCircle, Mail } from "lucide-react";
import Link from 'next/link';
import Script from "next/script"; // NIEUW: Importeer Script

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
            
            {/* Subtiele provincie-tekst eronder */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-bold text-stone-500 uppercase tracking-wider mb-8">
              <span>Noord-Brabant</span>
              <span className="text-stone-300">•</span>
              <span>Gelderland</span>
              <span className="text-stone-300">•</span>
              <span>Utrecht</span>
            </div>

            {/* NIEUW: Trust Badges in Footer */}
            <div className="flex flex-col gap-4 max-w-[240px]">
              <div className="w-full">
                <Script src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" strategy="lazyOnload" />
                <div 
                  className="trustpilot-widget" 
                  data-locale="nl-NL" 
                  data-template-id="56278e9abfbbba0bdcd568bc" 
                  data-businessunit-id="6a984787e44b78c093bf6c3f" 
                  data-style-height="52px" 
                  data-style-width="100%" 
                  data-token="a98bc103-bf33-4075-98d1-41923a96f581"
                >
                  <a href="https://nl.trustpilot.com/review/puurix.nl" target="_blank" rel="noopener noreferrer">Trustpilot</a>
                </div>
              </div>

              <div className="w-full">
                <Script src="https://static.trustoo.nl/widget/widget_v2.js" strategy="lazyOnload" />
                <div 
                  className="trustoo-widget" 
                  data-id="WlTR39WJypkBEzNVrghtlDHq1ncoHrkXnxrQjnwvp_RKBg" 
                  data-language-code="nl" 
                  data-country-code="NL" 
                  data-badge="hidden" 
                  data-quote="default" 
                  data-size="small" 
                  data-type="landscape" 
                  data-border="hidden" 
                  data-theme="light" 
                  data-background="transparent" 
                  data-google="hidden"
                />
              </div>
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

          {/* Kolom 3: Branches & Diensten */}
          <div>
            <h4 className="font-bold text-ink text-lg mb-6">Onze Diensten</h4>
            <ul className="space-y-4 text-sm font-medium text-stone-600">
              <li><Link href="/kantoorschoonmaak" className="hover:text-accent transition-colors">Kantoorschoonmaak</Link></li>
              <li><Link href="/medische-schoonmaak" className="hover:text-accent transition-colors">Praktijken & Zorginstellingen</Link></li>
              <li><Link href="/opleveringsschoonmaak" className="hover:text-accent transition-colors">Opleveringsschoonmaak</Link></li>
              <li><Link href="/short-stay" className="hover:text-accent transition-colors">Short-stay & Airbnb</Link></li>
              <li><Link href="/particuliere-schoonmaak" className="hover:text-accent transition-colors">Particuliere Schoonmaak</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright & Links onderaan */}
        <div className="pt-8 border-t border-stone-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-400">
          <p>&copy; {new Date().getFullYear()} Puurix. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
           <Link className="hover:text-accent transition-colors" href="/algemene-voorwaarden">Algemene Voorwaarden</Link>
            <Link className="hover:text-accent transition-colors" href="/privacybeleid">Privacybeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};