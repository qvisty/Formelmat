import Link from "next/link";
import { GeoGebraEmbed } from "@/components/GeoGebraEmbed";

export const metadata = {
  title: "Koordinatsystem – Formelmat",
  description:
    "Koordinatsystemet, kvadranter, ligning for en ret linje y = ax + b og hældningstal.",
};

export default function KoordinatsystemPage() {
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
        <span className="text-foreground">Koordinatsystem</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Koordinatsystem
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Et <strong>koordinatsystem</strong> bruges til at angive punkters
        placering i planen. Det består af to tallinjer (akser), der skærer
        hinanden vinkelret i <strong>origo</strong> (0, 0).
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kvadranter</h2>
        <p className="text-muted mb-3">
          Koordinatsystemet opdeler planen i fire kvadranter:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">1. kvadrant</h3>
            <p className="text-sm text-muted mt-1">
              x &gt; 0 og y &gt; 0 (øverst til højre).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">2. kvadrant</h3>
            <p className="text-sm text-muted mt-1">
              x &lt; 0 og y &gt; 0 (øverst til venstre).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">3. kvadrant</h3>
            <p className="text-sm text-muted mt-1">
              x &lt; 0 og y &lt; 0 (nederst til venstre).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">4. kvadrant</h3>
            <p className="text-sm text-muted mt-1">
              x &gt; 0 og y &lt; 0 (nederst til højre).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Ligning for en ret linje</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Ligningen for en ret linje
            </p>
            <p className="math-formula text-lg">y = ax + b</p>
            <p className="text-sm text-muted mt-2">
              <em>a</em> er <strong>hældningstallet</strong> og{" "}
              <em>b</em> er skæringen med y-aksen.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Hældningstal mellem to punkter
            </p>
            <p className="math-formula text-lg">
              a = (y₂ &minus; y₁) / (x₂ &minus; x₁)
            </p>
            <p className="text-sm text-muted mt-2">
              Hældningstallet angiver, hvor meget y vokser, når x vokser
              med 1.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Hældningstal</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">a &gt; 0</h3>
            <p className="text-sm text-muted mt-1">
              Linjen er stigende &ndash; y vokser, når x vokser.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">a &lt; 0</h3>
            <p className="text-sm text-muted mt-1">
              Linjen er faldende &ndash; y aftager, når x vokser.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">a = 0</h3>
            <p className="text-sm text-muted mt-1">
              Linjen er vandret &ndash; y er konstant.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Lodret linje</h3>
            <p className="text-sm text-muted mt-1">
              Skrives som x = c. Hældningstallet er ikke defineret.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Afstand mellem to punkter</h2>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Afstandsformlen</p>
          <p className="math-formula text-lg">
            d = &radic;((x₂ &minus; x₁)² + (y₂ &minus; y₁)²)
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Midtpunkt</h2>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">
            Midtpunkt af et linjestykke
          </p>
          <p className="math-formula text-lg">
            M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Udforsk i GeoGebra</h2>
        <p className="text-muted mb-4">
          Tegn punkter, linjer og funktioner i koordinatsystemet. Prøv at
          indtaste <code className="bg-surface px-1 rounded text-sm">y = 2x + 1</code> i
          inputfeltet.
        </p>
        <GeoGebraEmbed
          appName="graphing"
          showAlgebraInput={true}
          showToolBar={true}
          height={500}
          label="GeoGebra grafregner – skriv funktioner i feltet"
        />
      </section>

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
            href="/emner/geometri/linjer-og-vinkler"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Linjer og vinkler &rarr;
          </Link>
          <Link
            href="/fagord#hældningstal"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Hældningstal
          </Link>
        </div>
      </section>
    </div>
  );
}
