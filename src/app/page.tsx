import Link from "next/link";
import { topics } from "@/data/topics";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Matematiske formler og fagord
        </h1>
        <p className="text-lg text-muted max-w-2xl">
          Interaktiv udgave af formelsamlingen til matematik i 7.-10. klasse og
          folkeskolens prøver. Slå op i formler, fagord og forklaringer – og
          arbejd med dynamiske visualiseringer.
        </p>
        <p className="text-sm text-muted mt-2">
          Kilde: Børne- og Undervisningsministeriet, 2. udgave 2017
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">Emner</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={topic.href}
              className="group rounded-xl border border-border p-5 transition-all hover:shadow-md hover:border-primary/30"
            >
              <span className="text-3xl">{topic.icon}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{topic.description}</p>
              <p className="mt-2 text-xs text-muted">
                {topic.subtopics.length} underemner
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Hurtig adgang</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/emner/geometri/trigonometri"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">📐 Trigonometri</span>
            <p className="text-xs text-muted mt-1">sin, cos, tan</p>
          </Link>
          <Link
            href="/emner/geometri/pythagoras"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">📏 Pythagoras</span>
            <p className="text-xs text-muted mt-1">a² + b² = c²</p>
          </Link>
          <Link
            href="/emner/geometri/areal-og-omkreds"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">📐 Areal og omkreds</span>
            <p className="text-xs text-muted mt-1">Trekant, firkant, cirkel</p>
          </Link>
          <Link
            href="/emner/tal-og-algebra/ligninger"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">🔢 Ligninger</span>
            <p className="text-xs text-muted mt-1">Løsning og regneregler</p>
          </Link>
          <Link
            href="/emner/tal-og-algebra/funktioner"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">📈 Funktioner</span>
            <p className="text-xs text-muted mt-1">Lineær, eksponentiel m.fl.</p>
          </Link>
          <Link
            href="/emner/geometri/rumfang"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">📦 Rumfang</span>
            <p className="text-xs text-muted mt-1">Kasse, cylinder, kugle</p>
          </Link>
          <Link
            href="/emner/statistik/sandsynlighed"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">🎲 Sandsynlighed</span>
            <p className="text-xs text-muted mt-1">Tælletræ, chancetræ</p>
          </Link>
          <Link
            href="/fagord"
            className="rounded-lg border border-border p-3 text-sm hover:border-primary/30 transition-all"
          >
            <span className="font-medium">📖 Fagord</span>
            <p className="text-xs text-muted mt-1">Alle begreber A-Å</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
