import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";

export const metadata = {
  title: "Talfølger – Formelmat",
  description:
    "Aritmetiske og geometriske følger, n'te led, rekursive formler og summering.",
};

export default function TalfolgerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Forside
        </Link>
        <span>/</span>
        <Link
          href="/emner/tal-og-algebra"
          className="hover:text-primary transition-colors"
        >
          Tal og algebra
        </Link>
        <span>/</span>
        <span className="text-foreground">Talfølger</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Talfølger</h1>

      <p className="text-muted mb-6 max-w-2xl">
        En talfølge er en række tal, der følger et mønster. Du møder dem overalt
        &ndash; fra husnumre til renter i banken. Her lærer du at finde mønstret
        og beregne ethvert led i følgen.
      </p>

      {/* Hvad er en talfølge */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Hvad er en talfølge?</h2>
        <p className="text-muted mb-3">
          En <strong>talfølge</strong> er en ordnet liste af tal, der følger en
          regel. Hvert tal i følgen kaldes et <strong>led</strong>.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Notation</p>
          <p className="math-formula text-lg">
            a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, &hellip;, a<sub>n</sub>, &hellip;
          </p>
          <p className="text-sm text-muted mt-1">
            a<sub>n</sub> er det n&apos;te led i følgen
          </p>
        </div>
      </section>

      {/* Aritmetisk følge */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Aritmetisk følge</h2>
        <p className="text-muted mb-3">
          I en <strong>aritmetisk følge</strong> er forskellen (differensen)
          mellem nabotal konstant. Man lægger det samme tal til hver gang.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Differens</p>
            <p className="math-formula text-lg">
              d = a<sub>n+1</sub> &minus; a<sub>n</sub>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">N&apos;te led</p>
            <p className="math-formula text-lg">
              a<sub>n</sub> = a<sub>1</sub> + (n &minus; 1) &middot; d
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sum af de n første led</p>
            <p className="math-formula text-lg">
              S<sub>n</sub> = n/2 &middot; (a<sub>1</sub> + a<sub>n</sub>)
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-border p-4 mt-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 3, 7, 11, 15, 19, &hellip; Her er a<sub>1</sub> = 3 og d = 4.
            Det 10. led: a<sub>10</sub> = 3 + (10 &minus; 1) &middot; 4 = 3 + 36 = 39.
          </p>
        </div>
      </section>

      {/* Geometrisk følge */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Geometrisk følge</h2>
        <p className="text-muted mb-3">
          I en <strong>geometrisk følge</strong> er kvotienten (forholdet)
          mellem nabotal konstant. Man ganger med det samme tal hver gang.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Kvotient</p>
            <p className="math-formula text-lg">
              k = a<sub>n+1</sub> / a<sub>n</sub>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">N&apos;te led</p>
            <p className="math-formula text-lg">
              a<sub>n</sub> = a<sub>1</sub> &middot; k<sup>n&minus;1</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sum af de n første led (k &ne; 1)</p>
            <p className="math-formula text-lg">
              S<sub>n</sub> = a<sub>1</sub> &middot; (k<sup>n</sup> &minus; 1) / (k &minus; 1)
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-border p-4 mt-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 2, 6, 18, 54, &hellip; Her er a<sub>1</sub> = 2 og k = 3.
            Det 5. led: a<sub>5</sub> = 2 &middot; 3<sup>4</sup> = 2 &middot; 81 = 162.
          </p>
        </div>
      </section>

      {/* Kvadratiske følger */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kvadratiske følger</h2>
        <p className="text-muted mb-3">
          I en <strong>kvadratisk følge</strong> er andenforskellene (differens
          af differenserne) konstante. Forskriften for det n&apos;te led indeholder n².
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Generel form</p>
          <p className="math-formula text-lg">
            a<sub>n</sub> = an² + bn + c
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 1, 4, 9, 16, 25, &hellip; Her er a<sub>n</sub> = n².
            Differenser: 3, 5, 7, 9, &hellip; Andenforskelle: 2, 2, 2, &hellip; (konstante).
          </p>
        </div>
      </section>

      {/* Rekursive formler */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Rekursive formler</h2>
        <p className="text-muted mb-3">
          En <strong>rekursiv formel</strong> beskriver det næste led ud fra de
          foregående led. Man skal kende startværdien (a<sub>1</sub>) for at
          kunne bruge formlen.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Aritmetisk (rekursiv)</p>
            <p className="math-formula text-lg">
              a<sub>n+1</sub> = a<sub>n</sub> + d
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Geometrisk (rekursiv)</p>
            <p className="math-formula text-lg">
              a<sub>n+1</sub> = a<sub>n</sub> &middot; k
            </p>
          </div>
        </div>
      </section>

      {/* Kendte talfølger */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kendte talfølger</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Trekantstal</h3>
            <p className="text-sm text-muted mt-1">
              1, 3, 6, 10, 15, &hellip; &mdash; T<sub>n</sub> = n(n + 1)/2
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Kvadrattal</h3>
            <p className="text-sm text-muted mt-1">
              1, 4, 9, 16, 25, &hellip; &mdash; a<sub>n</sub> = n²
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Kubiktal</h3>
            <p className="text-sm text-muted mt-1">
              1, 8, 27, 64, 125, &hellip; &mdash; a<sub>n</sub> = n³
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Fibonacci-følgen</h3>
            <p className="text-sm text-muted mt-1">
              1, 1, 2, 3, 5, 8, 13, &hellip; &mdash; a<sub>n</sub> = a<sub>n&minus;1</sub> + a<sub>n&minus;2</sub>
            </p>
          </div>
        </div>
      </section>

      {/* Interaktiv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder
          title="Talfølge-udforsker"
          description="Indtast de første led, og se om følgen er aritmetisk, geometrisk eller kvadratisk. Find formlen for det n'te led."
          icon="🔢"
          type="calculator"
        />
      </section>

      {/* Se også */}
      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/tal-og-algebra/funktioner"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Funktioner &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/potenser-og-roedder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Potenser og rødder &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/oekonomi"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Økonomi &rarr;
          </Link>
          <Link
            href="/fagord#aritmetisk-f-lge"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Aritmetisk følge
          </Link>
        </div>
      </section>
    </div>
  );
}
