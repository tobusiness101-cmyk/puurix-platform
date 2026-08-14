"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check of de popup al is gesloten in deze sessie
    const hasSeenPopup = sessionStorage.getItem("puurix_welcome_seen");
    
    if (!hasSeenPopup) {
      // 1.5 seconde vertraging zodat het niet direct agressief in beeld springt
      const timer = setTimeout(() => setIsOpen(true), 1500);
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
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          
          {/* De Pop-up zelf */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl p-8 md:p-10 z-10 border border-border"
          >
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 rounded-full bg-stone-100 p-2 text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-900"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-6">
              <Sparkles className="h-8 w-8" />
            </div>

            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-4">
              Tijdelijke Welkomstbonus!
            </h2>
            <p className="text-center text-primary/70 text-lg mb-8 leading-relaxed">
              Welkom bij Puurix. Omdat wij groeien in de regio, profiteert u als nieuwe klant tijdelijk van <strong className="text-amber-500 font-extrabold">20% korting</strong> op al onze zakelijke schoonmaaktarieven.
            </p>

            <button
              onClick={() => {
                closePopup();
                document.getElementById('rekentool')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/90 shadow-md"
            >
              Bereken mijn prijs
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};