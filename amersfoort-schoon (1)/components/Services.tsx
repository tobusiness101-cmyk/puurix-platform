"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Factory, 
  Trash2, 
  Store, 
  School, 
  Droplets, 
  Coffee, 
  Activity, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

// Aan elke dienst is nu een expliciete Tailwind kleurencombinatie toegevoegd voor maximale scanbaarheid
const services = [
  {
    id: "TotaleSchoonmaak",
    title: "Totale Schoonmaak",
    description: "Totale schoonmaak en onderhoud voor zowel zakelijke bedrijven als particulieren.",
    icon: Sparkles,
    bgClass: "bg-blue-50",
    colorClass: "text-blue-600",
  },
  {
    id: "Fabrieken",
    title: "Fabrieken & Industrie",
    description: "Totale schoonmaak in fabrieken, kantoren, werkplaatsen, fitnesscentra en musea.",
    icon: Factory,
    bgClass: "bg-indigo-50",
    colorClass: "text-indigo-600",
  },
  {
    id: "Ontruimen",
    title: "Ontruimen & Bouw",
    description: "Totale bouwschoonmaak en het professioneel en bezemschoon ontruimen van panden.",
    icon: Trash2,
    bgClass: "bg-orange-50",
    colorClass: "text-orange-600",
  },
  {
    id: "Trappenhuizen",
    title: "Trappenhuizen",
    description: "Schoonmaak van trappenhuizen, flats en gemeenschappelijke ruimtes voor coöperaties.",
    icon: Building2,
    bgClass: "bg-teal-50",
    colorClass: "text-teal-600",
  },
  {
    id: "Winkelcentra",
    title: "Winkelcentra",
    description: "Totaal schoonmaak van winkelcentra, drukke winkelgalerijen en parkeergarages.",
    icon: Store,
    bgClass: "bg-violet-50",
    colorClass: "text-violet-600",
  },
  {
    id: "Scholen",
    title: "Scholen & Zorg",
    description: "Totale schoonmaak van scholen, kinderopvang, verpleeghuizen en zorgcentra.",
    icon: School,
    bgClass: "bg-rose-50",
    colorClass: "text-rose-600",
  },
  {
    id: "Sanitair",
    title: "Sanitair",
    description: "Totale levering en verzorging van sanitaire voorzieningen en hygiëne-oplossingen.",
    icon: Droplets,
    bgClass: "bg-cyan-50",
    colorClass: "text-cyan-600",
  },
  {
    id: "Horeca",
    title: "Horecapersoneel",
    description: "Totaal kantinebeheer en de levering van professionele kantinedames en personeel.",
    icon: Coffee,
    bgClass: "bg-amber-50",
    colorClass: "text-amber-600",
  },
  {
    id: "Sportcomplexen",
    title: "Sportcomplexen",
    description: "Zowel binnen als buiten: grondige reiniging van kantines, kleedkamers en douches.",
    icon: Activity,
    bgClass: "bg-emerald-50",
    colorClass: "text-emerald-600",
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
        
        {/* Compacte Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
            Onze Diensten
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Schoonmaak op <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">maat.</span>
          </h2>
          <p className="text-primary/70 text-lg leading-relaxed font-medium">
            Als u samenwerkt met Puurix hebt u de garantie dat niets aan de aandacht ontsnapt. Wij verrichten strikt alle werkzaamheden binnen de afgesproken tijd.
          </p>
        </div>

        {/* Compact 3x3 Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Link 
                  href="#contact"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
                >
                  <div>
                    {/* Icoon en Titel op één regel voor overzichtelijkheid */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${service.bgClass} ${service.colorClass}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-primary leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-primary/70 text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-primary transition-colors group-hover:text-accent mt-auto pt-3 border-t border-border/50">
                    Offerte aanvragen 
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Afsluitende Tekst */}
        <div className="mt-16 max-w-3xl mx-auto text-center bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50">
          <h3 className="text-xl font-bold text-primary mb-3">Totalcleaning door heel de regio</h3>
          <p className="text-primary/70 text-base leading-relaxed mb-4">
            Wij beschikken over een ruime ervaring met de belangrijkste schoonmaakmethoden. Zo werkt u altijd in een schone werkomgeving, zonder onnodige zorgen.
          </p>
          <p className="font-bold text-primary text-sm uppercase tracking-wide">
            PUURIX IS DÉ FLEXIBELE PARTNER VOOR TOTALCLEANING.
          </p>
        </div>

      </div>
    </section>
  );
};