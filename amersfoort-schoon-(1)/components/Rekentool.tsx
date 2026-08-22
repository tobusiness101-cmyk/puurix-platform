"use client";

import { useState, useMemo } from "react";
import { Calculator, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackMetaEvent } from "@/lib/meta-pixel";

export const Rekentool = () => {
  const [spaceType, setSpaceType] = useState<string>("Kantoor");
  const [sqm, setSqm] = useState<number>(250);
  
  // Frequency states
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [weeklyDays, setWeeklyDays] = useState<number>(1);

  // === HET 'WELKOM BONUS' ALGORITME ===
  const priceIndication = useMemo(() => {
    // 1. Basis maandtarief per m² (Gebaseerd op 1x per week)
    let ratePerSqmMonth = 0.76; 
    if (spaceType === "Kantoor") ratePerSqmMonth = 0.76;
    else if (spaceType === "Praktijk / Zorginstelling") ratePerSqmMonth = 0.95; 
    else if (spaceType === "Short-stay / Airbnb") ratePerSqmMonth = 1.10;
    else if (spaceType === "Opleveringsschoonmaak") ratePerSqmMonth = 2.00; 
    else ratePerSqmMonth = 0.70;

    // 2. Schaalvoordeel / Volumekorting per m²
    let volumeDiscount = 1.0;
    if (sqm >= 500 && sqm < 1000) volumeDiscount = 0.785;  
    else if (sqm >= 1000) volumeDiscount = 0.595;          

    let normalPrice = 0;
    let isOneTime = false;

    // 3. Multipliers op basis van de frequentie
    if (frequency === "Eenmalig") {
      isOneTime = true;
      // Eenmalig is een losse klus, dus pakken we het maandtarief x 1.5
      // (Behalve bij Opleveringsschoonmaak, want daar is de basisprijs al heel hoog)
      let eenmaligMultiplier = spaceType === "Opleveringsschoonmaak" ? 1.0 : 0.6;
      
      let singlePrice = sqm * ratePerSqmMonth * volumeDiscount * eenmaligMultiplier;
      normalPrice = Math.max(Math.round(singlePrice), 120); // Minimaal €120 voor eenmalig
    } 
    else {
      let weeklyMultiplier = 1;
      
      if (frequency === "Wekelijks") {
        let frequencyDiscount = 1.0;
        if (weeklyDays === 2) frequencyDiscount = 0.90; 
        else if (weeklyDays === 3) frequencyDiscount = 0.85;
        else if (weeklyDays === 4) frequencyDiscount = 0.80;
        else if (weeklyDays >= 5) frequencyDiscount = 0.75;
        weeklyMultiplier = weeklyDays * frequencyDiscount;
      } 
      else if (frequency === "Dagelijks") {
        weeklyMultiplier = 5 * 0.75; 
      } 
      else if (frequency === "Maandelijks") {
        // 1x per maand is per keer duurder dan 1x per week, dus doen we 40% van het maandtarief (ipv 25%)
        weeklyMultiplier = 0.40; 
      }

      let monthlyPrice = sqm * ratePerSqmMonth * volumeDiscount * weeklyMultiplier;
      normalPrice = Math.max(Math.round(monthlyPrice), 95); // Minimaal €95 voor abonnementen
    }

    // 4. Pas 20% welkomstkorting toe
    let discountedPrice = normalPrice * 0.80;
    
    // Handhaaf absolute bodemprijzen na korting (zodat je nooit verlies draait)
    if (isOneTime) {
      discountedPrice = Math.max(discountedPrice, 95); 
    } else {
      discountedPrice = Math.max(discountedPrice, 75); 
    }

    return { 
      amount: Math.round(discountedPrice), 
      originalAmount: Math.round(normalPrice),
      period: isOneTime ? "eenmalig" : "per maand" 
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
            Profiteer tijdelijk van onze <strong className="text-amber-500 font-bold">20% welkomstkorting</strong>. Ontdek direct wat u gaat besparen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LINKERPANEEL: Inputs */}
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

            {/* Live Prijsindicatie MET Korting weergave */}
            <div className="mt-auto pt-6 border-t border-border/50">
              <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(251,191,36,0.2)] relative overflow-hidden">
                
                {/* Gele glow op de achtergrond */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
                  <span className="text-sm font-bold text-primary/70 uppercase tracking-widest">
                    {priceIndication.period === "eenmalig" ? "Indicatie eenmalig" : "Scherpe indicatie"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-[10px] font-extrabold text-amber-700 uppercase tracking-wider shadow-sm">
                    🎁 20% Welkomstkorting
                  </span>
                </div>
                
                <div className="flex items-baseline gap-3 relative z-10">
                  <span className="text-2xl font-bold text-primary/30 line-through decoration-primary/30 decoration-2">
                    €{priceIndication.originalAmount}
                  </span>
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">
                    €{priceIndication.amount}
                  </span>
                  {priceIndication.period !== "eenmalig" && (
                    <span className="text-xl font-medium text-primary/70">/ mnd</span>
                  )}
                </div>
                <span className="block text-[10px] font-bold text-primary/40 uppercase tracking-wider mt-1 relative z-10">excl. BTW</span>
              </div>
            </div>

          </div>

          {/* RECHTERPANEEL: Bel-CTA */}
          <div className="lg:w-2/5 bg-primary rounded-3xl p-8 md:p-10 text-white shadow-sm relative flex flex-col justify-center items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-amber-400 mb-6">
              <Phone className="h-7 w-7" />
            </div>
            <h4 className="text-[11px] font-extrabold text-white/50 uppercase tracking-[0.2em] mb-4">
              Direct actie
            </h4>
            <h3 className="text-2xl font-bold font-serif mb-3 leading-tight tracking-tight">
              Claim uw welkomstkorting
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Leg vandaag nog de scherpe prijs van <span className="font-bold text-white">€{priceIndication.amount} {priceIndication.period === "eenmalig" ? "" : "per maand"}</span> vast in een vrijblijvende offerte.
            </p>

            <a
              href="tel:+31624473102"
              className="w-full"
              onClick={() => trackMetaEvent("Contact", { customData: { content_name: "Rekentool Bel Direct" } })}
            >
              <button
                className="group w-full flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary shadow-md transition-all hover:bg-amber-400"
              >
                <Phone className="h-4 w-4" />
                Bel Direct: 06 24 47 31 02
              </button>
            </a>

            <a href="/#contact" className="mt-4 text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1.5">
              Liever offerte aanvragen per mail? <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};