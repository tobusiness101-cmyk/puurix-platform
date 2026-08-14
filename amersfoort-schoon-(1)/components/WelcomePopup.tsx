"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, CheckCircle2, ArrowRight } from "lucide-react";

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          
          {/* De Pop-up zelf */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl z-10 border border-border flex flex-col"
          >
            {/* Sluitknop (Zwevend) */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/30 backdrop-blur-md"
            >
              <X className="h-5 w-5" />
            </button>

            {/* TOP SECTIE - Premium Gekleurd Vlak */}
            <div className="bg-primary px-8 pt-10 pb-8 text-center relative overflow-hidden">
              {/* Decoratieve achtergrond elementen */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl"></div>
              
              {/* Gouden Cadeau Icoon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-primary shadow-lg mb-5 relative z-10 -rotate-3">
                <Gift className="h-8 w-8" />
              </div>
              
              {/* Label */}
              <span className="inline-block rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-3 border border-white/10 shadow-sm">
                Speciaal voor nieuwe klanten
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Claim uw <span className="text-amber-400">20% korting</span>
              </h2>
            </div>

            {/* BOTTOM SECTIE - Voordelen & CTA */}
            <div className="p-8 bg-white">
              <p className="text-center text-primary/70 text-sm leading-relaxed mb-6">
                Omdat wij groeien in Oosterhout en omstreken, profiteert u tijdelijk van een exclusief actietarief.
              </p>

              {/* Checkmarks voor overtuiging */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-primary/80">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  Direct een transparante prijsindicatie
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-primary/80">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  100% vrijblijvend, nergens aan vast
                </li>
              </ul>

              {/* Conversie Knop */}
              <button
                onClick={() => {
                  closePopup();
                  // Wacht heel even met scrollen zodat de pop-up soepel sluit
                  setTimeout(() => {
                    document.getElementById('rekentool')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-emerald-600 hover:-translate-y-0.5"
              >
                Bereken mijn prijs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              {/* Drempelverlagende micro-copy */}
              <p className="text-center text-[10px] text-primary/40 uppercase tracking-widest mt-4 font-bold">
                Duurt slechts 30 seconden
              </p>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};