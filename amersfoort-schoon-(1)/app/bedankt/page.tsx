"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function BedanktPage() {
  useEffect(() => {
    const submitted = sessionStorage.getItem("puurix_lead_submitted");
    if (submitted !== "true") return;
    sessionStorage.removeItem("puurix_lead_submitted");
    const gtag = (window as any).gtag;

    if (gtag) {
      gtag("event", "conversion", {
        send_to: "AW-8023888101/7743177979", 
      });
    }
  }, []);

  return (
    <section className="min-h-[80vh] py-24 bg-muted flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex justify-center">
        <div className="flex flex-col items-center text-center p-12 bg-white rounded-3xl shadow-premium max-w-2xl w-full border border-border/50">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-6" />
          <h1 className="text-3xl font-bold text-primary mb-4">Aanvraag Ontvangen</h1>
          <p className="text-primary/70 text-lg mb-10 leading-relaxed">
            Bedankt voor uw interesse in Puurix. Wij hebben uw gegevens in goede orde ontvangen en nemen binnen 24 uur contact met u op.
          </p>
          <Link 
            href="/"
            className="bg-accent text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-accent/90 transition-all uppercase tracking-widest text-sm"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </section>
  );
}
