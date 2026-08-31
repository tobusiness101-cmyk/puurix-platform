export type RegioInfo = {
  omgeving: string[]; 
  highlight: string; 
};

export const regioData: Record<string, RegioInfo> = {
  // --- Bestaande Regio's ---
  breda: {
    omgeving: ["Ginneken", "Prinsenbeek", "Bavel", "Ulvenhout", "Teteringen"],
    highlight: "Van kantoorpanden rond het Chassé Park tot bedrijventerreinen bij Hazeldonk: wij kennen Breda en omgeving door en door, en rijden dagelijks door de hele regio.",
  },
  amersfoort: {
    omgeving: ["Hoogland", "Vathorst", "Leusden", "Soest", "Nieuwland"],
    highlight: "Van de binnenstad tot bedrijventerrein De Hoef: wij zijn actief in heel Amersfoort en de directe omgeving.",
  },
  oosterhout: {
    omgeving: ["Dorst", "Den Hout", "Oosteind"],
    highlight: "Van kantorenpark Hoevestein bij de A27 tot bedrijventerrein Everdenberg: wij onderhouden kantoor- en bedrijfspanden door heel Oosterhout.",
  },
  tilburg: {
    omgeving: ["Berkel-Enschot", "Udenhout", "Goirle"],
    highlight: "Van kantoren rond het centraal station tot bedrijventerreinen als Vossenberg en Kraaiven: Tilburg is een van de grootste zakelijke knooppunten van Brabant, en wij zijn er dagelijks aan het werk.",
  },
  "etten-leur": {
    omgeving: ["Sprundel", "Rijsbergen", "Zundert"],
    highlight: "Van kantorenlocatie Parcstaete tot bedrijventerrein Vosdonk, een van de grootste aaneengesloten bedrijventerreinen van Brabant: wij houden Etten-Leur zakelijk schoon.",
  },
  teteringen: {
    omgeving: [],
    highlight: "Van de kantoren rond de Oosterhoutseweg tot de bedrijfspanden op Bedrijvenpark de Posthoorn: ook in Teteringen bent u bij ons aan het juiste adres.",
  },
  waalwijk: {
    omgeving: ["Sprang-Capelle", "Waspik", "Drunen"],
    highlight: "Van de bedrijven op Haven, een van de grootste bedrijventerreinen van de regio, tot het historische Schoenenkwartier: Waalwijk kent een rijke industriële traditie, en wij houden het er schoon.",
  },
  kaatsheuvel: {
    omgeving: ["Loon op Zand", "De Moer"],
    highlight: "Dankzij de Efteling kent Kaatsheuvel een ongekende dichtheid aan hotels en horecagelegenheden. Wij zorgen voor representatieve, hygiënische ruimtes bij de accommodaties in de omgeving.",
  },

  // --- Nieuwe Regio's: Noord-Brabant ---
  "alphen-chaam": {
    omgeving: ["Alphen", "Chaam", "Galder", "Strijbeek", "Bavel"],
    highlight: "Van de rustige buitengebieden tot de lokale ondernemers in de dorpskernen: wij leveren betrouwbare schoonmaak in de uitgestrekte, groene gemeente Alphen-Chaam.",
  },
  dongen: {
    omgeving: ["'s Gravenmoer", "Dongen-Vaart", "Klein-Dongen"],
    highlight: "Zowel op bedrijventerrein Tichelrijt als in het sfeervolle centrum van Dongen zorgen wij voor een brandschoon en professioneel visitekaartje voor uw onderneming.",
  },
  drimmelen: {
    omgeving: ["Made", "Terheijden", "Hooge Zwaluwe", "Lage Zwaluwe", "Wagenberg"],
    highlight: "Gelegen aan de Biesbosch, bedienen wij met trots de havengebieden, lokale kantoren en horeca in Made, Drimmelen en de omliggende dorpskernen.",
  },
  geertruidenberg: {
    omgeving: ["Raamsdonksveer", "Raamsdonk"],
    highlight: "Van het historische centrum van Geertruidenberg tot de dynamische bedrijventerreinen zoals Dombosch in Raamsdonksveer: wij kennen de regio en leveren topkwaliteit.",
  },
  "gilze-en-rijen": {
    omgeving: ["Gilze", "Rijen", "Hulten", "Molenschot"],
    highlight: "Dankzij de centrale ligging tussen Breda en Tilburg en de zakelijke bedrijventerreinen zoals Haansberg en Broekakkers, bieden wij uiterst snelle en flexibele diensten.",
  },
  "loon-op-zand": {
    omgeving: ["Kaatsheuvel", "De Moer"],
    highlight: "Naast de sterke recreatiesector verzorgen wij tevens de hoogwaardige kantoor- en praktijkschoonmaak voor het lokale MKB in Loon op Zand en de directe omgeving.",
  },

  // --- Nieuwe Regio's: Gelderland ---
  barneveld: {
    omgeving: ["Voorthuizen", "Kootwijkerbroek", "Terschuur", "Stroe"],
    highlight: "Het kloppend hart van de regio. Van bedrijventerrein De Harselaar tot lokale kantoorpanden: ondernemers in Barneveld kunnen rekenen op onze strakke, grondige aanpak.",
  },
  ede: {
    omgeving: ["Bennekom", "Lunteren", "Ederveen", "Wekerom"],
    highlight: "Wij verzorgen de zakelijke schoonmaak voor de kennisintensieve bedrijven rondom de Food Valley, én bieden betrouwbare diensten voor het bredere lokale MKB in Ede.",
  },
  nijkerk: {
    omgeving: ["Nijkerkerveen", "Hoevelaken", "Appel"],
    highlight: "Gunstig gelegen aan de A28 bedienen wij met ons vaste team de bloeiende bedrijventerreinen zoals Watergoor en de kantoorpanden in het centrum van Nijkerk.",
  },
  scherpenzeel: {
    omgeving: ["Renswoude", "Woudenberg"],
    highlight: "In deze ambitieuze Gelderse gemeente bieden wij persoonlijke, vaste schoonmaakploegen voor kantoren, moderne showrooms en medische praktijken.",
  },

  // --- Nieuwe Regio's: Utrecht ---
  leusden: {
    omgeving: ["Achterveld", "Stoutenburg"],
    highlight: "Van het bruisende bedrijventerrein De Horst tot de zakelijke dienstverleners in het groen: Leusden profiteert wekelijks van onze onzichtbare, maar vlekkeloze service.",
  },
  renswoude: {
    omgeving: ["Scherpenzeel", "Veenendaal", "Ederveen"],
    highlight: "Voor de lokale ondernemers en kantoorhoudende bedrijven in Renswoude leveren wij nuchtere, betrouwbare schoonmaak zonder onnodige overhead of poespas.",
  },
  veenendaal: {
    omgeving: ["Ederveen", "Overberg", "Elst"],
    highlight: "Als belangrijk zakencentrum in de vallei zijn wij sterk vertegenwoordigd met vaste schoonmaakteams op grote bedrijventerreinen zoals De Faktorij, De Vendel en Het Ambacht.",
  },
  woudenberg: {
    omgeving: ["Maarn", "Scherpenzeel", "Austerlitz"],
    highlight: "Centraal gelegen op de Utrechtse Heuvelrug zorgen wij voor een strakke en representatieve uitstraling van uw kantoor of praktijk, perfect passend bij Woudenberg.",
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