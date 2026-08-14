"use client";

import { Phone } from "lucide-react";

export const StickyCallBar = () => {
  return (
    <a
      href="tel:+31624473102"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2.5 bg-emerald-500 text-white h-14 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] active:bg-emerald-600 transition-colors"
    >
      {/* shrink-0 voorkomt dat het icoontje platgedrukt wordt */}
      <Phone className="h-4 w-4 shrink-0" />
      
      {/* whitespace-nowrap forceert 1 regel, text-xs maakt hem op mobiel passend */}
      <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
        Bel Nu: 06 24 47 31 02
      </span>
    </a>
  );
};