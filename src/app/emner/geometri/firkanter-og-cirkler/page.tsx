import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Firkanter og cirkler – Formelmat",
  description:
    "Kvadrat, rektangel, parallelogram, trapez, rombe og cirklens begreber.",
};

export default function FirkanterOgCirklerPage() {
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
        <span className="text-foreground">Firkanter og cirkler</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Firkanter og cirkler
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Firkanter og cirkler er overalt – vinduer, hjul, skærme, boldbaner. Her lærer du at kende forskel på kvadrater, rektangler, parallelogrammer og andre firkanter, plus alt om cirklen.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Firkanttyper</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Kvadrat</h3>
            <p className="text-sm text-muted mt-1">
              Alle fire sider er lige lange, og alle fire vinkler er 90°.
              Diagonalerne er lige lange og halverer hinanden vinkelret.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Rektangel</h3>
            <p className="text-sm text-muted mt-1">
              Alle fire vinkler er 90°. Modstående sider er parallelle og lige
              lange. Diagonalerne er lige lange og halverer hinanden.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Parallelogram</h3>
            <p className="text-sm text-muted mt-1">
              Modstående sider er parallelle og lige lange. Modstående vinkler
              er lige store. Diagonalerne halverer hinanden.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Trapez</h3>
            <p className="text-sm text-muted mt-1">
              Netop to sider er parallelle. De parallelle sider kaldes
              grundlinjer.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Rombe</h3>
            <p className="text-sm text-muted mt-1">
              Alle fire sider er lige lange. Modstående vinkler er lige store.
              Diagonalerne halverer hinanden vinkelret.
            </p>
          </div>
        </div>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["firkanter-og-cirkler"][1]} />

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Cirklen</h2>
        <p className="text-muted mb-4">
          En cirkel er mængden af alle punkter med samme afstand (radius) til
          et fast punkt (centrum).
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Centrum (C)</h3>
            <p className="text-sm text-muted mt-1">
              Midtpunktet, som alle punkter på cirklen har samme afstand til.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Radius (r)</h3>
            <p className="text-sm text-muted mt-1">
              Afstanden fra centrum til cirklen.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Diameter (d)</h3>
            <p className="text-sm text-muted mt-1">
              Et linjestykke gennem centrum fra den ene side af cirklen til den
              anden. d = 2 &middot; r.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Tangent</h3>
            <p className="text-sm text-muted mt-1">
              En linje, der rører cirklen i præcis ét punkt. Tangenten står
              vinkelret på radius i røringspunktet.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Korde</h3>
            <p className="text-sm text-muted mt-1">
              Et linjestykke, der forbinder to punkter på cirklen. Diameteren
              er den længste korde.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Cirkelbue</h3>
            <p className="text-sm text-muted mt-1">
              En del af cirklens omkreds mellem to punkter på cirklen.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Formler</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Cirklens omkreds</p>
            <p className="math-formula text-lg">
              O = 2 &middot; &pi; &middot; r = &pi; &middot; d
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Cirklens areal</p>
            <p className="math-formula text-lg">A = &pi; &middot; r²</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Firkant-udforskeren" description="Vælg en firkanttype og træk i hjørnerne. Se hvordan areal, omkreds, diagonaler og vinkler ændrer sig. Sammenlign de forskellige typer." icon="⬜" type="explorer" />
      </section>

      <EverydayExplanation {...hverdagsforklaringer["firkanter-og-cirkler"][0]} />

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/areal-og-omkreds"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Areal og omkreds &rarr;
          </Link>
          <Link
            href="/emner/geometri/polygoner-og-trekanter"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Polygoner og trekanter &rarr;
          </Link>
          <Link
            href="/fagord#cirkel"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Cirkel
          </Link>
        </div>
      </section>
    </div>
  );
}
