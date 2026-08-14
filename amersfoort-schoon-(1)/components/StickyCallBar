"use client";

import { Phone } from "lucide-react";

// Altijd-zichtbare bel-balk, alleen op mobiel. Verlaagt de drempel om te
// bellen tot één tik, zonder eerst het StickyContact-menu te hoeven openen.
// Op desktop (md+) blijft alleen de bestaande StickyContact-knop over.
export const StickyCallBar = () => {
  return (
    <a
      href="tel:+31624473102"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2.5 bg-emerald-500 text-white h-14 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] active:bg-emerald-600 transition-colors"
    >
      <Phone className="h-4 w-4" />
      <span className="text-sm font-bold uppercase tracking-widest">Bel Nu: 06 24 47 31 02</span>
    </a>
  );
};