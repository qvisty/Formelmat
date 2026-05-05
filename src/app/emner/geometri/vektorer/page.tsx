import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Vektorer – Formelmat",
  description:
    "2D-vektorer, vektornotation, addition, subtraktion, skalarmultiplikation og vektorlængde.",
};

export default function VektorerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Forside
        </Link>
        <span>/</span>
        <Link
          href="/emner/geometri"
          className="hover:text-primary transition-colors"
        >
          Geometri
        </Link>
        <span>/</span>
        <span className="text-foreground">Vektorer</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Vektorer</h1>

      <p className="text-muted mb-6 max-w-2xl">
        En vektor er en størrelse med både retning og længde &ndash; tænk på den
        som en pil. Du bruger vektorer, når du beskriver bevægelser, kræfter
        eller forskydninger. Her lærer du at regne med dem.
      </p>

      {/* Hvad er en vektor */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Hvad er en vektor?</h2>
        <p className="text-muted mb-3">
          En vektor har en <strong>retning</strong> og en{" "}
          <strong>længde</strong> (størrelse). I 2D skrives den som et
          koordinatpar.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Vektornotation</p>
            <p className="math-formula text-lg">
              <span className="overline">a</span> = (a<sub>1</sub>, a<sub>2</sub>)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Stedvektor til punkt P(x, y)</p>
            <p className="math-formula text-lg">
              <span className="overline">OP</span> = (x, y)
            </p>
            <p className="text-sm text-muted mt-1">Vektor fra origo til punktet P</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Vektor mellem to punkter</p>
            <p className="math-formula text-lg">
              <span className="overline">AB</span> = (b<sub>1</sub> &minus; a<sub>1</sub>, b<sub>2</sub> &minus; a<sub>2</sub>)
            </p>
          </div>
        </div>
      </section>

      {/* Addition og subtraktion */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Addition og subtraktion</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Vektoraddition</p>
            <p className="math-formula text-lg">
              <span className="overline">a</span> + <span className="overline">b</span> = (a<sub>1</sub> + b<sub>1</sub>, a<sub>2</sub> + b<sub>2</sub>)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Vektorsubtraktion</p>
            <p className="math-formula text-lg">
              <span className="overline">a</span> &minus; <span className="overline">b</span> = (a<sub>1</sub> &minus; b<sub>1</sub>, a<sub>2</sub> &minus; b<sub>2</sub>)
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-border p-4 mt-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> <span className="overline">a</span> = (3, 1) og <span className="overline">b</span> = (1, 4).
            <span className="overline">a</span> + <span className="overline">b</span> = (3 + 1, 1 + 4) = (4, 5).
          </p>
        </div>
      </section>

      {/* Skalarmultiplikation */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Skalarmultiplikation</h2>
        <p className="text-muted mb-3">
          Når du ganger en vektor med et tal (skalar), ændres længden. Retningen
          bevares (eller vendes, hvis skalaren er negativ).
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Skalarmultiplikation</p>
          <p className="math-formula text-lg">
            k &middot; <span className="overline">a</span> = (k &middot; a<sub>1</sub>, k &middot; a<sub>2</sub>)
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 3 &middot; (2, &minus;1) = (6, &minus;3). Vektoren er 3 gange så lang.
          </p>
        </div>
      </section>

      {/* Længde */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vektorens længde</h2>
        <p className="text-muted mb-3">
          Længden af en vektor beregnes med Pythagoras&apos; sætning.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Længde (numerisk værdi)</p>
          <p className="math-formula text-lg">
            |<span className="overline">a</span>| = &radic;(a<sub>1</sub>² + a<sub>2</sub>²)
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> <span className="overline">a</span> = (3, 4). |<span className="overline">a</span>| = &radic;(9 + 16) = &radic;25 = 5.
          </p>
        </div>
      </section>

      {/* Midtpunkt */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Midtpunkt af et linjestykke</h2>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Midtpunktsformel</p>
          <p className="math-formula text-lg">
            M = ((a<sub>1</sub> + b<sub>1</sub>)/2, (a<sub>2</sub> + b<sub>2</sub>)/2)
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> A(2, 3) og B(8, 7). M = ((2+8)/2, (3+7)/2) = (5, 5).
          </p>
        </div>
      </section>

      {/* Afstand mellem to punkter */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Afstand mellem to punkter</h2>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Afstandsformel</p>
          <p className="math-formula text-lg">
            d = &radic;((b<sub>1</sub> &minus; a<sub>1</sub>)² + (b<sub>2</sub> &minus; a<sub>2</sub>)²)
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> A(1, 2) og B(4, 6). d = &radic;(9 + 16) = &radic;25 = 5.
          </p>
        </div>
      </section>

      {/* Nulvektor og modsat vektor */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Særlige vektorer</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Nulvektoren</h3>
            <p className="text-sm text-muted mt-1">
              <span className="overline">0</span> = (0, 0). Har ingen retning og længde 0.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Modsat vektor</h3>
            <p className="text-sm text-muted mt-1">
              &minus;<span className="overline">a</span> = (&minus;a<sub>1</sub>, &minus;a<sub>2</sub>). Samme længde, modsat retning.
            </p>
          </div>
        </div>
      </section>

      {/* Interaktiv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder
          title="Vektor-visualisering"
          description="Tegn og flyt vektorer i et koordinatsystem. Se addition, subtraktion og skalering visuelt."
          icon="➡️"
          type="visualizer"
        />
      </section>

      <EverydayExplanation items={hverdagsforklaringer["vektorer"]} />

      {/* Se også */}
      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/koordinatsystem"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Koordinatsystem &rarr;
          </Link>
          <Link
            href="/emner/geometri/pythagoras"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Pythagoras&apos; sætning &rarr;
          </Link>
          <Link
            href="/emner/geometri/flytninger-og-symmetri"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Flytninger og symmetri &rarr;
          </Link>
          <Link
            href="/fagord#vektor"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Vektor
          </Link>
        </div>
      </section>
    </div>
  );
}
