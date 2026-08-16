"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

// Willekeurige foto per bezoek. Vervang door je eigen bedrijfsfoto's.
const FOTOS = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80",
];

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [foto, setFoto] = useState(FOTOS[0]);

  useEffect(() => {
    // Willekeurige foto kiezen bij elk nieuw bezoek
    setFoto(FOTOS[Math.floor(Math.random() * FOTOS.length)]);

    const hasSeenPopup = sessionStorage.getItem("puurix_welcome_seen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("puurix_welcome_seen", "true");
  };

  const goNaarRekentool = () => {
    closePopup();
    setTimeout(() => {
      document.getElementById("rekentool")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
            className="relative w-full max-w-[380px] overflow-hidden rounded-[2rem] bg-[#0e2a22] p-6 pt-6 text-center text-white shadow-2xl z-10 border border-white/10 flex flex-col items-center"
          >
            {/* Sluitknop */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Label */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 border border-white/15 mb-4 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Speciaal voor nieuwe klanten
            </span>

            {/* Uitgesneden foto met zwevende badge */}
            <div className="relative mb-4">
              <img
                src={foto}
                alt="Puurix schoonmaak resultaat"
                className="h-32 w-56 object-cover rounded-2xl shadow-2xl border-2 border-emerald-400/40 -rotate-2 transition-all duration-500"
              />
              <span className="absolute -bottom-3 -left-3 bg-slate-900/90 backdrop-blur-md rounded-xl px-3 py-2 shadow-xl border border-white/15">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 leading-none">
                  -20%
                </span>
              </span>
            </div>

            {/* Koptekst */}
            <h2 className="text-2xl font-black tracking-tight leading-tight uppercase mb-1">
              Claim uw <span className="text-amber-300">korting</span>
            </h2>

            <p className="text-base font-bold tracking-wide text-amber-300 uppercase mb-2.5">
              20% welkomstkorting
            </p>

            <p className="text-xs text-slate-300 leading-relaxed mb-6 px-2">
              Omdat wij groeien in Oosterhout en omstreken, profiteert u tijdelijk van een
              exclusief actietarief.
            </p>

            {/* Twee knoppen */}
            <div className="space-y-2.5 w-full">
              <button
                onClick={goNaarRekentool}
                className="group w-full flex items-center justify-center gap-2 rounded-2xl bg-amber-400 py-3.5 px-4 text-xs font-black uppercase tracking-wider text-slate-950 shadow-[0_10px_25px_-5px_rgba(251,191,36,0.4)] transition-all hover:bg-amber-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                Bereken prijs met 20% korting
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={closePopup}
                className="w-full py-2 text-xs font-semibold text-slate-300/80 transition-colors hover:text-white"
              >
                Nee, direct doorgaan
              </button>
            </div>

            <span className="mt-3 text-[10px] text-slate-400">
              ✓ 100% vrijblijvend • Binnen 1 minuut berekend
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
