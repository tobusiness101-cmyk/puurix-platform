"use client";

import { sendGAEvent } from "@next/third-parties/google";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface AnalyticsPayload {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  customData?: Record<string, unknown>;
}

export function trackConversion(eventName: string, payload: AnalyticsPayload) {
  if (typeof window === "undefined" || window.localStorage.getItem("puurix_consent") !== "accepted") return;

  // Google Analytics (GA4) Event
  try {
    sendGAEvent({
      event: eventName,
      value: payload.value ?? 0,
      event_category: payload.category ?? "Conversion",
      event_label: payload.label ?? eventName,
    });
  } catch (err) {
    console.warn("GA Event error:", err);
  }

}
