// lib/features.ts

export const features = {
  hero: true,
  trustMarquee: true,
  beforeAfterSlider: true,
  services: true,
  infoSections: true,
  rekentool: true,
  quoteCalculator: true,
  faq: true,
  leadMagnet: true,
  footer: true,
  stickyContact: true,
  promoBanner: true,
} as const;

export const promoConfig = {
  isEnabled: true,
  discountPercentage: 20,

  // Laatste seconde van 30 september 2026 in Nederlandse tijd.
  validUntil: "2026-09-30T23:59:59+02:00",

  discountLabel: "welkomstkorting",
  ctaText: "bij aanvraag deze maand",
  linkHref: "/#contact",

  appliesTo: {
    b2b: true,
    particulier: false,
  },
} as const;

export function isPromoActive(): boolean {
  if (!promoConfig.isEnabled) return false;

  return new Date() <= new Date(promoConfig.validUntil);
}