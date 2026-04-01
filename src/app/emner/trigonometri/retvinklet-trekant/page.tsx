import Link from "next/link";
import { InteractiveTriangle } from "@/components/InteractiveTriangle";

export const metadata = {
  title: "Den retvinklede trekant – Formelmat",
  description:
    "Interaktiv visualisering af sinus, cosinus og tangens i den retvinklede trekant.",
};

export default function RetvinkletTrekantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Forside
        </Link>
        <span>/</span>
        <Link
          href="/emner/trigonometri"
          className="hover:text-primary transition-colors"
        >
          Trigonometri
        </Link>
        <span>/</span>
        <span className="text-foreground">Den retvinklede trekant</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Den retvinklede trekant
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        En <strong>retvinklet trekant</strong> har én vinkel på præcis 90°. De
        trigonometriske forhold – sinus, cosinus og tangens – beskriver
        sammenhængen mellem vinklerne og siderne. Brug skyderen nedenfor til at
        ændre vinklen og se, hvordan forholdet ændrer sig.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Interaktiv trekant
        </h2>
        <InteractiveTriangle />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Formler</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sinus</p>
            <p className="math-formula text-lg">
              sin(v) = modstående katete / hypotenuse
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Cosinus</p>
            <p className="math-formula text-lg">
              cos(v) = hosliggende katete / hypotenuse
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Tangens</p>
            <p className="math-formula text-lg">
              tan(v) = modstående katete / hosliggende katete
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Pythagoras&apos; sætning</p>
            <p className="math-formula text-lg">a² + b² = c²</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vigtige begreber</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Hypotenuse</h3>
            <p className="text-sm text-muted mt-1">
              Den længste side i trekanten – den side, der ligger over for den
              rette vinkel (90°).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Kateter</h3>
            <p className="text-sm text-muted mt-1">
              De to korte sider, der danner den rette vinkel. En er
              &quot;modstående&quot; og den anden er &quot;hosliggende&quot; i
              forhold til den valgte vinkel.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Modstående katete
            </h3>
            <p className="text-sm text-muted mt-1">
              Den katete, der ligger over for den vinkel, du kigger på.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Hosliggende katete
            </h3>
            <p className="text-sm text-muted mt-1">
              Den katete, der ligger ved siden af den vinkel, du kigger på (og
              ikke er hypotenusen).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">GeoGebra</h2>
        <p className="text-muted mb-3">
          Vil du eksperimentere mere? Åbn en interaktiv trekant i GeoGebra.
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

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/trigonometri/enhedscirklen"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Enhedscirklen →
          </Link>
          <Link
            href="/emner/trigonometri/trigonometriske-funktioner"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Trigonometriske funktioner →
          </Link>
          <Link
            href="/fagord#pythagoras--sætning"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Pythagoras&apos; sætning
          </Link>
        </div>
      </section>
    </div>
  );
}
