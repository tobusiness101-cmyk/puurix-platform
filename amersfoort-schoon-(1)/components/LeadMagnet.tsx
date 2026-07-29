"use client";

import { motion } from "framer-motion";
import { Download, FileText, ArrowRight } from "lucide-react";

export const LeadMagnet = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 rounded-2xl bg-primary px-8 py-16 shadow-premium md:flex-row md:px-16">
          
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-accent backdrop-blur-sm">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Download onze 5-Sterren Turnover Checklist.
            </h2>
            <p className="text-lg leading-relaxed text-white/70 max-w-lg mx-auto md:mx-0">
              Ontdek de exacte 40-punten checklist die wij gebruiken om short-stay accommodaties en kantoren vlekkeloos op te leveren.
            </p>
          </div>

          <div className="w-full max-w-md flex-none">
            <form className="flex flex-col gap-4 rounded-xl bg-white/5 p-6 backdrop-blur-md border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/80">E-mailadres</label>
                <input 
                  type="email" 
                  required
                  placeholder="naam@bedrijf.nl" 
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder-white/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-md bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-sm transition-all hover:bg-muted"
              >
                Download Nu
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </motion.button>
              <p className="text-center text-xs text-white/40 mt-2">
                Wij respecteren uw privacy. Geen spam.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};