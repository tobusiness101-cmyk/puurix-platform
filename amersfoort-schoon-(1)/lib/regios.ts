export type RegioCluster =
  | "Amersfoort, Barneveld & Gelderse Vallei"
  | "Dordrecht, Drechtsteden & Zuid-Holland Zuid"
  | "Breda, Oosterhout & Noord-Brabant";

export type RegioInfo = {
  cluster: RegioCluster;
  omgeving: string[];
  bedrijventerreinen: string;
  b2bFocus: string;
  highlight: string;
};

export const regioData: Record<string, RegioInfo> = {
  // ============================================================================
  // CLUSTER 1: AMERSFOORT, BARNEVELD & GELDERSE VALLEI
  // ============================================================================
  amersfoort: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Hoogland", "Vathorst", "Leusden", "Soest", "Hoevelaken"],
    bedrijventerreinen: "De Hoef, Calveen, Isselt en De Wieken-Vinkenhoef",
    b2bFocus: "kantoorpanden, zakelijke dienstverleners, zorgpraktijken en bouwopleveringen langs de A1 en A28",
    highlight:
      "Van moderne kantoorhubs op De Hoef en Calveen tot bedrijfspanden op Isselt en De Wieken-Vinkenhoef: wij zijn dagelijks actief voor het bedrijfsleven in heel Amersfoort.",
  },
  barneveld: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Voorthuizen", "Kootwijkerbroek", "Lunteren", "Terschuur", "Stroe", "Garderen"],
    bedrijventerreinen: "De Harselaar, De Briellaerd en Valkseweg",
    b2bFocus: "grootschalige bedrijfspanden op De Harselaar, MKB-kantoren, en hotels & recreatieparken rond Voorthuizen en de Veluwe",
    highlight:
      "Het zakelijke hart van de Gelderse Vallei. Van bedrijfspanden en kantoren op De Harselaar en De Briellaerd tot hotels, B&B's en groepsaccommodaties rond Voorthuizen en Garderen.",
  },
  ede: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Bennekom", "Lunteren", "Ederveen", "Wekerom", "Otterlo"],
    bedrijventerreinen: "Frankenstein, Kievitsmeent, Heestereng, Schuttersveld en De Vallei",
    b2bFocus: "kennisintensieve kantoren in de Foodvalley, conferentiehotels in Lunteren en medische praktijken",
    highlight:
      "Wij verzorgen de zakelijke schoonmaak voor zowel de kennisintensieve bedrijven rondom de Foodvalley als het MKB en de hotels & recreatielocaties in Ede, Lunteren en Bennekom.",
  },
  nijkerk: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Hoevelaken", "Nijkerkerveen", "Voorthuizen", "Putten"],
    bedrijventerreinen: "Watergoor, Arkervaart, Spoorkamp en Horstbeek (Hoevelaken)",
    b2bFocus: "kantoorpanden langs de A28, showrooms, logistieke kantoren en bouwopleveringen",
    highlight:
      "Gunstig gelegen aan de A28 bedienen wij met ons vaste team de bloeiende bedrijventerreinen Watergoor en Arkervaart in Nijkerk én Horstbeek in Hoevelaken.",
  },
  veenendaal: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Renswoude", "Ederveen", "Overberg", "Elst"],
    bedrijventerreinen: "De Faktorij, De Vendel, Het Ambacht en De Compagnie",
    b2bFocus: "ICT- en advieskantoren, bedrijfsverzamelgebouwen en medische centra langs de A12",
    highlight:
      "Als belangrijk zakencentrum in de Vallei zijn wij sterk vertegenwoordigd met vaste schoonmaakteams op grote bedrijventerreinen zoals De Faktorij, De Vendel en Het Ambacht.",
  },
  leusden: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Achterveld", "Stoutenburg", "Amersfoort"],
    bedrijventerreinen: "De Horst, ’t Hamersveld en Ambachtsweg",
    b2bFocus: "zakelijke dienstverleners, hoofdkantoren en praktijken",
    highlight:
      "Van het bruisende bedrijventerrein De Horst tot de zakelijke dienstverleners en praktijken in het groen: Leusden profiteert wekelijks van onze stipte, vlekkeloze service.",
  },
  soest: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Soesterberg", "Baarn", "Amersfoort"],
    bedrijventerreinen: "De Grachten, Richelleweg en Soesterberg-Noord",
    b2bFocus: "MKB-kantoren, zorglocaties, showrooms en zakelijke dienstverlening",
    highlight:
      "Van bedrijfspanden op bedrijventerrein De Grachten in Soest tot zakelijke locaties in Soesterberg: wij leveren een vast en betrouwbaar schoonmaakteam uit de regio.",
  },
  bunschoten: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Spakenburg", "Eemdijk", "Nijkerk", "Amersfoort"],
    bedrijventerreinen: "De Kronkels en Haarbrug-Noord & Zuid",
    b2bFocus: "productie- en handelsbedrijven, moderne kantoren en voedselveilige zakelijke omgevingen",
    highlight:
      "In Bunschoten-Spakenburg onderhouden wij kantoren en bedrijfspanden op onder meer De Kronkels en Haarbrug met een nuchtere, grondige aanpak.",
  },
  baarn: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Soest", "Lage Vuursche", "Eemnes"],
    bedrijventerreinen: "Noordschil en Hermesweg",
    b2bFocus: "kantoorvilla's, zakelijke dienstverlening, horeca en monumentale kantoorpanden",
    highlight:
      "Voor de karakteristieke kantoorvilla's, praktijken en bedrijfspanden op Noordschil in Baarn bieden wij discrete en representatieve kantoorschoonmaak.",
  },
  putten: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Voorthuizen", "Nijkerk", "Ermelo", "Garderen"],
    bedrijventerreinen: "Keizerswoert en Hoge Eng",
    b2bFocus: "hotels, vakantieparken, MKB-kantoren en zorgpraktijken op de Veluwe",
    highlight:
      "Op de grens van de Gelderse Vallei en de Veluwe ontzorgen wij bedrijven op Keizerswoert en Hoge Eng én hotels en recreatieparken rondom Putten.",
  },
  ermelo: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Putten", "Harderwijk", "Horst", "Speuld"],
    bedrijventerreinen: "Veldzicht en Kerkdennen",
    b2bFocus: "recreatieparken, hotels, zorginstellingen en MKB-kantoren",
    highlight:
      "Van zakelijke kantoorpanden op bedrijventerrein Veldzicht tot hotels, B&B's en vakantieparken in de bosrijke omgeving van Ermelo: wij zorgen voor constante topkwaliteit.",
  },
  scherpenzeel: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Renswoude", "Woudenberg", "Barneveld"],
    bedrijventerreinen: "'t Zwarte Land en Glashorst",
    b2bFocus: "moderne kantoren, showrooms, bouwbedrijven en medische praktijken",
    highlight:
      "In deze ondernemende Gelderse gemeente bieden wij persoonlijke, vaste schoonmaakploegen voor kantoren, showrooms en praktijken op onder meer 't Zwarte Land.",
  },
  renswoude: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Scherpenzeel", "Veenendaal", "Ederveen"],
    bedrijventerreinen: "Groot Overeem",
    b2bFocus: "kantoorhoudende bedrijven, aannemers en lokale bedrijfspanden",
    highlight:
      "Voor de ondernemers en kantoorhoudende bedrijven op bedrijventerrein Groot Overeem en in Renswoude leveren wij betrouwbare schoonmaak zonder onnodige overhead.",
  },
  woudenberg: {
    cluster: "Amersfoort, Barneveld & Gelderse Vallei",
    omgeving: ["Maarn", "Scherpenzeel", "Austerlitz", "Leusden"],
    bedrijventerreinen: "Parallelweg en Klein Landaas",
    b2bFocus: "MKB-kantoren, logistieke dienstverleners en praktijken",
    highlight:
      "Centraal gelegen tussen Amersfoort en de Utrechtse Heuvelrug zorgen wij voor een strakke en representatieve uitstraling van uw kantoor of praktijk in Woudenberg.",
  },

  // ============================================================================
  // CLUSTER 2: DORDRECHT, DRECHTSTEDEN & ZUID-HOLLAND ZUID
  // ============================================================================
  dordrecht: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Zwijndrecht", "Papendrecht", "Sliedrecht", "Dubbeldam"],
    bedrijventerreinen: "Dordtse Kil I t/m IV, Amstelwijck, Leerpark, Krabbepolder en De Staart",
    b2bFocus: "hoofdkantoren, maritieme en logistieke dienstverleners, hotels, zorgpraktijken en bouwopleveringen",
    highlight:
      "Van representatieve kantoorpanden op Amstelwijck en het Leerpark tot grootschalige bedrijventerreinen zoals Dordtse Kil I t/m IV en Krabbepolder: wij zijn uw vaste B2B-schoonmaakpartner in Dordrecht.",
  },
  zwijndrecht: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Dordrecht", "Hendrik-Ido-Ambacht", "Heerjansdam", "Barendrecht"],
    bedrijventerreinen: "Groote Lindt, Bakestein en De Geer",
    b2bFocus: "kantoorpanden langs de A16, handelsbedrijven, scheepvaartkantoren en bouwopleveringen",
    highlight:
      "Direct aan de A16 en de Oude Maas verzorgen wij de periodieke kantoorschoonmaak, praktijkschoonmaak en opleveringsschoonmaak op onder meer Groote Lindt en Bakestein.",
  },
  papendrecht: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Dordrecht", "Sliedrecht", "Alblasserdam", "Oud-Alblas"],
    bedrijventerreinen: "Oosteind, Nieuwland en Burgemeester Keijzerweg",
    b2bFocus: "technologische en maritieme kantoren, zakelijke dienstverlening en medische praktijken",
    highlight:
      "Voor de hoogwaardige technologische, maritieme en zakelijke dienstverleners op onder meer Oosteind en Nieuwland in Papendrecht leveren wij stipte kantoor- en bedrijfsschoonmaak.",
  },
  sliedrecht: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Papendrecht", "Hardinxveld-Giessendam", "Wijngaarden"],
    bedrijventerreinen: "Stationspark, Nijverwaard, Kerkerak en Noord-Oost Kwadrant",
    b2bFocus: "kantoorvilla's op het Stationspark, maritieme hoofdkantoren, meubelboulevard en MKB",
    highlight:
      "Met een grote dichtheid aan kantoorvilla's op het Stationspark en bedrijfspanden op Nijverwaard houden wij zakelijk Sliedrecht dagelijks en wekelijks brandschoon.",
  },
  "hendrik-ido-ambacht": {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Zwijndrecht", "Ridderkerk", "Alblasserdam"],
    bedrijventerreinen: "Ambachtsezoom en Antoniapolder",
    b2bFocus: "nieuwbouw bedrijfspanden op Ambachtsezoom, kantoren, VvE's en zorgpraktijken",
    highlight:
      "Van het duurzame bedrijvenpark Ambachtsezoom langs de A16 tot Antoniapolder en lokale praktijken: wij verzorgen vlekkeloze zakelijke schoonmaak in Hendrik-Ido-Ambacht.",
  },
  alblasserdam: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Papendrecht", "Hendrik-Ido-Ambacht", "Kinderdijk", "Oud-Alblas"],
    bedrijventerreinen: "Nieuwland Parc, Vinkenwaard en Hoogendijk",
    b2bFocus: "bedrijfspanden op Nieuwland Parc, maritieme sector, hotels en kantoren",
    highlight:
      "Zowel op bedrijventerrein Nieuwland Parc en Vinkenwaard als bij zakelijke en hospitality-locaties in Alblasserdam zorgen wij voor betrouwbaar periodiek onderhoud.",
  },
  "hardinxveld-giessendam": {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Sliedrecht", "Gorinchem", "Boven-Hardinxveld", "Giessendam"],
    bedrijventerreinen: "Nieuweweg, Peulen en De Schrank",
    b2bFocus: "bouw- en aannemersbedrijven, maritieme kantoren en opleveringsschoonmaak",
    highlight:
      "Voor de sterke bouw-, infra- en maritieme sector op bedrijventerreinen Peulen en Nieuweweg in Hardinxveld-Giessendam leveren wij zowel vaste kantoorschoonmaak als snelle bouwopleveringen.",
  },
  gorinchem: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Schelluinen", "Arkel", "Dalem", "Sleeuwijk", "Vuren"],
    bedrijventerreinen: "Papland, Avelingen-West & Oost en Oost I & II",
    b2bFocus: "grootschalige kantoren op Papland en Avelingen, congres- en hotellocaties en nieuwbouw",
    highlight:
      "Op het knooppunt van de A15 en A27 ontzorgen wij kantoren, bedrijven, hotels en nieuwbouwprojecten op onder andere Papland, Avelingen en Oost I & II in Gorinchem.",
  },
  ridderkerk: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Barendrecht", "Hendrik-Ido-Ambacht", "Bolnes", "Rijsoord"],
    bedrijventerreinen: "Donkersloot, Cornelisland en Nieuw-Reijerwaard",
    b2bFocus: "logistieke hoofdkantoren, AGF-handelsbedrijven en MKB-kantoren",
    highlight:
      "Centraal tussen Rotterdam en Dordrecht bedienen wij kantoren en bedrijfspanden op onder meer Donkersloot, Cornelisland en Nieuw-Reijerwaard in Ridderkerk.",
  },
  barendrecht: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Ridderkerk", "Zwijndrecht", "Heerjansdam"],
    bedrijventerreinen: "Vaanpark, Dierenstein, Bijdorp en Cornelisland",
    b2bFocus: "moderne kantoorpanden op Vaanpark, handelsbedrijven en medische praktijken",
    highlight:
      "Van de representatieve kantoorpanden op Vaanpark langs de A29 tot bedrijven op Dierenstein en Bijdorp: Puurix staat garant voor een verzorgde werkomgeving in Barendrecht.",
  },
  "hoeksche-waard": {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Oud-Beijerland", "Numansdorp", "Strijen", "'s-Gravendeel", "Puttershoek", "Mijnsheerenland"],
    bedrijventerreinen: "De Bosschen (Oud-Beijerland), Middelsluis (Numansdorp) en Boonsweg (Heinenoord)",
    b2bFocus: "MKB-kantoren, bedrijfspanden, praktijken en bouwopleveringen in de gehele gemeente Hoeksche Waard",
    highlight:
      "Van bedrijventerrein De Bosschen in Oud-Beijerland en Boonsweg in Heinenoord tot kantoren in Numansdorp en Strijen: wij bedienen het bedrijfsleven in de gehele Hoeksche Waard.",
  },
  molenlanden: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Groot-Ammers", "Giessenburg", "Arkel", "Nieuw-Lekkerland", "Bleskensgraaf", "Meerkerk"],
    bedrijventerreinen: "Gelkenes (Groot-Ammers), Transportweg (Meerkerk) en Planetenlaan (Nieuw-Lekkerland)",
    b2bFocus: "regionale bedrijfspanden, kantoren en logistieke locaties langs de A27 en Lek",
    highlight:
      "In de gemeente Molenlanden verzorgen wij de vaste kantoorschoonmaak en opleveringsschoonmaak voor ondernemers in onder meer Groot-Ammers, Meerkerk, Giessenburg en Nieuw-Lekkerland.",
  },
  altena: {
    cluster: "Dordrecht, Drechtsteden & Zuid-Holland Zuid",
    omgeving: ["Werkendam", "Woudrichem", "Sleeuwijk", "Almkerk", "Hank", "Nieuwendijk", "Genderen"],
    bedrijventerreinen: "Beatrixhaven en Bruine Kilhaven (Werkendam), Doornhoek (Almkerk) en Rijksweg (Nieuwendijk)",
    b2bFocus: "maritieme bedrijven in Werkendam, MKB-kantoren langs de A27 en recreatie bij de Biesbosch",
    highlight:
      "Als directe schakel tussen Brabant en Dordrecht zijn wij dagelijks actief op de bedrijventerreinen in Werkendam, Sleeuwijk, Almkerk, Woudrichem en Hank.",
  },

  // ============================================================================
  // CLUSTER 3: BREDA, OOSTERHOUT & NOORD-BRABANT
  // ============================================================================
  breda: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Ginneken", "Prinsenbeek", "Bavel", "Ulvenhout", "Teteringen"],
    bedrijventerreinen: "Hazeldonk, Rithmeesterpark, Hoogeind, Steenakker en Emer",
    b2bFocus: "kantoorpanden, bedrijfsverzamelgebouwen, tandartspraktijken, hotels en bouwopleveringen",
    highlight:
      "Van kantoorpanden rond het Chassé Park en Hoogeind tot bedrijventerreinen bij Hazeldonk en Steenakker: wij kennen Breda door en door en rijden dagelijks door de hele regio.",
  },
  oosterhout: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Dorst", "Den Hout", "Oosteind"],
    bedrijventerreinen: "Hoevestein, Everdenberg, Weststad en Vijf Eiken",
    b2bFocus: "kantorenpark Hoevestein, tandarts- en zorgpraktijken, MKB-panden en bouwopleveringen",
    highlight:
      "Van kantorenpark Hoevestein bij de A27 tot bedrijventerrein Everdenberg en Weststad: wij onderhouden kantoor-, praktijk- en bedrijfspanden door heel Oosterhout.",
  },
  tilburg: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Berkel-Enschot", "Udenhout", "Goirle"],
    bedrijventerreinen: "Vossenberg, Kraaiven, Katsbogten, Loven en Spoorzone",
    b2bFocus: "grootschalige kantoren, logistieke centra, medische praktijken en vastgoedopleveringen",
    highlight:
      "Van moderne kantoren in de Spoorzone tot bedrijventerreinen als Vossenberg, Katsbogten en Kraaiven: Tilburg is een van de grootste zakelijke knooppunten van Brabant waar wij dagelijks werken.",
  },
  "etten-leur": {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Sprundel", "Rijsbergen", "Zundert", "Sint Willebrord"],
    bedrijventerreinen: "Vosdonk en kantorenpark Parcstaete",
    b2bFocus: "kantoorlocaties op Parcstaete, bedrijfspanden op Vosdonk en zorgpraktijken",
    highlight:
      "Van kantorenlocatie Parcstaete tot bedrijventerrein Vosdonk, een van de grootste aaneengesloten bedrijventerreinen van Brabant: wij houden Etten-Leur zakelijk schoon.",
  },
  teteringen: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Breda", "Oosterhout"],
    bedrijventerreinen: "Bedrijvenpark de Posthoorn en Oosterhoutseweg",
    b2bFocus: "zakelijke kantoorvilla's, praktijken en nieuwbouwopleveringen",
    highlight:
      "Van de kantoren rond de Oosterhoutseweg tot de bedrijfspanden op Bedrijvenpark de Posthoorn: ook in Teteringen bent u bij ons aan het juiste adres.",
  },
  waalwijk: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Sprang-Capelle", "Waspik", "Drunen"],
    bedrijventerreinen: "Haven I t/m VIII en Zanddonk",
    b2bFocus: "hoofdkantoren en logistieke kantoren op Haven, showrooms en MKB",
    highlight:
      "Van de moderne bedrijven op Haven, een van de grootste bedrijventerreinen van de regio, tot Zanddonk en het centrum: wij houden zakelijk Waalwijk vlekkeloos schoon.",
  },
  kaatsheuvel: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Loon op Zand", "De Moer", "Sprang-Capelle"],
    bedrijventerreinen: "De Kets, Het Hoog en recreatiegebied Efteling",
    b2bFocus: "hotels, vakantieparken, B&B's, horeca en MKB-kantoren",
    highlight:
      "Dankzij de Efteling kent Kaatsheuvel een ongekende dichtheid aan hotels, vakantieparken en horeca. Wij zorgen voor representatieve, hygiënische kamers en kantoorruimtes.",
  },
  "alphen-chaam": {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Alphen", "Chaam", "Galder", "Strijbeek", "Bavel"],
    bedrijventerreinen: "Baarleseweg (Alphen) en lokale dorpskernen",
    b2bFocus: "recreatieparken, groepsaccommodaties en lokale MKB-kantoren",
    highlight:
      "Van recreatie- en groepsaccommodaties in de buitengebieden tot de lokale ondernemers en kantoren in Alphen en Chaam: wij leveren betrouwbare schoonmaak op maat.",
  },
  dongen: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["'s Gravenmoer", "Dongen-Vaart", "Klein-Dongen"],
    bedrijventerreinen: "Tichelrijt en De Wildert",
    b2bFocus: "MKB-bedrijfspanden op Tichelrijt, kantoren en praktijken",
    highlight:
      "Zowel op bedrijventerrein Tichelrijt en De Wildert als in het centrum van Dongen zorgen wij voor een brandschoon en professioneel visitekaartje voor uw onderneming.",
  },
  drimmelen: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Made", "Terheijden", "Hooge Zwaluwe", "Lage Zwaluwe", "Wagenberg"],
    bedrijventerreinen: "Brieltgenspolder (Made) en jachthavengebied Biesbosch",
    b2bFocus: "kantoren in Made en Terheijden, jachthaven-horeca en recreatieverblijven",
    highlight:
      "Gelegen aan de Biesbosch bedienen wij met trots de kantoren op de Brieltgenspolder in Made, lokale praktijken en recreatielocaties in Drimmelen en Terheijden.",
  },
  geertruidenberg: {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Raamsdonksveer", "Raamsdonk"],
    bedrijventerreinen: "Dombosch (Raamsdonksveer) en Centraleweg",
    b2bFocus: "kantoor- en bedrijfspanden op Dombosch langs de A27/A59",
    highlight:
      "Van het historische centrum van Geertruidenberg tot het grote zakelijke bedrijventerrein Dombosch in Raamsdonksveer: wij kennen de regio en leveren topkwaliteit.",
  },
  "gilze-en-rijen": {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Gilze", "Rijen", "Hulten", "Molenschot"],
    bedrijventerreinen: "Haansberg (Rijen) en Broekakkers (Gilze)",
    b2bFocus: "MKB-kantoren, bedrijfspanden en recreatieparken tussen Breda en Tilburg",
    highlight:
      "Dankzij de centrale ligging tussen Breda en Tilburg en de zakelijke bedrijventerreinen Haansberg en Broekakkers bieden wij uiterst snelle en flexibele diensten.",
  },
  "loon-op-zand": {
    cluster: "Breda, Oosterhout & Noord-Brabant",
    omgeving: ["Kaatsheuvel", "De Moer"],
    bedrijventerreinen: "De Spoel en de Loonse en Drunense Duinen",
    b2bFocus: "hotels, verblijfsrecreatie, zorgpraktijken en lokale kantoren",
    highlight:
      "Naast de sterke hotel- en recreatiesector rondom de Loonse en Drunense Duinen verzorgen wij de hoogwaardige kantoor- en praktijkschoonmaak voor het MKB in Loon op Zand.",
  },
};

