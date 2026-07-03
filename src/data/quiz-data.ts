export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface QuizItem {
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface ExerciseItem {
  question: string;
  answer: string;
  hint: string;
  unit?: string;
}

export interface TopicQuizData {
  quiz: QuizItem[];
  exercises: ExerciseItem[];
}

export const quizData: Record<string, TopicQuizData> = {
  "procent-og-promille": {
    quiz: [
      {
        question: "Hvad er 25% af 200?",
        options: [
          { text: "25", correct: false },
          { text: "50", correct: true },
          { text: "75", correct: false },
          { text: "100", correct: false },
        ],
        explanation: "25% af 200 = 200 · 0,25 = 50",
      },
      {
        question: "En vare koster 400 kr. og sættes ned med 15%. Hvad er den nye pris?",
        options: [
          { text: "340 kr.", correct: true },
          { text: "360 kr.", correct: false },
          { text: "385 kr.", correct: false },
          { text: "320 kr.", correct: false },
        ],
        explanation: "400 · (1 − 0,15) = 400 · 0,85 = 340 kr.",
      },
      {
        question: "Hvor mange promille er 0,3%?",
        options: [
          { text: "0,3‰", correct: false },
          { text: "3‰", correct: true },
          { text: "30‰", correct: false },
          { text: "300‰", correct: false },
        ],
        explanation: "0,3% = 3‰ (gang med 10 for at gå fra procent til promille)",
      },
    ],
    exercises: [
      {
        question: "En jakke koster 600 kr. Du får 20% rabat. Hvad betaler du?",
        answer: "480",
        hint: "Beregn 20% af 600 og træk det fra prisen.",
        unit: "kr.",
      },
      {
        question: "12 ud af 48 elever spiller fodbold. Hvor mange procent er det?",
        answer: "25",
        hint: "Brug formlen: (del / hele) · 100%",
        unit: "%",
      },
      {
        question: "En bolig stiger fra 1.500.000 kr. til 1.650.000 kr. Hvad er den procentvise stigning?",
        answer: "10",
        hint: "Stigning = (ny − gammel) / gammel · 100%",
        unit: "%",
      },
    ],
  },
  "pythagoras": {
    quiz: [
      {
        question: "Hvad er hypotenusen i en retvinklet trekant med kateter 3 og 4?",
        options: [
          { text: "5", correct: true },
          { text: "7", correct: false },
          { text: "6", correct: false },
          { text: "√7", correct: false },
        ],
        explanation: "c = √(3² + 4²) = √(9 + 16) = √25 = 5",
      },
      {
        question: "Hvilken ligning beskriver Pythagoras' sætning?",
        options: [
          { text: "a + b = c", correct: false },
          { text: "a² + b² = c²", correct: true },
          { text: "a · b = c", correct: false },
          { text: "a² − b² = c²", correct: false },
        ],
        explanation: "Pythagoras' sætning: I en retvinklet trekant er a² + b² = c², hvor c er hypotenusen.",
      },
      {
        question: "En stige er 5 m lang og står 3 m fra væggen. Hvor højt når den op?",
        options: [
          { text: "3 m", correct: false },
          { text: "4 m", correct: true },
          { text: "√34 m", correct: false },
          { text: "2 m", correct: false },
        ],
        explanation: "Højde = √(5² − 3²) = √(25 − 9) = √16 = 4 m",
      },
    ],
    exercises: [
      {
        question: "En retvinklet trekant har kateter på 6 cm og 8 cm. Hvor lang er hypotenusen?",
        answer: "10",
        hint: "Brug c = √(a² + b²)",
        unit: "cm",
      },
      {
        question: "Hypotenusen er 13 cm og den ene katete er 5 cm. Find den anden katete.",
        answer: "12",
        hint: "Brug b = √(c² − a²)",
        unit: "cm",
      },
    ],
  },
  "trigonometri": {
    quiz: [
      {
        question: "Hvad er sin(30°)?",
        options: [
          { text: "0,25", correct: false },
          { text: "0,5", correct: true },
          { text: "0,7", correct: false },
          { text: "1", correct: false },
        ],
        explanation: "sin(30°) = 0,5 — dette er en af de vigtige standardvinkler.",
      },
      {
        question: "I en retvinklet trekant er tan(v) = modstående/hosliggende. Hvis modstående = 4 og hosliggende = 3, hvad er tan(v)?",
        options: [
          { text: "3/4", correct: false },
          { text: "4/3", correct: true },
          { text: "4/5", correct: false },
          { text: "3/5", correct: false },
        ],
        explanation: "tan(v) = modstående / hosliggende = 4/3 ≈ 1,33",
      },
      {
        question: "Hvilken trigonometrisk funktion bruger hosliggende katete og hypotenuse?",
        options: [
          { text: "Sinus", correct: false },
          { text: "Cosinus", correct: true },
          { text: "Tangens", correct: false },
          { text: "Ingen af dem", correct: false },
        ],
        explanation: "cos(v) = hosliggende katete / hypotenuse",
      },
    ],
    exercises: [
      {
        question: "En retvinklet trekant har hypotenuse 10 cm og vinkel v = 30°. Hvor lang er modstående katete?",
        answer: "5",
        hint: "Brug sin(v) = modstående / hypotenuse → modstående = hypotenuse · sin(v)",
        unit: "cm",
      },
      {
        question: "cos(60°) = ? (angiv som decimaltal med én decimal)",
        answer: "0.5",
        hint: "cos(60°) er en standardvinkel — husk at cos(60°) = sin(30°)",
      },
    ],
  },
  "areal-og-omkreds": {
    quiz: [
      {
        question: "Hvad er arealet af en cirkel med radius 7 cm? (brug π ≈ 3,14)",
        options: [
          { text: "44 cm²", correct: false },
          { text: "154 cm²", correct: true },
          { text: "22 cm²", correct: false },
          { text: "308 cm²", correct: false },
        ],
        explanation: "A = π · r² = 3,14 · 7² = 3,14 · 49 ≈ 154 cm²",
      },
      {
        question: "Hvad er omkredsen af et rektangel med siderne 5 cm og 8 cm?",
        options: [
          { text: "13 cm", correct: false },
          { text: "26 cm", correct: true },
          { text: "40 cm", correct: false },
          { text: "80 cm", correct: false },
        ],
        explanation: "O = 2 · (a + b) = 2 · (5 + 8) = 2 · 13 = 26 cm",
      },
      {
        question: "Arealet af en trekant med grundlinje 10 cm og højde 6 cm er:",
        options: [
          { text: "60 cm²", correct: false },
          { text: "30 cm²", correct: true },
          { text: "16 cm²", correct: false },
          { text: "120 cm²", correct: false },
        ],
        explanation: "A = ½ · g · h = ½ · 10 · 6 = 30 cm²",
      },
    ],
    exercises: [
      {
        question: "Et rektangel har siderne 12 cm og 5 cm. Hvad er arealet?",
        answer: "60",
        hint: "Areal af rektangel = længde · bredde",
        unit: "cm²",
      },
      {
        question: "En cirkel har diameter 14 cm. Hvad er omkredsen? (brug π ≈ 3,14, afrund til heltal)",
        answer: "44",
        hint: "O = π · d",
        unit: "cm",
      },
    ],
  },
  "ligninger": {
    quiz: [
      {
        question: "Hvad er x, hvis 2x + 6 = 14?",
        options: [
          { text: "x = 3", correct: false },
          { text: "x = 4", correct: true },
          { text: "x = 5", correct: false },
          { text: "x = 10", correct: false },
        ],
        explanation: "2x + 6 = 14 → 2x = 8 → x = 4",
      },
      {
        question: "Løs: 3x − 9 = 0",
        options: [
          { text: "x = 0", correct: false },
          { text: "x = 9", correct: false },
          { text: "x = 3", correct: true },
          { text: "x = −3", correct: false },
        ],
        explanation: "3x − 9 = 0 → 3x = 9 → x = 3",
      },
      {
        question: "Hvilket af disse er en ligning?",
        options: [
          { text: "2x + 5", correct: false },
          { text: "2x + 5 = 11", correct: true },
          { text: "x > 3", correct: false },
          { text: "f(x) = 2x", correct: false },
        ],
        explanation: "En ligning har et lighedstegn (=) med udtryk på begge sider. 2x + 5 = 11 er en ligning.",
      },
    ],
    exercises: [
      {
        question: "Løs ligningen: 5x + 10 = 35. Hvad er x?",
        answer: "5",
        hint: "Træk 10 fra begge sider, derefter divider med 5.",
      },
      {
        question: "Løs: x/4 = 7. Hvad er x?",
        answer: "28",
        hint: "Gang begge sider med 4.",
      },
    ],
  },
  "funktioner": {
    quiz: [
      {
        question: "Hvad er hældningstallet i funktionen f(x) = 3x − 2?",
        options: [
          { text: "−2", correct: false },
          { text: "3", correct: true },
          { text: "x", correct: false },
          { text: "1", correct: false },
        ],
        explanation: "I y = ax + b er a = 3 hældningstallet.",
      },
      {
        question: "Hvad er skæringspunktet med y-aksen for f(x) = −x + 5?",
        options: [
          { text: "(0, −1)", correct: false },
          { text: "(5, 0)", correct: false },
          { text: "(0, 5)", correct: true },
          { text: "(−1, 5)", correct: false },
        ],
        explanation: "y-aksen skæres når x = 0: f(0) = −0 + 5 = 5, altså (0, 5).",
      },
      {
        question: "En eksponentiel funktion har forskriften f(x) = 2 · 1,5ˣ. Hvad er f(0)?",
        options: [
          { text: "0", correct: false },
          { text: "1,5", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false },
        ],
        explanation: "f(0) = 2 · 1,5⁰ = 2 · 1 = 2",
      },
    ],
    exercises: [
      {
        question: "Funktionen f(x) = 2x + 3. Hvad er f(4)?",
        answer: "11",
        hint: "Indsæt x = 4: f(4) = 2 · 4 + 3",
      },
      {
        question: "Find nulpunktet for f(x) = 4x − 12 (dvs. find x når f(x) = 0)",
        answer: "3",
        hint: "Sæt f(x) = 0: 4x − 12 = 0 → x = ?",
      },
    ],
  },
  "deskriptorer": {
    quiz: [
      {
        question: "Hvad er medianen af tallene: 3, 7, 9, 12, 15?",
        options: [
          { text: "7", correct: false },
          { text: "9", correct: true },
          { text: "12", correct: false },
          { text: "9,2", correct: false },
        ],
        explanation: "Medianen er det midterste tal i en sorteret talrække. Her: 9.",
      },
      {
        question: "Hvad er middeltallet (gennemsnittet) af: 4, 8, 6, 10, 2?",
        options: [
          { text: "5", correct: false },
          { text: "6", correct: true },
          { text: "7", correct: false },
          { text: "8", correct: false },
        ],
        explanation: "Middeltal = (4 + 8 + 6 + 10 + 2) / 5 = 30 / 5 = 6",
      },
      {
        question: "Hvad er typetallet i datasættet: 2, 5, 3, 5, 7, 5, 9?",
        options: [
          { text: "3", correct: false },
          { text: "7", correct: false },
          { text: "5", correct: true },
          { text: "2", correct: false },
        ],
        explanation: "Typetallet er det tal, der forekommer flest gange. 5 optræder 3 gange.",
      },
    ],
    exercises: [
      {
        question: "Find middeltallet af: 10, 15, 20, 25, 30",
        answer: "20",
        hint: "Læg tallene sammen og divider med antallet.",
      },
      {
        question: "Hvad er variationsbredden af: 3, 8, 12, 5, 19?",
        answer: "16",
        hint: "Variationsbredde = største tal − mindste tal",
      },
    ],
  },
  "sandsynlighed": {
    quiz: [
      {
        question: "Du kaster en terning. Hvad er sandsynligheden for at slå 6?",
        options: [
          { text: "1/3", correct: false },
          { text: "1/6", correct: true },
          { text: "1/2", correct: false },
          { text: "6/6", correct: false },
        ],
        explanation: "P(6) = gunstige udfald / mulige udfald = 1/6",
      },
      {
        question: "Du trækker et kort fra et normalt kortspil med 52 kort. Hvad er P(hjerter)?",
        options: [
          { text: "1/52", correct: false },
          { text: "1/13", correct: false },
          { text: "1/4", correct: true },
          { text: "1/2", correct: false },
        ],
        explanation: "Der er 13 hjerterkort i 52 kort: P(hjerter) = 13/52 = 1/4",
      },
      {
        question: "Sandsynligheden for en hændelse kan aldrig være:",
        options: [
          { text: "0", correct: false },
          { text: "0,5", correct: false },
          { text: "1", correct: false },
          { text: "1,5", correct: true },
        ],
        explanation: "Sandsynlighed ligger altid mellem 0 og 1 (inklusiv). 1,5 er ikke en gyldig sandsynlighed.",
      },
    ],
    exercises: [
      {
        question: "En pose har 3 røde, 5 blå og 2 grønne kugler. Hvad er sandsynligheden for at trække en blå? (angiv som decimaltal med én decimal)",
        answer: "0.5",
        hint: "P(blå) = antal blå / samlet antal = 5/10",
      },
      {
        question: "Du kaster to terninger. Hvor mange mulige udfald er der i alt?",
        answer: "36",
        hint: "Hver terning har 6 udfald. Samlede udfald = 6 · 6",
      },
    ],
  },
  "tal": {
    quiz: [
      {
        question: "Hvilket af disse tal er irrationelt?",
        options: [
          { text: "3/4", correct: false },
          { text: "√2", correct: true },
          { text: "0,5", correct: false },
          { text: "−7", correct: false },
        ],
        explanation: "√2 ≈ 1,41421... er irrationelt fordi det ikke kan skrives som en brøk og har uendeligt mange ikke-gentagne decimaler.",
      },
      {
        question: "Hvad er det mindste primtal?",
        options: [
          { text: "0", correct: false },
          { text: "1", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false },
        ],
        explanation: "2 er det mindste (og eneste lige) primtal. 1 er per definition ikke et primtal.",
      },
      {
        question: "Hvad er −3 · (−4)?",
        options: [
          { text: "−12", correct: false },
          { text: "12", correct: true },
          { text: "−7", correct: false },
          { text: "7", correct: false },
        ],
        explanation: "Minus gange minus giver plus: (−3) · (−4) = 12",
      },
    ],
    exercises: [
      {
        question: "Er 17 et primtal? (svar ja eller nej)",
        answer: "ja",
        hint: "Tjek om 17 kan deles med et tal mellem 2 og √17 ≈ 4,1.",
      },
      {
        question: "Hvad er |−8|? (tallets numeriske værdi)",
        answer: "8",
        hint: "Numerisk værdi (absolutværdi) er altid positiv.",
      },
    ],
  },
  "potenser-og-roedder": {
    quiz: [
      {
        question: "Hvad er 2⁵?",
        options: [
          { text: "10", correct: false },
          { text: "25", correct: false },
          { text: "32", correct: true },
          { text: "64", correct: false },
        ],
        explanation: "2⁵ = 2 · 2 · 2 · 2 · 2 = 32",
      },
      {
        question: "Hvad er √144?",
        options: [
          { text: "11", correct: false },
          { text: "12", correct: true },
          { text: "14", correct: false },
          { text: "72", correct: false },
        ],
        explanation: "√144 = 12 fordi 12 · 12 = 144",
      },
      {
        question: "Hvad er 10⁰?",
        options: [
          { text: "0", correct: false },
          { text: "1", correct: true },
          { text: "10", correct: false },
          { text: "Udefineret", correct: false },
        ],
        explanation: "Ethvert tal (≠ 0) opløftet i 0 giver 1. Så 10⁰ = 1.",
      },
    ],
    exercises: [
      {
        question: "Hvad er 3⁴?",
        answer: "81",
        hint: "3⁴ = 3 · 3 · 3 · 3",
      },
      {
        question: "Hvad er ∛125?",
        answer: "5",
        hint: "Hvilket tal ganget med sig selv tre gange giver 125?",
      },
    ],
  },
};
