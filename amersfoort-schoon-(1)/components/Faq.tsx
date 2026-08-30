"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Jouw bestaande vragen (ongewijzigd)
const faqs = [
   {
    question: "Wat maakt Puurix anders dan andere schoonmaakbedrijven?",
    answer: "Wij zijn rechtstreeks bereikbaar zonder callcenter of tussenlagen, en denken proactief mee met uw situatie. Persoonlijke aandacht en korte communicatielijnen staan bij ons voorop."
  },
  {
    question: "In welke steden en regio's is Puurix actief?",
    answer: "Wij zijn actief in Breda, Oosterhout, Tilburg, Etten-Leur, Teteringen, Waalwijk, Kaatsheuvel en Amersfoort, en de directe omgeving van elke stad. Bekijk de pagina van uw regio voor meer informatie over ons werkgebied."
  },
  {
    question: "Werken jullie ook in het weekend of buiten kantoortijden?",
    answer: "Absoluut. Voor short-stay turnovers en drukke kantooromgevingen werken wij met flexibele roosters. Wij plannen onze werkzaamheden in wanneer het u en uw gasten het minst verstoort, inclusief weekenden en avonden, zonder verborgen toeslagen."
  },
   {
    question: "Wat kost schoonmaak bij Puurix?",
    answer: "Dat hangt af van de frequentie, oppervlakte en het type object. Gebruik onze rekentool hierboven voor een eerste indicatie, of vraag een offerte op maat aan. Aan een indicatie kunnen geen rechten worden ontleend."
  },
  {
    question: "Wat kan Puurix voor mijn organisatie betekenen?",
    answer: "Puurix neemt de schoonmaak van uw pand volledig uit handen — van dagelijks onderhoud tot eenmalige opleveringsschoonmaak. Of het nu gaat om een kantoor, winkelcentrum, school, sportcomplex of horecalocatie: wij stemmen onze aanpak af op uw pand en wensen."
  },
  {
    question: "Moet ik zelf schoonmaakmiddelen verzorgen?",
    answer: "Nee, wij ontzorgen u volledig. Ons team neemt alle professionele materialen en eco-vriendelijke schoonmaakmiddelen zelf mee. Dit zit standaard in de prijs inbegrepen."
  }
];

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // 1. Nieuwe state voor de 'Toon meer' functionaliteit
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 2. We bepalen hier hoeveel vragen we laten zien
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto max-w-3xl">
          
          <div className="text-center mb-16">
            <span className="mb-4 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold tracking-wide text-accent uppercase">
              Veelgestelde Vragen
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Helderheid vooraf, <span className="text-primary/60">geen verrassingen.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {/* 3. We mappen over visibleFaqs in plaats van allemaal */}
            {visibleFaqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={index}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? "border-primary/20 bg-muted shadow-sm" 
                      : "border-border bg-white hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </span>
                    <div 
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isActive 
                          ? "bg-primary text-white rotate-180" 
                          : "bg-background text-primary"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-2 text-primary/70 leading-relaxed border-t border-border/50 mx-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* 4. De knop die verdwijnt zodra er op is geklikt */}
          {!showAll && faqs.length > 3 && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all hover:bg-muted"
              >
                Bekijk alle {faqs.length} vragen
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};