const defaultRegioInfo: RegioInfo = {
  cluster: "Breda, Oosterhout & Noord-Brabant",
  omgeving: [],
  bedrijventerreinen: "lokale bedrijventerreinen en kantoorlocaties",
  b2bFocus: "kantoren, praktijken, horeca en zakelijke opleveringen",
  highlight:
    "Wij werken met een vast, herkenbaar schoonmaakteam uit de regio, waardoor we snel kunnen schakelen en altijd dichtbij zijn.",
};

export function getRegioInfo(slug: string): RegioInfo {
  return regioData[slug] ?? defaultRegioInfo;
}

const CITY_OVERRIDES: Record<string, string> = {
  "etten-leur": "Etten-Leur",
  "alphen-chaam": "Alphen-Chaam",
  "gilze-en-rijen": "Gilze en Rijen",
  "loon-op-zand": "Loon op Zand",
  "s-hertogenbosch": "'s-Hertogenbosch",
  "hendrik-ido-ambacht": "Hendrik-Ido-Ambacht",
  "hardinxveld-giessendam": "Hardinxveld-Giessendam",
  "hoeksche-waard": "Hoeksche Waard",
};

export function parseRegioSlug(slug: string): string {
  return decodeURIComponent(slug).trim().toLowerCase();
}

export function formatCityName(slug: string): string {
  const safe = slug.trim().toLowerCase();
  if (CITY_OVERRIDES[safe]) return CITY_OVERRIDES[safe];
  return safe
    .split("-")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

export const formatRegionName = formatCityName;

export function getClusterCities(cluster: RegioCluster, excludeSlug?: string): string[] {
  return Object.entries(regioData)
    .filter(([slug, info]) => info.cluster === cluster && slug !== excludeSlug)
    .map(([slug]) => slug);
}