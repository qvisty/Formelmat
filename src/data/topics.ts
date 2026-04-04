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
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  relatedTopics: string[];
}

export const topics: Topic[] = [
  {
    id: "tal-og-algebra",
    title: "Tal og algebra",
    description: "Tal, regnearter, brøker, potenser, ligninger, funktioner og økonomi",
    icon: "🔢",
    href: "/emner/tal-og-algebra",
    subtopics: [
      { id: "tal", title: "Tal", href: "/emner/tal-og-algebra/tal", description: "Naturlige, hele, rationale, irrationale og reelle tal" },
      { id: "procent-og-promille", title: "Procent og promille", href: "/emner/tal-og-algebra/procent-og-promille", description: "Procent, promille, procentpoint og procentberegning" },
      { id: "potenser-og-roedder", title: "Potenser og rødder", href: "/emner/tal-og-algebra/potenser-og-roedder", description: "Potensregler, kvadratrødder, kubikrødder og talfølger" },
      { id: "regnestrategier", title: "Regnestrategier", href: "/emner/tal-og-algebra/regnestrategier", description: "De fire regningsarter, hierarki, negative tal og brøker" },
      { id: "oekonomi", title: "Økonomi", href: "/emner/tal-og-algebra/oekonomi", description: "Sammensat rente, opsparing, lån og valuta" },
      { id: "ligninger", title: "Ligninger", href: "/emner/tal-og-algebra/ligninger", description: "Regneregler, grafisk løsning, to ligninger med to ubekendte" },
      { id: "formler-og-udtryk", title: "Formler og udtryk", href: "/emner/tal-og-algebra/formler-og-udtryk", description: "Omskrivninger, kvadratsætninger og algebraiske udtryk" },
      { id: "funktioner", title: "Funktioner", href: "/emner/tal-og-algebra/funktioner", description: "Lineær, andengradsfunktion, omvendt proportionalitet, eksponentiel" },
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
      { id: "linjer-og-vinkler", title: "Linjer og vinkler", href: "/emner/geometri/linjer-og-vinkler", description: "Parallelle linjer, midtnormal, vinkelhalveringslinje, vinkelregler" },
      { id: "polygoner-og-trekanter", title: "Polygoner og trekanter", href: "/emner/geometri/polygoner-og-trekanter", description: "Polygontyper, trekanttyper, vinkelsum og trekantens linjer" },
      { id: "firkanter-og-cirkler", title: "Firkanter og cirkler", href: "/emner/geometri/firkanter-og-cirkler", description: "Kvadrat, rektangel, parallelogram, trapez, rombe og cirklen" },
      { id: "ligedannethed", title: "Ligedannethed", href: "/emner/geometri/ligedannethed", description: "Kongruens, ligedannethed, målforhold og ensvinklede trekanter" },
      { id: "pythagoras", title: "Pythagoras' sætning", href: "/emner/geometri/pythagoras", description: "a² + b² = c² i den retvinklede trekant" },
      { id: "trigonometri", title: "Trigonometri", href: "/emner/geometri/trigonometri", description: "Sinus, cosinus og tangens i den retvinklede trekant" },
      { id: "rumlige-figurer", title: "Rumlige figurer", href: "/emner/geometri/rumlige-figurer", description: "Polyedre, prismer, cylindere, kegler, kugler og pyramider" },
      { id: "flytninger-og-symmetri", title: "Flytninger og symmetri", href: "/emner/geometri/flytninger-og-symmetri", description: "Spejling, drejning, parallelforskydning og symmetrityper" },
      { id: "koordinatsystem", title: "Koordinatsystem", href: "/emner/geometri/koordinatsystem", description: "Koordinater, kvadranter, ligning for ret linje, hældningstal" },
      { id: "areal-og-omkreds", title: "Areal og omkreds", href: "/emner/geometri/areal-og-omkreds", description: "Arealformler for trekant, firkant, cirkel og Herons formel" },
      { id: "rumfang", title: "Rumfang og overfladeareal", href: "/emner/geometri/rumfang", description: "Rumfang og overflade for kasse, prisme, cylinder, kegle, kugle" },
      { id: "maaleenheder", title: "Måleenheder", href: "/emner/geometri/maaleenheder", description: "Længde, areal, rumfang, masse, massefylde og fart" },
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
      { id: "datasaet", title: "Datasæt og tabeller", href: "/emner/statistik/datasaet", description: "Data, observationer, hyppighed, frekvens og gruppering" },
      { id: "deskriptorer", title: "Deskriptorer", href: "/emner/statistik/deskriptorer", description: "Typetal, middeltal, median, kvartilsæt og variationsbredde" },
      { id: "diagrammer", title: "Diagrammer", href: "/emner/statistik/diagrammer", description: "Pinde-, stolpe-, cirkel-, stabeldiagram, boksplot og sumkurve" },
      { id: "sandsynlighed", title: "Sandsynlighed", href: "/emner/statistik/sandsynlighed", description: "Statistisk og teoretisk sandsynlighed, tælletræ og chancetræ" },
    ],
    relatedTopics: ["tal-og-algebra"],
  },
];

