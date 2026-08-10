"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, ShieldCheck, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const InfoSections = () => {
  return (
    <div id="meer-weten" className="relative w-full bg-background">
      
      {/* Sectie 1: Over Ons */}
      <section className="sticky top-0 flex min-h-screen w-full items-center justify-center overflow-hidden">
        {/* Parallax Achtergrond */}
        <div className="absolute inset-0 h-full w-full">
          <Image 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
            alt="Puurix" 
            fill 
            className="object-cover" 
            priority
          />
          {/* Donkere overlay voor perfecte leesbaarheid */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        {/* Zwevende Glazen Kaart */}
        <div className="container relative z-10 mx-auto px-6 md:px-12 flex justify-center md:justify-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
            viewport={{ amount: 0.3 }} 
            className="max-w-2xl rounded-3xl bg-white/10 p-8 md:p-14 backdrop-blur-md border border-white/20 shadow-premium"
          >
            <span className="mb-6 inline-block rounded-full border border-accent/50 bg-accent/20 px-5 py-2 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-sm">
              Over Ons
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl leading-tight">
              Ontdek de topkwaliteit van Puurix.
            </h2>
            <p className="text-lg leading-relaxed text-white/80 font-medium">
              Puurix is een toonaangevende schoonmaakdienst die zich inzet voor schone en gezonde omgevingen. Onze missie gaat verder dan alleen schoonmaken – we creëren frisse, hygiënische en aangename ruimtes waarin mensen zich prettig voelen. Met een breed scala aan schoonmaakdiensten bieden wij maatwerkoplossingen voor zowel bedrijven als particulieren, altijd met oog voor kwaliteit en detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectie 2: Statistieken */}
      <section className="sticky top-0 flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <Image 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop" 
            alt="Zakelijke Schoonmaak" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
            viewport={{ amount: 0.3 }} 
            className="max-w-3xl rounded-3xl bg-white p-8 md:p-12 shadow-premium border border-border/50"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl mb-4 leading-tight">
              Ruimtes Transformeren: Onze Expertise
            </h2>
            <p className="text-primary/70 mb-10 text-lg">
              Ontdek de kracht van onze schoonmaakdiensten in cijfers. Deze statistieken benadrukken de prestaties die Puurix tot de juiste keuze maken.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { num: "10+", label: "Jaren Ervaring", desc: "Dé vertrouwde expert.", icon: ShieldCheck },
                { num: "24/7", label: "Bereikbaar", desc: "Flexibel Inzetbaar", icon: Clock },
                { num: "97%", label: "Tevreden Klanten", desc: "Verwachtingen constant overtroffen.", icon: Users },
                { num: "100%", label: "Oog voor Detail", desc: "Onberispelijke ruimtes.", icon: Sparkles }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-primary">{stat.num}</div>
                      <div className="text-sm font-bold text-primary uppercase tracking-wider mb-1">{stat.label}</div>
                      <div className="text-primary/70 text-sm leading-relaxed">{stat.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectie 3: Stralen */}
      <section className="sticky top-0 flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Kantoor" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 flex justify-center md:justify-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
            viewport={{ amount: 0.3 }} 
            className="max-w-2xl rounded-3xl bg-white/10 p-8 md:p-12 backdrop-blur-md border border-white/20 shadow-premium"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl leading-[1.1] mb-6">
              Laat Uw Ruimte Stralen met Puurix.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-medium mb-8">
              Verander uw ruimte in een vlekkeloos toevluchtsoord met onze op maat gemaakte schoonmaakdiensten. Geniet van milieuvriendelijke methoden en uitstekende service.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Uitgebreide Schoonmaakoplossingen",
                "Milieuvriendelijke Aanpak",
                "Oog voor Detail",
                "Op Maat Gemaakt",
                "Uitstekende Klantenservice"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-semibold">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-premium hover:bg-white/90 transition-all">
                Contact Opnemen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
