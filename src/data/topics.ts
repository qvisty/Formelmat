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
    ],
    relatedTopics: ["tal-og-algebra"],
  },
];

export const glossary: GlossaryEntry[] = [
  // Tal og algebra
  // Geometri
  // Statistik og sandsynlighed
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
