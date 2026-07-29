"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, Building } from "lucide-react";

export const QuoteCalculator = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Nieuwe states voor de interactieve frequentie
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [weeklyDays, setWeeklyDays] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-muted">
        <div className="container mx-auto px-6 md:px-12 flex justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center p-12 bg-white rounded-3xl shadow-premium max-w-2xl w-full">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-6" />
            <h3 className="text-3xl font-bold text-primary mb-4">Aanvraag Ontvangen</h3>
            <p className="text-primary/70 text-lg">Bedankt voor uw interesse in Puurix. Wij hebben uw gegevens in goede orde ontvangen en nemen binnen 24 uur contact met u op.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-muted relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-premium overflow-hidden border border-border/50 flex flex-col lg:flex-row">
          
          {/* Linkerpaneel: Contactgegevens */}
          <div className="bg-primary p-10 md:p-12 lg:w-1/3 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Neem Contact Op</h2>
              <p className="text-white/70 mb-10 text-lg">
                Heeft u direct een vraag of wilt u liever persoonlijk overleggen? Wij staan voor u klaar.
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 uppercase tracking-wider font-bold">Bel Ons</div>
                    <a href="tel:+31624473102" className="text-lg font-medium hover:text-accent transition-colors">+31 6 24 47 31 02</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 uppercase tracking-wider font-bold">E-mail Ons</div>
                    <a href="mailto:to.business101@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">to.business101@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Building className="h-4 w-4" />
                KVK: 
              </div>
            </div>
          </div>

          {/* Rechterpaneel: Het Offerteformulier */}
          <div className="p-10 md:p-12 lg:w-2/3">
            <h2 className="text-3xl font-bold text-primary mb-2">Vraag een offerte aan</h2>
            <p className="text-primary/60 mb-8">Vul de gegevens in en ontvang snel een voorstel op maat.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Bedrijfsgegevens */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-primary border-b border-border pb-2 uppercase tracking-wide">1. Uw Gegevens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary/80">Bedrijfsnaam *</label>
                    <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary/80">Contactpersoon *</label>
                    <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-primary/80">Adres *</label>
                    <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary/80">Postcode & Plaats *</label>
                    <input required type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary/80">Telefoonnummer *</label>
                    <input required type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-primary/80">E-mailadres *</label>
                    <input required type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                </div>
              </div>

              {/* 2. Schoonmaak Details */}
              <div className="space-y-6 pt-4">
                <h3 className="text-lg font-bold text-primary border-b border-border pb-2 uppercase tracking-wide">2. Schoonmaak Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary/80">Type Ruimte *</label>
                    <select required className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                      <option value="">Selecteer type...</option>
                      <option value="Kantoor">Kantoor</option>
                      <option value="Winkel">Winkel</option>
                      <option value="Magazijn">Magazijn</option>
                      <option value="Anders">Anders</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary/80">Oppervlakte (m²) *</label>
                    <input required type="number" min="1" placeholder="Bijv. 150" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>

                  {/* VERNIEUWDE, INTERACTIEVE FREQUENTIE SELECTIE */}
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-sm font-medium text-primary/80">Gewenste Frequentie *</label>
                    
                    {/* Stap 1: Hoofdcategorie */}
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

                    {/* Stap 2: Dagen per week (Schuift alleen uit bij 'Wekelijks') */}
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
                    
                    {/* Verborgen inputs voor de uiteindelijke formulier verzending */}
                    <input type="hidden" name="frequentie" value={frequency === "Wekelijks" ? `${weeklyDays}x per week` : frequency} />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-primary/80">Specifieke Wensen</label>
                    <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Vertel ons meer..." />
                  </div>
                </div>
              </div>

              {/* De Opvallende Contact Knop */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-full bg-accent px-8 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg disabled:opacity-70 mt-6 flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Verzenden..." : "Offerte Aanvragen"}
              </motion.button>
              
            <form action="[https://formsubmit.co/to.business101@gmail.com](https://formsubmit.co/to.business101@gmail.com)" method="POST">
          </div>
        </div>
      </div>
    </section>
  );
};