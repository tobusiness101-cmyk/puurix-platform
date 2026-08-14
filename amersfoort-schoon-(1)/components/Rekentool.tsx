"use client";

import { useState, useMemo } from "react";
import { Calculator, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Rekentool = () => {
  const [spaceType, setSpaceType] = useState<string>("Kantoor");
  const [sqm, setSqm] = useState<number>(150);
  
  // Zelfde state als in QuoteCalculator
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [weeklyDays, setWeeklyDays] = useState<number>(1);

  // === PRIJSBEREKENING (realistische NL premium tarieven) ===
  const priceIndication = useMemo(() => {
    // Basis tarief per m² per schoonmaakbeurt (premium tarief)
    let baseRate = 2.6;
    if (spaceType === "Kantoor") baseRate = 2.75;
    else if (spaceType === "Praktijk / Zorginstelling") baseRate = 3.1;
    else if (spaceType === "Short-stay / Airbnb") baseRate = 3.5;
    else if (spaceType === "Opleveringsschoonmaak") baseRate = 4.0;
    else baseRate = 2.4; // Anders

    const sessionPrice = baseRate * sqm;

    // Als het eenmalig is, berekenen we geen maandprijs
    if (frequency === "Eenmalig") {
      return { amount: Math.round(sessionPrice), period: "eenmalig" };
    }

    // Bereken het aantal sessies per maand
    let monthlySessions = 1; // Standaard voor Maandelijks
    if (frequency === "Wekelijks") monthlySessions = weeklyDays * 4.33; // Gemiddeld 4.33 weken in een maand
    else if (frequency === "Dagelijks") monthlySessions = 5 * 4.33; // Uitgaande van 5 werkdagen

    const monthlyPrice = Math.round(sessionPrice * monthlySessions);

    return { amount: monthlyPrice, period: "per maand" };
  }, [spaceType, frequency, sqm, weeklyDays]);

  return (
    <section id="rekentool" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
            <Calculator className="h-4 w-4" /> Online Rekentool
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Krijg direct een <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">realistische prijsindicatie.</span>
          </h2>
          <p className="mt-4 text-primary/70 text-lg">
            Simpele keuzes, direct resultaat. Voor een exacte prijs bellen we het liefst even met u.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LINKERPANEEL: Inputs + Live Prijsindicatie */}
          <div className="flex-1 bg-background rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm flex flex-col">

            {/* 1. Type Ruimte */}
            <div className="mb-8">
              <label htmlFor="type-ruimte-rekentool" className="block text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                1. Type ruimte
              </label>
              <select
                id="type-ruimte-rekentool"
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all appearance-none"
              >
                <option value="Kantoor">Kantoor</option>
                <option value="Praktijk / Zorginstelling">Praktijk / Zorginstelling</option>
                <option value="Short-stay / Airbnb">Short-stay / Airbnb</option>
                <option value="Opleveringsschoonmaak">Opleveringsschoonmaak (Bouw)</option>
                <option value="Anders">Anders</option>
              </select>
            </div>

            {/* 2. Oppervlakte */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label htmlFor="oppervlakte-rekentool" className="block text-sm font-bold text-primary uppercase tracking-wide">
                  2. Oppervlakte
                </label>
                <span className="text-2xl font-extrabold text-primary">{sqm} m²</span>
              </div>
              <input
                id="oppervlakte-rekentool"
                type="range"
                min="50"
                max="1000"
                step="50"
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-primary/50 mt-2 font-medium">
                <span>50 m²</span>
                <span>1000+ m²</span>
              </div>
            </div>

            {/* 3. Frequentie (Geüpdatet naar het blokken-design) */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                3. Frequentie
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Eenmalig", "Dagelijks", "Wekelijks", "Maandelijks"].map((freq) => (
                  <div
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={frequency === freq}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setFrequency(freq);
                      }
                    }}
                    className={`cursor-pointer rounded-xl border px-2 py-3 text-sm text-center font-bold transition-all ${
                      frequency === freq
                        ? "border-accent bg-accent text-white shadow-md"
                        : "border-border bg-white hover:border-primary/30 text-primary"
                    }`}
                  >
                    {freq}
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {frequency === "Wekelijks" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-primary/5 border border-primary/10 rounded-2xl">
                      <label className="block text-xs font-bold text-primary/70 mb-3 uppercase tracking-wider">
                        Hoeveel dagen per week?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <div
                            key={num}
                            onClick={() => setWeeklyDays(num)}
                            role="button"
                            tabIndex={0}
                            aria-pressed={weeklyDays === num}
                            aria-label={`${num} ${num === 1 ? "dag" : "dagen"} per week`}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setWeeklyDays(num);
                              }
                            }}
                            className={`cursor-pointer h-12 w-12 flex items-center justify-center rounded-xl text-sm font-bold transition-all border ${
                              weeklyDays === num
                                ? "bg-accent text-white border-accent shadow-sm"
                                : "bg-white text-primary border-border hover:border-primary/30"
                            }`}
                          >
                            {num}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live Prijsindicatie */}
            <div className="mt-auto pt-6 border-t border-border/50">
              <div className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-primary/70 uppercase tracking-widest">
                    {priceIndication.period === "eenmalig" ? "Indicatie eenmalig" : "Indicatie maandelijks"}
                  </span>
                  <span className="text-[10px] font-medium text-primary/50">excl. BTW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">€{priceIndication.amount}</span>
                  {priceIndication.period !== "eenmalig" && (
                    <span className="text-xl font-medium text-primary/70">/ mnd</span>
                  )}
                </div>
                <p className="text-xs text-primary/60 mt-2">
                  Realistische indicatie op basis van uw keuzes. Exacte prijs na een kort telefoongesprek.
                </p>
              </div>
            </div>

          </div>

          {/* RECHTERPANEEL: Bel-CTA i.p.v. formulier */}
          <div className="lg:w-2/5 bg-primary rounded-3xl p-8 md:p-10 text-white shadow-sm relative flex flex-col justify-center items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-emerald-400 mb-6">
              <Phone className="h-7 w-7" />
            </div>
            <h4 className="text-[11px] font-extrabold text-white/50 uppercase tracking-[0.2em] mb-4">
              Volgende stap
            </h4>
            <h3 className="text-2xl font-bold font-serif mb-3 leading-tight tracking-tight">
              Bel ons voor een exacte offerte
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Op basis van uw indicatie van <span className="font-bold text-white">€{priceIndication.amount} {priceIndication.period === "eenmalig" ? "" : "per maand"}</span> bespreken we in een kort gesprek de exacte prijs en planning.
            </p>

            <a href="tel:+31624473102" className="w-full">
              <button
                className="group w-full flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-emerald-600"
              >
                <Phone className="h-4 w-4" />
                Bel Nu: 06 24 47 31 02
              </button>
            </a>

            <a href="/#contact" className="mt-4 text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1.5">
              Liever een offerte per mail? <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};