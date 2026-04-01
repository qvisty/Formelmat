import Link from "next/link";
import { topics } from "@/data/topics";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Interaktiv formelsamling til matematik
        </h1>
        <p className="text-lg text-muted max-w-2xl">
          Slå op i formler, fagord og forklaringer – og arbejd med dynamiske
          visualiseringer direkte på siden. Gratis for alle elever og lærere.
        </p>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
            Nyt
          </span>
          <h2 className="text-lg font-semibold">Trigonometri er klar!</h2>
        </div>
        <Link
          href="/emner/trigonometri"
          className="block group rounded-xl border-2 border-primary bg-gradient-to-r from-primary-light to-white p-6 transition-shadow hover:shadow-lg"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">📐</span>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Trigonometri
              </h3>
              <p className="text-muted mt-1">
                Udforsk retvinklede trekanter, enhedscirklen og trigonometriske
                funktioner med interaktive visualiseringer. Træk i punkter, ændr
                vinkler og se formlerne i aktion.
              </p>
              <span className="inline-block mt-3 text-sm font-medium text-primary">
                Gå til trigonometri →
              </span>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">Alle emner</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const hasContent =
              topic.subtopics && topic.subtopics.length > 0;
            return (
              <Link
                key={topic.id}
                href={topic.href}
                className={`group rounded-xl border border-border p-5 transition-all hover:shadow-md hover:border-primary/30 ${
                  !hasContent ? "opacity-60" : ""
                }`}
              >
                <span className="text-3xl">{topic.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{topic.description}</p>
                {!hasContent && (
                  <span className="mt-2 inline-block text-xs text-muted bg-surface px-2 py-0.5 rounded-full">
                    Kommer snart
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
