import Link from "next/link";
import { TrigGraphs } from "@/components/TrigGraphs";

export const metadata = {
  title: "Trigonometriske funktioner – Formelmat",
  description:
    "Grafer og egenskaber for sinus, cosinus og tangens med interaktive skydere.",
};

export default function TrigFunktionerPage() {
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
        <span className="text-foreground">Trigonometriske funktioner</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Trigonometriske funktioner
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        De trigonometriske funktioner – sinus, cosinus og tangens – kan
        visualiseres som grafer. Ved at ændre amplitude og frekvens kan du se,
        hvordan graferne transformeres. Prøv at justere skyderne nedenfor.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Interaktive grafer</h2>
        <TrigGraphs />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Egenskaber</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-5">
            <h3 className="font-semibold text-blue-600 mb-2">
              Sinus – f(x) = sin(x)
            </h3>
            <ul className="text-sm text-muted space-y-1 list-disc pl-5">
              <li>Definitionsmængde: alle reelle tal</li>
              <li>Værdimængde: [-1, 1]</li>
              <li>Periode: 2π ≈ 6,28</li>
              <li>sin(0) = 0, sin(π/2) = 1</li>
              <li>Ulige funktion: sin(-x) = -sin(x)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="font-semibold text-green-600 mb-2">
              Cosinus – f(x) = cos(x)
            </h3>
            <ul className="text-sm text-muted space-y-1 list-disc pl-5">
              <li>Definitionsmængde: alle reelle tal</li>
              <li>Værdimængde: [-1, 1]</li>
              <li>Periode: 2π ≈ 6,28</li>
              <li>cos(0) = 1, cos(π/2) = 0</li>
              <li>Lige funktion: cos(-x) = cos(x)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="font-semibold text-amber-600 mb-2">
              Tangens – f(x) = tan(x)
            </h3>
            <ul className="text-sm text-muted space-y-1 list-disc pl-5">
              <li>Definitionsmængde: alle reelle tal undtagen x = π/2 + n·π</li>
              <li>Værdimængde: alle reelle tal</li>
              <li>Periode: π ≈ 3,14</li>
              <li>tan(0) = 0, tan(π/4) = 1</li>
              <li>Har lodrette asymptoter ved x = π/2 + n·π</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Generel form</h2>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">
            Generel sinusfunktion
          </p>
          <p className="math-formula text-lg">f(x) = a · sin(b · x + c) + d</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-surface border border-border p-3">
            <p className="text-sm">
              <strong>a</strong> = amplitude (højde)
            </p>
          </div>
          <div className="rounded-lg bg-surface border border-border p-3">
            <p className="text-sm">
              <strong>b</strong> = frekvens (periode = 2π/b)
            </p>
          </div>
          <div className="rounded-lg bg-surface border border-border p-3">
            <p className="text-sm">
              <strong>c</strong> = faseforskydning (vandret)
            </p>
          </div>
          <div className="rounded-lg bg-surface border border-border p-3">
            <p className="text-sm">
              <strong>d</strong> = lodret forskydning
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">GeoGebra</h2>
        <p className="text-muted mb-3">
          Tegn dine egne trigonometriske funktioner i GeoGebra.
        </p>
        <a
          href="https://www.geogebra.org/graphing"
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
          Åbn GeoGebra Grafregner
        </a>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/trigonometri/retvinklet-trekant"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Den retvinklede trekant →
          </Link>
          <Link
            href="/emner/trigonometri/enhedscirklen"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Enhedscirklen →
          </Link>
          <Link
            href="/emner/funktioner"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📈 Funktioner
          </Link>
        </div>
      </section>
    </div>
  );
}
