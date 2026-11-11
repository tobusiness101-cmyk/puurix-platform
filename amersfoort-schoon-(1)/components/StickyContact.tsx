"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, FileText, Calculator } from "lucide-react";
import { trackMetaEvent } from "@/lib/meta-pixel";

export const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    exit: {
      opacity: 0,
      y: 15,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed z-50 flex flex-col items-end right-4 bottom-4 md:bottom-6 md:right-6">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="mb-4 flex w-72 origin-bottom-right flex-col overflow-hidden border border-border bg-white shadow-premium"
          >
            <div className="bg-accent p-4 text-center text-white">
              <h4 className="text-xs font-extrabold uppercase tracking-widest">Puurix</h4>
            </div>

            <div className="flex flex-col">
              
              {/* 1. Online Rekentool */}
              <a
                href="/zakelijke-tarieven"
                onClick={closeMenu}
                className="group flex items-center gap-4 border-b border-border/50 p-4 transition-colors hover:bg-muted cursor-pointer"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Calculator className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary mb-0.5">Online Rekentool</span>
                  <span className="text-xs font-medium text-primary/60">Bereken direct uw prijs</span>
                </div>
              </a>
              
              {/* 2. Offerte Aanvragen */}
              <a
                href="/#contact"
                onClick={closeMenu}
                className="group flex items-center gap-4 border-b border-border/50 p-4 transition-colors bg-accent/5 hover:bg-accent/10 cursor-pointer"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-white transition-transform group-hover:scale-105">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-accent mb-0.5">Offerte Aanvragen</span>
                  <span className="text-xs font-medium text-primary/70">Vrijblijvend voorstel op maat</span>
                </div>
              </a>

              {/* 3. Bellen */}
              <a
                href="tel:+31624473102"
                onClick={() => trackMetaEvent("Contact", { customData: { content_name: "StickyContact Bel Direct" } })}
                className="group flex items-center gap-4 border-b border-border/50 p-4 transition-colors hover:bg-muted"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary mb-0.5">Bel Direct</span>
                  <span className="text-xs font-medium text-primary/60">+31 6 24 47 31 02</span>
                </div>
              </a>

              {/* 4. WhatsApp */}
              <a
                href="https://wa.me/31624473102"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMetaEvent("Contact", { customData: { content_name: "StickyContact WhatsApp" } })}
                className="group flex items-center gap-4 p-4 transition-colors hover:bg-muted"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary mb-0.5">WhatsApp</span>
                  <span className="text-xs font-medium text-primary/60">Snel antwoord</span>
                </div>
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-12 items-center justify-center gap-3 bg-accent px-6 py-3.5 text-white shadow-soft transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 md:px-7"
        aria-label="Contact menu openen"
      >
        <span className="text-sm font-bold uppercase tracking-widest mt-0.5">
          {isOpen ? "Sluiten" : "Contact"}
        </span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "anticipate" }}
        >
          {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </motion.div>
      </motion.button>
      
    </div>
  );
};
