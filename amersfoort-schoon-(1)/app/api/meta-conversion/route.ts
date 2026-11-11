import { NextRequest, NextResponse } from "next/server";

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
const ALLOWED_EVENTS = new Set(["Contact", "Lead", "generate_lead"]);
const ALLOWED_CUSTOM_FIELDS = new Set(["content_name", "form_name", "value", "currency"]);

export async function POST(request: NextRequest) {
  // Zonder configuratie: stil niets doen, nooit de site breken voor de bezoeker
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ skipped: true, reason: "Meta CAPI niet geconfigureerd" });
  }

  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 8192) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const origin = request.headers.get("origin");
    if (origin && origin !== request.nextUrl.origin && origin !== "https://puurix.nl") {
      return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
    }

    const bodyText = await request.text();
    if (bodyText.length > 8192) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }
    const body = JSON.parse(bodyText);
    const { eventName, eventId, eventSourceUrl, customData, fbp, fbc } = body;

    if (
      typeof eventName !== "string" ||
      !ALLOWED_EVENTS.has(eventName) ||
      typeof eventId !== "string" ||
      !eventId.trim() ||
      eventId.length > 100
    ) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }

    let safeSourceUrl = request.nextUrl.origin;
    if (typeof eventSourceUrl === "string") {
      try {
        const parsed = new URL(eventSourceUrl);
        if (parsed.origin === request.nextUrl.origin || parsed.origin === "https://puurix.nl") {
          safeSourceUrl = parsed.href;
        }
      } catch {
        // Fall back to the current origin for malformed client values.
      }
    }

    const safeCustomData =
      customData && typeof customData === "object" && !Array.isArray(customData)
        ? Object.fromEntries(
            Object.entries(customData).filter(
              ([key, value]) =>
                ALLOWED_CUSTOM_FIELDS.has(key) &&
                ((typeof value === "string" && value.length <= 200) ||
                  (typeof value === "number" && Number.isFinite(value)))
            )
          )
        : {};
    const safeFbp = typeof fbp === "string" && fbp.length <= 200 ? fbp : undefined;
    const safeFbc = typeof fbc === "string" && fbc.length <= 200 ? fbc : undefined;

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
          event_source_url: safeSourceUrl,
          action_source: "website",
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            fbp: safeFbp,
            fbc: safeFbc,
          },
          custom_data: safeCustomData,
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
