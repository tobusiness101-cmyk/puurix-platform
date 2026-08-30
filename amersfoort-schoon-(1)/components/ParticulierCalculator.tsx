"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, Home, Sun, Sparkles } from "lucide-react";

// === PRIJSOPBOUW & TEKSTEN ===
const ITEMS = [
  { 
    key: "kamer", 
    label: "Kamer (Basis)", 
    desc: "Stofzuigen en dweilen van woon- of slaapkamer.",
    price: 25, 
    vatRate: 0.09, 
    unit: "per kamer" 
  },
  { 
    key: "badkamer", 
    label: "Badkamer (Diep)", 
    desc: "Toilet, douche, wastafel, spiegel, kalk, tegels & dweilen.",
    price: 60, 
    vatRate: 0.09, 
    unit: "vast bedrag" 
  },
  { 
    key: "keuken", 
    label: "Keuken (Basis)", 
    desc: "Aanrecht, kookplaat, wasbak en buitenkant kastjes ontvetten.",
    price: 35, 
    vatRate: 0.09, 
    unit: "vast bedrag" 
  },
  { 
    key: "oven", 
    label: "Oven (Extra)", 
    desc: "Grondige dieptereiniging en ontvetting binnenzijde oven.",
    price: 25, 
    vatRate: 0.09, 
    unit: "per stuk" 
  },
  { 
    key: "koelkast", 
    label: "Koelkast (Extra)", 
    desc: "Dieptereiniging en ontsmetting binnenzijde koelkast.",
    price: 25, 
    vatRate: 0.09, 
    unit: "per stuk" 
  },
  { 
    key: "ramenBinnen", 
    label: "Ramen (Binnen)", 
    desc: "Streeploos wassen van de binnenzijde.",
    price: 3, 
    vatRate: 0.09, 
    unit: "per raam" 
  },
  { 
    key: "ramenBuiten", 
    label: "Ramen (Buiten)", 
    desc: "Buitenzijde wassen (let op: 21% btw tarief).",
    price: 4, 
    vatRate: 0.21, 
    unit: "per raam" 
  },
] as const;

type ItemKey = (typeof ITEMS)[number]["key"];
type Quantities = Record<ItemKey, number>;

const initialQuantities: Quantities = {
  kamer: 2,
  badkamer: 1,
  keuken: 1,
  oven: 0,
  koelkast: 0,
  ramenBinnen: 0,
  ramenBuiten: 0,
};

export const ParticulierCalculator = () => {
  const [quantities, setQuantities] = useState<Quantities>(initialQuantities);

  const updateQty = (key: ItemKey, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  const breakdown = useMemo(() => {
    let subtotalInclVat = 0;
    let vat9 = 0;
    let vat21 = 0;

    // Bereken basisbedragen
    for (const item of ITEMS) {
      const qty = quantities[item.key];
      const lineTotal = qty * item.price; 
      if (item.vatRate === 0.09) {
        vat9 += lineTotal - lineTotal / 1.09;
      } else {
        vat21 += lineTotal - lineTotal / 1.21;
      }
      subtotalInclVat += lineTotal;
    }

    // Pas 10% zomerkorting toe
    const discount = subtotalInclVat * 0.10;
    const total = subtotalInclVat - discount;
    const finalVat9 = vat9 * 0.90;
    const finalVat21 = vat21 * 0.90;

    return { total, discount, vat9: finalVat9, vat21: finalVat21 };
  }, [quantities]);

  return (
    <div className="bg-white rounded-3xl shadow-premium p-6 md:p-10 border border-stone-100">
      
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-accent/10 p-2.5 rounded-xl text-accent">
          <Home size={24} />
        </div>
        <h2 className="text-2xl font-black text-ink">Stel uw pakket samen</h2>
      </div>
      <p className="text-stone-500 mb-8 text-sm leading-relaxed">
        Geen uurtarief, geen verrassingen. Vink aan wat uw woning nodig heeft en zie direct de vaste prijs inclusief btw.
      </p>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {ITEMS.map((item) => (
          <div key={item.key} className="bg-stone-50/50 border border-stone-200 rounded-2xl p-5 flex flex-col justify-between hover:border-accent/40 transition-colors">
            
            {/* Info */}
            <div className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-ink">{item.label}</h3>
                {quantities[item.key] > 0 && (
                  <Sparkles size={14} className="text-accent" />
                )}
              </div>
              <p className="text-xs text-stone-500 min-h-[32px]">{item.desc}</p>
            </div>
            
            {/* Prijs & Knoppen */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200/60">
              <div className="flex flex-col">
                <span className="font-black text-ink">€{item.price.toFixed(2).replace(".", ",")}</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider">{item.unit}</span>
              </div>
              
              <div className="flex items-center gap-3 shrink-0 bg-white border border-stone-200 rounded-full p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => updateQty(item.key, -1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors disabled:opacity-30"
                  disabled={quantities[item.key] === 0}
                >
                  <Minus size={16} />
                </button>
                <span className="w-4 text-center font-bold text-ink">{quantities[item.key]}</span>
                <button
                  type="button"
                  onClick={() => updateQty(item.key, 1)}
                  className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors shadow-sm"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ZOMERKORTING BANNER */}
      {breakdown.total > 0 && (
        <div className="relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-300 rounded-2xl p-5 mb-6 flex items-center justify-between shadow-sm border border-amber-500/20">
          <div className="relative z-10">
            <span className="inline-block bg-white/20 text-amber-900 px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-1 backdrop-blur-sm">
              Tijdelijke Actie
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-900">10% Zomerkorting</h4>
            <p className="text-sm font-medium text-amber-900/80">Uw voordeel: €{breakdown.discount.toFixed(2).replace(".", ",")} direct verrekend!</p>
          </div>
          <Sun className="absolute -right-4 -top-6 w-32 h-32 text-white/20 animate-[spin_10s_linear_infinite] pointer-events-none" />
        </div>
      )}

      {/* TOTAAL BEREKENING */}
      <div className="bg-ink rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-lg font-bold text-white/90">Totaal (incl. btw)</span>
          <div className="flex flex-col items-end">
             {breakdown.discount > 0 && (
               <span className="text-sm text-white/40 line-through decoration-white/40 mb-1">
                 €{(breakdown.total + breakdown.discount).toFixed(2).replace(".", ",")}
               </span>
             )}
             <span className="text-4xl font-black text-amber-400 tracking-tight">
               €{breakdown.total.toFixed(2).replace(".", ",")}
             </span>
          </div>
        </div>
        
        {(breakdown.vat9 > 0 || breakdown.vat21 > 0) && (
          <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center">
             <span className="text-xs text-white/50 uppercase tracking-widest">Btw specificatie</span>
             <p className="text-xs text-white/60 text-right font-medium">
               €{breakdown.vat9.toFixed(2).replace(".", ",")} (9%)
               {breakdown.vat21 > 0 && ` + €${breakdown.vat21.toFixed(2).replace(".", ",")} (21%)`}
             </p>
          </div>
        )}
      </div>

    </div>
  );
};