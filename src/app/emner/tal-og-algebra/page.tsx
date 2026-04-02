import Link from "next/link";
import { topics } from "@/data/topics";

export const metadata = {
  title: "Tal og algebra – Formelmat",
  description:
    "Tal, regnearter, brøker, potenser, ligninger, funktioner og økonomi. Interaktive formler og forklaringer.",
};

export default function TalOgAlgebraPage() {
  const topic = topics.find((t) => t.id === "tal-og-algebra")!;
  const relatedTopics = topics.filter((t) =>
    topic.relatedTopics?.includes(t.id)
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
        <span>🔢</span> Tal og algebra
      </h1>
      <p className="text-lg text-muted mb-8">
        Alt i matematik bygger på tal og algebra. Her finder du alt fra de grundlæggende regnearter til funktioner og økonomi – med formler, forklaringer og eksempler.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Underemner</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {topic.subtopics?.map((sub) => (
            <Link
              key={sub.id}
              href={sub.href}
              className="group rounded-xl border border-border p-5 transition-all hover:shadow-md hover:border-primary/30"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {sub.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{sub.description}</p>
              <span className="inline-block mt-2 text-sm font-medium text-primary">
                Åbn &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vigtige formler</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sammensat rente</p>
            <p className="math-formula text-lg">
              K<sub>n</sub> = K<sub>0</sub> &middot; (1 + r/100)<sup>n</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Lineær funktion</p>
            <p className="math-formula text-lg">y = ax + b</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Andengradsfunktion</p>
            <p className="math-formula text-lg">y = ax² + bx + c</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Potensregel</p>
            <p className="math-formula text-lg">
              a<sup>n</sup> &middot; a<sup>m</sup> = a<sup>n+m</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Procentberegning</p>
            <p className="math-formula text-lg">
              ny værdi = gammel værdi &middot; (1 + p/100)
            </p>
          </div>
        </div>
      </section>

      {relatedTopics.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4">Relaterede emner</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTopics.map((rt) => (
              <Link
                key={rt.id}
                href={rt.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span>{rt.icon}</span>
                {rt.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
