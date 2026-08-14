"use client";

import { motion } from "framer-motion";
import { ArrowRight, Info, Phone } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex h-[100svh] min-h-[750px] w-full items-center justify-center overflow-hidden bg-primary">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />

      <div className="container relative z-10 mx-auto px-4 md:px-12 flex items-center justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-8 text-center backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.2)] md:p-14"
        >
          <span className="mb-6 mx-auto inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-extrabold tracking-widest text-white uppercase backdrop-blur-sm">
            Puurix
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Laat uw ruimte <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              {" "}weer stralen.
            </span>
          </h1>

          <p className="mb-10 text-base sm:text-lg leading-relaxed text-white/90 font-medium max-w-2xl mx-auto px-4">
            Verander uw zakelijke ruimte in een vlekkeloos toevluchtsoord met onze op maat gemaakte, milieuvriendelijke schoonmaakdiensten.
          </p>

          {/* GEÜPDATETE KNOPPEN (Onder elkaar op mobiel, strak naast elkaar op laptop) */}
          <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-4 px-2 sm:px-0">

            <a href="tel:+31624473102" className="w-full lg:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex w-full lg:w-auto items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 sm:px-8 sm:py-5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] transition-all hover:bg-emerald-600 whitespace-nowrap"
              >
                <Phone className="h-4 w-4 shrink-0" />
                Bel Nu: 06 24 47 31 02
              </motion.button>
            </a>

            <Link href="#contact" className="w-full lg:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex w-full lg:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 py-4 sm:px-8 sm:py-5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary shadow-premium transition-all hover:bg-white/90 whitespace-nowrap"
              >
                Contact Opnemen
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
            
            <Link href="#meer-weten" className="w-full lg:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex w-full lg:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-4 sm:px-8 sm:py-5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/70 whitespace-nowrap"
              >
                <Info className="h-4 w-4 shrink-0" />
                Meer Weten
              </motion.button>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
};