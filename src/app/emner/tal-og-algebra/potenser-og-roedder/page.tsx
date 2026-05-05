import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { ThemedExample } from "@/components/ThemedExample";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Potenser og rødder – Formelmat",
  description:
    "Potenser, kvadratrødder, kubikrødder, potensregler og talfølger.",
};

export default function PotensOgRoedderPage() {
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
        <span className="text-foreground">Potenser og rødder</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Potenser og rødder
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Potenser er en smart m&aring;de at skrive tal, der ganges med sig selv mange gange. R&oslash;dder g&oslash;r det modsatte. Du bruger dem fx til at regne med meget store eller meget sm&aring; tal &ndash; og de dukker op overalt i formler.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Potenser</h2>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Definition</p>
          <p className="math-formula text-lg">
            a<sup>n</sup> = a &middot; a &middot; a &middot; ... &middot; a
            &nbsp; (n faktorer)
          </p>
          <p className="text-sm text-muted mt-1">
            a kaldes grundtallet, n kaldes eksponenten.
          </p>
        </div>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Produkt af potenser</p>
            <p className="math-formula text-lg">
              a<sup>n</sup> &middot; a<sup>m</sup> = a<sup>n+m</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Kvotient af potenser</p>
            <p className="math-formula text-lg">
              a<sup>n</sup> / a<sup>m</sup> = a<sup>n&minus;m</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Potens af potens</p>
            <p className="math-formula text-lg">
              (a<sup>n</sup>)<sup>m</sup> = a<sup>n &middot; m</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Potens af produkt</p>
            <p className="math-formula text-lg">
              (a &middot; b)<sup>n</sup> = a<sup>n</sup> &middot; b<sup>n</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Nulte potens</p>
            <p className="math-formula text-lg">
              a<sup>0</sup> = 1 &nbsp; (a &ne; 0)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Negativ eksponent</p>
            <p className="math-formula text-lg">
              a<sup>&minus;n</sup> = 1 / a<sup>n</sup>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Rødder</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Kvadratrod</p>
            <p className="math-formula text-lg">
              &radic;a = a<sup>1/2</sup>
            </p>
            <p className="text-sm text-muted mt-1">
              Kvadratroden af a er det ikke-negative tal, der ganget med sig
              selv giver a. Fx &radic;9 = 3.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Kubikrod</p>
            <p className="math-formula text-lg">
              ∛a = a<sup>1/3</sup>
            </p>
            <p className="text-sm text-muted mt-1">
              Kubikroden af a er det tal, der ganget med sig selv tre gange
              giver a. Fx ∛8 = 2.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">n&apos;te rod</p>
            <p className="math-formula text-lg">
              ⁿ&radic;a = a<sup>1/n</sup>
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Regneregler for rødder</p>
            <p className="math-formula text-lg">
              &radic;(a &middot; b) = &radic;a &middot; &radic;b
            </p>
            <p className="math-formula text-lg mt-1">
              &radic;(a / b) = &radic;a / &radic;b
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Talfølger</h2>
        <p className="text-muted mb-4">
          En <strong>talfølge</strong> er en liste af tal skrevet i en
          systematik eller efter en formel.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Aritmetisk talfølge
            </h3>
            <p className="text-sm text-muted mt-1">
              Differensen mellem på hinanden følgende led er konstant.
            </p>
            <p className="math-formula text-sm mt-2">
              a<sub>n</sub> = a<sub>1</sub> + (n &minus; 1) &middot; d
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 2, 5, 8, 11, 14, ... (d = 3)
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Geometrisk talfølge
            </h3>
            <p className="text-sm text-muted mt-1">
              Kvotienten mellem på hinanden følgende led er konstant.
            </p>
            <p className="math-formula text-sm mt-2">
              a<sub>n</sub> = a<sub>1</sub> &middot; k<sup>n&minus;1</sup>
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 3, 6, 12, 24, 48, ... (k = 2)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="potenser" />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Potens- og rodberegner" description="Skriv et tal og en eksponent, og se udregningen trin for trin. Fx 2⁵ = 2 × 2 × 2 × 2 × 2 = 32." icon="📊" type="calculator" />
      </section>

      <EverydayExplanation items={hverdagsforklaringer["potenser-og-roedder"]} />

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
            href="/emner/tal-og-algebra/regnestrategier"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Regnestrategier &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/funktioner"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Funktioner &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/oekonomi"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Økonomi &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
