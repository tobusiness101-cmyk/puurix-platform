"use client";

// Kleine client-side helper voor de Meta Pixel. Genereert een gedeeld
// event_id per event zodat de browser-Pixel en de server-side Conversions
// API (CAPI) hetzelfde event niet dubbel tellen — Meta dedupliceert
// automatisch op basis van dit event_id.

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Simpele, dependency-vrije unieke id (voldoende voor dedup-doeleinden)
function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

// Leest de Meta browser-cookies uit, die de match-kwaliteit van CAPI-events
// flink verbeteren (Meta herkent de bezoeker dan beter).
function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

interface TrackOptions {
  // Extra data om mee te sturen, bijv. { content_name: "Rekentool" }
  customData?: Record<string, unknown>;
}

/**
 * Vuurt een Meta-event af op ZOWEL de browser-Pixel als de server-side
 * Conversions API, met hetzelfde event_id voor deduplicatie.
 *
 * Gebruik: trackMetaEvent("Contact", { customData: { content_name: "Hero Bel Nu" } })
 */
export async function trackMetaEvent(eventName: string, options: TrackOptions = {}) {
  const eventId = generateEventId();
  const eventSourceUrl = typeof window !== "undefined" ? window.location.href : "";

  // 1. Browser-Pixel (client-side)
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, options.customData ?? {}, { eventID: eventId });
  }

  // 2. Server-side Conversions API (robuuster: werkt ook als de Pixel
  //    geblokkeerd is door een ad-blocker of Safari's tracking-preventie)
  try {
    await fetch("/api/meta-conversion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl,
        customData: options.customData ?? {},
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
      }),
      keepalive: true, // laat het request doorlopen ook als de gebruiker meteen wegnavigeert (bijv. tel:-link)
    });
  } catch {
    // Stil falen: een mislukte conversion-log mag de gebruikerservaring nooit breken
  }
}
