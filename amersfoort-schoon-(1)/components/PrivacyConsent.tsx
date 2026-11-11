"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MetaPixel } from "@/components/MetaPixel";

const CONSENT_KEY = "puurix_consent";

function TrackingScripts() {
  return (
    <>
      <GoogleAnalytics gaId="G-L4GV9859J5" />
      <Script id="puurix-tracking" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('config', 'AW-8023888101');
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yicfm7kwkq");
        `}
      </Script>
      <MetaPixel />
    </>
  );
}

export function PrivacyConsent() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(window.localStorage.getItem(CONSENT_KEY));
    const openSettings = () => setConsent(null);
    window.addEventListener("puurix:open-cookie-settings", openSettings);
    return () => window.removeEventListener("puurix:open-cookie-settings", openSettings);
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    const previousConsent = window.localStorage.getItem(CONSENT_KEY);
    window.localStorage.setItem(CONSENT_KEY, value);
    if (previousConsent === "accepted" && value === "rejected") {
      window.location.reload();
      return;
    }
    setConsent(value);
    window.dispatchEvent(new Event("puurix:consent-updated"));
  };

  return (
    <>
      {consent === "accepted" && <TrackingScripts />}
      {consent === null && (
        <aside
          aria-label="Cookiekeuze"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl border border-[#DDD9CC] bg-[#F5F3EE] p-5 text-ink shadow-2xl sm:inset-x-6 sm:flex sm:items-center sm:gap-6"
        >
          <div className="flex-1">
            <h2 className="font-semibold">Uw privacykeuze</h2>
            <p className="mt-1 text-sm leading-6 text-stone-600">
              We gebruiken analytische en marketingcookies alleen met uw toestemming. Noodzakelijke functies werken altijd.
              Lees meer in ons <a className="underline" href="/privacybeleid">privacybeleid</a>.
            </p>
          </div>
          <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="min-h-11 border border-[#0B2E27] px-4 text-sm font-semibold text-[#0B2E27]"
            >
              Weigeren
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="min-h-11 bg-[#0B2E27] px-4 text-sm font-semibold text-white"
            >
              Accepteren
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("puurix:open-cookie-settings"))}
      className="mt-5 text-sm font-semibold text-accent underline underline-offset-4"
    >
      Cookiekeuze aanpassen
    </button>
  );
}
