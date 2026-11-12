// components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { trackMetaEvent } from "@/lib/meta-pixel";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Forceert de browser autoplay door React's hydration lifecycle heen
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative isolate flex min-h-[690px] w-full items-center overflow-hidden bg-[#0B2E27] pt-20 sm:min-h-[760px]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      <div aria-hidden="true" className="absolute inset-0 bg-[#06241E]/75" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#06241E]/50 via-transparent to-[#06241E]/15" />

      <div className="container relative z-10 mx-auto max-w-[1300px] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#E6D3AC] sm:text-sm">
            <span className="h-px w-10 bg-gold" />
            Professionele schoonmaak
          </div>

          <h1 className="max-w-4xl text-[clamp(3.6rem,8vw,7rem)] font-medium leading-[0.94] tracking-tight text-[#F5F3EE]">
            Rust in <em className="font-medium not-italic text-[#E6D3AC]">elke</em> ruimte.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#E9EEEA] sm:text-lg">
            Puurix verzorgt de schoonmaak van kantoren, horeca, zorgpraktijken en opleveringen. Een vast team, heldere afspraken en een resultaat dat u direct ziet.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/#contact"
              onClick={() => trackMetaEvent("Contact", { customData: { content_name: "Hero Offerte Aanvragen" } })}
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#F5F3EE] px-7 text-sm font-bold text-accent transition-colors hover:bg-[#E6D3AC] sm:text-base"
            >
              Vraag een offerte aan
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#diensten"
              className="inline-flex min-h-14 items-center justify-center border border-[#F5F3EE]/80 px-7 text-sm font-bold text-[#F5F3EE] transition-colors hover:bg-[#F5F3EE] hover:text-accent sm:text-base"
            >
              Bekijk onze diensten
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};