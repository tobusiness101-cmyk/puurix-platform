export type RegioInfo = { omgeving: string[]; highlight: string };

export const regioData: Record<string, RegioInfo> = {
  breda: {
    omgeving: ["Ginneken", "Prinsenbeek", "Bavel", "Ulvenhout", "Teteringen"],
    highlight:
      "Van kantoorpanden rond het Chassé Park tot bedrijventerreinen bij Hazeldonk: wij kennen Breda en omgeving door en door, en rijden dagelijks door de hele regio.",
  },
  amersfoort: {
    omgeving: ["Hoogland", "Vathorst", "Leusden", "Soest", "Nieuwland"],
    highlight:
      "Van de binnenstad tot bedrijventerrein De Hoef: wij zijn actief in heel Amersfoort en de directe omgeving.",
  },
};

const defaultRegioInfo: RegioInfo = {
  omgeving: [],
  highlight:
    "Wij werken met een vast, herkenbaar schoonmaakteam uit de regio, waardoor we snel kunnen schakelen en altijd dichtbij zijn.",
};

export function getRegioInfo(slug: string): RegioInfo {
  return regioData[slug] ?? defaultRegioInfo;
}
