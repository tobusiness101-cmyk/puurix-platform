"use client";

import { useEffect, useState } from "react";
import { isPromoActive, promoConfig } from "@/lib/features";

export function usePromoActive(): boolean {
  // Bewust false tijdens SSR zodat server en client dezelfde
  // eerste render hebben en er geen hydration mismatch ontstaat.
  const [active, setActive] = useState(false);

  useEffect(() => {
    const checkPromo = () => {
      setActive(isPromoActive());
    };

    // Direct controleren zodra de component op de client staat.
    checkPromo();

    const expiryTime = new Date(promoConfig.validUntil).getTime();

    // Plan een controle vlak nadat de actie verloopt.
    const timeoutDelay = Math.max(
      0,
      expiryTime - Date.now() + 100
    );

    const expiryTimeout = window.setTimeout(checkPromo, timeoutDelay);

    // Extra beveiliging zolang de pagina open blijft.
    const interval = window.setInterval(checkPromo, 30_000);

    // Controleer opnieuw wanneer de gebruiker terugkeert naar het tabblad.
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkPromo();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      window.clearTimeout(expiryTimeout);
      window.clearInterval(interval);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return active;
}