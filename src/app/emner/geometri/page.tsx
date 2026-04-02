import Link from "next/link";
import { topics } from "@/data/topics";

export const metadata = {
  title: "Geometri og måling – Formelmat",
  description:
    "Geometriske figurer, linjer, vinkler, areal, omkreds, rumfang, måleenheder og meget mere.",
};

export default function GeometriPage() {
  const topic = topics.find((t) => t.id === "geometri")!;
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
        <span>📐</span> Geometri og måling
      </h1>
      <p className="text-lg text-muted mb-8">
        Geometri handler om figurer, former og mål. Her finder du alt om trekanter, cirkler, rumlige figurer, areal, rumfang og meget mere – med interaktive værktøjer, du kan prøve direkte.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Underemner</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {topic.subtopics.map((sub) => (
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
            <p className="text-sm text-muted mb-1">Pythagoras&apos; sætning</p>
            <p className="math-formula text-lg">a² + b² = c²</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Areal af trekant</p>
            <p className="math-formula text-lg">A = ½ &middot; g &middot; h</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Areal af cirkel</p>
            <p className="math-formula text-lg">A = &pi; &middot; r²</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang af kugle</p>
            <p className="math-formula text-lg">
              V = ⁴⁄₃ &middot; &pi; &middot; r³
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">GeoGebra</h2>
        <p className="text-muted mb-3">
          Udforsk geometri interaktivt med GeoGebra &ndash; et gratis
          matematikværktøj.
        </p>
        <a
          href="https://www.geogebra.org/geometry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Åbn GeoGebra Geometri
        </a>
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
