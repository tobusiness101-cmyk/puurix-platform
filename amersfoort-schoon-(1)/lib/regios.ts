// Unieke content per regio, zodat elke /schoonmaakbedrijf/[regio] pagina
// niet 100% identieke tekst heeft (alleen de plaatsnaam verschilt anders).
export type RegioInfo = {
  omgeving: string[]; // dorpen/wijken in de buurt -> vangt "[stad] en omgeving" zoekopdrachten
  highlight: string; // unieke zin, niet hergebruikt op andere regiopagina's
};

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
  oosterhout: {
    omgeving: ["Dorst", "Den Hout", "Oosteind"],
    highlight:
      "Van kantorenpark Hoevestein bij de A27 tot bedrijventerrein Everdenberg: wij onderhouden kantoor- en bedrijfspanden door heel Oosterhout.",
  },
  tilburg: {
    omgeving: ["Berkel-Enschot", "Udenhout", "Goirle"],
    highlight:
      "Van kantoren rond het centraal station tot bedrijventerreinen als Vossenberg en Kraaiven: Tilburg is een van de grootste zakelijke knooppunten van Brabant, en wij zijn er dagelijks aan het werk.",
  },
  "etten-leur": {
    omgeving: ["Sprundel", "Rijsbergen", "Zundert"],
    highlight:
      "Van kantorenlocatie Parcstaete tot bedrijventerrein Vosdonk, een van de grootste aaneengesloten bedrijventerreinen van Brabant: wij houden Etten-Leur zakelijk schoon.",
  },
  teteringen: {
    omgeving: [],
    highlight:
      "Van de kantoren rond de Oosterhoutseweg tot de bedrijfspanden op Bedrijvenpark de Posthoorn: ook in Teteringen bent u bij ons aan het juiste adres.",
  },
  waalwijk: {
    omgeving: ["Sprang-Capelle", "Waspik", "Drunen"],
    highlight:
      "Van de bedrijven op Haven, een van de grootste bedrijventerreinen van de regio, tot het historische Schoenenkwartier: Waalwijk kent een rijke industriële traditie, en wij houden het er schoon.",
  },
  kaatsheuvel: {
    omgeving: ["Loon op Zand", "De Moer"],
    highlight:
      "Dankzij de Efteling kent Kaatsheuvel een ongekende dichtheid aan hotels en horecagelegenheden. Wij zorgen voor representatieve, hygiënische ruimtes bij de accommodaties in de omgeving.",
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
