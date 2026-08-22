import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Server-side Conversions API endpoint. De client (lib/meta-pixel.ts) stuurt
// hier een event naartoe, en deze route stuurt 'm door naar Meta's Graph API
// — met de echte server-side IP/user-agent, wat de match-kwaliteit flink
// verbetert t.o.v. alleen de browser-Pixel.
//
// Vereiste env vars (zet deze in .env.local en in je Vercel project settings):
//   META_PIXEL_ID       — dezelfde ID als NEXT_PUBLIC_META_PIXEL_ID
//   META_ACCESS_TOKEN    — CAPI-toegangstoken uit Meta Events Manager
//     (Events Manager → je Pixel → Instellingen → Conversions API → Genereer toegangstoken)

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const GRAPH_API_VERSION = "v21.0";

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export async function POST(request: NextRequest) {
  // Zonder configuratie: stil niets doen, nooit de site breken voor de bezoeker
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ skipped: true, reason: "Meta CAPI niet geconfigureerd" });
  }

  try {
    const body = await request.json();
    const { eventName, eventId, eventSourceUrl, customData, fbp, fbc } = body;

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      undefined;
    const userAgent = request.headers.get("user-agent") ?? undefined;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl,
          action_source: "website",
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
          },
          custom_data: customData ?? {},
        },
      ],
    };

    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Meta CAPI error:", errorText);
      return NextResponse.json({ success: false }, { status: 200 }); // 200: nooit de client-flow breken
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Meta CAPI route error:", error);
    return NextResponse.json({ success: false }, { status: 200 });
  }
}

// Let op: Next.js Route Handlers mogen alleen HTTP-methode-exports (GET,
// POST, etc.) hebben. sha256 blijft daarom lokaal in dit bestand — verplaats
// 'm naar een apart lib-bestand als je 'm elders ook nodig hebt (bijv. voor
// het hashen van e-mail/telefoon bij een toekomstig Lead-event met PII).