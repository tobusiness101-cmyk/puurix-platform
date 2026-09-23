// lib/pricing.ts

// --- PARTICULIERE PRIJZEN & CONFIGURATIE ---
export const PROMO_CONFIG = {
  isActive: true,
  title: "10% Zomerkorting", 
  discountPercentage: 0.10, 
};

export const PARTICULIER_ITEMS = [
  { key: "kamer", label: "Kamer (Basis)", price: 27, vatRate: 0.09, unit: "per kamer" },
  { key: "badkamer", label: "Badkamer (Diep)", price: 63, vatRate: 0.09, unit: "vast bedrag" },
  { key: "keuken", label: "Keuken (Basis)", price: 35, vatRate: 0.09, unit: "vast bedrag" },
  { key: "oven", label: "Oven (Extra)", price: 25, vatRate: 0.09, unit: "per stuk" },
  { key: "koelkast", label: "Koelkast (Extra)", price: 25, vatRate: 0.09, unit: "per stuk" },
  { key: "ramenBinnen", label: "Ramen (Binnen)", price: 3, vatRate: 0.09, unit: "per raam" },
  { key: "ramenBuiten", label: "Ramen (Buiten)", price: 4, vatRate: 0.21, unit: "per raam" },
] as const;

// --- ZAKELIJKE PRIJSLOGICA (TWO-PART TARIFF) ---
export function calculateB2BPrice(spaceType: string, sqm: number, frequency: string, weeklyDays: number) {
  // 1. Basis maandtarief per m²
  let ratePerSqmMonth = 0.76; 
  if (spaceType === "Kantoor") ratePerSqmMonth = 0.76;
  else if (spaceType === "Praktijk / Zorginstelling") ratePerSqmMonth = 0.95; 
  else if (spaceType === "Short-stay / Airbnb") ratePerSqmMonth = 1.10;
  else if (spaceType === "Opleveringsschoonmaak") ratePerSqmMonth = 2.00; 
  else ratePerSqmMonth = 0.70;

  // 2. Schaalvoordeel / Volumekorting per m²
  let volumeDiscount = 1.0;
  if (sqm >= 500 && sqm < 1000) volumeDiscount = 0.785;  
  else if (sqm >= 1000) volumeDiscount = 0.595;          

  let fixedCost = 0;          
  let effortMultiplier = 1.0; 
  let isOneTime = false;

  // 3. Two-Part Tariff logica per frequentie
  if (frequency === "Eenmalig") {
    isOneTime = true;
    fixedCost = 45;
    effortMultiplier = spaceType === "Opleveringsschoonmaak" ? 1.0 : 0.50; 
  } else if (frequency === "Maandelijks") {
    fixedCost = 25; 
    effortMultiplier = 0.40; 
  } else if (frequency === "Wekelijks") {
    fixedCost = 0; 
    let frequencyDiscount = 1.0;
    if (weeklyDays === 2) frequencyDiscount = 0.90; 
    else if (weeklyDays === 3) frequencyDiscount = 0.85;
    else if (weeklyDays === 4) frequencyDiscount = 0.80;
    else if (weeklyDays >= 5) frequencyDiscount = 0.75;
    effortMultiplier = weeklyDays * frequencyDiscount;
  } else if (frequency === "Dagelijks") {
    fixedCost = 0;
    effortMultiplier = 5 * 0.75; 
  }

  // 4. Berekening
  let variableCost = sqm * ratePerSqmMonth * volumeDiscount * effortMultiplier;
  let normalPrice = fixedCost + variableCost;
  
  // 5. Bodemprijzen vóór korting
  normalPrice = Math.max(Math.round(normalPrice), isOneTime ? 120 : 95); 

  // 6. Welkomstkorting & Bodemprijzen na korting
  let discountedPrice = normalPrice * 0.80;
  discountedPrice = Math.max(discountedPrice, isOneTime ? 95 : 75); 

  return { 
    amount: Math.round(discountedPrice), 
    originalAmount: Math.round(normalPrice),
    period: isOneTime ? "eenmalig" : "per maand",
    savings: Math.round(normalPrice - discountedPrice),
    hasVolumeDiscount: volumeDiscount < 1.0,
    hasFixedCost: fixedCost > 0
  };
}