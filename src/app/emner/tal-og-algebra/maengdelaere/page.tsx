import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";

export const metadata = {
  title: "Mængdelære – Formelmat",
  description:
    "Mængder, mængdenotation, fællesmængde, foreningsmængde, differensmængde og Venn-diagrammer.",
};

export default function MaengdelaerePage() {
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
        <span className="text-foreground">Mængdelære</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Mængdelære</h1>

      <p className="text-muted mb-6 max-w-2xl">
        Mængdelære handler om samlinger af ting &ndash; tal, bogstaver eller
        hvad som helst. Du bruger det, når du skal holde styr på grupper og
        finde ud af, hvad de har til fælles. Venn-diagrammer gør det hele
        visuelt.
      </p>

      {/* Grundbegreber */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Grundbegreber</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">En mængde</p>
            <p className="math-formula text-lg">
              A = &#123;1, 2, 3, 4, 5&#125;
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Element af mængde</p>
            <p className="math-formula text-lg">
              3 &isin; A &nbsp;&nbsp;(3 er element i A)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Ikke element af mængde</p>
            <p className="math-formula text-lg">
              7 &notin; A &nbsp;&nbsp;(7 er ikke element i A)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Den tomme mængde</p>
            <p className="math-formula text-lg">
              &empty; = &#123;&#125; &nbsp;&nbsp;(indeholder ingen elementer)
            </p>
          </div>
        </div>
      </section>

      {/* Operationer */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Mængdeoperationer</h2>
        <p className="text-muted mb-4">
          Lad A = &#123;1, 2, 3, 4&#125; og B = &#123;3, 4, 5, 6&#125;.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Fællesmængde (snitmængde)
            </p>
            <p className="math-formula text-lg">
              A &cap; B = &#123;3, 4&#125;
            </p>
            <p className="text-sm text-muted mt-1">
              Elementer der er i <em>begge</em> mængder
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Foreningsmængde</p>
            <p className="math-formula text-lg">
              A &cup; B = &#123;1, 2, 3, 4, 5, 6&#125;
            </p>
            <p className="text-sm text-muted mt-1">
              Elementer der er i <em>mindst én</em> af mængderne
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Differensmængde</p>
            <p className="math-formula text-lg">
              A \ B = &#123;1, 2&#125;
            </p>
            <p className="text-sm text-muted mt-1">
              Elementer i A som <em>ikke</em> er i B
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Delmængde</p>
            <p className="math-formula text-lg">
              C &sube; A &nbsp;&nbsp;(alle elementer i C er også i A)
            </p>
          </div>
        </div>
      </section>

      {/* Venn-diagrammer */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Venn-diagrammer</h2>
        <p className="text-muted mb-4">
          Et <strong>Venn-diagram</strong> viser mængder som overlappende
          cirkler. Overlapningen er fællesmængden.
        </p>

        {/* Simple SVG Venn diagram */}
        <div className="rounded-xl border border-border p-4 bg-surface flex justify-center">
          <svg viewBox="0 0 300 200" className="w-full max-w-md" role="img" aria-label="Venn-diagram med to mængder A og B">
            {/* Circle A */}
            <circle cx="120" cy="100" r="70" fill="rgba(59, 130, 246, 0.15)" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            {/* Circle B */}
            <circle cx="180" cy="100" r="70" fill="rgba(239, 68, 68, 0.15)" stroke="rgb(239, 68, 68)" strokeWidth="2" />
            {/* Labels */}
            <text x="85" y="90" textAnchor="middle" className="text-sm fill-current" fontSize="14" fontWeight="bold">A</text>
            <text x="215" y="90" textAnchor="middle" className="text-sm fill-current" fontSize="14" fontWeight="bold">B</text>
            <text x="150" y="105" textAnchor="middle" className="text-xs fill-current" fontSize="11">A &cap; B</text>
            {/* Values */}
            <text x="85" y="110" textAnchor="middle" className="fill-current" fontSize="12">1, 2</text>
            <text x="150" y="125" textAnchor="middle" className="fill-current" fontSize="12">3, 4</text>
            <text x="215" y="110" textAnchor="middle" className="fill-current" fontSize="12">5, 6</text>
          </svg>
        </div>
      </section>

      {/* Antal elementer */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Antal elementer</h2>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Additionsformlen for to mængder</p>
          <p className="math-formula text-lg">
            |A &cup; B| = |A| + |B| &minus; |A &cap; B|
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> |A| = 4, |B| = 4, |A &cap; B| = 2.
            Så |A &cup; B| = 4 + 4 &minus; 2 = 6.
          </p>
        </div>
      </section>

      {/* Talmængder */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">De klassiske talmængder</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold text-foreground">&#8469; &ndash; Naturlige tal</p>
            <p className="text-sm text-muted mt-1">&#123;1, 2, 3, 4, &hellip;&#125;</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold text-foreground">&#8484; &ndash; Hele tal</p>
            <p className="text-sm text-muted mt-1">&#123;&hellip;, &minus;2, &minus;1, 0, 1, 2, &hellip;&#125;</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold text-foreground">&#8474; &ndash; Rationale tal</p>
            <p className="text-sm text-muted mt-1">Tal der kan skrives som brøk a/b</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold text-foreground">&#8477; &ndash; Reelle tal</p>
            <p className="text-sm text-muted mt-1">Alle tal på tallinjen</p>
          </div>
        </div>
        <p className="text-sm text-muted mt-3">
          &#8469; &sub; &#8484; &sub; &#8474; &sub; &#8477; &nbsp;&mdash;&nbsp;
          Hver talmængde er en delmængde af den næste.
        </p>
      </section>

      {/* Interaktiv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder
          title="Venn-diagram-bygger"
          description="Opret to eller tre mængder og se Venn-diagrammet opdatere sig. Find fællesmængde, foreningsmængde og differensmængde."
          icon="⭕"
          type="visualizer"
        />
      </section>

      {/* Se også */}
      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/tal-og-algebra/tal"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Tal &rarr;
          </Link>
          <Link
            href="/emner/statistik/sandsynlighed"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Sandsynlighed &rarr;
          </Link>
          <Link
            href="/emner/statistik/kombinatorik"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Kombinatorik &rarr;
          </Link>
          <Link
            href="/fagord#m-ngde"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Mængde
          </Link>
        </div>
      </section>
    </div>
  );
}
