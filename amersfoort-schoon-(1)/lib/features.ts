// Toggle any section on or off without touching component code.
// Set a flag to `false` to hide that section from the page.
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

// === Actiebanner configuratie ===
// Pas hier de tekst en einddatum aan, of zet `promoBanner` hierboven op
// `false` om de actie volledig uit te schakelen zonder de config te wissen.
export const promoConfig = {
  discountLabel: "20% korting",
  ctaText: "bij aanvraag deze maand",
  // Formaat: JJJJ-MM-DD. Na deze datum verdwijnt de banner automatisch,
  // ook als de flag hierboven op `true` blijft staan.
  validUntil: "2026-09-30",
  linkHref: "/#contact",
};

// Eén plek die bepaalt of de banner echt getoond moet worden:
// zowel de flag als de geldigheidsdatum moeten kloppen.
export const isPromoActive = () => {
  if (!features.promoBanner) return false;
  const today = new Date();
  const deadline = new Date(promoConfig.validUntil + "T23:59:59");
  return today <= deadline;
};
