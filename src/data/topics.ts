export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  subtopics: Subtopic[];
  relatedTopics?: string[];
}

export interface Subtopic {
  id: string;
  title: string;
  href: string;
  description: string;
  pdfPage?: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  relatedTopics: string[];
  pdfPage?: string;
}

export const topics: Topic[] = [
  {
    id: "tal-og-algebra",
    title: "Tal og algebra",
    description: "Tal, regnearter, brøker, potenser, ligninger, funktioner og økonomi",
    icon: "🔢",
    href: "/emner/tal-og-algebra",
    subtopics: [
      { id: "tal", title: "Tal", href: "/emner/tal-og-algebra/tal", description: "Naturlige tal, hele tal, rationale, irrationale og reelle tal", pdfPage: "15" },
      { id: "procent-og-promille", title: "Procent og promille", href: "/emner/tal-og-algebra/procent-og-promille", description: "Procent, promille, procentpoint og omregning", pdfPage: "16" },
      { id: "potenser-og-roedder", title: "Potenser og rødder", href: "/emner/tal-og-algebra/potenser-og-roedder", description: "Potenser, kvadratrødder, kubikrødder og talfølger", pdfPage: "16" },
      { id: "regnestrategier", title: "Regnestrategier", href: "/emner/tal-og-algebra/regnestrategier", description: "De fire regningsarter, hierarki, negative tal, brøker og procenter", pdfPage: "18" },
      { id: "oekonomi", title: "Økonomi", href: "/emner/tal-og-algebra/oekonomi", description: "Sammensat rente, opsparing, lån, ydelse og valutakurs", pdfPage: "22" },
      { id: "ligninger", title: "Ligninger", href: "/emner/tal-og-algebra/ligninger", description: "Regneregler, grafisk løsning, to ligninger med to ubekendte, uligheder", pdfPage: "24" },
      { id: "formler-og-udtryk", title: "Formler og algebraiske udtryk", href: "/emner/tal-og-algebra/formler-og-udtryk", description: "Omskrivninger af flerleddede størrelser", pdfPage: "27" },
      { id: "funktioner", title: "Funktioner", href: "/emner/tal-og-algebra/funktioner", description: "Lineær, andengradsfunktion, omvendt og eksponentiel proportionalitet", pdfPage: "28" },
    ],
    relatedTopics: ["geometri", "statistik"],
  },
  {
    id: "geometri",
    title: "Geometri og måling",
    description: "Geometriske figurer, tegning, flytninger, areal, rumfang og måleenheder",
    icon: "📐",
    href: "/emner/geometri",
    subtopics: [
      { id: "linjer-og-vinkler", title: "Linjer og vinkler", href: "/emner/geometri/linjer-og-vinkler", description: "Parallelle linjer, midtnormal, vinkelhalveringslinje, nabovinkler og topvinkler", pdfPage: "33" },
      { id: "polygoner-og-trekanter", title: "Polygoner og trekanter", href: "/emner/geometri/polygoner-og-trekanter", description: "Polygoner, trekanttyper, vinkelsummen og linjer ved trekanter", pdfPage: "35" },
      { id: "firkanter-og-cirkler", title: "Firkanter og cirkler", href: "/emner/geometri/firkanter-og-cirkler", description: "Kvadrat, rektangel, parallelogram, trapez, rombe og cirkel", pdfPage: "37" },
      { id: "ligedannethed", title: "Ligedannethed", href: "/emner/geometri/ligedannethed", description: "Kongruens, ligedannethed, målforhold og ensvinklede trekanter", pdfPage: "38" },
      { id: "pythagoras", title: "Pythagoras' sætning", href: "/emner/geometri/pythagoras", description: "Summen af kateternes kvadrater er lig med kvadratet på hypotenusen", pdfPage: "40" },
      { id: "trigonometri", title: "Trigonometri", href: "/emner/geometri/trigonometri", description: "Sinus, cosinus og tangens i den retvinklede trekant", pdfPage: "41" },
      { id: "rumlige-figurer", title: "Rumlige figurer", href: "/emner/geometri/rumlige-figurer", description: "Polyedre, prisme, kube, cylinder, kegle, kugle og pyramide", pdfPage: "42" },
      { id: "flytninger-og-symmetri", title: "Flytninger og symmetri", href: "/emner/geometri/flytninger-og-symmetri", description: "Spejling, drejning, parallelforskydning, symmetri og mønstre", pdfPage: "49" },
      { id: "koordinatsystem", title: "Koordinatsystem", href: "/emner/geometri/koordinatsystem", description: "Koordinater, ligning for en ret linje og hældningstal", pdfPage: "47" },
      { id: "areal-og-omkreds", title: "Areal og omkreds", href: "/emner/geometri/areal-og-omkreds", description: "Areal af trekanter, firkanter og cirkler. Herons formel", pdfPage: "53" },
      { id: "rumfang", title: "Rumfang og overfladeareal", href: "/emner/geometri/rumfang", description: "Kasse, kube, prisme, cylinder, kegle, pyramide og kugle", pdfPage: "55" },
      { id: "maaleenheder", title: "Måleenheder", href: "/emner/geometri/maaleenheder", description: "Længde, areal, rumfang, masse, massefylde og fart", pdfPage: "57" },
    ],
    relatedTopics: ["tal-og-algebra"],
  },
  {
    id: "statistik",
    title: "Statistik og sandsynlighed",
    description: "Datasæt, deskriptorer, diagrammer og sandsynlighedsregning",
    icon: "📊",
    href: "/emner/statistik",
    subtopics: [
      { id: "datasaet", title: "Datasæt og tabeller", href: "/emner/statistik/datasaet", description: "Data, observationer, hyppighed, frekvens og grupperede datasæt", pdfPage: "59" },
      { id: "deskriptorer", title: "Deskriptorer", href: "/emner/statistik/deskriptorer", description: "Typetal, middeltal, median, variationsbredde og kvartilsæt", pdfPage: "61" },
      { id: "diagrammer", title: "Diagrammer", href: "/emner/statistik/diagrammer", description: "Pinde-, stolpe-, søjle-, cirkel-, stabel- og boksplot-diagrammer", pdfPage: "62" },
      { id: "sandsynlighed", title: "Sandsynlighed", href: "/emner/statistik/sandsynlighed", description: "Statistisk og teoretisk sandsynlighed, udfaldsrum, tælle- og chancetræ", pdfPage: "67" },
    ],
    relatedTopics: ["tal-og-algebra"],
  },
];

