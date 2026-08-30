"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, Home, Sparkles, MapPin } from "lucide-react";

// === LOSSE ONDERDELEN ===
// Basis = per kamer. Diepreiniging van keukenapparatuur en ramen zijn losse
// toevoegingen, per stuk - geen uurtarief. Btw-tarief per item:
// - Binnenshuis -> 9% (Belastingdienst: "schoonmaken in woningen")
// - Buitenzijde ramen -> 21% (uitzondering op het lage tarief)
const ITEMS = [
  {
    key: "kamer",
    label: "Kamer",
    description: "Stofzuigen, dweilen en afnemen van oppervlakken",
    price: 25,
    vatRate: 0.09,
    unit: "per kamer",
  },
  {
    key: "oven",
    label: "Oven diepreinigen",
    description: "Grondig ontvetten van binnen- en buitenzijde",
    price: 25,
    vatRate: 0.09,
    unit: "per oven",
  },
  {
    key: "koelkast",
    label: "Koelkast diepreinigen",
    description: "Legen, laden uitnemen en grondig reinigen",
    price: 20,
    vatRate: 0.09,
    unit: "per koelkast",
  },
  {
    key: "magnetron",
    label: "Magnetron diepreinigen",
    description: "Binnen- en buitenzijde ontvetten",
    price: 10,
    vatRate: 0.09,
    unit: "per magnetron",
  },
  {
    key: "ramenBinnen",
    label: "Ramen wassen (binnenzijde)",
    description: "Lappen van de binnenzijde",
    price: 3,
    vatRate: 0.09,
    unit: "per raam",
  },
  {
    key: "ramenBuiten",
    label: "Ramen wassen (buitenzijde)",
    description: "Wassen van de buitenzijde, incl. kozijnen",
    price: 4,
    vatRate: 0.21,
    unit: "per raam",
  },
] as const;

type ItemKey = (typeof ITEMS)[number]["key"];
type Quantities = Record<ItemKey, number>;

const initialQuantities: Quantities = {
  kamer: 3,
  oven: 0,
  koelkast: 0,
  magnetron: 0,
  ramenBinnen: 0,
  ramenBuiten: 0,
};

// === VASTE PAKKETTEN ===
// Voor grote, eenmalige klussen werk je niet met losse onderdelen op te
// tellen, maar met een vast bereik per woning - net als bij Move-in
// cleaning en Deep cleaning bij Emilio, maar dan incl. btw.
const PACKAGES = [
  {
    key: "moveIn",
    title: "Verhuisschoonmaak",
    subtitle: "per woning",
    priceRange: "€200 - €325",
    description:
      "Volledige woning diep gereinigd bij verhuizing: kasten van binnen en buiten, sanitair, keuken en vloeren. Ideaal bij sleuteloverdracht.",
  },
  {
    key: "deepClean",
    title: "Totale dieptereiniging",
    subtitle: "per woning",
    priceRange: "€250 - €325",
    description:
      "De hele woning van boven tot onder, inclusief plinten, kozijnen en lichtknoppen. Ideaal als jaarlijkse grote beurt.",
  },
];

