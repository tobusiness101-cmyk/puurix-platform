"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { isPromoActive, promoConfig } from "@/lib/features";

// Sticky top-strip met de tijdelijke actie. Gebruikt bewust een eigen,
// secundaire kleur (amber) in plaats van het primaire accent-groen, zodat
// hij niet concurreert met de "Bel nu"-knoppen en de rekentool qua
// visuele hiërarchie.
export const PromoBanner = () => {
  if (!isPromoActive()) return null;

  const formattedDate = new Date(promoConfig.validUntil).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
  });

  return (
    <div className="sticky top-0 z-[60] w-full h-10 bg-amber-400 text-primary flex items-center justify-center px-4">
      <Link
        href={promoConfig.linkHref}
        className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide truncate hover:underline underline-offset-2"
      >
        <Sparkles className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate">
          {promoConfig.discountLabel} {promoConfig.ctaText} — geldig t/m {formattedDate}
        </span>
      </Link>
    </div>
  );
};