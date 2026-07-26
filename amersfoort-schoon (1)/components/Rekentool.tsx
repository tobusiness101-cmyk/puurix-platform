"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Mail, Phone, CheckCircle2, ArrowRight } from "lucide-react";

export const Rekentool = () => {
  const [spaceType, setSpaceType] = useState<string>("Kantoor");
  const [cleaningType, setCleaningType] = useState<string>("Reguliere schoonmaak");
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [weeklyDays, setWeeklyDays] = useState<number>(1);
  const [sqm, setSqm] = useState<number>(150);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // === ECHTE PRIJSBEREKENING (realistische NL premium tarieven) ===
  const priceIndication = useMemo(() => {
    // Basis tarief per m² per schoonmaakbeurt (premium tarief)
    let baseRate = 2.5;
    if (spaceType === "Kantoor") baseRate = 2.75;
    else if (spaceType === "Winkel") baseRate = 3.10;
    else if (spaceType === "Magazijn") baseRate = 1.65;
    else baseRate = 2.40;

    const sessionPrice = Math.round(baseRate * sqm);

    // Eenmalige schoonmaak
    if (cleaningType === "Eenmalige schoonmaak" || frequency === "Eenmalig") {
      return {
        amount: sessionPrice,
        period: "eenmalig",
        label: "Indicatie eenmalige schoonmaak",
      };
    }

    // Reguliere schoonmaak → maandprijs
    let monthlySessions = 1;
    if (frequency === "Dagelijks") monthlySessions = 20;
    else if (frequency === "Wekelijks") monthlySessions = weeklyDays * 4.33;
    else if (frequency === "Maandelijks") monthlySessions = 1;

    const monthlyPrice = Math.round(sessionPrice * monthlySessions);

    return {
      amount: monthlyPrice,
      period: "per maand",
      label: "Indicatie maandelijks",
    };
  }, [spaceType, cleaningType, frequency, weeklyDays, sqm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1400);
  };

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
            Selecteer uw wensen en ontvang een eerlijke indicatie + vrijblijvende offerte in uw mailbox.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* LINKERPANEEL: Inputs + Live Prijsindicatie */}
          <div className="flex-1 bg-background rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm flex flex-col">
            
            {/* 1. Type Ruimte */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-primary mb-4 uppercase tracking-wide">1. Type Ruimte</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Kantoor", "Winkel", "Magazijn", "Anders"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSpaceType(type)}
                    className={`py-3 px-4 rounded-xl text-sm font-bold transition-all border ${
                      spaceType === type 
                        ? "bg-primary text-white border-primary shadow-md" 
                        : "bg-white text-primary border-border hover:border-primary/30"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Type Schoonmaak */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-primary mb-4 uppercase tracking-wide">2. Type Schoonmaak</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Eenmalige schoonmaak", "Reguliere schoonmaak"].map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setCleaningType(t);
                      if (t === "Eenmalige schoonmaak") setFrequency("Eenmalig");
                      else setFrequency("Wekelijks");
                    }}
                    className={`py-3 px-4 rounded-xl text-sm font-bold transition-all border ${
                      cleaningType === t 
                        ? "bg-primary text-white border-primary shadow-md" 
                        : "bg-white text-primary border-border hover:border-primary/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Frequentie */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">3. Frequentie</label>
              <p className="text-sm text-primary/50 mb-4 font-medium">Hoe vaak moet er schoongemaakt worden?</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Eenmalig", "Dagelijks", "Wekelijks", "Maandelijks"].map((freq) => (
                  <div
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`cursor-pointer rounded-xl border px-2 py-3 text-sm text-center font-bold transition-all ${
                      frequency === freq
                        ? "border-accent bg-accent text-white shadow-md"
                        : "border-border bg-background hover:border-primary/30 text-primary"
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
                    <div className="p-5 bg-primary/5 border border-primary/10 rounded-2xl mt-4">
                      <label className="block text-xs font-bold text-primary/70 mb-3 uppercase tracking-wider">
                        Hoeveel dagen per week?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <div
                            key={num}
                            onClick={() => setWeeklyDays(num)}
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

            {/* 4. Oppervlakte */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="block text-sm font-bold text-primary uppercase tracking-wide">4. Oppervlakte</label>
                <span className="text-2xl font-extrabold text-primary">{sqm} m²</span>
              </div>
              <input 
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

            {/* === NIEUWE LIVE PRIJSINDICATIE (Premium stijl) === */}
            <div className="mt-auto pt-6 border-t border-border/50">
              <div className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-primary/70 uppercase tracking-widest">
                    {priceIndication.label}
                  </span>
                  <span className="text-[10px] font-medium text-primary/50">excl. BTW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter text-primary">€{priceIndication.amount}</span>
                  <span className="text-xl font-medium text-primary/70">/ {priceIndication.period}</span>
                </div>
                <p className="text-xs text-primary/60 mt-2">
                  Dit is een realistische indicatie op basis van uw keuzes. 
                  Exacte prijs na persoonlijk advies.
                </p>
              </div>
            </div>

          </div>

          {/* RECHTERPANEEL: Lead Capture (aangepast) */}
          <div className="lg:w-1/3 bg-[#f8fafc] border border-border/60 rounded-3xl p-8 md:p-10 text-primary shadow-sm relative flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col h-full justify-center"
                >
                  <h4 className="text-[11px] font-extrabold text-primary/50 uppercase tracking-[0.2em] mb-4">
                    Laatste Stap
                  </h4>
                  <h3 className="text-2xl font-bold font-serif text-primary mb-3 leading-tight tracking-tight">
                    Ontvang uw offerte op maat
                  </h3>
                  <p className="text-primary/70 text-sm leading-relaxed mb-8 font-medium">
                    Op basis van uw indicatie van <span className="font-bold text-primary">€{priceIndication.amount}</span> sturen wij u een vrijblijvende, gedetailleerde offerte.
                  </p>

                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
                      <input 
                        type="email" 
                        required 
                        placeholder="naam@bedrijf.nl" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-border/80 text-primary placeholder:text-primary/40 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      />
                    </div>
                    
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
                      <input 
                        type="tel" 
                        required 
                        placeholder="06 24473102" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-border/80 text-primary placeholder:text-primary/40 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                      />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 mt-2 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-accent/90 disabled:opacity-70"
                    >
                      {isSubmitting ? "Bezig met versturen..." : "Ontvang offerte"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500 mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-primary mb-4">Aanvraag Verzonden!</h3>
                  <p className="text-primary/70 text-base leading-relaxed">
                    We hebben uw aanvraag succesvol ontvangen.<br />
                    U ontvangt binnen 24 uur een gedetailleerde offerte op <span className="font-bold text-primary">{email}</span>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};