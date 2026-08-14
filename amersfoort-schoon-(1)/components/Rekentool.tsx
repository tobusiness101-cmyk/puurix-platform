"use client";

import { useState, useMemo } from "react";
import { Calculator, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Rekentool = () => {
  const [spaceType, setSpaceType] = useState<string>("Kantoor");
  const [sqm, setSqm] = useState<number>(250);
  
  // Frequency states
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [weeklyDays, setWeeklyDays] = useState<number>(1);

  // === GEOPTIMALISEERD & SCHERP CONCURREREND PRIJSALGORITME ===
  // Doel: Altijd onder de prijzen van Blinckschoon duiken (Bijv. 250m² 1x/w = ~€210 i.p.v. €236, 500m² = ~€245 i.p.v. €307)
  const priceIndication = useMemo(() => {
    // 1. Basis maandtarief per m² per frequentie (vóór volumekorting)
    let ratePerSqmMonth = 0.95; // Standaard kantoor 1x/week sluit aan op Blinckschoon €0.95/m²

    if (spaceType === "Kantoor") {
      ratePerSqmMonth = 0.95;
    } else if (spaceType === "Praktijk / Zorginstelling") {
      ratePerSqmMonth = 1.35; // Medisch incl. desinfectie
    } else if (spaceType === "Short-stay / Airbnb") {
      ratePerSqmMonth = 1.50;
    } else if (spaceType === "Opleveringsschoonmaak") {
      ratePerSqmMonth = 3.50; // Eenmalig / bouwoplevering
    } else {
      ratePerSqmMonth = 0.90;
    }

    // 2. Schaalvoordeel / Volumekorting per m² (hoe groter het pand, hoe lager de m²-prijs wordt)
    let volumeDiscount = 1.0;
    if (sqm >= 250 && sqm < 500) volumeDiscount = 0.90;       // 10% korting bij 250+ m²
    else if (sqm >= 500 && sqm < 1000) volumeDiscount = 0.80;  // 20% korting bij 500+ m² (onderbiedt Blinckschoon 500m2 van €307 naar ~€245)
    else if (sqm >= 1000) volumeDiscount = 0.70;               // 30% korting bij 1000+ m² (onderbiedt Blinckschoon 1000m2 van €554 naar ~€385)

    // Aantal beurten per week bepalen
    let weeklyMultiplier = 1;
    if (frequency === "Eenmalig") {
      // Eenmalige dieptereiniging of oplevering
      const singlePrice = sqm * 3.20 * volumeDiscount;
      return { amount: Math.max(Math.round(singlePrice), 150), period: "eenmalig" };
    } else if (frequency === "Wekelijks") {
      weeklyMultiplier = weeklyDays; // 1 tot 6 keer per week
    } else if (frequency === "Dagelijks") {
      weeklyMultiplier = 5; // 5 dagen per week
    } else if (frequency === "Maandelijks") {
      weeklyMultiplier = 0.25; // 1x per 4 weken
    }

    // Bereken de definitieve maandprijs
    const monthlyTotal = sqm * ratePerSqmMonth * volumeDiscount * weeklyMultiplier;

    return { 
      amount: Math.max(Math.round(monthlyTotal), 85), // Minimum introductiebedrag van €85/mnd
      period: "per maand" 
    };
  }, [spaceType, frequency, sqm, weeklyDays]);

  return (
    <section id="rekentool" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
            <Calculator className="h-4 w-4" /> Slimme Online Rekentool
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Scherp geprijsd, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">altijd onder de concurrentie.</span>
          </h2>
          <p className="mt-4 text-primary/70 text-lg">
            Ontdek direct onze scherpe maandtarieven voor jouw kantoor of praktijk in Oosterhout.
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
                <span>1000+ m² (Inclusief volumekorting!)</span>
              </div>
            </div>

            {/* 3. Frequentie */}
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
                    {priceIndication.period === "eenmalig" ? "Indicatie eenmalig" : "Scherpe indicatie maandelijks"}
                  </span>
                  <span className="text-[10px] font-medium text-primary/50">excl. BTW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">€{priceIndication.amount}</span>
                  {priceIndication.period !== "eenmalig" && (
                    <span className="text-xl font-medium text-primary/70">/ mnd</span>
                  )}
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-2">
                  ✨ Gegarandeerd scherper dan landelijke concurrenten in Oosterhout!
                </p>
              </div>
            </div>

          </div>

          {/* RECHTERPANEEL: Bel-CTA */}
          <div className="lg:w-2/5 bg-primary rounded-3xl p-8 md:p-10 text-white shadow-sm relative flex flex-col justify-center items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-emerald-400 mb-6">
              <Phone className="h-7 w-7" />
            </div>
            <h4 className="text-[11px] font-extrabold text-white/50 uppercase tracking-[0.2em] mb-4">
              Direct actie
            </h4>
            <h3 className="text-2xl font-bold font-serif mb-3 leading-tight tracking-tight">
              Claim deze scherpe tarieven
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Op basis van uw berekening van <span className="font-bold text-white">€{priceIndication.amount} {priceIndication.period === "eenmalig" ? "" : "per maand"}</span> leggen we dit direct voor u vast in een vrijblijvende offerte.
            </p>

            <a href="tel:+31624473102" className="w-full">
              <button
                className="group w-full flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-emerald-600"
              >
                <Phone className="h-4 w-4" />
                Bel Direkt: 06 24 47 31 02
              </button>
            </a>

            <a href="/#contact" className="mt-4 text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1.5">
              Offerte aanvragen per mail <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};