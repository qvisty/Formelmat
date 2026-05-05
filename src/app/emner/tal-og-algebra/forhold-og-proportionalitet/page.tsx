import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Forhold og proportionalitet – Formelmat",
  description:
    "Forhold, forholdstabeller, direkte og omvendt proportionalitet, enhedsrate og krydsregning.",
};

export default function ForholdPage() {
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
        <span className="text-foreground">Forhold og proportionalitet</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Forhold og proportionalitet
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Forhold og proportionalitet handler om, hvordan to størrelser hænger
        sammen. Når du blander saft, fordeler penge eller regner med kort og
        virkelighed, bruger du forhold. Her lærer du at arbejde med dem.
      </p>

      {/* Forhold */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Forhold (ratio)</h2>
        <p className="text-muted mb-3">
          Et <strong>forhold</strong> er en sammenligning af to (eller flere)
          størrelser. Forholdet 3 : 5 betyder &quot;3 for hver 5&quot;.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forholdsnotation</p>
            <p className="math-formula text-lg">a : b</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forkorte et forhold</p>
            <p className="math-formula text-lg">
              a : b = (a &divide; SFF) : (b &divide; SFF)
            </p>
            <p className="text-sm text-muted mt-1">
              SFF = største fælles faktor
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border p-4 mt-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> I en klasse er der 12 drenge og 18 piger.
            Forholdet er 12 : 18 = 2 : 3.
          </p>
        </div>
      </section>

      {/* Fordeling efter forhold */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Fordeling efter forhold</h2>
        <p className="text-muted mb-3">
          Når du skal fordele en størrelse i et bestemt forhold, finder du først
          det samlede antal dele.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Fordeling i forholdet a : b</p>
          <p className="math-formula text-lg">
            Første del = total &middot; a / (a + b)
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 200 kr fordeles i forholdet 3 : 2.
            Samlet: 3 + 2 = 5 dele. Første person: 200 &middot; 3/5 = 120 kr.
            Anden person: 200 &middot; 2/5 = 80 kr.
          </p>
        </div>
      </section>

      {/* Enhedsrate */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Enhedsrate (unit rate)</h2>
        <p className="text-muted mb-3">
          En <strong>enhedsrate</strong> udtrykker et forhold per én enhed, fx
          pris per stk. eller km per time.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Enhedsrate</p>
          <p className="math-formula text-lg">
            enhedsrate = samlet størrelse &divide; antal enheder
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 6 æbler koster 18 kr. Enhedsrate: 18 &divide; 6 = 3 kr/stk.
          </p>
        </div>
      </section>

      {/* Direkte proportionalitet */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Direkte proportionalitet</h2>
        <p className="text-muted mb-3">
          To størrelser er <strong>direkte proportionale</strong>, når deres
          forhold er konstant. Når den ene fordobles, fordobles den anden også.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forskrift</p>
            <p className="math-formula text-lg">y = k &middot; x</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Proportionalitetskonstant</p>
            <p className="math-formula text-lg">k = y / x</p>
          </div>
        </div>
        <p className="text-sm text-muted mt-3">
          Grafen for direkte proportionalitet er en ret linje gennem origo (0, 0).
        </p>
      </section>

      {/* Omvendt proportionalitet */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Omvendt proportionalitet</h2>
        <p className="text-muted mb-3">
          To størrelser er <strong>omvendt proportionale</strong>, når deres
          produkt er konstant. Når den ene fordobles, halveres den anden.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forskrift</p>
            <p className="math-formula text-lg">y = k / x</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Konstant produkt</p>
            <p className="math-formula text-lg">x &middot; y = k</p>
          </div>
        </div>
        <p className="text-sm text-muted mt-3">
          Grafen for omvendt proportionalitet er en hyperbel.
        </p>
      </section>

      {/* Krydsregning */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Krydsregning (cross-multiplication)</h2>
        <p className="text-muted mb-3">
          Krydsregning bruges til at finde en ubekendt i en proportion.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">
            Hvis a/b = c/d
          </p>
          <p className="math-formula text-lg">
            a &middot; d = b &middot; c
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 3/5 = x/20. Krydsregning: 3 &middot; 20 = 5 &middot; x &rArr; x = 60/5 = 12.
          </p>
        </div>
      </section>

      {/* Målestoksforhold */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Målestoksforhold (scale factor)</h2>
        <p className="text-muted mb-3">
          Et <strong>målestoksforhold</strong> angiver forholdet mellem en
          tegning/model og virkeligheden.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Målestoksforhold</p>
          <p className="math-formula text-lg">
            1 : n &rArr; 1 cm på kortet = n cm i virkeligheden
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> På et kort med målestok 1 : 50.000 svarer 3 cm til 3 &middot; 50.000 = 150.000 cm = 1,5 km.
          </p>
        </div>
      </section>

      {/* Interaktiv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder
          title="Proportionalitets-udforskeren"
          description="Indtast to størrelser og se om de er direkte eller omvendt proportionale. Tegn grafen og find konstanten k."
          icon="⚖️"
          type="explorer"
        />
      </section>

      <EverydayExplanation items={hverdagsforklaringer["forhold-og-proportionalitet"]} />

      {/* Se også */}
      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/tal-og-algebra/procent-og-promille"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Procent og promille &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/funktioner"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Funktioner &rarr;
          </Link>
          <Link
            href="/emner/geometri/ligedannethed"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Ligedannethed &rarr;
          </Link>
          <Link
            href="/emner/geometri/maaleenheder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Måleenheder &rarr;
          </Link>
          <Link
            href="/fagord#forhold"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Forhold
          </Link>
        </div>
      </section>
    </div>
  );
}