export const glossary: GlossaryEntry[] = [
  // Tal og algebra
  { term: "Addition", definition: "At lægge sammen. Fx 7 + 3 = 10. Resultatet kaldes en sum.", relatedTopics: ["tal-og-algebra"] },
  { term: "Subtraktion", definition: "At trække fra. Fx 7 - 3 = 4. Resultatet kaldes en differens.", relatedTopics: ["tal-og-algebra"] },
  { term: "Multiplikation", definition: "At gange. Fx 7 · 3 = 21. Tallene der ganges kaldes faktorer, resultatet er et produkt.", relatedTopics: ["tal-og-algebra"] },
  { term: "Division", definition: "At dividere. Fx 21 : 3 = 7. Resultatet kaldes en kvotient.", relatedTopics: ["tal-og-algebra"] },
  { term: "Primtal", definition: "Et naturligt tal større end 1, som kun kan deles med 1 og sig selv. Fx 2, 3, 5, 7, 11.", relatedTopics: ["tal-og-algebra"] },
  { term: "Brøk", definition: "Et tal skrevet som a/b, hvor a er tæller og b er nævner. Fx 3/4.", relatedTopics: ["tal-og-algebra"] },
  { term: "Procent", definition: "Hundrededele. 25% = 25/100 = 0,25.", relatedTopics: ["tal-og-algebra"] },
  { term: "Promille", definition: "Tusindedele. 5‰ = 5/1000 = 0,005.", relatedTopics: ["tal-og-algebra"] },
  { term: "Potens", definition: "Et tal opløftet i en eksponent. Fx 2³ = 2 · 2 · 2 = 8.", relatedTopics: ["tal-og-algebra"] },
  { term: "Kvadratrod", definition: "Det ikke-negative tal, der ganget med sig selv giver tallet. Fx √25 = 5.", relatedTopics: ["tal-og-algebra"] },
  { term: "Kubikrod", definition: "Det tal, der ganget med sig selv tre gange giver tallet. Fx ∛27 = 3.", relatedTopics: ["tal-og-algebra"] },
  { term: "Talfølge", definition: "En følge af tal skrevet i en systematik eller efter en formel. Fx 2, 4, 6, 8, 10, …", relatedTopics: ["tal-og-algebra"] },
  { term: "Variabel", definition: "Et bogstav eller symbol, der repræsenterer et ukendt eller foranderligt tal.", relatedTopics: ["tal-og-algebra"] },
  { term: "Ligning", definition: "To matematiske udtryk med lighedstegn imellem. Fx 2x + 3 = 7.", relatedTopics: ["tal-og-algebra"] },
  { term: "Ulighed", definition: "Et udsagn om at én side er større eller mindre end den anden. Fx x > 3.", relatedTopics: ["tal-og-algebra"] },
  { term: "Funktion", definition: "En regel der til hvert x giver præcis ét y. Skrives fx f(x) = 2x + 1.", relatedTopics: ["tal-og-algebra"] },
  { term: "Lineær funktion", definition: "En funktion med forskriften y = ax + b. Grafen er en ret linje.", relatedTopics: ["tal-og-algebra"] },
  { term: "Hældningstal", definition: "Tallet a i y = ax + b. Angiver hvor meget y vokser, når x vokser med 1.", relatedTopics: ["tal-og-algebra", "geometri"] },
  { term: "Parabel", definition: "Grafen for en andengradsfunktion y = ax² + bx + c.", relatedTopics: ["tal-og-algebra"] },
  { term: "Eksponentiel funktion", definition: "En funktion med forskriften y = b · aˣ, hvor a er fremskrivningsfaktoren.", relatedTopics: ["tal-og-algebra"] },
  { term: "Sammensat rente", definition: "Rente der beregnes af både startkapital og tilskrevne renter. Kn = K0 · (1 + r/100)ⁿ.", relatedTopics: ["tal-og-algebra"] },
  { term: "Interval", definition: "Et sammenhængende stykke af tallinjen. Fx [0, 3] eller ]2, 5[.", relatedTopics: ["tal-og-algebra"] },

  // Geometri og måling
  { term: "Parallel", definition: "To linjer der ikke skærer hinanden, uanset hvor langt de forlænges.", relatedTopics: ["geometri"] },
  { term: "Midtnormal", definition: "En linje vinkelret på et linjestykke, der skærer det i midtpunktet.", relatedTopics: ["geometri"] },
  { term: "Vinkelhalveringslinje", definition: "En linje der deler en vinkel i to lige store dele.", relatedTopics: ["geometri"] },
  { term: "Nabovinkler", definition: "To vinkler ved siden af hinanden, der tilsammen er 180°.", relatedTopics: ["geometri"] },
  { term: "Topvinkler", definition: "De modstående vinkler når to linjer skærer hinanden. Topvinkler er lige store.", relatedTopics: ["geometri"] },
  { term: "Polygon", definition: "En lukket figur med rette sider. Fx trekant, firkant, femkant.", relatedTopics: ["geometri"] },
  { term: "Diagonal", definition: "Et linjestykke der forbinder to ikke-nabohjørner i en polygon.", relatedTopics: ["geometri"] },
  { term: "Ligebenet trekant", definition: "En trekant med to lige lange sider og to lige store vinkler.", relatedTopics: ["geometri"] },
  { term: "Ligesidet trekant", definition: "En trekant med tre lige lange sider. Alle vinkler er 60°.", relatedTopics: ["geometri"] },
  { term: "Retvinklet trekant", definition: "En trekant med én vinkel på 90°.", relatedTopics: ["geometri"] },
  { term: "Hypotenuse", definition: "Den længste side i en retvinklet trekant – over for den rette vinkel.", relatedTopics: ["geometri"] },
  { term: "Katete", definition: "En af de to korte sider i en retvinklet trekant, der danner den rette vinkel.", relatedTopics: ["geometri"] },
  { term: "Median", definition: "Et linjestykke fra et hjørne til midtpunktet af den modstående side i en trekant.", relatedTopics: ["geometri"] },
  { term: "Højde", definition: "Den vinkelrette afstand fra en side til det modstående hjørne i en trekant.", relatedTopics: ["geometri"] },
  { term: "Kvadrat", definition: "En firkant med fire lige lange sider og fire rette vinkler.", relatedTopics: ["geometri"] },
  { term: "Rektangel", definition: "En firkant med fire rette vinkler.", relatedTopics: ["geometri"] },
  { term: "Parallelogram", definition: "En firkant hvor modstående sider er parallelle.", relatedTopics: ["geometri"] },
  { term: "Trapez", definition: "En firkant med præcis to parallelle sider.", relatedTopics: ["geometri"] },
  { term: "Rombe", definition: "En firkant med fire lige lange sider.", relatedTopics: ["geometri"] },
  { term: "Cirkel", definition: "Mængden af alle punkter med samme afstand (radius) fra et centrum.", relatedTopics: ["geometri"] },
  { term: "Radius", definition: "Afstanden fra cirklens centrum til periferien.", relatedTopics: ["geometri"] },
  { term: "Diameter", definition: "Afstanden tværs over cirklen gennem centrum. d = 2r.", relatedTopics: ["geometri"] },
  { term: "Tangent", definition: "En linje der rører en cirkel i præcis ét punkt.", relatedTopics: ["geometri"] },
  { term: "Korde", definition: "Et linjestykke der forbinder to punkter på en cirkels periferi.", relatedTopics: ["geometri"] },
  { term: "Kongruent", definition: "To figurer er kongruente, når den ene kan flyttes, så den dækker den anden præcis.", relatedTopics: ["geometri"] },
  { term: "Ligedannet", definition: "To figurer er ligedannede, når de har samme form men evt. forskellig størrelse.", relatedTopics: ["geometri"] },
  { term: "Målestoksforhold", definition: "Forholdet mellem længder i to ligedannede figurer. Fx 1:100.", relatedTopics: ["geometri"] },
  { term: "Pythagoras' sætning", definition: "I en retvinklet trekant: a² + b² = c², hvor c er hypotenusen.", relatedTopics: ["geometri"] },
  { term: "Sinus", definition: "sin(v) = modstående katete / hypotenuse i en retvinklet trekant.", relatedTopics: ["geometri"] },
  { term: "Cosinus", definition: "cos(v) = hosliggende katete / hypotenuse i en retvinklet trekant.", relatedTopics: ["geometri"] },
  { term: "Tangens", definition: "tan(v) = modstående katete / hosliggende katete i en retvinklet trekant.", relatedTopics: ["geometri"] },
  { term: "Polyeder", definition: "En rumlig figur med flade sideflader (polygoner). Fx kube, prisme, pyramide.", relatedTopics: ["geometri"] },
  { term: "Prisme", definition: "En rumlig figur med to parallelle, kongruente grundflader forbundet af rektangler.", relatedTopics: ["geometri"] },
  { term: "Cylinder", definition: "En rumlig figur med to parallelle, cirkulære grundflader.", relatedTopics: ["geometri"] },
  { term: "Kegle", definition: "En rumlig figur med en cirkulær grundflade og en spids top.", relatedTopics: ["geometri"] },
  { term: "Kugle", definition: "En rumlig figur hvor alle punkter på overfladen har samme afstand til centrum.", relatedTopics: ["geometri"] },
  { term: "Pyramide", definition: "En rumlig figur med en polygonal grundflade og trekantede sideflader der mødes i en spids.", relatedTopics: ["geometri"] },
  { term: "Spejling", definition: "En flytning hvor en figur vendes om en spejlingsakse.", relatedTopics: ["geometri"] },
  { term: "Drejning", definition: "En flytning hvor en figur drejes om et fast punkt med en bestemt vinkel.", relatedTopics: ["geometri"] },
  { term: "Parallelforskydning", definition: "En flytning hvor alle punkter flyttes samme afstand i samme retning.", relatedTopics: ["geometri"] },
  { term: "Symmetriakse", definition: "En linje man kan spejle en figur i, så den dækker sig selv.", relatedTopics: ["geometri"] },
  { term: "Areal", definition: "Størrelsen af en figurs overflade, målt i kvadratenheder (fx m²).", relatedTopics: ["geometri"] },
  { term: "Omkreds", definition: "Den samlede længde af en figurs kant.", relatedTopics: ["geometri"] },
  { term: "Rumfang", definition: "Den mængde plads en rumlig figur fylder, målt i kubikenheder (fx m³).", relatedTopics: ["geometri"] },
  { term: "Overfladeareal", definition: "Det samlede areal af alle ydre flader på en rumlig figur.", relatedTopics: ["geometri"] },
  { term: "Massefylde", definition: "Masse divideret med rumfang. ρ = m/V.", relatedTopics: ["geometri"] },
  { term: "Fart", definition: "Tilbagelagt afstand divideret med tid. v = s/t.", relatedTopics: ["geometri"] },
  { term: "Koordinatsystem", definition: "To tallinjer (x-akse og y-akse) der skærer hinanden vinkelret i origo (0,0).", relatedTopics: ["geometri"] },

  // Statistik og sandsynlighed
  { term: "Data", definition: "Oplysninger indsamlet i en statistisk undersøgelse. Også kaldet observationer.", relatedTopics: ["statistik"] },
  { term: "Datasæt", definition: "En samling af data eller observationer.", relatedTopics: ["statistik"] },
  { term: "Hyppighed", definition: "Antallet af gange en bestemt værdi optræder i et datasæt.", relatedTopics: ["statistik"] },
  { term: "Frekvens", definition: "Hyppighed divideret med det samlede antal observationer.", relatedTopics: ["statistik"] },
  { term: "Typetal", definition: "Den værdi der optræder flest gange i et datasæt.", relatedTopics: ["statistik"] },
  { term: "Middeltal", definition: "Gennemsnittet: summen af alle værdier divideret med antallet.", relatedTopics: ["statistik"] },
  { term: "Median", definition: "Den midterste værdi i et ordnet datasæt.", relatedTopics: ["statistik"] },
  { term: "Kvartilsæt", definition: "Tre værdier (Q1, median, Q3) der deler datasættet i fire lige store dele.", relatedTopics: ["statistik"] },
  { term: "Variationsbredde", definition: "Størsteværdi minus mindsteværdi i et datasæt.", relatedTopics: ["statistik"] },
  { term: "Boksplot", definition: "Et diagram der viser mindsteværdi, kvartilsæt og størsteværdi.", relatedTopics: ["statistik"] },
  { term: "Sumkurve", definition: "En kurve der viser den summerede frekvens for et grupperet datasæt.", relatedTopics: ["statistik"] },
  { term: "Sandsynlighed", definition: "Et tal mellem 0 og 1 der angiver chancen for en hændelse. P(H) = gunstige/mulige.", relatedTopics: ["statistik"] },
  { term: "Udfaldsrum", definition: "Mængden af alle mulige udfald i et eksperiment.", relatedTopics: ["statistik"] },
  { term: "Hændelse", definition: "En delmængde af udfaldsrummet.", relatedTopics: ["statistik"] },
  { term: "Tælletræ", definition: "En grafisk oversigt over alle mulige udfald i et kombineret eksperiment.", relatedTopics: ["statistik"] },
  { term: "Chancetræ", definition: "Et tælletræ med sandsynligheder på grenene. Sandsynligheder ganges langs grenene.", relatedTopics: ["statistik"] },
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
