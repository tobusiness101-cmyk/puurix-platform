"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Activity, 
  Building2, 
  Sparkles, 
  Coffee, 
  Tent,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "Kantoorschoonmaak",
    title: "Kantoorschoonmaak",
    description: "Een representatieve, frisse werkomgeving voor uw team. Dagelijks of wekelijks, volledig afgestemd op uw kantoortijden.",
    icon: Briefcase,
    bgClass: "bg-blue-50",
    colorClass: "text-blue-600",
    hoverBorder: "hover:border-blue-200",
  },
  {
    id: "PraktijkenZorg",
    title: "Zorg & Praktijken",
    description: "Klinisch schoon volgens de WIP-richtlijnen. Maximale hygiëne voor tandartspraktijken, fysiotherapeuten en medische centra.",
    icon: Activity,
    bgClass: "bg-teal-50",
    colorClass: "text-teal-600",
    hoverBorder: "hover:border-teal-200",
  },
  {
    id: "VvETrappenhuizen",
    title: "VvE's & Trappenhuizen",
    description: "Structureel onderhoud van gemeenschappelijke ruimtes. Wij zorgen voor een schone, frisse en veilige entree voor alle bewoners.",
    icon: Building2,
    bgClass: "bg-orange-50",
    colorClass: "text-orange-600",
    hoverBorder: "hover:border-orange-200",
  },
  {
    id: "Opleveringsschoonmaak",
    title: "Opleveringsschoonmaak",
    description: "Nieuwbouw of renovatie afgerond? Wij verwijderen hardnekkig bouwstof en maken het pand 100% representatief en instapklaar.",
    icon: Sparkles,
    bgClass: "bg-amber-50",
    colorClass: "text-amber-600",
    hoverBorder: "hover:border-amber-200",
  },
  {
    id: "HorecaHotels",
    title: "Horeca & Hotels",
    description: "Een onberispelijke gastervaring. Van dieptereiniging in keukens (HACCP) tot het spic en span houden van hotelkamers en lobby's.",
    icon: Coffee,
    bgClass: "bg-rose-50",
    colorClass: "text-rose-600",
    hoverBorder: "hover:border-rose-200",
  },
  {
    id: "RecreatieCampings",
    title: "Recreatie & Campings",
    description: "Brandschoon sanitair en frisse vakantiehuisjes, zelfs tijdens het hoogseizoen. Wij snappen de snelle dynamiek van vakantieparken.",
    icon: Tent,
    bgClass: "bg-emerald-50",
    colorClass: "text-emerald-600",
    hoverBorder: "hover:border-emerald-200",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Services = () => {
  return (
    <section id="diensten" className="bg-muted/50 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header sectie - compacter gemaakt */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="mb-3 inline-block rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-xs font-bold tracking-wide text-primary uppercase">
            Onze Expertise
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Schoonmaak op <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">maat.</span>
          </h2>
          <p className="text-primary/70 text-base leading-relaxed font-medium">
            Elke branche vraagt om een eigen aanpak. Van kantoor tot camping: wij leveren maatwerk en ontzorgen u volledig.
          </p>
        </div>

        {/* 2x3 Bento Grid met compactere padding en subtiele achtergrond */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Link 
                  href="/#contact"
                  className={`group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${service.hoverBorder}`}
                >
                  <div>
                    {/* Icon & Titel compacter op één rij */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${service.bgClass} ${service.colorClass}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-primary leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="leading-relaxed text-primary/70 text-xs md:text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* CTA link onderaan */}
                  <div className={`flex items-center gap-1.5 text-xs font-bold transition-colors mt-auto pt-3 border-t border-border/40 ${service.colorClass} opacity-90 group-hover:opacity-100`}>
                    Offerte aanvragen
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Afsluitende Trust-Tekst (compacter) */}
        <div className="mt-12 max-w-3xl mx-auto text-center bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border/60 relative overflow-hidden">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Totalcleaning door heel de regio</h3>
          <p className="text-primary/70 text-sm leading-relaxed mb-4 max-w-xl mx-auto">
            Kiest u voor Puurix, dan kiest u voor één vast aanspreekpunt. Geen loze beloftes, maar zichtbaar resultaat en korte lijnen.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
            Jouw betrouwbare partner
          </div>
        </div>

      </div>
    </section>
  );
};