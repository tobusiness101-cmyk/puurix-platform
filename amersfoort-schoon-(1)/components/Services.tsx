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
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Services = () => {
  return (
    <section id="diensten" className="bg-muted py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header sectie */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
            Onze Expertise
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Schoonmaak op <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">maat.</span>
          </h2>
          <p className="text-primary/70 text-lg leading-relaxed font-medium">
            Elke branche vraagt om een eigen aanpak. Van kantoor tot camping: wij leveren maatwerk, werken strikt volgens afspraak en ontzorgen u volledig.
          </p>
        </div>

        {/* 2x3 Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Link 
                  href="/#contact"
                  className={`group flex h-full flex-col justify-between rounded-3xl border border-transparent bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] ${service.hoverBorder}`}
                >
                  <div>
                    {/* Icon */}
                    <div className={`mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.bgClass} ${service.colorClass}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-primary/70 text-sm mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* CTA link onderaan de kaart */}
                  <div className={`flex items-center gap-2 text-xs font-bold transition-colors mt-auto pt-4 border-t border-border/50 ${service.colorClass} opacity-80 group-hover:opacity-100`}>
                    Offerte aanvragen
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Afsluitende Trust-Tekst */}
        <div className="mt-16 max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full"></div>
          
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 relative z-10">Totalcleaning door heel de regio</h3>
          <p className="text-primary/70 text-base leading-relaxed mb-6 max-w-2xl mx-auto relative z-10">
            Kiest u voor Puurix, dan kiest u voor één vast aanspreekpunt voor al uw facilitaire zaken. Geen loze beloftes, maar zichtbaar resultaat en korte lijnen.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-bold text-white uppercase tracking-wider relative z-10">
            Jouw betrouwbare partner
          </div>
        </div>

      </div>
    </section>
  );
};