export const glossary: GlossaryEntry[] = [
  // Tal og algebra
  { term: "Naturlige tal", definition: "Tælletallene: 1, 2, 3, 4, … Et naturligt tal, som netop to tal går op i – nemlig 1 og tallet selv – kaldes et primtal.", relatedTopics: ["tal-og-algebra"], pdfPage: "15" },
  { term: "Hele tal", definition: "De positive hele tal (de naturlige tal), 0 og de negative hele tal (-1, -2, -3, …).", relatedTopics: ["tal-og-algebra"], pdfPage: "15" },
  { term: "Primtal", definition: "Et naturligt tal, som netop to tal går op i – nemlig 1 og tallet selv. De 25 mindste: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.", relatedTopics: ["tal-og-algebra"], pdfPage: "15" },
  { term: "Rationale tal", definition: "Alle tal, der kan skrives som brøker a/b, hvor a og b er hele tal og b ≠ 0.", relatedTopics: ["tal-og-algebra"], pdfPage: "15" },
  { term: "Irrationale tal", definition: "Tal på tallinjen, der ikke kan skrives som brøker, fx √2, √3, π.", relatedTopics: ["tal-og-algebra"], pdfPage: "15" },
  { term: "Reelle tal", definition: "De rationale tal og de irrationale tal tilsammen.", relatedTopics: ["tal-og-algebra"], pdfPage: "15" },
  { term: "Procent", definition: "Hundrededele. Sammenhæng: 25% = 25/100 = 0,25.", relatedTopics: ["tal-og-algebra"], pdfPage: "16" },
  { term: "Procentpoint", definition: "Bruges til at angive en forskel mellem procentstørrelser. Fx stigning fra 10% til 15% er 5 procentpoint, men 50%.", relatedTopics: ["tal-og-algebra"], pdfPage: "16" },
  { term: "Promille", definition: "Tusindedele.", relatedTopics: ["tal-og-algebra"], pdfPage: "16" },
  { term: "Potens", definition: "Et tal opløftet i en eksponent, fx a^n. n kalder man eksponenten.", relatedTopics: ["tal-og-algebra"], pdfPage: "16" },
  { term: "Kvadratrod", definition: "Kvadratroden af et tal er det ikke-negative tal, der ganget med sig selv giver tallet. Fx √9 = 3.", relatedTopics: ["tal-og-algebra"], pdfPage: "17" },
  { term: "Kubikrod", definition: "Kubikroden af et tal er det tal, der ganget med sig selv tre gange giver tallet. Fx ∛8 = 2.", relatedTopics: ["tal-og-algebra"], pdfPage: "17" },
  { term: "Talfølge", definition: "En følge eller liste af tal, der ofte er skrevet i en systematik eller efter en formel, fx 2, 4, 6, 8, 10, …", relatedTopics: ["tal-og-algebra"], pdfPage: "17" },
  { term: "Addition", definition: "At lægge tal sammen. Tegn: +. Resultatet kaldes summen.", relatedTopics: ["tal-og-algebra"], pdfPage: "18" },
  { term: "Subtraktion", definition: "At trække tal fra hinanden. Tegn: −. Resultatet kaldes differensen.", relatedTopics: ["tal-og-algebra"], pdfPage: "18" },
  { term: "Multiplikation", definition: "At gange tal med hinanden. Tegn: ·. Tallene kaldes faktorer, resultatet kaldes produktet.", relatedTopics: ["tal-og-algebra"], pdfPage: "18" },
  { term: "Division", definition: "At dele tal. Tegn: : eller /. Resultatet kaldes kvotienten.", relatedTopics: ["tal-og-algebra"], pdfPage: "18" },
  { term: "Brøk", definition: "Et tal, der kan skrives som a/b, hvor a og b er hele tal og b ≠ 0.", relatedTopics: ["tal-og-algebra"], pdfPage: "15" },
  { term: "Sammensat rente", definition: "Når man ændrer en størrelse flere gange med samme procentdel. Formel: Kn = K0 · (1 + r/100)^n.", relatedTopics: ["tal-og-algebra"], pdfPage: "22" },
  { term: "Ligning", definition: "To matematiske udtryk med et lighedstegn imellem. Ligningen løses ved at finde talværdier for de ubekendte, som gør udsagnet sandt.", relatedTopics: ["tal-og-algebra"], pdfPage: "24" },
  { term: "Variabel", definition: "Et bogstav eller symbol, der repræsenterer et ukendt eller foranderligt tal.", relatedTopics: ["tal-og-algebra"], pdfPage: "27" },
  { term: "Funktion", definition: "En sammenhæng mellem variable, hvor der til hver x-værdi kun hører én y-værdi. Kan beskrives med forskrift, graf, tabel eller ord.", relatedTopics: ["tal-og-algebra"], pdfPage: "28" },
  { term: "Lineær funktion", definition: "En funktion med forskriften y = ax + b. Grafen er en ret linje med hældningstal a og skæring med y-aksen i (0, b).", relatedTopics: ["tal-og-algebra"], pdfPage: "28" },
  { term: "Hældningstal", definition: "Tallet a i y = ax + b. Beskriver linjens hældning. Kaldes også hældningskoefficient.", relatedTopics: ["tal-og-algebra", "geometri"], pdfPage: "28" },
  { term: "Andengradsfunktion", definition: "En funktion med forskriften y = ax² + bx + c. Grafen kaldes en parabel.", relatedTopics: ["tal-og-algebra"], pdfPage: "30" },
  { term: "Eksponentiel funktion", definition: "En funktion med forskriften y = b · a^x, hvor b og a er positive tal.", relatedTopics: ["tal-og-algebra"], pdfPage: "31" },
  { term: "Interval", definition: "Et sammenhængende område på tallinjen. Kan være lukket [0,3], åbent ]2,5[ eller halvåbent.", relatedTopics: ["tal-og-algebra"], pdfPage: "32" },
  // Geometri
  { term: "Parallel", definition: "To linjer, som ikke skærer hinanden, kalder man parallelle.", relatedTopics: ["geometri"], pdfPage: "33" },
  { term: "Midtnormal", definition: "En linje, som står vinkelret på et linjestykke og skærer det i midtpunktet.", relatedTopics: ["geometri"], pdfPage: "33" },
  { term: "Vinkelhalveringslinje", definition: "En linje, som deler en vinkel i to lige store vinkler.", relatedTopics: ["geometri"], pdfPage: "33" },
  { term: "Nabovinkler", definition: "To vinkler, der tilsammen er 180°.", relatedTopics: ["geometri"], pdfPage: "34" },
  { term: "Topvinkler", definition: "De to modstående vinkler mellem to linjer, som skærer hinanden. Topvinkler er lige store.", relatedTopics: ["geometri"], pdfPage: "34" },
  { term: "Polygon", definition: "Mangekant. Trekanter, firkanter og sekskanter er eksempler på polygoner.", relatedTopics: ["geometri"], pdfPage: "35" },
  { term: "Trekant", definition: "En polygon med tre sider. Vinkelsummen er 180°. Kan være ligebenet, ligesidet eller retvinklet.", relatedTopics: ["geometri"], pdfPage: "36" },
  { term: "Hypotenuse", definition: "Den længste side i en retvinklet trekant – den side, der ligger over for den rette vinkel.", relatedTopics: ["geometri"], pdfPage: "36" },
  { term: "Katete", definition: "En af de to korte sider i en retvinklet trekant, der danner den rette vinkel.", relatedTopics: ["geometri"], pdfPage: "36" },
  { term: "Kvadrat", definition: "En firkant, hvor alle sider er lige lange og alle vinkler er rette.", relatedTopics: ["geometri"], pdfPage: "37" },
  { term: "Rektangel", definition: "En firkant, hvor alle vinkler er rette.", relatedTopics: ["geometri"], pdfPage: "37" },
  { term: "Parallelogram", definition: "En firkant, hvor modstående sider er parallelle.", relatedTopics: ["geometri"], pdfPage: "37" },
  { term: "Trapez", definition: "En firkant, hvor netop to sider er parallelle.", relatedTopics: ["geometri"], pdfPage: "37" },
  { term: "Rombe", definition: "En firkant, hvor alle sider er lige lange.", relatedTopics: ["geometri"], pdfPage: "37" },
  { term: "Cirkel", definition: "En figur med centrum C, radius r og diameter d. Tangent, korde og cirkelbue er vigtige begreber.", relatedTopics: ["geometri"], pdfPage: "37" },
  { term: "Kongruent", definition: "To figurer er kongruente, når man kan flytte den ene figur, så den kan dække den anden.", relatedTopics: ["geometri"], pdfPage: "38" },
  { term: "Ligedannet", definition: "To figurer er ligedannede, når de er kongruente, eller når den ene figur er en forstørrelse af den anden.", relatedTopics: ["geometri"], pdfPage: "38" },
  { term: "Pythagoras' sætning", definition: "I en retvinklet trekant gælder: a² + b² = c², hvor c er hypotenusen.", relatedTopics: ["geometri"], pdfPage: "40" },
  { term: "Sinus", definition: "I en retvinklet trekant: sin(A) = modstående katete / hypotenuse.", relatedTopics: ["geometri"], pdfPage: "41" },
  { term: "Cosinus", definition: "I en retvinklet trekant: cos(A) = hosliggende katete / hypotenuse.", relatedTopics: ["geometri"], pdfPage: "41" },
  { term: "Tangens", definition: "I en retvinklet trekant: tan(A) = modstående katete / hosliggende katete.", relatedTopics: ["geometri"], pdfPage: "41" },
  { term: "Hosliggende katete", definition: "Den katete, der ligger ved siden af den valgte vinkel (og ikke er hypotenusen).", relatedTopics: ["geometri"], pdfPage: "41" },
  { term: "Modstående katete", definition: "Den katete, der ligger over for den vinkel, man kigger på.", relatedTopics: ["geometri"], pdfPage: "41" },
  { term: "Polyeder", definition: "En rumlig figur, der har polygoner som sideflader. Hjørne, kant og sideflade er dele.", relatedTopics: ["geometri"], pdfPage: "42" },
  { term: "Prisme", definition: "Et polyeder med to kongruente, parallelle grundflader forbundet af rektangler.", relatedTopics: ["geometri"], pdfPage: "42" },
  { term: "Cylinder", definition: "En rumlig figur med to cirkulære grundflader. V = π·r²·h.", relatedTopics: ["geometri"], pdfPage: "43" },
  { term: "Kegle", definition: "En rumlig figur med én cirkulær grundflade. V = 1/3·π·r²·h.", relatedTopics: ["geometri"], pdfPage: "43" },
  { term: "Kugle", definition: "En rumlig figur. V = 4/3·π·r³, O = 4·π·r².", relatedTopics: ["geometri"], pdfPage: "43" },
  { term: "Pyramide", definition: "En rumlig figur med én grundflade og trekantede sideflader. V = 1/3·G·h.", relatedTopics: ["geometri"], pdfPage: "43" },
  { term: "Spejling", definition: "En flytning, hvor en figur flyttes over en spejlingsakse.", relatedTopics: ["geometri"], pdfPage: "49" },
  { term: "Drejning", definition: "En flytning, hvor en figur drejes om et omdrejningspunkt med en drejningsvinkel.", relatedTopics: ["geometri"], pdfPage: "49" },
  { term: "Parallelforskydning", definition: "En flytning, hvor alle punkter flyttes samme retning og afstand.", relatedTopics: ["geometri"], pdfPage: "50" },
  { term: "Symmetri", definition: "En figur har spejlingssymmetri, når en spejling i en symmetriakse fører figuren over i sig selv. Drejningssymmetri er tilsvarende for drejninger.", relatedTopics: ["geometri"], pdfPage: "50" },
  { term: "Areal", definition: "Størrelsen af en flad figurs overflade, målt i kvadratenheder.", relatedTopics: ["geometri"], pdfPage: "53" },
  { term: "Omkreds", definition: "Den samlede længde af en figurs kant eller rand.", relatedTopics: ["geometri"], pdfPage: "54" },
  { term: "Herons formel", definition: "Areal af en trekant ud fra sidelængderne: A = √(s(s-a)(s-b)(s-c)), hvor s = (a+b+c)/2.", relatedTopics: ["geometri"], pdfPage: "53" },
  { term: "Massefylde", definition: "Masse divideret med rumfang. Enhed: fx kg/dm³.", relatedTopics: ["geometri"], pdfPage: "58" },
  { term: "Fart", definition: "Afstand divideret med tid. Enhed: fx m/s eller km/t.", relatedTopics: ["geometri"], pdfPage: "58" },
  // Statistik og sandsynlighed
  { term: "Data", definition: "Hver af de oplysninger, man indsamler i en statistisk undersøgelse. En samling af data kaldes et datasæt.", relatedTopics: ["statistik"], pdfPage: "59" },
  { term: "Hyppighed", definition: "Antal gange en bestemt værdi forekommer i et datasæt.", relatedTopics: ["statistik"], pdfPage: "60" },
  { term: "Frekvens", definition: "Hyppigheden divideret med datasættets størrelse. Et tal mellem 0 og 1.", relatedTopics: ["statistik"], pdfPage: "60" },
  { term: "Typetal", definition: "Den eller de værdier, der har den største hyppighed i et datasæt.", relatedTopics: ["statistik"], pdfPage: "61" },
  { term: "Middeltal", definition: "Summen af alle værdier divideret med antallet af værdier. Også kaldet gennemsnit.", relatedTopics: ["statistik"], pdfPage: "61" },
  { term: "Median", definition: "Den midterste værdi i et ordnet datasæt. Ved lige antal data: den mindste eller gennemsnittet af de to midterste.", relatedTopics: ["statistik"], pdfPage: "61" },
  { term: "Variationsbredde", definition: "Størsteværdi minus mindsteværdi i et datasæt.", relatedTopics: ["statistik"], pdfPage: "61" },
  { term: "Kvartilsæt", definition: "Tre tal (Q1, median, Q3), der opdeler datasættet i fire lige store dele.", relatedTopics: ["statistik"], pdfPage: "61" },
  { term: "Boksplot", definition: "Et diagram, der viser et datasæts mindsteværdi, kvartilsæt og størsteværdi.", relatedTopics: ["statistik"], pdfPage: "63" },
  { term: "Sumkurve", definition: "En kurve, der viser den summerede frekvens for et grupperet datasæt.", relatedTopics: ["statistik"], pdfPage: "64" },
  { term: "Sandsynlighed", definition: "Et tal mellem 0 og 1, der angiver sandsynligheden for en hændelse. 0 = umulig, 1 = sikker.", relatedTopics: ["statistik"], pdfPage: "67" },
  { term: "Udfaldsrum", definition: "Mængden af mulige udfald i et eksperiment.", relatedTopics: ["statistik"], pdfPage: "67" },
  { term: "Hændelse", definition: "En delmængde af et udfaldsrum.", relatedTopics: ["statistik"], pdfPage: "67" },
  { term: "Statistisk sandsynlighed", definition: "Sandsynlighed beregnet ud fra et datasæt som frekvensen af de udfald, man er interesseret i.", relatedTopics: ["statistik"], pdfPage: "67" },
  { term: "Teoretisk sandsynlighed", definition: "P(H) = antal gunstige udfald / antal mulige udfald. Gælder når alle udfald er lige sandsynlige.", relatedTopics: ["statistik"], pdfPage: "68" },
  { term: "Tælletræ", definition: "Et trædiagram, der bruges til at tælle antallet af mulige og gunstige udfald.", relatedTopics: ["statistik"], pdfPage: "68" },
  { term: "Chancetræ", definition: "Et trædiagram, der bruges til at beregne sandsynligheder ved at gange sandsynlighederne langs grenene.", relatedTopics: ["statistik"], pdfPage: "69" },
];

export function searchContent(
  query: string
): Array<{ type: "topic" | "subtopic" | "glossary"; title: string; href: string; description: string }> {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: Array<{ type: "topic" | "subtopic" | "glossary"; title: string; href: string; description: string }> = [];

  for (const topic of topics) {
    if (topic.title.toLowerCase().includes(q) || topic.description.toLowerCase().includes(q)) {
      results.push({ type: "topic", title: topic.title, href: topic.href, description: topic.description });
    }
    for (const sub of topic.subtopics) {
      if (sub.title.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q)) {
        results.push({ type: "subtopic", title: sub.title, href: sub.href, description: sub.description });
      }
    }
  }

  for (const entry of glossary) {
    if (entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q)) {
      results.push({
        type: "glossary",
        title: entry.term,
        href: `/fagord#${entry.term.toLowerCase().replace(/[^a-zæøå0-9]/g, "-")}`,
        description: entry.definition,
      });
    }
  }

  return results;
}
