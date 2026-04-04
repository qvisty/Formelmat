export type ThemeId = "fodbold" | "heste" | "mode" | "gaming" | "musik" | "madlavning";

export interface Theme {
  id: ThemeId;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const themes: Theme[] = [
  { id: "fodbold", name: "Fodbold", icon: "⚽", color: "#16a34a", description: "Mål, baner, spillere og statistik" },
  { id: "heste", name: "Heste", icon: "🐴", color: "#a16207", description: "Ridning, stalde, fold og spring" },
  { id: "mode", name: "Mode & design", icon: "👗", color: "#db2777", description: "Tøj, farver, mønstre og stof" },
  { id: "gaming", name: "Gaming", icon: "🎮", color: "#7c3aed", description: "XP, levels, maps og highscores" },
  { id: "musik", name: "Musik", icon: "🎵", color: "#2563eb", description: "Beats, toner, frekvenser og koncerter" },
  { id: "madlavning", name: "Madlavning", icon: "🍳", color: "#ea580c", description: "Opskrifter, mål, portioner og bagning" },
];

export interface ThemedExample {
  /** Which math topic this example belongs to */
  topic: string;
  /** The example in each theme */
  examples: Record<ThemeId, {
    text: string;
    calculation?: string;
  }>;
}

/**
 * Real-world themed examples for each major math topic.
 * Each example is written from the student's perspective.
 */
export const themedExamples: ThemedExample[] = [
  // --- TAL OG ALGEBRA ---
  {
    topic: "procent",
    examples: {
      fodbold: { text: "En fodboldspiller scorer på 24 ud af 80 skud. Hvad er scoringsprocenten?", calculation: "24/80 · 100 = 30%" },
      heste: { text: "En hestebutik har 15% rabat på sadler. En sadel koster 4.800 kr. Hvad er rabatten?", calculation: "4.800 · 0,15 = 720 kr." },
      mode: { text: "Der er 25% udsalg i tøjbutikken. En jakke koster normalt 600 kr. Hvad koster den nu?", calculation: "600 · 0,75 = 450 kr." },
      gaming: { text: "Du har klaret 45 ud af 60 achievements i et spil. Hvor mange procent har du klaret?", calculation: "45/60 · 100 = 75%" },
      musik: { text: "En koncertsal har 1.200 pladser. 85% er solgt. Hvor mange billetter er solgt?", calculation: "1.200 · 0,85 = 1.020 billetter" },
      madlavning: { text: "En opskrift til 4 personer skal laves til 6. Hvor mange procent mere skal du bruge?", calculation: "6/4 = 1,5 → 50% mere" },
    },
  },
  {
    topic: "potenser",
    examples: {
      fodbold: { text: "En turnering har 2 hold i første runde. Hver runde fordobles. Efter 5 runder:", calculation: "2⁵ = 32 hold" },
      heste: { text: "En hests foldeareal er 10² = 100 m². Hvad hvis folden er 15 meter på hver side?", calculation: "15² = 225 m²" },
      mode: { text: "Et stofmønster gentages i et 3×3 gitter. Hvor mange felter i et 3³ gitter?", calculation: "3³ = 27 felter" },
      gaming: { text: "Du får 2x XP-bonus, der stacker 4 gange. Hvor mange gange mere XP får du?", calculation: "2⁴ = 16 gange" },
      musik: { text: "Hver oktav fordobler frekvensen. A4 = 440 Hz. Hvad er A7?", calculation: "440 · 2³ = 3.520 Hz" },
      madlavning: { text: "En bakterie fordobles hver time. Hvor mange er der efter 8 timer?", calculation: "2⁸ = 256 bakterier" },
    },
  },
  {
    topic: "ligninger",
    examples: {
      fodbold: { text: "Et hold scorer 3 mål i første halvleg. De scorer x mål i anden halvleg og vinder 5-2. Hvad er x?", calculation: "3 + x = 5 → x = 2" },
      heste: { text: "Du skal købe foder til 4 heste. Hvert kilo koster 12 kr. Du har 900 kr. Hvor mange kilo kan du købe?", calculation: "12x = 900 → x = 75 kg" },
      mode: { text: "Du har 500 kr. til en fest. En kjole koster x kr., og sko koster 200 kr. Du har 50 kr. tilovers.", calculation: "x + 200 = 450 → x = 250 kr." },
      gaming: { text: "Du skal bruge 1.000 XP for at level up. Du har 350 XP og får 50 XP per quest. Hvor mange quests?", calculation: "350 + 50x = 1.000 → x = 13 quests" },
      musik: { text: "Et band tjener 2.000 kr. pr. koncert plus 50 kr. pr. solgt billet. De tjente 4.500 kr. Hvor mange billetter?", calculation: "2.000 + 50x = 4.500 → x = 50 billetter" },
      madlavning: { text: "Du bager kager til salg. Ingredienserne koster 30 kr. pr. kage. Du sælger for 50 kr. Hvor mange kager for 400 kr. profit?", calculation: "50x - 30x = 400 → 20x = 400 → x = 20 kager" },
    },
  },
  {
    topic: "funktioner",
    examples: {
      fodbold: { text: "En fodboldklub tager 50 kr. i entre. Indtægt som funktion af antal tilskuere:", calculation: "f(x) = 50x" },
      heste: { text: "Et ridecenter tager 200 kr. pr. time plus 50 kr. for leje af hjelm:", calculation: "f(x) = 200x + 50" },
      mode: { text: "Et tøjfirma har faste omkostninger på 10.000 kr. og producerer for 80 kr. pr. stk:", calculation: "f(x) = 80x + 10.000" },
      gaming: { text: "Dit level vokser lineært med XP. Du starter på level 1 og stiger 1 level per 100 XP:", calculation: "f(x) = x/100 + 1" },
      musik: { text: "En streamingtjeneste betaler 0,003 kr. pr. stream. Indtægt som funktion af streams:", calculation: "f(x) = 0,003x" },
      madlavning: { text: "En pizza koster 40 kr. at lave. Du sælger for 85 kr. Profit som funktion af antal:", calculation: "f(x) = 45x" },
    },
  },
  {
    topic: "oekonomi",
    examples: {
      fodbold: { text: "En klub sparer 50.000 kr. op til nyt udstyr med 3% rente i 5 år.", calculation: "K₅ = 50.000 · 1,03⁵ = 57.964 kr." },
      heste: { text: "Du sparer 200 kr. om måneden til en sadel. Med 2% rente om året, hvad har du efter 3 år?", calculation: "Opsparing med faste indbetalinger" },
      mode: { text: "En designer låner 100.000 kr. til en kollektion med 5% rente over 4 år.", calculation: "K₄ = 100.000 · 1,05⁴ = 121.551 kr." },
      gaming: { text: "Du sparer op til en gaming-PC til 12.000 kr. Du sætter 500 kr. ind om måneden med 1% rente.", calculation: "Opsparing med faste indbetalinger" },
      musik: { text: "Et band låner 80.000 kr. til udstyr med 4% rente om året i 3 år.", calculation: "K₃ = 80.000 · 1,04³ = 89.989 kr." },
      madlavning: { text: "En restaurant låner 200.000 kr. til renovering med 3,5% rente over 5 år.", calculation: "K₅ = 200.000 · 1,035⁵ = 237.544 kr." },
    },
  },
  // --- GEOMETRI ---
  {
    topic: "pythagoras",
    examples: {
      fodbold: { text: "Et fodboldmål er 2,44 m højt og 7,32 m bredt. Hvor lang er diagonalen?", calculation: "d = √(2,44² + 7,32²) = √(59,49) ≈ 7,71 m" },
      heste: { text: "En fold er 30 m lang og 20 m bred. Hvor lang er diagonalen, som du skal hegne?", calculation: "d = √(30² + 20²) = √1300 ≈ 36,1 m" },
      mode: { text: "Du skal klippe stof i en diagonal. Stoffet er 1,5 m × 2 m. Hvor lang er diagonalen?", calculation: "d = √(1,5² + 2²) = √6,25 = 2,5 m" },
      gaming: { text: "I et 2D-spil skal din karakter gå fra (0,0) til (3,4). Hvad er den korteste afstand?", calculation: "d = √(3² + 4²) = √25 = 5 felter" },
      musik: { text: "En scene er 12 m bred og 5 m dyb. En kabelrulle skal nå fra hjørne til hjørne. Hvor lang?", calculation: "d = √(12² + 5²) = √169 = 13 m" },
      madlavning: { text: "En rektangulær bageplade er 40 cm × 30 cm. Hvor lang er diagonalen?", calculation: "d = √(40² + 30²) = √2500 = 50 cm" },
    },
  },
  {
    topic: "trigonometri",
    examples: {
      fodbold: { text: "Du sparker fra 16 m og bolden flyver i en vinkel på 25° op. Hvor højt når den?", calculation: "h = 16 · tan(25°) ≈ 7,5 m" },
      heste: { text: "En springbane-forhindring er 1,3 m høj. Hesten springer fra 2 m afstand. Hvad er vinklen?", calculation: "v = tan⁻¹(1,3/2) ≈ 33°" },
      mode: { text: "En modellejr er 170 cm høj. Skyggen er 85 cm lang. Hvad er solens vinkel?", calculation: "v = tan⁻¹(170/85) ≈ 63°" },
      gaming: { text: "Du skyder på en fjende 50 m væk og 20 m oppe. Hvad er vinklen på dit skud?", calculation: "v = tan⁻¹(20/50) ≈ 22°" },
      musik: { text: "En højttaler peger skråt ned fra 3 m højde. Lyden skal ramme 5 m ude. Hvad er vinklen?", calculation: "v = tan⁻¹(3/5) ≈ 31°" },
      madlavning: { text: "Du hælder en flødekande med 200 ml. Kanden er 15 cm høj og hælder 30°. Hvor langt når fløden ud?", calculation: "afstand = 15 · tan(30°) ≈ 8,7 cm" },
    },
  },
  {
    topic: "areal",
    examples: {
      fodbold: { text: "En fodboldbane er 105 m × 68 m. Hvad er arealet?", calculation: "A = 105 · 68 = 7.140 m²" },
      heste: { text: "En hestfold er trekantet med grundlinje 40 m og højde 25 m. Hvad er arealet?", calculation: "A = ½ · 40 · 25 = 500 m²" },
      mode: { text: "Du skal sy en cirkulær nederdel med radius 60 cm. Hvor meget stof?", calculation: "A = π · 60² ≈ 11.310 cm²" },
      gaming: { text: "Dit base-areal i et strategi-spil er en cirkel med radius 50 felter.", calculation: "A = π · 50² ≈ 7.854 felter²" },
      musik: { text: "En rund scene har diameter 10 m. Hvad er arealet?", calculation: "A = π · 5² ≈ 78,5 m²" },
      madlavning: { text: "En rund pizza har diameter 30 cm. Hvad er arealet af ét stykke (1/8)?", calculation: "A = π · 15²/8 ≈ 88,4 cm²" },
    },
  },
  {
    topic: "rumfang",
    examples: {
      fodbold: { text: "En fodbold har radius ca. 11 cm. Hvad er rumfanget?", calculation: "V = 4/3 · π · 11³ ≈ 5.575 cm³" },
      heste: { text: "En vandtrug er 80 cm lang, 40 cm bred og 30 cm dyb. Hvor mange liter rummer den?", calculation: "V = 80 · 40 · 30 = 96.000 cm³ = 96 L" },
      mode: { text: "En hatteæske er cylinderformet med radius 20 cm og højde 15 cm.", calculation: "V = π · 20² · 15 ≈ 18.850 cm³" },
      gaming: { text: "Dit inventory er en kube med sidelængde 10 enheder. Hvad er kapaciteten?", calculation: "V = 10³ = 1.000 enheder³" },
      musik: { text: "En tromme er en cylinder med radius 18 cm og højde 40 cm.", calculation: "V = π · 18² · 40 ≈ 40.715 cm³" },
      madlavning: { text: "En gryde er cylinderformet med diameter 24 cm og højde 14 cm. Hvor mange liter?", calculation: "V = π · 12² · 14 ≈ 6.333 cm³ ≈ 6,3 L" },
    },
  },
  {
    topic: "maaleenheder",
    examples: {
      fodbold: { text: "En fodboldkamp varer 90 min. Hvor mange sekunder er det?", calculation: "90 · 60 = 5.400 sekunder" },
      heste: { text: "En hest vejer 550 kg. Hvor mange gram er det?", calculation: "550 · 1.000 = 550.000 g" },
      mode: { text: "Du skal bruge 2,5 m stof. Butikken sælger i cm. Hvor mange cm?", calculation: "2,5 · 100 = 250 cm" },
      gaming: { text: "Din skærm er 27 tommer. Hvor mange cm er det? (1 tomme = 2,54 cm)", calculation: "27 · 2,54 = 68,58 cm" },
      musik: { text: "Lydens hastighed er 343 m/s. Hvor mange km/t er det?", calculation: "343 · 3,6 = 1.234,8 km/t" },
      madlavning: { text: "En opskrift siger 2 dL mælk. Hvor mange mL er det?", calculation: "2 · 100 = 200 mL" },
    },
  },
  // --- STATISTIK ---
  {
    topic: "statistik",
    examples: {
      fodbold: { text: "Her er antal mål i 10 kampe: 0, 1, 1, 2, 2, 2, 3, 3, 4, 5. Hvad er gennemsnittet?", calculation: "Middeltal = 23/10 = 2,3 mål pr. kamp" },
      heste: { text: "Tiderne (sek) for 8 runder i en ridebane: 58, 61, 59, 62, 60, 58, 63, 59. Hvad er medianen?", calculation: "Ordnet: 58, 58, 59, 59, 60, 61, 62, 63. Median = (59+60)/2 = 59,5 sek" },
      mode: { text: "En butik sælger t-shirts i S, M, L, XL. Salg: S=12, M=35, L=28, XL=15. Hvad er typetallet?", calculation: "Typetal = M (35 stk solgt)" },
      gaming: { text: "Dine scores i 7 runder: 120, 95, 140, 110, 85, 130, 105. Hvad er variationsbredden?", calculation: "140 - 85 = 55 points" },
      musik: { text: "Antal streams pr. dag i en uge: 1.200, 980, 1.450, 1.100, 1.300, 2.100, 1.870. Gennemsnit?", calculation: "Middeltal = 10.000/7 ≈ 1.429 streams" },
      madlavning: { text: "Bedømmelser af en opskrift (1-5 stjerner): 4, 5, 3, 5, 4, 5, 4, 3, 5, 4. Typetal?", calculation: "Typetal = 4 og 5 (begge optræder 4 gange)" },
    },
  },
  {
    topic: "sandsynlighed",
    examples: {
      fodbold: { text: "Et hold har vundet 60% af sine kampe. Hvad er sandsynligheden for at de vinder næste kamp?", calculation: "P(vinder) = 0,60 = 60%" },
      heste: { text: "Ud af 20 spring klarer hesten 17 fejlfrit. Hvad er sandsynligheden for et fejlfrit spring?", calculation: "P(fejlfrit) = 17/20 = 0,85 = 85%" },
      mode: { text: "I en pose er 3 røde, 5 blå og 2 grønne knapper. Du tager én tilfældigt. P(rød)?", calculation: "P(rød) = 3/10 = 0,3 = 30%" },
      gaming: { text: "Et loot drop giver dig sjælden item med 5% chance. Du åbner 20 kister. Forventet antal?", calculation: "E = 20 · 0,05 = 1 sjælden item" },
      musik: { text: "En playliste har 40 sange – 12 er pop, 18 er rock, 10 er hiphop. P(rock) ved shuffle?", calculation: "P(rock) = 18/40 = 0,45 = 45%" },
      madlavning: { text: "Du har 8 chokolader i en skål – 3 mørke, 3 hvide, 2 med nødder. P(nødder)?", calculation: "P(nødder) = 2/8 = 0,25 = 25%" },
    },
  },
];
