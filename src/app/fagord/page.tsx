import Link from "next/link";
import { glossary, topics } from "@/data/topics";

export const metadata = {
  title: "Fagord – Formelmat",
  description:
    "Opslagsværk over matematiske fagord og begreber fra formelsamlingen.",
};

export default function FagordPage() {
  const sortedGlossary = [...glossary].sort((a, b) =>
    a.term.localeCompare(b.term, "da")
  );

  // Group by first letter
  const grouped: Record<string, typeof glossary> = {};
  for (const entry of sortedGlossary) {
    const letter = entry.term[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(entry);
  }

  const letters = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b, "da")
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2">
        <Link
          href="/"
          className="text-sm text-muted hover:text-primary transition-colors"
        >
          &larr; Forside
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
        <span>📖</span> Fagord
      </h1>
      <p className="text-lg text-muted mb-4">
        Her kan du slå alle matematiske fagord op. Brug bogstavnavigationen for at finde det ord, du leder efter – eller brug søgefunktionen (Ctrl+K).
      </p>

      {/* Letter navigation */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="rounded-md bg-surface border border-border px-2.5 py-1 text-sm font-medium hover:bg-primary-light hover:text-primary transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      <div className="space-y-8">
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="scroll-mt-20">
            <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
              {letter}
            </h2>
            <div className="space-y-3">
              {grouped[letter].map((entry) => {
                const slug = entry.term
                  .toLowerCase()
                  .replace(/[^a-zæøå0-9]/g, "-");
                const related = topics.filter((t) =>
                  entry.relatedTopics.includes(t.id)
                );
                return (
                  <div
                    key={entry.term}
                    id={slug}
                    className="rounded-lg border border-border p-4 scroll-mt-20"
                  >
                    <h3 className="text-base font-bold text-foreground">
                      {entry.term}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {entry.definition}
                    </p>
                    {related.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {related.map((t) => (
                          <Link
                            key={t.id}
                            href={t.href}
                            className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary-light transition-colors"
                          >
                            <span>{t.icon}</span>
                            {t.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
