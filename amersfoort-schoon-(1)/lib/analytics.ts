"use client";

import { sendGAEvent } from "@next/third-parties/google";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

interface AnalyticsPayload {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  customData?: Record<string, unknown>;
}

export async function trackConversion(eventName: string, payload: AnalyticsPayload) {
  const eventId = generateEventId();
  const eventSourceUrl = typeof window !== "undefined" ? window.location.href : "";

  // 1. Google Analytics (GA4) Event
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

  // 2. Meta Pixel (Browser-side)
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, payload.customData ?? {}, { eventID: eventId });
  }

  // 3. Meta Conversions API (Server-side via Next.js Route)
  try {
    await fetch("/api/meta-conversion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl,
        customData: payload.customData ?? {},
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
      }),
      keepalive: true,
    });
  } catch {
    // Fail silently to keep user experience smooth
  }
}