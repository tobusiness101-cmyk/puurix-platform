"use client";

import { motion } from "framer-motion";
import { Check, Home, Sparkles, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    id: "particulier",
    title: "Particulier",
    icon: Home,
    priceLabel: "Budget",
    priceSub: "/Month",
    description: "Voor privéplaatsen hebben we een budgetprijs.",
    isDark: false,
    badge: null,
    bullets: [
      "Grondige reiniging op maat",
      "Vaste, betrouwbare schoonmaker",
      "Flexibel in te plannen",
      "Professionele schoonmaakmiddelen"
    ]
  },
  {
    id: "gratis",
    title: "Gratis aanbod",
    icon: Sparkles,
    priceLabel: "Nu 20€",
    priceSub: "/Uur",
    description: "Neem contact met ons op voor een gratis aanbieding voor uw bedrijf of plaats.",
    isDark: true, // Zorgt voor de diep donkerblauwe stijl uit je screenshot
    badge: null,
    bullets: [
      "Volledige inventarisatie op locatie",
      "Persoonlijk adviesgesprek",
      "Proefschoonmaak in overleg",
      "Vrijblijvend plan van aanpak"
    ]
  },
  {
    id: "zakelijk",
    title: "Zakelijk",
    icon: Building2,
    priceLabel: "Eerlijk",
    priceSub: "Prijs",
    description: "Voor business en bedrijven hebben we een eerlijke prijs.",
    isDark: false,
    badge: "Meest gekozen", // De opvallende badge bovenop de kaart
    bullets: [
      "Wekelijks of meermaals per week",
      "Vast, herkenbaar schoonmaakteam",
      "Sanitair, keuken & werkplekken",
      "Aanspreekpunt voor uw beheerder"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Pricing = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="mb-4 inline-block rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
            Tarieven
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Heldere prijzen voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">elke situatie.</span>
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div 
              key={plan.id} 
              variants={cardVariants}
              className={`relative flex flex-col rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                plan.isDark 
                  ? "bg-[#0b132b] text-white shadow-2xl md:-translate-y-4 md:scale-105 z-10" // De donkere middelste kaart
                  : "bg-[#f8fafc] text-primary border border-border/50 shadow-sm hover:shadow-md mt-4 md:mt-0" // De lichte buitenste kaarten
              }`}
            >
              {/* Badge "Meest Gekozen" */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#c25e03] px-5 py-2 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-lg whitespace-nowrap z-20">
                  {plan.badge}
                </div>
              )}

              {/* Icoon Links Boven (Zoals in afbeelding) */}
              <div className="mb-6 text-accent">
                <plan.icon className="h-8 w-8" />
              </div>

              {/* Titel & Beschrijving */}
              <h3 className="text-2xl font-bold mb-3 font-serif tracking-tight">
                {plan.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 ${plan.isDark ? "text-white/70" : "text-primary/70"}`}>
                {plan.description}
              </p>

              {/* Prijs Weergave */}
              <div className="flex items-baseline gap-1 mb-8 border-b border-white/10 pb-8">
                {plan.id === "gratis" && <span className="text-2xl font-bold mt-1">€</span>}
                <span className="text-5xl font-extrabold tracking-tight">{plan.priceLabel}</span>
                <span className={`text-sm font-medium ml-1 ${plan.isDark ? "text-white/50" : "text-primary/50"}`}>
                  {plan.priceSub}
                </span>
              </div>

              {/* Bullet Points met Vinkjes */}
              <ul className="flex-grow space-y-4 mb-10">
                {plan.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-accent" />
                    <span className={`text-sm font-medium ${plan.isDark ? "text-white/80" : "text-primary/80"}`}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Oranje Contact Knop */}
              <Link href="#contact" className="w-full mt-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-accent py-4 px-6 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg"
                >
                  Contact
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};