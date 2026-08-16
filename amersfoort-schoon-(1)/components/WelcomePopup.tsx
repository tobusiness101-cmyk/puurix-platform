"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck } from "lucide-react";

// Foto-paren: achtergrond (volledige overlay) + kleine badge-foto
// Vervang deze URL's door je eigen bedrijfsfoto's zodra je die hebt
const FOTO_PAREN = [
  {
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bg: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
  },
];

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [foto, setFoto] = useState(FOTO_PAREN[0]);

  useEffect(() => {
    // Willekeurige foto kiezen bij elk nieuw bezoek (elke keer dat de component mount)
    const keuze = FOTO_PAREN[Math.floor(Math.random() * FOTO_PAREN.length)];
    setFoto(keuze);

    // Check of de popup al is gesloten in deze sessie
    const hasSeenPopup = sessionStorage.getItem("puurix_welcome_seen");

    if (!hasSeenPopup) {
      // 2 seconden vertraging zodat de bezoeker eerst de site even ziet
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("puurix_welcome_seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
          {/* Donkere, wazige achtergrond */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* De Pop-up zelf */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl z-10 border border-white/10"
          >
            {/* Achtergrondfoto met overlay, wisselt willekeurig per bezoek */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url('${foto.bg}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e2a22]/80 via-[#0e2a22]/92 to-[#0e2a22]" />

            {/* Sluitknop (Zwevend) */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/30 backdrop-blur-md"
            >
              <X className="h-5 w-5" />
            </button>

            {/* TOP SECTIE - Foto zichtbaar, tekst eroverheen */}
            <div className="relative px-8 pt-14 pb-8 text-center">
              {/* Label */}
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 mb-4 border border-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Speciaal voor nieuwe klanten
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Claim uw <span className="text-amber-400">20% korting</span>
              </h2>
            </div>

            {/* BOTTOM SECTIE - Voordelen & CTA */}
            <div className="relative px-8 pb-8">
              <p className="text-center text-emerald-100/80 text-sm leading-relaxed mb-6">
                Omdat wij groeien in Oosterhout en omstreken, profiteert u tijdelijk van een exclusief actietarief.
              </p>

              {/* Checkmarks voor overtuiging */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-white/90">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                  Direct een transparante prijsindicatie
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-white/90">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                  100% vrijblijvend, nergens aan vast
                </li>
              </ul>

              {/* Conversie Knop */}
              <button
                onClick={() => {
                  closePopup();
                  setTimeout(() => {
                    document.getElementById("rekentool")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-lg transition-all hover:bg-amber-300 hover:-translate-y-0.5"
              >
                Bereken mijn prijs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Drempelverlagende micro-copy */}
              <p className="text-center text-[10px] text-emerald-300/50 uppercase tracking-widest mt-4 font-bold">
                Duurt slechts 30 seconden
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
