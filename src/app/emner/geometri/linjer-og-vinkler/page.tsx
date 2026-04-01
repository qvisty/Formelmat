import Link from "next/link";

export const metadata = {
  title: "Linjer og vinkler – Formelmat",
  description:
    "Parallelle linjer, midtnormal, vinkelhalveringslinje, nabovinkler, topvinkler og ensliggende vinkler.",
};

export default function LinjerOgVinklerPage() {
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
        <span className="text-foreground">Linjer og vinkler</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Linjer og vinkler
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Linjer og vinkler er grundlæggende byggesten i geometrien. Her
        gennemgås parallelle linjer, midtnormaler, vinkelhalveringslinjer samt
        de vigtigste vinkelregler.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Parallelle linjer</h2>
        <p className="text-muted mb-3">
          To linjer er <strong>parallelle</strong>, når de ikke skærer hinanden.
          Vi skriver <em>l &parallel; m</em>. Når en tværlinje skærer to
          parallelle linjer, opstår der en række vinkelpar med særlige
          egenskaber.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Midtnormal</h2>
        <p className="text-muted mb-3">
          En <strong>midtnormal</strong> er en linje, som står vinkelret på et
          linjestykke og skærer det i midtpunktet. Alle punkter på midtnormalen
          har samme afstand til linjestykkets to endepunkter.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vinkelhalveringslinje</h2>
        <p className="text-muted mb-3">
          En <strong>vinkelhalveringslinje</strong> deler en vinkel i to lige
          store vinkler. Alle punkter på vinkelhalveringslinjen har samme
          afstand til vinkelens to ben.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vinkelregler</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Nabovinkler</p>
            <p className="math-formula text-lg">v₁ + v₂ = 180°</p>
            <p className="text-sm text-muted mt-1">
              To vinkler, der tilsammen udgør 180°, kaldes nabovinkler
              (supplementvinkler).
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Topvinkler</p>
            <p className="math-formula text-lg">v₁ = v₂</p>
            <p className="text-sm text-muted mt-1">
              Når to linjer skærer hinanden, er de modstående vinkler
              (topvinkler) lige store.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Ensliggende vinkler</p>
            <p className="math-formula text-lg">v₁ = v₂</p>
            <p className="text-sm text-muted mt-1">
              Når en tværlinje skærer to parallelle linjer, er de ensliggende
              vinkler lige store. De sidder på samme side af tværlinjen og på
              samme side af de parallelle linjer.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vigtige begreber</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Ret vinkel</h3>
            <p className="text-sm text-muted mt-1">
              En vinkel på 90°. Markeres med et lille kvadrat.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Spids vinkel</h3>
            <p className="text-sm text-muted mt-1">
              En vinkel, der er mindre end 90°.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Stump vinkel</h3>
            <p className="text-sm text-muted mt-1">
              En vinkel, der er større end 90° men mindre end 180°.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Lige vinkel</h3>
            <p className="text-sm text-muted mt-1">
              En vinkel på præcis 180° &ndash; en lige linje.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/polygoner-og-trekanter"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Polygoner og trekanter &rarr;
          </Link>
          <Link
            href="/emner/geometri/firkanter-og-cirkler"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Firkanter og cirkler &rarr;
          </Link>
          <Link
            href="/fagord#nabovinkler"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Nabovinkler
          </Link>
        </div>
      </section>
    </div>
  );
}
