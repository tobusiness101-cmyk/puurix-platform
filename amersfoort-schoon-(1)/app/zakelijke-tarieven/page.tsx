import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Rekentool } from "@/components/Rekentool";

export const metadata: Metadata = {
  title: "Tarieven Zakelijke Schoonmaak | Puurix",
  description:
    "Bereken direct uw zakelijke schoonmaaktarieven voor kantoor, praktijk of short-stay in Oosterhout en Breda.",
};

export default function ZakelijkeTarievenPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* HERO */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-medium transition-colors">
            <ArrowRight size={16} className="rotate-180" /> Terug naar home
          </Link>

          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/30">
            Zakelijke Schoonmaak
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Bereken direct uw <span className="text-accent">zakelijke tarief</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Geen lange offertetrajecten. Vul uw gegevens in, zie direct wat een schone werkomgeving kost en profiteer van onze welkomstkorting.
          </p>
        </div>
      </section>

      {/* REKENTOOL COMPONENT */}
      {/* Omdat de Rekentool al eigen padding en sectie-styling heeft, roepen we hem hier direct aan */}
      <Rekentool />

      <Footer />
    </div>
  );
}