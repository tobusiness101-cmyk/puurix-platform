"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Building } from "lucide-react";
import { trackMetaEvent } from "@/lib/meta-pixel";
import { useRouter } from "next/navigation";

export const QuoteCalculator = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [weeklyDays, setWeeklyDays] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Web3Forms fetch request voor de vloeiende animatie
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (response.status === 200) {
          trackMetaEvent("Lead", { customData: { content_name: "Offerte Aanvragen formulier" } });
          // Stuur de gebruiker direct door naar de nieuwe bedankt-pagina
          router.push("/bedankt");
        } else {
          alert("Er is iets misgegaan bij het verzenden. Probeer het opnieuw.");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Er is een fout opgetreden.");
      });
  };

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
                    <a href="mailto:info@puurix.nl" className="text-lg font-medium hover:text-accent transition-colors">info@puurix.nl</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Building className="h-4 w-4" />
                KVK: 42149299
              </div>
            </div>
          </div>

          {/* Rechterpaneel: Het Gestripte Offerteformulier */}
          <div className="p-10 md:p-12 lg:w-2/3">
            <h2 className="text-3xl font-bold text-primary mb-2">Vraag een offerte aan</h2>
            <p className="text-primary/60 mb-8">Vul uw wensen in en ontvang snel een vrijblijvend voorstel op maat.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="91b5c30f-03ca-4d2c-ae11-c56124f8f957" />
              <input type="hidden" name="subject" value="Nieuwe offerte aanvraag via Puurix!" />

              {/* 1. Naam & E-mail */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="naam" className="text-sm font-medium text-primary/80">Naam / Bedrijfsnaam *</label>
                  <input id="naam" required name="Naam" type="text" placeholder="Hoe mogen we u noemen?" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary/80">E-mailadres *</label>
                  <input id="email" required name="Email" type="email" placeholder="naam@bedrijf.nl" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </div>

              {/* 2. Type Ruimte */}
              <div className="space-y-2">
                <label htmlFor="type-ruimte" className="text-sm font-medium text-primary/80">Type Ruimte *</label>
                <select id="type-ruimte" required name="Type_Ruimte" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                  <option value="">Selecteer type...</option>
                  <option value="Kantoor">Kantoor</option>
                  <option value="Praktijk / Zorginstelling">Praktijk / Zorginstelling</option>
                  <option value="Short-stay / Airbnb">Short-stay / Airbnb</option>
                  <option value="Opleveringsschoonmaak">Opleveringsschoonmaak (Bouw)</option>
                  <option value="Anders">Anders</option>
                </select>
              </div>

              {/* 3. Frequentie Selectie */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-primary/80">Gewenste Frequentie *</label>
                
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
                
                {/* Verborgen veld om de daadwerkelijke frequentie mee te sturen in de mail */}
                <input type="hidden" name="Gewenste_Frequentie" value={frequency === "Wekelijks" ? `${weeklyDays}x per week` : frequency} />
              </div>

              {/* 4. Specifieke Wensen (Nu optioneel) */}
              <div className="space-y-2">
                <label htmlFor="specifieke-wensen" className="text-sm font-medium text-primary/80">
                  Specifieke Wensen <span className="text-primary/50 font-normal">(optioneel)</span>
                </label>
                <textarea id="specifieke-wensen" name="Specifieke_Wensen" rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Vertel ons kort wat u precies zoekt..." />
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-full bg-accent px-8 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg disabled:opacity-70 mt-6 flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Verzenden..." : "Offerte Aanvragen"}
              </motion.button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};