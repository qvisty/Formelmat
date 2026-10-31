"use client";

import { useState } from "react";

export type PracticeTopic =
  | "quadrilaterals"
  | "similarity"
  | "angles"
  | "units"
  | "volume"
  | "solids"
  | "vectors"
  | "datasets"
  | "descriptors"
  | "combinatorics"
  | "probability"
  | "proportionality"
  | "expressions"
  | "sets"
  | "economy"
  | "powers"
  | "order-of-operations"
  | "sequences"
  | "inequalities";

interface Question {
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Practice {
  title: string;
  instruction: string;
  questions: Question[];
}

const practices: Record<PracticeTopic, Practice> = {
  quadrilaterals: {
    title: "Kend firkanterne",
    instruction: "Brug figurernes egenskaber til at vælge det rigtige svar.",
    questions: [
      { prompt: "Hvilken firkant har altid fire lige lange sider og fire rette vinkler?", options: ["Kvadrat", "Trapez", "Parallelogram"], correct: 0, explanation: "Et kvadrat opfylder begge krav: fire lige sider og fire vinkler på 90°." },
      { prompt: "Et rektangel er 7 cm langt og 3 cm bredt. Hvad er arealet?", options: ["10 cm²", "20 cm²", "21 cm²"], correct: 2, explanation: "Arealet er længde · bredde = 7 · 3 = 21 cm²." },
      { prompt: "En cirkel har radius 4 cm. Hvilket udtryk giver omkredsen?", options: ["4π cm", "8π cm", "16π cm"], correct: 1, explanation: "Omkredsen er 2 · π · r = 2 · π · 4 = 8π cm." },
    ],
  },
  similarity: {
    title: "Arbejd med målforhold",
    instruction: "Find den faktor, som alle længder bliver ganget med.",
    questions: [
      { prompt: "En side vokser fra 3 cm til 9 cm. Hvad er målforholdet?", options: ["2", "3", "6"], correct: 1, explanation: "9 / 3 = 3, så alle længder ganges med 3." },
      { prompt: "Længdeforholdet er 2. Hvad er arealforholdet?", options: ["2", "4", "8"], correct: 1, explanation: "Arealer ændres med kvadratet på målforholdet: 2² = 4." },
      { prompt: "Længdeforholdet er 3. Hvad er rumfangsforholdet?", options: ["6", "9", "27"], correct: 2, explanation: "Rumfang ændres med tredje potens: 3³ = 27." },
    ],
  },
  angles: {
    title: "Find den manglende vinkel",
    instruction: "Brug reglerne om nabo-, top- og trekantsvinkler.",
    questions: [
      { prompt: "En nabovinkel er 68°. Hvor stor er den anden?", options: ["22°", "112°", "292°"], correct: 1, explanation: "Nabovinkler på en ret linje er tilsammen 180°: 180° − 68° = 112°." },
      { prompt: "To linjer skærer hinanden. Én vinkel er 47°. Hvor stor er topvinklen?", options: ["43°", "47°", "133°"], correct: 1, explanation: "Topvinkler er lige store." },
      { prompt: "To vinkler i en trekant er 35° og 75°. Find den tredje.", options: ["70°", "80°", "110°"], correct: 0, explanation: "Trekantens vinkelsum er 180°: 180° − 35° − 75° = 70°." },
    ],
  },
  units: {
    title: "Omregn enheder",
    instruction: "Vælg den værdi, der beskriver præcis samme størrelse.",
    questions: [
      { prompt: "Hvor mange centimeter er 2,4 meter?", options: ["24 cm", "240 cm", "2.400 cm"], correct: 1, explanation: "1 m = 100 cm, så 2,4 · 100 = 240 cm." },
      { prompt: "Hvor mange kvadratmeter er 30.000 cm²?", options: ["0,3 m²", "3 m²", "300 m²"], correct: 1, explanation: "1 m² = 10.000 cm², så 30.000 cm² = 3 m²." },
      { prompt: "Hvor mange liter er 2.500 cm³?", options: ["0,25 L", "2,5 L", "25 L"], correct: 1, explanation: "1.000 cm³ = 1 L, så 2.500 cm³ = 2,5 L." },
    ],
  },
  volume: {
    title: "Beregn rumfang",
    instruction: "Vælg formel og resultat for den viste situation.",
    questions: [
      { prompt: "En kasse måler 2 cm · 3 cm · 5 cm. Hvad er rumfanget?", options: ["10 cm³", "30 cm³", "60 cm³"], correct: 1, explanation: "V = l · b · h = 2 · 3 · 5 = 30 cm³." },
      { prompt: "En cylinder har grundfladeareal 12 cm² og højde 5 cm. Find rumfanget.", options: ["17 cm³", "30 cm³", "60 cm³"], correct: 2, explanation: "V = G · h = 12 · 5 = 60 cm³." },
      { prompt: "En pyramide har G = 24 cm² og h = 6 cm. Find rumfanget.", options: ["48 cm³", "72 cm³", "144 cm³"], correct: 0, explanation: "V = ⅓ · G · h = ⅓ · 24 · 6 = 48 cm³." },
    ],
  },
  solids: {
    title: "Kend de rumlige figurer",
    instruction: "Forbind figurernes navne med deres flader, kanter og hjørner.",
    questions: [
      { prompt: "Hvor mange sideflader har en kube?", options: ["4", "6", "8"], correct: 1, explanation: "En kube har 6 kvadratiske sideflader." },
      { prompt: "Hvilken figur har ingen kanter og ingen hjørner?", options: ["Kugle", "Kegle", "Cylinder"], correct: 0, explanation: "En kugle har én krum flade, men ingen kanter eller hjørner." },
      { prompt: "Hvor mange hjørner har et trekantet prisme?", options: ["5", "6", "9"], correct: 1, explanation: "De to trekantede endeflader har hver 3 hjørner: 6 i alt." },
    ],
  },
  vectors: {
    title: "Regn med vektorer",
    instruction: "Regn koordinat for koordinat, og kontrollér retning og længde.",
    questions: [
      { prompt: "Hvad er (2, 3) + (4, −1)?", options: ["(6, 2)", "(6, 4)", "(−2, 4)"], correct: 0, explanation: "Læg koordinaterne sammen: (2 + 4, 3 − 1) = (6, 2)." },
      { prompt: "Hvad er 3 · (2, −1)?", options: ["(5, 2)", "(6, −3)", "(6, −1)"], correct: 1, explanation: "Begge koordinater ganges med 3: (6, −3)." },
      { prompt: "Hvad er længden af vektoren (3, 4)?", options: ["5", "7", "25"], correct: 0, explanation: "Længden er √(3² + 4²) = √25 = 5." },
    ],
  },
  datasets: {
    title: "Læs et datasæt",
    instruction: "Tæl observationerne og skeln mellem hyppighed og frekvens.",
    questions: [
      { prompt: "I datasættet 2, 3, 3, 4, 3 er hyppigheden af 3 …", options: ["2", "3", "5"], correct: 1, explanation: "Tallet 3 forekommer tre gange." },
      { prompt: "En værdi forekommer 4 gange blandt 20 observationer. Hvad er frekvensen?", options: ["0,2", "0,4", "5"], correct: 0, explanation: "Frekvens = hyppighed / antal = 4 / 20 = 0,2 = 20 %." },
      { prompt: "Hyppighederne er 2, 5 og 3. Hvor mange observationer er der?", options: ["5", "8", "10"], correct: 2, explanation: "Læg alle hyppigheder sammen: 2 + 5 + 3 = 10." },
    ],
  },
  descriptors: {
    title: "Find deskriptorerne",
    instruction: "Sorter tallene, før du beregner median og variationsbredde.",
    questions: [
      { prompt: "Hvad er middeltallet af 2, 4 og 9?", options: ["4", "5", "6"], correct: 1, explanation: "(2 + 4 + 9) / 3 = 15 / 3 = 5." },
      { prompt: "Hvad er medianen i 1, 3, 7, 8, 12?", options: ["3", "7", "8"], correct: 1, explanation: "Det midterste tal i den sorterede liste er 7." },
      { prompt: "Hvad er variationsbredden i 4, 6, 9, 15?", options: ["9", "11", "19"], correct: 1, explanation: "Største minus mindste værdi: 15 − 4 = 11." },
    ],
  },
  combinatorics: {
    title: "Tæl mulighederne",
    instruction: "Brug produktreglen, når valgene sker efter hinanden.",
    questions: [
      { prompt: "Du har 3 trøjer og 2 par bukser. Hvor mange sæt kan du lave?", options: ["5", "6", "8"], correct: 1, explanation: "Hver trøje kan bruges med begge bukser: 3 · 2 = 6." },
      { prompt: "Hvor mange rækkefølger kan 3 forskellige bøger stå i?", options: ["3", "6", "9"], correct: 1, explanation: "Der er 3! = 3 · 2 · 1 = 6 rækkefølger." },
      { prompt: "En kode har to cifre, og hvert ciffer kan være 0–9. Gentagelse er tilladt. Hvor mange koder?", options: ["20", "90", "100"], correct: 2, explanation: "Der er 10 valg begge gange: 10 · 10 = 100." },
    ],
  },
  probability: {
    title: "Vurder sandsynligheden",
    instruction: "Sammenlign gunstige udfald med alle mulige udfald.",
    questions: [
      { prompt: "Hvad er sandsynligheden for krone med en fair mønt?", options: ["1/6", "1/2", "1"], correct: 1, explanation: "Ét af møntens to lige sandsynlige udfald er krone." },
      { prompt: "Hvad er sandsynligheden for at slå mere end 4 med en fair terning?", options: ["1/3", "1/2", "2/3"], correct: 0, explanation: "De gunstige udfald er 5 og 6: 2/6 = 1/3." },
      { prompt: "En pose har 3 røde og 7 blå kugler. Hvad er P(rød)?", options: ["3/7", "3/10", "7/10"], correct: 1, explanation: "Der er 3 gunstige blandt 10 kugler: 3/10." },
    ],
  },
  proportionality: {
    title: "Find proportionaliteten",
    instruction: "Undersøg, om forholdet eller produktet er konstant.",
    questions: [
      { prompt: "4 billetter koster 120 kr. Hvad koster 7 ved direkte proportionalitet?", options: ["180 kr.", "210 kr.", "240 kr."], correct: 1, explanation: "Én billet koster 120 / 4 = 30 kr., så 7 koster 210 kr." },
      { prompt: "y = 5x. Hvad er proportionalitetskonstanten?", options: ["x", "5", "y"], correct: 1, explanation: "I y = kx er tallet foran x konstanten k." },
      { prompt: "6 personer klarer en opgave på 4 timer. Hvor lang tid tager det for 8 personer ved omvendt proportionalitet?", options: ["2 timer", "3 timer", "6 timer"], correct: 1, explanation: "Produktet er konstant: 6 · 4 = 24 persontimer, og 24 / 8 = 3 timer." },
    ],
  },
  expressions: {
    title: "Forenkl udtryk",
    instruction: "Saml ens led, og brug parentesreglerne.",
    questions: [
      { prompt: "Hvad bliver 3x + 5x?", options: ["8", "8x", "15x"], correct: 1, explanation: "Ens led kan samles: (3 + 5)x = 8x." },
      { prompt: "Hvad bliver 4(a + 2)?", options: ["4a + 2", "4a + 6", "4a + 8"], correct: 2, explanation: "4 skal ganges ind i begge led: 4a + 8." },
      { prompt: "Hvilket udtryk er (x + 3)²?", options: ["x² + 9", "x² + 6x + 9", "2x + 9"], correct: 1, explanation: "Første kvadratsætning giver x² + 2 · x · 3 + 3²." },
    ],
  },
  sets: {
    title: "Arbejd med mængder",
    instruction: "Find fællesmængde, foreningsmængde og differens.",
    questions: [
      { prompt: "A = {1, 2, 3} og B = {3, 4}. Hvad er A ∩ B?", options: ["{3}", "{1, 2, 4}", "{1, 2, 3, 4}"], correct: 0, explanation: "Fællesmængden indeholder det, der er i både A og B: {3}." },
      { prompt: "Hvad er A ∪ B for de samme mængder?", options: ["{3}", "{1, 2, 3, 4}", "{1, 2, 4}"], correct: 1, explanation: "Foreningsmængden samler alle elementer uden gentagelser." },
      { prompt: "Hvad er A \\ B?", options: ["{1, 2}", "{3}", "{4}"], correct: 0, explanation: "A \\ B er de elementer, som er i A, men ikke i B." },
    ],
  },
  economy: {
    title: "Regn på din økonomi",
    instruction: "Brug procentfaktor og renters rente til at vælge resultatet.",
    questions: [
      { prompt: "1.000 kr. får 5 % rente i ét år. Hvad står der bagefter?", options: ["1.005 kr.", "1.050 kr.", "1.500 kr."], correct: 1, explanation: "1.000 · 1,05 = 1.050 kr." },
      { prompt: "Hvilken fremskrivningsfaktor svarer til 3 % årlig rente?", options: ["0,03", "1,03", "1,30"], correct: 1, explanation: "Læg renten som decimaltal til 1: 1 + 0,03 = 1,03." },
      { prompt: "2.000 kr. vokser med 10 % om året i 2 år. Hvad er beløbet?", options: ["2.200 kr.", "2.400 kr.", "2.420 kr."], correct: 2, explanation: "2.000 · 1,10² = 2.420 kr. Renten i år 2 gælder også renten fra år 1." },
    ],
  },
  powers: {
    title: "Træn potenser og rødder",
    instruction: "Omskriv mellem gentagen multiplikation, potenser og rødder.",
    questions: [
      { prompt: "Hvad er 2⁵?", options: ["10", "25", "32"], correct: 2, explanation: "2⁵ = 2 · 2 · 2 · 2 · 2 = 32." },
      { prompt: "Hvad er √81?", options: ["8", "9", "40,5"], correct: 1, explanation: "9 · 9 = 81, så √81 = 9." },
      { prompt: "Hvad er 3² · 3⁴?", options: ["3⁶", "9⁶", "3⁸"], correct: 0, explanation: "Ved samme grundtal lægges eksponenterne sammen: 3²⁺⁴ = 3⁶." },
    ],
  },
  "order-of-operations": {
    title: "Brug regnehierarkiet",
    instruction: "Tag parenteser og potenser før gange/division og plus/minus.",
    questions: [
      { prompt: "Hvad er 4 + 3 · 2?", options: ["10", "14", "16"], correct: 0, explanation: "Gange før plus: 3 · 2 = 6, og 4 + 6 = 10." },
      { prompt: "Hvad er (4 + 3) · 2?", options: ["10", "14", "18"], correct: 1, explanation: "Parentesen først: 7 · 2 = 14." },
      { prompt: "Hvad er 20 − 2³ · 2?", options: ["4", "24", "36"], correct: 0, explanation: "Potens først: 2³ = 8. Så 8 · 2 = 16 og 20 − 16 = 4." },
    ],
  },
  sequences: {
    title: "Opdag mønstret",
    instruction: "Se på forskelle og forhold mellem nabotal.",
    questions: [
      { prompt: "Hvad er næste tal: 4, 7, 10, 13, …?", options: ["15", "16", "17"], correct: 1, explanation: "Følgen vokser med 3 hver gang, så næste tal er 16." },
      { prompt: "Hvad er næste tal: 3, 6, 12, 24, …?", options: ["30", "36", "48"], correct: 2, explanation: "Hvert led ganges med 2, så 24 · 2 = 48." },
      { prompt: "En aritmetisk følge starter med 5 og har differens 4. Hvad er det 6. led?", options: ["21", "25", "29"], correct: 1, explanation: "a₆ = 5 + (6 − 1) · 4 = 25." },
    ],
  },
  inequalities: {
    title: "Løs uligheder",
    instruction: "Behandl uligheden som en ligning, men pas på negative tal.",
    questions: [
      { prompt: "Løs x + 4 < 9.", options: ["x < 5", "x > 5", "x < 13"], correct: 0, explanation: "Træk 4 fra på begge sider: x < 5." },
      { prompt: "Løs 3x ≥ 12.", options: ["x ≥ 4", "x ≤ 4", "x ≥ 9"], correct: 0, explanation: "Divider begge sider med 3: x ≥ 4." },
      { prompt: "Løs −2x < 8.", options: ["x < −4", "x > −4", "x > 4"], correct: 1, explanation: "Når du dividerer med −2, vender ulighedstegnet: x > −4." },
    ],
  },
};

export function TopicPractice({ topic }: { topic: PracticeTopic }) {
  const practice = practices[topic];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const question = practice.questions[questionIndex];
  const answered = selected !== null;
  const isCorrect = selected === question.correct;

  function choose(optionIndex: number) {
    if (answered) return;
    setSelected(optionIndex);
    if (optionIndex === question.correct) setScore((current) => current + 1);
  }

  function next() {
    if (questionIndex === practice.questions.length - 1) setScore(0);
    setQuestionIndex((current) => (current + 1) % practice.questions.length);
    setSelected(null);
  }

  const progress = ((questionIndex + (answered ? 1 : 0)) / practice.questions.length) * 390;

  return (
    <div className="overflow-hidden rounded-2xl border border-primary/20 bg-surface shadow-sm">
      <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_180px]">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Miniøvelse</p>
          <h3 className="mt-1 text-lg font-bold text-foreground">{practice.title}</h3>
          <p className="mt-1 text-sm text-muted">{practice.instruction}</p>

          <fieldset className="mt-5">
            <legend className="mb-3 font-semibold text-foreground">{question.prompt}</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {question.options.map((option, index) => {
                const state = answered
                  ? index === question.correct
                    ? "border-green-500 bg-green-50 text-green-900"
                    : index === selected
                      ? "border-red-400 bg-red-50 text-red-900"
                      : "border-border bg-background text-muted"
                  : "border-border bg-background text-foreground hover:border-primary hover:bg-primary/5";
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => choose(index)}
                    disabled={answered}
                    className={`min-h-12 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-colors ${state}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {answered && (
            <div className={`mt-4 rounded-xl border p-4 ${isCorrect ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50"}`} aria-live="polite">
              <p className="font-semibold text-foreground">{isCorrect ? "Godt set!" : "Prøv at følge reglen:"}</p>
              <p className="mt-1 text-sm text-muted">{question.explanation}</p>
              <button type="button" onClick={next} className="mt-3 min-h-11 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover">
                {questionIndex === practice.questions.length - 1 ? "Start forfra" : "Næste opgave"} →
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center rounded-xl bg-primary/5 p-3">
          <svg viewBox="0 0 180 180" className="h-auto w-full max-w-[180px]" role="img" aria-label={`${questionIndex + 1} af ${practice.questions.length} opgaver, ${score} rigtige`}>
            <circle cx="90" cy="90" r="62" fill="none" stroke="currentColor" strokeWidth="14" className="text-primary/10" />
            <circle cx="90" cy="90" r="62" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeDasharray={`${progress} 390`} transform="rotate(-90 90 90)" className="text-primary transition-all duration-500" />
            <text x="90" y="82" textAnchor="middle" className="fill-foreground text-[26px] font-bold">{score}</text>
            <text x="90" y="104" textAnchor="middle" className="fill-muted text-[12px]">rigtige</text>
            <text x="90" y="130" textAnchor="middle" className="fill-muted text-[11px]">Opgave {questionIndex + 1}/{practice.questions.length}</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