export const ParticulierCalculator = () => {
  const [quantities, setQuantities] = useState<Quantities>(initialQuantities);

  const updateQty = (key: ItemKey, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  const breakdown = useMemo(() => {
    let total = 0;
    let vat9 = 0;
    let vat21 = 0;

    for (const item of ITEMS) {
      const qty = quantities[item.key];
      const lineTotal = qty * item.price; // prijzen zijn al incl. btw
      if (item.vatRate === 0.09) {
        vat9 += lineTotal - lineTotal / 1.09;
      } else {
        vat21 += lineTotal - lineTotal / 1.21;
      }
      total += lineTotal;
    }

    return { total, vat9, vat21 };
  }, [quantities]);

  const MINIMUM_ORDER = 40;
  const belowMinimum = breakdown.total > 0 && breakdown.total < MINIMUM_ORDER;

  return (
    <div className="space-y-8">
      {/* LOSSE ONDERDELEN CALCULATOR */}
      <div className="bg-white rounded-2xl shadow-premium p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <Home className="text-accent" size={28} />
          <h2 className="text-2xl font-bold text-ink">Stel uw beurt samen</h2>
        </div>
        <p className="text-stone-600 mb-8">
          Geen uurtarief, geen verrassingen: kies hieronder wat u nodig heeft en zie direct de vaste prijs,
          inclusief btw.
        </p>

        <div className="space-y-5">
          {ITEMS.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-4 pb-5 border-b border-stone-100 last:border-0"
            >
              <div>
                <p className="font-medium text-ink">{item.label}</p>
                <p className="text-sm text-stone-500">{item.description}</p>
                <p className="text-xs text-stone-400 mt-0.5">
                  €{item.price.toFixed(2).replace(".", ",")} {item.unit} · {(item.vatRate * 100).toFixed(0)}%
                  btw
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => updateQty(item.key, -1)}
                  aria-label={`${item.label} verminderen`}
                  className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-accent hover:text-accent transition-colors disabled:opacity-30"
                  disabled={quantities[item.key] === 0}
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center font-bold text-ink">{quantities[item.key]}</span>
                <button
                  type="button"
                  onClick={() => updateQty(item.key, 1)}
                  aria-label={`${item.label} vermeerderen`}
                  className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-accent hover:text-accent transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t-2 border-stone-200">
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-lg font-bold text-ink">Totaal (incl. btw)</span>
            <span className="text-4xl font-black text-ink">
              €{breakdown.total.toFixed(2).replace(".", ",")}
            </span>
          </div>
          {(breakdown.vat9 > 0 || breakdown.vat21 > 0) && (
            <p className="text-xs text-stone-400 text-right">
              waarvan €{breakdown.vat9.toFixed(2).replace(".", ",")} btw (9%)
              {breakdown.vat21 > 0 &&
                ` + €${breakdown.vat21.toFixed(2).replace(".", ",")} btw (21%, buitenzijde)`}
            </p>
          )}

          {belowMinimum && (
            <p className="text-sm text-accent bg-accent/10 rounded-lg px-4 py-3 mt-4">
              We hanteren een minimumbedrag van €{MINIMUM_ORDER},- per boeking. Voeg gerust nog een
              onderdeel toe, of neem contact op voor de mogelijkheden.
            </p>
          )}

          <p className="text-sm text-stone-500 mt-4">
            Dit is een indicatie op basis van een gemiddelde beurt. De definitieve prijs bevestigen we altijd
            voorafgaand aan de eerste schoonmaak.
          </p>
        </div>
      </div>

      {/* VASTE PAKKETTEN */}
      <div className="bg-white rounded-2xl shadow-premium p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-accent" size={28} />
          <h2 className="text-2xl font-bold text-ink">Of kies een vast pakket</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {PACKAGES.map((pkg) => (
            <div key={pkg.key} className="border border-stone-200 rounded-xl p-6 flex flex-col">
              <h3 className="font-bold text-ink text-lg">{pkg.title}</h3>
              <p className="text-sm text-stone-500 mb-4">{pkg.subtitle}</p>
              <p className="text-2xl font-black text-ink mb-3">{pkg.priceRange}</p>
              <p className="text-sm text-stone-600 leading-relaxed">{pkg.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-6">
          Verhuisschoonmaak en dieptereiniging kunnen, afhankelijk van de werkzaamheden, deels onder het
          21%-btw-tarief vallen. We bevestigen dit altijd in de offerte.
        </p>
      </div>

      {/* GEEN KM-VERGOEDING - VASTE MINIMUMAFNAME I.P.V. VOORRIJKOSTEN */}
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex items-start gap-4">
        <MapPin className="text-accent shrink-0 mt-1" size={24} />
        <div>
          <h4 className="font-bold text-ink mb-1">Gratis voorrijkosten in ons werkgebied</h4>
          <p className="text-sm text-stone-600">
            Actief in Oosterhout, Breda, Tilburg , Amersfoort en omgeving - geen aparte kilometervergoeding. Om dit
            mogelijk te maken hanteren we een minimumbedrag van €{MINIMUM_ORDER},- per boeking.
          </p>
        </div>
      </div>
    </div>
  );
};