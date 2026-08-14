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
    description: "Een representatieve, frisse werkomgeving voor uw team. Volledig afgestemd op uw kantoortijden.",
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-400",
    bgSoft: "bg-blue-50",
    colorClass: "text-blue-600",
  },
  {
    id: "PraktijkenZorg",
    title: "Zorg & Praktijken",
    description: "Klinisch schoon volgens de WIP-richtlijnen. Maximale hygiëne voor medische centra en tandartsen.",
    icon: Activity,
    gradient: "from-teal-500 to-emerald-400",
    bgSoft: "bg-teal-50",
    colorClass: "text-teal-600",
  },
  {
    id: "VvETrappenhuizen",
    title: "VvE's & Trappen",
    description: "Structureel onderhoud van gemeenschappelijke ruimtes voor een schone, veilige entree voor bewoners.",
    icon: Building2,
    gradient: "from-orange-500 to-amber-400",
    bgSoft: "bg-orange-50",
    colorClass: "text-orange-600",
  },
  {
    id: "Opleveringsschoonmaak",
    title: "Oplevering (Bouw)",
    description: "Nieuwbouw of renovatie afgerond? Wij verwijderen bouwstof en maken het pand 100% instapklaar.",
    icon: Sparkles,
    gradient: "from-amber-400 to-yellow-300",
    bgSoft: "bg-amber-50",
    colorClass: "text-amber-600",
  },
  {
    id: "HorecaHotels",
    title: "Horeca & Hotels",
    description: "Een onberispelijke gastervaring. Van dieptereiniging (HACCP) tot spic en span hotelkamers.",
    icon: Coffee,
    gradient: "from-rose-500 to-pink-400",
    bgSoft: "bg-rose-50",
    colorClass: "text-rose-600",
  },
  {
    id: "RecreatieCampings",
    title: "Recreatie & Parken",
    description: "Brandschoon sanitair en frisse vakantiehuisjes. Wij snappen de snelle dynamiek van het hoogseizoen.",
    icon: Tent,
    gradient: "from-emerald-500 to-green-400",
    bgSoft: "bg-emerald-50",
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Services = () => {
  return (
    <section id="diensten" className="bg-muted py-24 relative overflow-hidden">
      
      {/* Subtiele achtergrond gloed voor extra diepte */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header sectie */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-primary/10 bg-white px-5 py-2 text-[11px] font-extrabold tracking-widest text-primary uppercase shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Onze Expertise
          </span>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Schoonmaak op <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">maat.</span>
          </h2>
          <p className="text-primary/60 text-lg md:text-xl leading-relaxed font-medium">
            Elke branche vraagt om een eigen aanpak. Van kantoor tot camping: wij leveren maatwerk, werken strikt volgens afspraak en ontzorgen u volledig.
          </p>
        </div>

        {/* Premium Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Link 
                  href="/#rekentool"
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-border/50 hover:border-transparent"
                >
                  {/* Achtergrond Watermerk Icoon (Luxe effect) */}
                  <Icon className={`absolute -right-6 -bottom-6 h-48 w-48 -rotate-12 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${service.colorClass}`} />

                  <div className="relative z-10">
                    {/* Premium Icoon Container */}
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-primary/60 text-base mb-8 font-medium">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Zwevende Pill Button */}
                  <div className="relative z-10 mt-auto flex items-center justify-between">
                    <span className={`text-sm font-bold ${service.colorClass} opacity-80 group-hover:opacity-100 transition-opacity`}>
                      Tarief berekenen
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${service.bgSoft} ${service.colorClass} transition-all duration-300 group-hover:w-32 group-hover:bg-primary group-hover:text-white`}>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Afsluitende Trust-Tekst */}
        <div className="mt-20 max-w-4xl mx-auto text-center bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-5 relative z-10">Klaar voor een écht schoon pand?</h3>
          <p className="text-primary/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto relative z-10 font-medium">
            Kiest u voor Puurix, dan kiest u voor één vast aanspreekpunt voor al uw facilitaire zaken. Geen loze beloftes, maar zichtbaar resultaat.
          </p>
          <Link href="/#contact" className="relative z-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white uppercase tracking-widest shadow-lg transition-all hover:bg-primary/90 hover:scale-105">
            Offerte Aanvragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};