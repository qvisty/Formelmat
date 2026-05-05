export interface ExplanationItem {
  title: string;
  text: string;
}

export const hverdagsforklaringer: Record<string, ExplanationItem[]> = {
  tal: [
    {
      title: "Negative tal i hverdagen",
      text: "Negative tal bruger du, når temperaturen falder under frysepunktet. -5°C betyder 5 grader under nul. Du bruger dem også, når du er i minus på din bankkonto.",
    },
    {
      title: "Store tal og videnskabelig notation",
      text: "Når du hører, at Jordens afstand til Solen er 150.000.000 km, er det nemmere at skrive 1,5 × 10⁸ km. Det er det samme tal – bare mere kompakt.",
    },
    {
      title: "Primtal og kryptografi",
      text: "Primtal bruges i din mobiltelefon hver dag! Når du betaler med MobilePay eller logger ind på en hjemmeside, beskytter primtal dine data via kryptering.",
    },
  ],

  regnestrategier: [
    {
      title: "Forenkling i butikken",
      text: "Når en trøje koster 149 kr og er 30% rabat, kan du hurtigt estimere: 30% af 150 kr = 45 kr. Så betaler du cirka 104 kr. Afrunding gør beregningen hurtig.",
    },
    {
      title: "Rækkefølge i madlavning",
      text: "Når en opskrift siger '(2 kopper mel + 1 kop sukker) × 3', skal du lægge mel og sukker sammen først, og så gange. Parenteser fortæller dig rækkefølgen – ligesom i matematik.",
    },
  ],

  "potenser-og-roedder": [
    {
      title: "Dobling og eksponentiel vækst",
      text: "Forestil dig, at du får 1 krone dag 1, 2 kroner dag 2, 4 kroner dag 3 og så videre. Efter 30 dage har du 2³⁰ kr – det er over 1 milliard kroner! Sådan vokser noget eksponentielt.",
    },
    {
      title: "Kvadratrod i byggeri",
      text: "En tømrer vil vide, hvor lang en skrå støtte skal være i et kvadratisk rum på 9 m². Diagonalen er √(9+9) = √18 ≈ 4,24 m. Kvadratroden hjælper med at finde den skrå afstand.",
    },
    {
      title: "Datamængder på din computer",
      text: "Din computers hukommelse måles i potenser af 2: 1 KB = 2¹⁰ bytes, 1 MB = 2²⁰ bytes, 1 GB = 2³⁰ bytes. Potenser gør det nemt at forstå disse store tal.",
    },
  ],

  "formler-og-udtryk": [
    {
      title: "Opskrifter som formler",
      text: "En opskrift er egentlig en formel. Hvis du skal lave kage til 8 i stedet for 4 personer, ganger du alle mængder med 2. Det er variablen 'antal personer' du ændrer i formlen.",
    },
    {
      title: "Telefontakster og variabeludtryk",
      text: "Mobilabonnementer har tit et grundbeløb plus en pris per minut. Det kan skrives som: pris = 49 + 0,49 × minutter. Det er en formel med variablen 'minutter'.",
    },
  ],

  ligninger: [
    {
      title: "Sæt prisen rigtigt",
      text: "Du sælger håndlavede armbånd. Materialer koster 15 kr og du vil tjene 25 kr. Hvad skal prisen være? Du løser ligningen: salgspris − 15 = 25, så salgspris = 40 kr.",
    },
    {
      title: "Hvornår mødes de?",
      text: "Din far kører 80 km/t og starter 1 time efter dig. Du kører 60 km/t. Hvornår indhenter han dig? Du sætter de to distancer lig hinanden og løser ligningen.",
    },
    {
      title: "Splitregning",
      text: "Du og fire venner skal dele en regning på 375 kr, men to af jer har drukket to drinks ekstra til 45 kr. Du løser en ligning for at finde, hvad hver person skal betale.",
    },
  ],

  funktioner: [
    {
      title: "Hastighed som funktion af tid",
      text: "Når du cykler med konstant hastighed, er din afstand en funktion af tid: d = 15 × t (km). For hvert ekstra minut du cykler, kører du 0,25 km mere. Det er en lineær funktion.",
    },
    {
      title: "Streamingpris og forbrug",
      text: "Spotify koster 99 kr/md uanset, hvor meget du hører. Det er en konstant funktion. Hvis du i stedet betaler per sang, er prisen en funktion af antallet af afspilninger.",
    },
    {
      title: "Vækst af en plante",
      text: "Hvis en plante vokser 2 cm om ugen, kan du skrive dens højde som en funktion: h(t) = 5 + 2t, hvor t er antallet af uger og 5 cm er starthøjden.",
    },
  ],

  "procent-og-promille": [
    {
      title: "Udsalg i butikken",
      text: "En jakke koster 800 kr og er sat 30% ned. Du udregner: 800 × 0,70 = 560 kr. Du ganger med 0,70 fordi du betaler 70% af den originale pris.",
    },
    {
      title: "Alkoholprocent",
      text: "Promille bruges til at angive alkoholindhold i blodet. En promille (1‰) svarer til 1 gram alkohol per liter blod. Grænsen for bilkørsel i Danmark er 0,5‰.",
    },
    {
      title: "Renter i banken",
      text: "Hvis din opsparing vokser med 2% om året, og du har 10.000 kr, tjener du 200 kr i renter det første år. Det er 2% af 10.000 = 10.000 × 0,02 = 200 kr.",
    },
  ],

  oekonomi: [
    {
      title: "Budget til din fest",
      text: "Du laver et budget: indkomst (gaver, lommepenge) minus udgifter (mad, musik, dekorationer). Hvis udgifterne er større end indkomsten, er du i underskud.",
    },
    {
      title: "Lån og afdrag",
      text: "Når dine forældre har et huslån, betaler de hver måned et fast beløb der dækker renter og afdrag. Over tid falder rentebeløbet, men gælden falder også.",
    },
    {
      title: "Hvad koster det at eje en bil?",
      text: "En bil koster ikke kun benzin. Du skal lægge forsikring, vægtafgift, service og afskrivning til. Det samlede beløb per km kaldes total cost of ownership.",
    },
  ],

  "forhold-og-proportionalitet": [
    {
      title: "Opskrifter og skalering",
      text: "En pandekageopskrift til 4 personer bruger 3 æg. Til 12 personer skal du bruge 9 æg. Forholdet 4:3 er det samme som 12:9 – det er direkte proportionalitet.",
    },
    {
      title: "Kortlæsning",
      text: "På et kort med skala 1:100.000 svarer 1 cm på kortet til 1 km i virkeligheden. Et afstandsmål på 4,5 cm = 4,5 km faktisk afstand.",
    },
    {
      title: "Hastighed og tid",
      text: "Hvis du kører dobbelt så hurtigt, bruger du halvt så lang tid. Hastighed og tid er omvendt proportionale: jo hurtigere, desto kortere tid.",
    },
  ],

  maengdelaere: [
    {
      title: "Sortering af musik",
      text: "Forestil dig to sæt: {sange du kan lide} og {sange der er populære}. Mængden af sange du kan lide OG er populære er fællesmængden. Begge dele tilsammen er foreningsmængden.",
    },
    {
      title: "Elever der spiller sport",
      text: "I en klasse spiller 15 elever fodbold og 12 spiller håndbold. 5 spiller begge dele. Fællesmængden er 5. Foreningsmængden er 15 + 12 − 5 = 22 unikke sportsudøvere.",
    },
  ],

  talfolger: [
    {
      title: "Renter på renter",
      text: "Hvis en opsparing vokser 10% om året fra 1.000 kr, er beløbene: 1.000, 1.100, 1.210, 1.331, ... Det er en geometrisk talrække med kvotienten 1,1.",
    },
    {
      title: "Trapper og aritmetiske rækker",
      text: "Hver trin i en trappe er 20 cm højt. Første trin er 20 cm, andet 40 cm, tredje 60 cm. Det er en aritmetisk talrække med differensen 20.",
    },
  ],

  uligheder: [
    {
      title: "Aldersgrænser",
      text: "Du skal være mindst 18 år for at købe alkohol. Det skrives som: alder ≥ 18. Uligheder beskriver betingelser, ikke præcise værdier.",
    },
    {
      title: "Budget og grænsebeløb",
      text: "Du har 500 kr til weekenden. Udgifterne skal holdes under 500 kr: billetter + mad + transport < 500 kr. Det er en ulighed, du løser ved at styre dit forbrug.",
    },
  ],

  "areal-og-omkreds": [
    {
      title: "Maling af en væg",
      text: "En dåse maling dækker 8 m². Din væg er 4 m bred og 2,5 m høj = 10 m². Du skal bruge lidt mere end én dåse. Arealet fortæller dig præcis, hvor meget maling du skal købe.",
    },
    {
      title: "Hegn om haven",
      text: "Du vil sætte hegn om din rektangulære have på 6 × 4 m. Omkredsen er 2 × (6 + 4) = 20 m. Du skal købe 20 meters hegn.",
    },
    {
      title: "Pizza og areal",
      text: "En pizza med diameter 30 cm (radius 15 cm) har arealet π × 15² ≈ 707 cm². En med diameter 40 cm har ≈ 1.257 cm². Den store pizza er næsten dobbelt så stor – selvom diameteren kun er 33% større!",
    },
  ],

  "polygoner-og-trekanter": [
    {
      title: "Trekantens vinkelsum i navigering",
      text: "Tre byer danner en trekant på et kort. Uanset formen er vinkelsummen altid 180°. Det bruger GPS-systemer til at beregne positioner og ruter.",
    },
    {
      title: "Tagkonstruktion",
      text: "Et hus har et trekantformet tværsnit. Tømrere bruger vinkelberegning til at bestemme tagvinklen og sikre, at taget ikke er for fladt eller for stejlt.",
    },
  ],

  "firkanter-og-cirkler": [
    {
      title: "Cirkelformet swimmingpool",
      text: "En rund pool med radius 3 m har arealet π × 3² ≈ 28,3 m². Til at overdække den med presenning skal du kende dette areal præcis.",
    },
    {
      title: "Gulvfliser",
      text: "Et badeværelse er 180 × 210 cm. Fliserne er 30 × 30 cm = 900 cm² hver. Du skal bruge (180 × 210) / 900 = 42 fliser. Det er areal divideret med areal.",
    },
  ],

  "rumlige-figurer": [
    {
      title: "Emballage og design",
      text: "Virksomheder designer æsker til varer. Overfladearealet af æsken bestemmer, hvor meget papir/karton der bruges og dermed prisen på emballagen.",
    },
    {
      title: "Is i en kugle",
      text: "En isscoop er formet som en halvkugle med radius 3 cm. Dens volumen er ⅔ × π × 3³ ≈ 56,5 cm³. Det er præcis, hvad maskinerne på isfabrikken beregner.",
    },
  ],

  rumfang: [
    {
      title: "Fyld en swimmingpool",
      text: "En rektangulær pool er 8 m × 4 m × 1,5 m. Rumfanget er 48 m³ = 48.000 liter. En vandledning fylder 300 liter i minuttet – det tager 48.000 / 300 = 160 minutter.",
    },
    {
      title: "Kaffekoppers volumen",
      text: "En kaffekop er en cylinder med radius 4 cm og højde 10 cm. Volumen er π × 4² × 10 ≈ 503 cm³ = 503 ml. Det passer med de fleste store kopper.",
    },
  ],

  pythagoras: [
    {
      title: "Stige mod en mur",
      text: "En stige er 5 m lang og hviler mod en mur. Foden er 3 m fra muren. Hvor højt når den? a² + b² = c²: 3² + b² = 5² → b² = 16 → b = 4 m. Du kan altid finde den ukendte side.",
    },
    {
      title: "Skærmstørrelse",
      text: "En 55-tommer TV er 55 tommer diagonalt. Hvis bredde-højde-forholdet er 16:9, kan du bruge Pythagoras til at beregne den præcise bredde og højde i centimeter.",
    },
    {
      title: "Bygge en rektangulær have",
      text: "Du vil sikre, at din have har rette vinkler. Mål 3 m langs én side, 4 m langs den anden. Diagonalen skal være 5 m (3-4-5-trekanten). Hvis det passer, er vinklen 90°.",
    },
  ],

  trigonometri: [
    {
      title: "Mål et træ uden at klatre",
      text: "Du stiller dig 20 m fra et træ og måler vinklen op til toppen til 35°. Treets højde = 20 × tan(35°) ≈ 14 m. Det er trigonometri i praksis.",
    },
    {
      title: "GPS og kortlægning",
      text: "GPS-satellitter beregner din position ved at måle afstande og vinkler til flere satellitter. Sinus og cosinus bruges til at omsætte disse til præcise koordinater.",
    },
    {
      title: "Lydbølger og musik",
      text: "Lyd er bølger, der kan beskrives med sinus-funktionen. Lydingeniører bruger trigonometri til at justere equalizere og forstå, hvordan lyd opfører sig i rum.",
    },
  ],

  koordinatsystem: [
    {
      title: "Google Maps",
      text: "Ethvert punkt på Jordens overflade har en bredde- og længdegrad – det er et koordinatsystem. Google Maps bruger nøjagtig de samme principper som dit koordinatsystem i matematik.",
    },
    {
      title: "Computerspil og positioner",
      text: "I et computerspil har alle figurer (x, y)-koordinater, der opdateres mange gange i sekundet. Spilprogrammøren bruger koordinatsystemet til at beregne bevægelse og kollisioner.",
    },
  ],

  "linjer-og-vinkler": [
    {
      title: "Trafik og vinkelberegning",
      text: "Når to veje krydser, opstår der vinkler. Trafikplanlæggere bruger disse vinkler til at designe kryds, der er sikre for bilister og fodgængere.",
    },
    {
      title: "Solens vinkel og solenergi",
      text: "Solceller fungerer bedst, når solen rammer dem i en bestemt vinkel. Ingeniører beregner den optimale hældningsvinkel baseret på geografisk breddegrad.",
    },
  ],

  ligedannethed: [
    {
      title: "Forstørrelse og fotografering",
      text: "Når du forstørrer et billede fra 10×15 cm til A4, er de to rektangler ligedannede, hvis forholdene er ens. Ellers opstår forvrængning.",
    },
    {
      title: "Kortlæsning med skala",
      text: "Et kort er en ligedannet kopi af det virkelige terræn. Skalaen (f.eks. 1:25.000) fortæller forholdet mellem kortet og virkeligheden.",
    },
  ],

  maaleenheder: [
    {
      title: "Madopskrifter og omregning",
      text: "En amerikansk opskrift bruger 'cups' i stedet for ml. 1 cup = 240 ml. Du skal omregne måleenheder, præcis som man gør i matematik.",
    },
    {
      title: "Rejser i Europa",
      text: "Storbritannien bruger miles, mens Danmark bruger km. 1 mile ≈ 1,609 km. Omregning er afgørende, når du ser et vejskilt på 50 mph.",
    },
  ],

  "flytninger-og-symmetri": [
    {
      title: "Spejlbillede og symmetri",
      text: "Dit ansigt er næsten symmetrisk om en lodret midterakse. Bogstavet 'A' er symmetrisk, mens 'F' ikke er. Symmetri bruges i design og arkitektur.",
    },
    {
      title: "Tapetmønstre",
      text: "Tapeter og gulvmønstre er skabt ved at gentage en grundform via rotation og translation. Alle disse flytninger er matematiske transformationer.",
    },
  ],

  vektorer: [
    {
      title: "Vindretning og navigation",
      text: "Et fly flyver mod øst, men vinden blæser mod nord. Det faktiske kursresultat er en vektor, der er summen af flyets fart og vindens hastighed. Piloter bruger vektorer til at korrigere kursen.",
    },
    {
      title: "Kræfter i sport",
      text: "Når du kaster en bold, virker tyngdekraften nedad og din kraft fremad. Den resulterende bevægelse er vektorsummen af de to kræfter.",
    },
  ],

  datasaet: [
    {
      title: "Karakterer og datasæt",
      text: "Dine karakterer i et fag udgør et datasæt. Du kan analysere, om du typisk får høje eller lave karakterer, og om der er stor variation.",
    },
    {
      title: "Sportstatistik",
      text: "En fodboldklub registrerer antal mål per kamp sæsonen igennem. Det er et datasæt, der kan analyseres for mønstre og forbedring over tid.",
    },
  ],

  deskriptorer: [
    {
      title: "Hvad er en 'typisk' løn?",
      text: "Hvis 9 arbejdere tjener 30.000 kr og 1 tjener 300.000 kr, er gennemsnitslønnen 57.000 kr – men medianen er 30.000 kr. Medianen repræsenterer bedre den 'typiske' medarbejder.",
    },
    {
      title: "Temperaturvariationer",
      text: "Danmarks gennemsnitstemperatur i juli er ca. 17°C, men spredningen viser, at det varierer meget. En lav spredning betyder stabilt vejr, høj spredning betyder store udsving.",
    },
  ],

  diagrammer: [
    {
      title: "Valgresultater",
      text: "Søjlediagrammer viser tydeligt, hvor mange procent hvert parti fik ved et valg. Det giver et hurtigt overblik, som er svært at få fra en tabel med tal.",
    },
    {
      title: "Aktiekurser over tid",
      text: "Et linjediagram viser, hvordan en akties pris har ændret sig over et år. Stigende eller faldende tendenser er lette at se i en graf.",
    },
  ],

  sandsynlighed: [
    {
      title: "Lotteri og gevinster",
      text: "Chancen for at vinde i Lotto er meget lille. Sandsynlighed hjælper dig med at forstå, at du statistisk set vil tabe penge på lang sigt – uanset hvad din mavefornemmelse siger.",
    },
    {
      title: "Vejrudsigt",
      text: "'70% chance for regn' betyder ikke, at det regner i 70% af Danmark. Det betyder, at i situationer som denne regnede det 70 ud af 100 gange historisk set.",
    },
    {
      title: "Forsikring og risiko",
      text: "Forsikringsselskaber beregner sandsynligheden for, at noget går galt. De sætter prisen, så de samlet set tjener penge – selv om de af og til skal udbetale store erstatninger.",
    },
  ],

  kombinatorik: [
    {
      title: "PIN-koder og sikkerhed",
      text: "En 4-cifret PIN-kode har 10⁴ = 10.000 mulige kombinationer. Det er derfor din bank låser kortet efter 3 forkerte forsøg – at gætte tilfældigt er næsten umuligt.",
    },
    {
      title: "Hold og turnering",
      text: "Hvis 6 hold spiller mod hinanden i en liga (alle mod alle), er der C(6,2) = 15 kampe. Kombinatorik fortæller dig præcis, hvor mange kampe der skal spilles.",
    },
    {
      title: "Tøjkombinationer",
      text: "Har du 5 trøjer og 3 par bukser, er der 5 × 3 = 15 mulige kombinationer. Multiplikationsprincippet er grundlaget for kombinatorik.",
    },
  ],
};
