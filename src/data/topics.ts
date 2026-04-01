export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  subtopics?: Subtopic[];
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
    id: "trigonometri",
    title: "Trigonometri",
    description:
      "Sinus, cosinus, tangens og beregninger i retvinklede trekanter",
    icon: "📐",
    href: "/emner/trigonometri",
    subtopics: [
      {
        id: "retvinklet-trekant",
        title: "Den retvinklede trekant",
        href: "/emner/trigonometri/retvinklet-trekant",
        description:
          "Sider, vinkler og trigonometriske forhold i retvinklede trekanter",
      },
      {
        id: "enhedscirklen",
        title: "Enhedscirklen",
        href: "/emner/trigonometri/enhedscirklen",
        description:
          "Sinus og cosinus på enhedscirklen – visualisér sammenhængen",
      },
      {
        id: "trigonometriske-funktioner",
        title: "Trigonometriske funktioner",
        href: "/emner/trigonometri/trigonometriske-funktioner",
        description: "Grafer og egenskaber for sin, cos og tan",
      },
    ],
    relatedTopics: ["geometri", "funktioner"],
  },
  {
    id: "geometri",
    title: "Geometri",
    description: "Figurer, areal, omkreds, rumfang og vinkler",
    icon: "🔷",
    href: "/emner/geometri",
    subtopics: [],
    relatedTopics: ["trigonometri", "maaling"],
  },
  {
    id: "tal-og-algebra",
    title: "Tal og algebra",
    description: "Regnearter, brøker, potenser, ligninger og udtryk",
    icon: "🔢",
    href: "/emner/tal-og-algebra",
    subtopics: [],
    relatedTopics: ["funktioner"],
  },
  {
    id: "funktioner",
    title: "Funktioner",
    description: "Lineære, eksponentielle og andre funktionstyper",
    icon: "📈",
    href: "/emner/funktioner",
    subtopics: [],
    relatedTopics: ["tal-og-algebra", "trigonometri"],
  },
  {
    id: "statistik",
    title: "Statistik og sandsynlighed",
    description: "Gennemsnit, median, diagrammer og sandsynlighedsregning",
    icon: "📊",
    href: "/emner/statistik",
    subtopics: [],
    relatedTopics: [],
  },
  {
    id: "maaling",
    title: "Måling og enheder",
    description: "Længde, areal, rumfang, tid, vægt og omregning",
    icon: "📏",
    href: "/emner/maaling",
    subtopics: [],
    relatedTopics: ["geometri"],
  },
];

export const glossary: GlossaryEntry[] = [
  {
    term: "Hypotenuse",
    definition:
      "Den længste side i en retvinklet trekant – den side, der ligger overfor den rette vinkel.",
    relatedTopics: ["trigonometri", "geometri"],
  },
  {
    term: "Katete",
    definition:
      "En af de to korte sider i en retvinklet trekant, der danner den rette vinkel.",
    relatedTopics: ["trigonometri", "geometri"],
  },
  {
    term: "Sinus",
    definition:
      "I en retvinklet trekant: forholdet mellem den modstående katete og hypotenusen. sin(v) = modstående/hypotenuse.",
    relatedTopics: ["trigonometri"],
  },
  {
    term: "Cosinus",
    definition:
      "I en retvinklet trekant: forholdet mellem den hosliggende katete og hypotenusen. cos(v) = hosliggende/hypotenuse.",
    relatedTopics: ["trigonometri"],
  },
  {
    term: "Tangens",
    definition:
      "I en retvinklet trekant: forholdet mellem den modstående og den hosliggende katete. tan(v) = modstående/hosliggende.",
    relatedTopics: ["trigonometri"],
  },
  {
    term: "Pythagoras' sætning",
    definition:
      "I en retvinklet trekant gælder: a² + b² = c², hvor c er hypotenusen.",
    relatedTopics: ["trigonometri", "geometri"],
  },
  {
    term: "Enhedscirkel",
    definition:
      "En cirkel med radius 1 og centrum i origo. Bruges til at definere sinus og cosinus for alle vinkler.",
    relatedTopics: ["trigonometri"],
  },
  {
    term: "Vinkel",
    definition:
      "Målet for en drejning mellem to linjer med fælles startpunkt. Måles i grader (°) eller radianer.",
    relatedTopics: ["trigonometri", "geometri"],
  },
  {
    term: "Radianer",
    definition:
      "En alternativ vinkelenhed. En fuld omdrejning er 2π radianer = 360°.",
    relatedTopics: ["trigonometri"],
  },
  {
    term: "Areal",
    definition: "Størrelsen af en flad figurs overflade, målt i kvadratenheder.",
    relatedTopics: ["geometri", "maaling"],
  },
  {
    term: "Omkreds",
    definition: "Den samlede længde af en figurs kant eller rand.",
    relatedTopics: ["geometri", "maaling"],
  },
  {
    term: "Variabel",
    definition:
      "Et bogstav eller symbol, der repræsenterer et ukendt eller foranderligt tal.",
    relatedTopics: ["tal-og-algebra", "funktioner"],
  },
  {
    term: "Ligning",
    definition:
      "Et matematisk udsagn, der siger, at to udtryk er lige store, fx 2x + 3 = 7.",
    relatedTopics: ["tal-og-algebra"],
  },
  {
    term: "Funktion",
    definition:
      "En regel, der til hvert input (x) giver præcis ét output (y). Skrives fx f(x) = 2x + 1.",
    relatedTopics: ["funktioner"],
  },
  {
    term: "Sandsynlighed",
    definition:
      "Et tal mellem 0 og 1, der angiver, hvor stor chance der er for, at en bestemt hændelse sker.",
    relatedTopics: ["statistik"],
  },
  {
    term: "Gennemsnit",
    definition:
      "Summen af alle værdier divideret med antallet af værdier. Også kaldet middelværdi.",
    relatedTopics: ["statistik"],
  },
];

export function searchContent(
  query: string
): Array<{ type: "topic" | "subtopic" | "glossary"; title: string; href: string; description: string }> {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: Array<{ type: "topic" | "subtopic" | "glossary"; title: string; href: string; description: string }> = [];

  for (const topic of topics) {
    if (
      topic.title.toLowerCase().includes(q) ||
      topic.description.toLowerCase().includes(q)
    ) {
      results.push({
        type: "topic",
        title: topic.title,
        href: topic.href,
        description: topic.description,
      });
    }
    for (const sub of topic.subtopics || []) {
      if (
        sub.title.toLowerCase().includes(q) ||
        sub.description.toLowerCase().includes(q)
      ) {
        results.push({
          type: "subtopic",
          title: sub.title,
          href: sub.href,
          description: sub.description,
        });
      }
    }
  }

  for (const entry of glossary) {
    if (
      entry.term.toLowerCase().includes(q) ||
      entry.definition.toLowerCase().includes(q)
    ) {
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
