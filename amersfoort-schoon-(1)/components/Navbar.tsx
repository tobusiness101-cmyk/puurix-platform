"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { isPromoActive } from "@/lib/features";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bannerActive = isPromoActive();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed ${bannerActive ? "top-10" : "top-0"} z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
          {/* Het P-icoon - icon.png heeft al een transparante achtergrond, dus geen blend-mode meer nodig */}
          <Image 
            src="/icon.png" 
            alt="Puurix Icoon" 
            width={40} 
            height={40} 
            className="object-contain" 
          />
          
          {/* De tekst: Dikke letters, strak op elkaar, mét een Hoofdletter P!
              Kleur wisselt mee met de header-status: op de transparante header
              (boven aan een pagina met donkere hero) is de tekst wit, zodra je
              scrollt en de header een witte achtergrond krijgt wordt de tekst
              weer donker. */}
          <span className="font-sans text-4xl md:text-5xl font-black tracking-tighter mt-1">
            <span className={isScrolled ? "text-ink" : "text-white"}>Puur</span>
            <span className={isScrolled ? "text-stone-600" : "text-white/70"}>ix</span>
          </span>
        </Link>

        <nav className={`hidden md:flex items-center gap-8 text-sm font-bold transition-colors ${isScrolled ? "text-ink" : "text-white"}`}>
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/#meer-weten" className="hover:text-accent transition-colors">Over Ons</Link>
          <Link href="/#diensten" className="hover:text-accent transition-colors">Diensten</Link>
          <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/#contact" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-soft hover:shadow-premium">
            Offerte Aanvragen
          </Link>
        </div>

        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-ink" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-premium border-t border-stone-200 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-ink font-medium">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/#meer-weten" onClick={() => setMobileMenuOpen(false)}>Over Ons</Link>
              <Link href="/#diensten" onClick={() => setMobileMenuOpen(false)}>Diensten</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <div className="pt-4 border-t border-stone-200">
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white px-6 py-3 rounded-full font-medium text-center block">
                  Offerte Aanvragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};