"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoIcon } from "@/components/LogoIcon";

const links = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Kwaliteit", href: "/#kwaliteit" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-[#DDD9CC]/70 bg-[#F5F3EE]/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-soft" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Puurix, naar de homepage">
          <LogoIcon className="h-9 w-9 shrink-0" />
          <span className="font-display text-[2rem] font-semibold leading-none tracking-tight text-accent sm:text-[2.2rem]">
            Puurix<span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-gold align-baseline" />
          </span>
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-7 text-sm font-semibold text-ink lg:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden min-h-11 items-center justify-center bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:inline-flex"
        >
          Offerte aanvragen
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobiel hoofdmenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#DDD9CC] bg-[#F5F3EE] lg:hidden"
          >
            <div className="mx-auto flex max-w-[1300px] flex-col gap-1 px-5 py-4 sm:px-8">
              {links.map((link) => (
                <Link key={link.label} href={link.href} onClick={closeMenu} className="py-3 font-semibold text-ink">
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="mt-2 flex min-h-12 items-center justify-center bg-accent px-5 font-semibold text-white"
              >
                Offerte aanvragen
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
