import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Ligedannethed – Formelmat",
  description:
    "Kongruens, ligedannethed, målforhold for længde, areal og rumfang, samt ensvinklede trekanter.",
};

export default function LigedannethedPage() {
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
        <span className="text-foreground">Ligedannethed</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Ligedannethed
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        To figurer er ligedannede, hvis de har præcis samme form – den ene er bare en forstørrelse eller formindskelse af den anden. Det er fx det, der sker, når du zoomer ind på et kort.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kongruens</h2>
        <p className="text-muted mb-3">
          To figurer er <strong>kongruente</strong>, når man kan flytte
          (parallelforskyde, dreje eller spejle) den ene figur, så den dækker
          den anden præcis. Kongruente figurer har samme form og størrelse.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Ligedannethed</h2>
        <p className="text-muted mb-3">
          To figurer er <strong>ligedannede</strong>, når de har samme form,
          men ikke nødvendigvis samme størrelse. Den ene figur er en
          forstørrelse eller formindskelse af den anden.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Målforhold (skala)</h2>
        <p className="text-muted mb-4">
          Når to figurer er ligedannede med målforholdet <em>k</em>, gælder:
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Længdeforhold</p>
            <p className="math-formula text-lg">
              Længde<sub>ny</sub> = k &middot; Længde<sub>original</sub>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Arealforhold</p>
            <p className="math-formula text-lg">
              Areal<sub>ny</sub> = k² &middot; Areal<sub>original</sub>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfangsforhold</p>
            <p className="math-formula text-lg">
              Rumfang<sub>ny</sub> = k³ &middot; Rumfang<sub>original</sub>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Ensvinklede trekanter</h2>
        <p className="text-muted mb-3">
          To trekanter er <strong>ensvinklede</strong>, når de har samme
          vinkler. Ensvinklede trekanter er altid ligedannede, og deres sider
          er proportionale:
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">
            Forholdet mellem sider i ensvinklede trekanter
          </p>
          <p className="math-formula text-lg">
            a₁ / a₂ = b₁ / b₂ = c₁ / c₂ = k
          </p>
        </div>
        <p className="text-muted mt-3">
          Hvis man kender tre sider i den ene trekant og én side i den anden,
          kan man beregne de resterende sider.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Målforhold-visualisering" description="Vælg et målforhold og se, hvordan en figur ændrer størrelse. Se samtidig, hvordan længde-, areal- og rumfangsforholdet hænger sammen." icon="🔍" type="visualizer" />
      </section>

      <EverydayExplanation items={hverdagsforklaringer["ligedannethed"]} />

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
            href="/emner/geometri/flytninger-og-symmetri"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Flytninger og symmetri &rarr;
          </Link>
          <Link
            href="/fagord#ligedannet"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Ligedannet
          </Link>
        </div>
      </section>
    </div>
  );
}
