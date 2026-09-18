import { regioData } from "@/lib/regios";

export type ServiceFaq = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  audience: string;
  promise: string;
  sections: Array<{ heading: string; body: string }>;
  checklist: string[];
  faq: ServiceFaq[];
  regionalRegions: string[];
};

export const servicePages: Record<string, ServicePage> = {
  "tandartspraktijk-schoonmaken": {
    slug: "tandartspraktijk-schoonmaken",
    name: "Tandartspraktijk schoonmaken",
    eyebrow: "Schoonmaak voor tandartspraktijken",
    title: "Tandartspraktijk schoonmaken zonder verstoring van uw werkdag",
    intro: "Een tandartspraktijk vraagt om een consequente schoonmaakroutine, aandacht voor contactoppervlakken en een planning die aansluit op de praktijkvoering.",
    description: "Professionele schoonmaak voor tandartspraktijken met vaste afspraken, aandacht voor behandelkamers, wachtkamers, sanitair en contactoppervlakken.",
    audience: "Tandartspraktijken, orthodontiepraktijken en mondzorglocaties",
    promise: "Een nette, verzorgde praktijk waarin medewerkers en patiënten zich welkom voelen.",
    sections: [
      { heading: "Schoonmaak rondom behandelkamers", body: "We richten de werkzaamheden in op de ruimtes en oppervlakken die in uw praktijk dagelijks intensief worden gebruikt. Denk aan vloeren, deuren, handgrepen, balies en overige afgesproken contactpunten." },
      { heading: "Wachtkamer en ontvangst", body: "De eerste indruk begint bij de entree. Daarom nemen we de ontvangstzone, zitplaatsen, vloeren en zichtbare oppervlakken mee in een vaste schoonmaakroutine." },
      { heading: "Sanitair en personeelsruimtes", body: "Sanitair, pantry en personeelsruimtes worden volgens de afgesproken frequentie gereinigd, zodat deze ruimtes gedurende de werkweek verzorgd blijven." },
      { heading: "Een planning die bij uw praktijk past", body: "Werkzaamheden kunnen buiten openingstijden of op andere afgesproken momenten worden uitgevoerd. De exacte planning stemmen we af op uw praktijkagenda en de gewenste frequentie." },
    ],
    checklist: ["Vaste schoonmaakafspraken", "Behandelkamers en algemene praktijkruimtes", "Wachtkamer en entree", "Sanitair en personeelsruimtes", "Aandacht voor afgesproken contactoppervlakken", "Periodieke evaluatie van de werkzaamheden"],
    faq: [
      { question: "Kan de schoonmaak buiten openingstijden plaatsvinden?", answer: "Ja. We kunnen de planning afstemmen op de openingstijden en de praktische situatie van uw praktijk." },
      { question: "Werken jullie met een vaste schoonmaakploeg?", answer: "Puurix werkt waar mogelijk met vaste afspraken en een herkenbaar team, zodat de werkwijze voorspelbaar blijft." },
      { question: "Is tandartspraktijk schoonmaak hetzelfde als gewone kantoorschoonmaak?", answer: "Nee. De ruimtes, gebruiksintensiteit en hygiëneafspraken van een tandartspraktijk vragen om een andere werkinstructie en planning." },
    ],
    regionalRegions: ["oosterhout", "breda", "tilburg"],
  },
  "kantoor-schoonmaken": {
    slug: "kantoor-schoonmaken",
    name: "Kantoor schoonmaken",
    eyebrow: "Professionele kantoorschoonmaak",
    title: "Kantoor schoonmaken met een vaste, duidelijke schoonmaakroutine",
    intro: "Een professioneel kantoor hoeft niet opvallend schoon te zijn; het moet iedere werkdag vanzelfsprekend verzorgd aanvoelen.",
    description: "Professionele kantoorschoonmaak voor bedrijven met vaste afspraken, een passende frequentie en aandacht voor werkplekken, sanitair, pantry en algemene ruimtes.",
    audience: "Kantoren, zakelijke dienstverleners en bedrijfsverzamelgebouwen",
    promise: "Een representatieve werkplek zonder dat schoonmaak de bedrijfsvoering in de weg zit.",
    sections: [
      { heading: "Werkplekken en vergaderruimtes", body: "We reinigen de afgesproken oppervlakken en vloeren in werk- en vergaderruimtes, met aandacht voor een verzorgde uitstraling tijdens de werkdag." },
      { heading: "Pantry en keuken", body: "Keuken- en pantryruimtes worden meegenomen in de vaste routine, inclusief de afgesproken oppervlakken, vloer en afvalpunten." },
      { heading: "Sanitair", body: "Sanitaire ruimtes krijgen een vaste schoonmaakfrequentie die past bij het aantal gebruikers en de openingstijden van uw kantoor." },
      { heading: "Voor elke organisatie een ander schema", body: "Een klein kantoor vraagt iets anders dan een groot bedrijfsgebouw. Daarom bepalen we de frequentie en werkzaamheden op basis van uw ruimtes, gebruik en gewenste serviceniveau." },
    ],
    checklist: ["Werkplekken", "Vergaderruimtes", "Entree en algemene ruimtes", "Pantry en keuken", "Sanitair", "Vloeren en zichtbare oppervlakken"],
    faq: [
      { question: "Hoe vaak moet een kantoor worden schoongemaakt?", answer: "Dat hangt af van oppervlakte, aantal gebruikers, type werkzaamheden en gewenste uitstraling. We bepalen de frequentie samen met u." },
      { question: "Kunnen jullie voor openingstijd schoonmaken?", answer: "Ja. De planning kan worden afgestemd op uw bedrijfsuren en toegangsmogelijkheden." },
      { question: "Kunnen jullie ook periodieke dieptereiniging uitvoeren?", answer: "Ja. Periodieke werkzaamheden kunnen naast de reguliere schoonmaak worden ingepland." },
    ],
    // Hier staan nu ook je advertentiesteden tussen:
    regionalRegions: ["oosterhout", "breda", "tilburg", "barneveld", "ede", "amersfoort", "nijkerk", "veenendaal"],
  },
  "zakelijke-schoonmaak": {
    slug: "zakelijke-schoonmaak",
    name: "Zakelijke schoonmaak",
    eyebrow: "Schoonmaak voor bedrijven",
    title: "Zakelijke schoonmaak die aansluit op uw bedrijfsvoering",
    intro: "Van kantoor tot bedrijfspand: zakelijke schoonmaak draait om duidelijke afspraken, continuïteit en een niveau van service dat past bij uw organisatie.",
    description: "Zakelijke schoonmaak voor bedrijven en bedrijfspanden met maatwerk in frequentie, werkzaamheden en planning.",
    audience: "MKB, kantoren, bedrijfspanden, winkels en zakelijke locaties",
    promise: "Een betrouwbare schoonmaakpartner met duidelijke afspraken en een praktische planning.",
    sections: [
      { heading: "Schoonmaak op maat", body: "Niet ieder bedrijf gebruikt zijn pand op dezelfde manier. Daarom leggen we vooraf vast welke ruimtes, werkzaamheden en frequenties bij uw organisatie horen." },
      { heading: "Continuïteit", body: "Zakelijke schoonmaak vraagt om voorspelbaarheid. Heldere afspraken over planning, toegang en werkzaamheden helpen om de dienstverlening stabiel te houden." },
      { heading: "Representatieve bedrijfsruimtes", body: "Entree, werkruimtes, sanitair en algemene zones bepalen samen de uitstraling van een bedrijfspand. We stemmen de schoonmaak af op de onderdelen die voor uw locatie belangrijk zijn." },
      { heading: "Van reguliere schoonmaak tot periodiek werk", body: "Naast de reguliere werkzaamheden kunnen aanvullende periodieke werkzaamheden worden ingepland wanneer uw pand daar behoefte aan heeft." },
    ],
    checklist: ["Reguliere bedrijfsschoonmaak", "Kantoren en werkruimtes", "Entrees en algemene ruimtes", "Sanitair en pantry", "Periodieke werkzaamheden", "Vaste afspraken en planning"],
    faq: [
      { question: "Voor welke bedrijven is zakelijke schoonmaak geschikt?", answer: "Voor uiteenlopende zakelijke locaties. De werkzaamheden worden afgestemd op het type pand, gebruik en gewenste frequentie." },
      { question: "Kunnen jullie een schoonmaakplan voor ons bedrijf maken?", answer: "Ja. We kunnen de ruimtes en gewenste werkzaamheden inventariseren en die vertalen naar een praktische planning." },
      { question: "Is er een minimale contractduur?", answer: "Dat hangt af van de gemaakte afspraken. Vraag een voorstel aan voor de mogelijkheden voor uw locatie." },
    ],
    regionalRegions: ["oosterhout", "breda", "tilburg", "barneveld", "ede", "amersfoort"],
  },
  "medische-schoonmaak": {
    slug: "medische-schoonmaak",
    name: "Medische schoonmaak",
    eyebrow: "Medische praktijken en zorglocaties",
    title: "Medische schoonmaak met aandacht voor praktijk en patiëntomgeving",
    intro: "Medische locaties vragen om een zorgvuldige schoonmaakplanning die rekening houdt met gebruik, routing, contactoppervlakken en de afspraken van de organisatie.",
    description: "Professionele schoonmaak voor medische praktijken en zorglocaties met duidelijke werkinstructies en vaste afspraken.",
    audience: "Medische praktijken, zorglocaties en aanverwante praktijkruimtes",
    promise: "Een verzorgde omgeving met een schoonmaakroutine die aansluit op uw praktijkorganisatie.",
    sections: [
      { heading: "Praktijkruimtes", body: "We werken volgens vooraf afgesproken werkinstructies voor behandel- en algemene ruimtes en stemmen de planning af op het gebruik van de locatie." },
      { heading: "Contactoppervlakken", body: "Veelgebruikte oppervlakken worden meegenomen volgens de afspraken die voor uw locatie zijn vastgelegd." },
      { heading: "Publieksruimtes", body: "Entree, wachtkamer en sanitair vormen samen een belangrijk onderdeel van de patiëntomgeving en krijgen een passende schoonmaakfrequentie." },
      { heading: "Geen standaardpakket", body: "Elke praktijk heeft andere ruimtes, openingstijden en procedures. Daarom stellen we de werkzaamheden af op de concrete situatie van uw locatie." },
    ],
    checklist: ["Praktijkruimtes", "Wacht- en ontvangstruimtes", "Sanitair", "Algemene ruimtes", "Afgesproken contactoppervlakken", "Planning buiten of rond openingstijden"],
    faq: [
      { question: "Schoonmaken jullie ook tandartspraktijken?", answer: "Ja. Voor tandartspraktijken hebben we daarnaast een aparte dienstpagina met specifieke informatie over die praktijkomgeving." },
      { question: "Volgen jullie medische hygiëneprotocollen?", answer: "De werkwijze wordt afgestemd op de geldende afspraken en instructies van de opdrachtgever. Specifieke protocollen moeten vooraf worden besproken en vastgelegd." },
      { question: "Kunnen werkzaamheden buiten patiënturen plaatsvinden?", answer: "Ja, wanneer de toegang en planning dit toelaten." },
    ],
    regionalRegions: ["oosterhout", "breda", "tilburg"],
  },
  "opleveringsschoonmaak": {
    slug: "opleveringsschoonmaak",
    name: "Opleveringsschoonmaak",
    eyebrow: "Na bouw, verbouw of renovatie",
    title: "Opleveringsschoonmaak voor een pand dat direct klaar moet zijn",
    intro: "Na bouw of renovatie moeten stof, bouwresten en vervuiling worden verwijderd voordat een ruimte echt gebruiksklaar is.",
    description: "Professionele opleveringsschoonmaak na bouw, verbouw, renovatie of verhuizing voor bedrijven, aannemers en vastgoedpartijen.",
    audience: "Aannemers, vastgoedbeheerders, projectontwikkelaars en bedrijven",
    promise: "Een verzorgde oplevering met een duidelijke planning richting ingebruikname.",
    sections: [
      { heading: "Van bouwvuil naar gebruiksklaar", body: "We richten de werkzaamheden op het verwijderen van zichtbaar stof, bouwresten en vervuiling die tijdens de werkzaamheden is ontstaan." },
      { heading: "Planning rond de opleverdatum", body: "Bij een oplevering is timing belangrijk. Daarom stemmen we de werkzaamheden af op de geplande ingebruikname of sleuteloverdracht." },
      { heading: "Nieuwe of gerenoveerde ruimtes", body: "We behandelen vloeren, glas, oppervlakken en sanitaire ruimtes volgens de afgesproken scope en het type locatie." },
      { heading: "Duidelijke scope vooraf", body: "Vooraf leggen we vast welke ruimtes en werkzaamheden onderdeel zijn van de oplevering, zodat er zo min mogelijk verrassingen ontstaan." },
    ],
    checklist: ["Bouwstof verwijderen", "Vloeren en oppervlakken", "Glas en kozijnen", "Sanitaire ruimtes", "Algemene eindcontrole", "Planning rond oplevering"],
    faq: [
      { question: "Kunnen jullie op korte termijn een oplevering schoonmaken?", answer: "Dat is afhankelijk van planning en capaciteit. Neem zo vroeg mogelijk contact op met de gewenste opleverdatum." },
      { question: "Werken jullie voor aannemers en vastgoedpartijen?", answer: "Ja. De werkzaamheden kunnen worden afgestemd op projectplanning en sleuteloverdracht." },
      { question: "Is een opleveringsschoonmaak hetzelfde als reguliere schoonmaak?", answer: "Nee. Een oplevering richt zich op vervuiling die na bouw, verbouw of renovatie aanwezig is en heeft doorgaans een andere scope." },
    ],
    regionalRegions: ["oosterhout", "breda", "tilburg"],
  },
  "short-stay-schoonmaak": {
    slug: "short-stay-schoonmaak",
    name: "Short-stay schoonmaak",
    eyebrow: "Short-stay, verhuur en wissels",
    title: "Short-stay schoonmaak tussen iedere wissel",
    intro: "Bij short-stay verhuur bepaalt de staat van de accommodatie direct de ervaring van de volgende gast.",
    description: "Schoonmaak en turnover voor short-stay accommodaties, verhuurwoningen en vakantieverblijven met aandacht voor snelle wissels en presentatie.",
    audience: "Short-stay verhuurders, vastgoedbeheerders en accommodatie-eigenaren",
    promise: "Een accommodatie die na de wissel schoon, verzorgd en klaar voor de volgende gast is.",
    sections: [
      { heading: "Turnover na vertrek", body: "Na een check-out wordt de accommodatie volgens de afgesproken checklist schoongemaakt en klaargezet voor de volgende wissel." },
      { heading: "Badkamer en keuken", body: "Keuken en badkamer krijgen extra aandacht omdat deze ruimtes sterk bijdragen aan de eerste indruk van een verblijf." },
      { heading: "Bedden en presentatie", body: "Waar afgesproken kunnen bedlinnen, handdoeken en de presentatie van de accommodatie onderdeel zijn van de turnover." },
      { heading: "Flexibel rond reserveringen", body: "De planning wordt gekoppeld aan de beschikbare wisselmomenten en afspraken van de verhuurder." },
    ],
    checklist: ["Check-out schoonmaak", "Badkamer en sanitair", "Keuken", "Vloeren en oppervlakken", "Bed- en linnengoed volgens afspraak", "Turnoverplanning"],
    faq: [
      { question: "Kunnen jullie meerdere accommodaties beheren?", answer: "Ja. Voor meerdere locaties kunnen we een vaste werkwijze en planning afspreken." },
      { question: "Kunnen bedlinnen en handdoeken worden meegenomen?", answer: "Dat kan wanneer dit onderdeel wordt gemaakt van de afgesproken dienstverlening." },
      { question: "Kunnen jullie op wisseldagen werken?", answer: "Ja, de planning kan worden afgestemd op check-out en check-in, binnen de beschikbare capaciteit." },
    ],
    regionalRegions: ["oosterhout", "breda", "tilburg"],
  },
};

export function getService(slug: string): ServicePage | undefined {
  return servicePages[slug.toLowerCase()];
}

export function getServiceRegions(slug: string): string[] {
  const service = getService(slug);
  if (!service) return [];
  return service.regionalRegions.filter((regio) => Boolean(regioData[regio]));
}