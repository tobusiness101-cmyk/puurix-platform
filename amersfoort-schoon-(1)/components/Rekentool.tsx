"use client";

import { useState, useMemo } from "react";
import { Calculator, Phone, ArrowRight } from "lucide-react";

export const Rekentool = () => {
  const [spaceType, setSpaceType] = useState<string>("Kantoor");
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [sqm, setSqm] = useState<number>(150);

  // === PRIJSBEREKENING (realistische NL premium tarieven) ===
  const priceIndication = useMemo(() => {
    // Basis tarief per m² per schoonmaakbeurt (premium tarief)
    let baseRate = 2.6;
    if (spaceType === "Kantoor") baseRate = 2.75;
    else if (spaceType === "Bedrijfspand") baseRate = 2.6;
    else if (spaceType === "Horeca") baseRate = 3.2;
    else baseRate = 2.4; // Overig

    const sessionPrice = baseRate * sqm;

    let monthlySessions = 4.33; // Wekelijks
    if (frequency === "2x per week") monthlySessions = 8.66;
    else if (frequency === "Dagelijks") monthlySessions = 20;

    const monthlyPrice = Math.round(sessionPrice * monthlySessions);

    return { amount: monthlyPrice, period: "per maand" };
  }, [spaceType, frequency, sqm]);

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
            Twee keuzes, één schuifbalk. Voor een exacte prijs bellen we het liefst even met u.
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
                <option value="Bedrijfspand">Bedrijfspand</option>
                <option value="Horeca">Horeca</option>
                <option value="Overig">Overig</option>
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

            {/* 3. Frequentie (optioneel, met standaardwaarde) */}
            <div className="mb-8">
              <label htmlFor="frequentie-rekentool" className="block text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                3. Frequentie <span className="font-medium normal-case text-primary/50">(optioneel)</span>
              </label>
              <select
                id="frequentie-rekentool"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all appearance-none"
              >
                <option value="Wekelijks">Wekelijks</option>
                <option value="2x per week">2x per week</option>
                <option value="Dagelijks">Dagelijks</option>
              </select>
            </div>

            {/* Live Prijsindicatie */}
            <div className="mt-auto pt-6 border-t border-border/50">
              <div className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-primary/70 uppercase tracking-widest">Indicatie maandelijks</span>
                  <span className="text-[10px] font-medium text-primary/50">excl. BTW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">€{priceIndication.amount}</span>
                  <span className="text-xl font-medium text-primary/70">/ {priceIndication.period}</span>
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
              Op basis van uw indicatie van <span className="font-bold text-white">€{priceIndication.amount} per maand</span> bespreken we in een kort gesprek de exacte prijs en planning.
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