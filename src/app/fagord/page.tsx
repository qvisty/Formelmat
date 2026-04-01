import Link from "next/link";
import { glossary, topics } from "@/data/topics";

export const metadata = {
  title: "Fagord – Formelmat",
  description: "Opslagsværk over matematiske fagord og begreber.",
};

export default function FagordPage() {
  const sortedGlossary = [...glossary].sort((a, b) =>
    a.term.localeCompare(b.term, "da")
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2">
        <Link
          href="/"
          className="text-sm text-muted hover:text-primary transition-colors"
        >
          ← Forside
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
        <span>📖</span> Fagord
      </h1>
      <p className="text-lg text-muted mb-8">
        Opslagsværk over matematiske fagord og begreber. Klik på et relateret
        emne for at lære mere.
      </p>

      <div className="space-y-4">
        {sortedGlossary.map((entry) => {
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
              className="rounded-xl border border-border p-5 scroll-mt-20"
            >
              <h2 className="text-lg font-bold text-foreground">
                {entry.term}
              </h2>
              <p className="mt-1 text-muted">{entry.definition}</p>
              {related.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {related.map((t) => (
                    <Link
                      key={t.id}
                      href={t.href}
                      className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-medium text-primary hover:bg-primary-light transition-colors"
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
  );
}
