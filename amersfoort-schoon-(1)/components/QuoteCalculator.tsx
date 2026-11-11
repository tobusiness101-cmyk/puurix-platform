"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Building } from "lucide-react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { trackMetaEvent } from "@/lib/meta-pixel";
import { trackConversion } from "@/lib/analytics";
import { company } from "@/lib/company";

export const QuoteCalculator = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCookieConsent, setHasCookieConsent] = useState(false);
  const router = useRouter();
  
  const [frequency, setFrequency] = useState<string>("Wekelijks");
  const [weeklyDays, setWeeklyDays] = useState<number>(1);

  useEffect(() => {
    const syncConsent = () => setHasCookieConsent(window.localStorage.getItem("puurix_consent") === "accepted");
    syncConsent();
    window.addEventListener("puurix:consent-updated", syncConsent);
    return () => window.removeEventListener("puurix:consent-updated", syncConsent);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
      .then(async (response) => {
        setIsSubmitting(false);
       if (response.status === 200) {
          // Registreer alleen de gebeurtenis. Verstuur geen e-mailadres naar advertentieplatforms.
          trackConversion("generate_lead", {
            action: "submit",
            category: "Form",
            customData: { form_name: "Offerte aanvragen" },
          });
          // 2. Fire Meta Pixel & CAPI
          trackMetaEvent("Lead", { customData: { content_name: "Offerte Aanvragen formulier" } });
          
          // 3. Save state and redirect
          sessionStorage.setItem("puurix_lead_submitted", "true");
          
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
    <section id="contact" className="relative bg-[#F5F3EE] py-20 sm:py-28">
      
      {/* CSS Hack om Trustoo reviewcount te verbergen */}
      <style dangerouslySetInnerHTML={{ __html: `
        .trustoo-card .review-count,
        .trustoo-card [class*="review-count"],
        .trustoo-card [class*="reviewCount"] {
          display: none !important;
        }
      `}} />

      <div className="container mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          
          {/* Linkerpaneel: Contactgegevens */}
          <div className="flex flex-col justify-between text-ink">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact</span>
              <h2 className="mb-5 mt-4 text-4xl font-medium leading-[1.02] text-ink sm:text-5xl lg:text-[3.75rem]">Benieuwd wat Puurix voor u kan doen?</h2>
              <p className="mb-8 max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
                Plan een vrijblijvende kennismaking. U ontvangt een offerte op maat, zonder verplichtingen.
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-white text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-stone-600">Telefoon</div>
                    <a href="tel:+31624473102" className="text-lg font-semibold text-ink transition-colors hover:text-accent">+31 6 24 47 31 02</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-white text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-stone-600">E-mail</div>
                    <a href="mailto:info@puurix.nl" className="text-lg font-semibold text-ink transition-colors hover:text-accent">info@puurix.nl</a>
                  </div>
                </li>
              </ul>
            </div>

          {/* Reviewwidgets worden pas na toestemming van derden geladen. */}
          {hasCookieConsent && <>
          {/* DIRECT INGEVOEGDE TRUST BADGES (Los, zonder box) */}
            <div className="mt-12 flex flex-col items-center w-full">
              <div className="mb-5 w-full text-xs font-bold uppercase tracking-wider text-stone-600">
                Geverifieerd partner van
              </div>
              
              <div className="flex flex-col items-center gap-6 w-full">
                
                {/* Trustoo Widget */}
                <div className="w-full flex justify-center min-h-[80px]">
                  <Script src="https://static.trustoo.nl/widget/widget_v2.js" strategy="lazyOnload" />
                  <div
                    className="trustoo-widget"
                    data-id="fxc7qQ7p7huIxbbEJ5e8mAY6RXOSCkSaWwlalZyH5Gl6FA"
                    data-language-code="nl"
                    data-country-code="NL"
                    data-badge="hidden"
                    data-quote="default"
                    data-size="small"
                    data-type="landscape"
                    data-border="hidden"
                    data-theme="light"
                    data-background="transparent"
                    data-google="hidden"
                  />
                </div>

                {/* Subtiel lijntje tussen de twee widgets */}
                <div className="h-px w-12 bg-border"></div>

                {/* Trustpilot Widget */}
                <div className="w-full flex justify-center">
                  <Script src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" strategy="lazyOnload" />
                  <div
                    className="trustpilot-widget flex justify-center"
                    data-locale="nl-NL"
                    data-template-id="56278e9abfbbba0bdcd568bc"
                    data-businessunit-id="6a984787e44b78c093bf6c3f"
                    data-style-height="80px"
                    data-style-width="100%"
                    data-token="20e3699f-69db-409f-a961-930e246b127c"
                  >
                    <a href="https://nl.trustpilot.com/review/puurix.nl" target="_blank" rel="noopener noreferrer">
                      Trustpilot
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </>}

            {/* KVK Gedeelte (Dit heeft al de grijze lijn aan de bovenkant) */}
            <div className="mt-9 border-t border-[#C9C5B8] pt-6">
              <div className="flex items-center gap-3 text-sm text-stone-600">
                <Building className="h-4 w-4" />
                KVK: {company.registrationNumber}
              </div>
            </div>
          </div>

          {/* Rechterpaneel: Het Gestripte Offerteformulier */}
          <div className="border border-border bg-white p-6 sm:p-9 lg:p-10">
            <h3 className="mb-2 text-3xl font-medium text-primary sm:text-4xl">Vraag een offerte aan</h3>
            <p className="mb-8 text-sm leading-6 text-stone-600 sm:text-base">Vul uw wensen in en ontvang snel een vrijblijvend voorstel op maat.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <input type="hidden" name="access_key" value="91b5c30f-03ca-4d2c-ae11-c56124f8f957" />
              <input type="hidden" name="subject" value="Nieuwe offerte aanvraag via Puurix!" />
              <input type="hidden" name="from_name" value="Puurix Website - Offerte Aanvraag" />
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Laat dit veld leeg</label>
                <input id="website" name="botcheck" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="naam" className="text-sm font-medium text-primary/80">Naam / Bedrijfsnaam *</label>
                  <input id="naam" required maxLength={100} name="Naam" type="text" placeholder="Hoe mogen we u noemen?" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary/80">E-mailadres *</label>
                  <input id="email" required maxLength={254} name="Email" type="email" placeholder="naam@bedrijf.nl" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </div>

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
                
                <input type="hidden" name="Gewenste_Frequentie" value={frequency === "Wekelijks" ? `${weeklyDays}x per week` : frequency} />
              </div>

              <div className="space-y-2">
                <label htmlFor="specifieke-wensen" className="text-sm font-medium text-primary/80">
                  Specifieke Wensen <span className="text-primary/50 font-normal">(optioneel)</span>
                </label>
                <textarea id="specifieke-wensen" name="Specifieke_Wensen" maxLength={2000} rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Vertel ons kort wat u precies zoekt..." />
              </div>

              <p className="text-xs leading-5 text-stone-600">
                We gebruiken uw gegevens om uw aanvraag te beantwoorden. Lees meer in het <a href="/privacybeleid" className="font-semibold text-accent underline">privacybeleid</a>.
              </p>

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
