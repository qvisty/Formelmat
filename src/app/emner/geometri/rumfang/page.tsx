import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";

export const metadata = {
  title: "Rumfang og overfladeareal – Formelmat",
  description:
    "Rumfangsformler for kasse, kube, prisme, cylinder, kegle, pyramide og kugle.",
};

export default function RumfangPage() {
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
        <span className="text-foreground">Rumfang og overfladeareal</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Rumfang og overfladeareal
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Rumfang fortæller dig, hvor meget plads noget fylder – fx hvor meget vand der kan være i en flaske, eller hvor meget jord der skal i et hul. Overfladeareal er, hvor meget materiale du skal bruge til at dække overfladen.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kasse (retvinklet prisme)</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang</p>
            <p className="math-formula text-lg">
              V = a &middot; b &middot; c
            </p>
            <p className="text-sm text-muted mt-1">
              a, b og c er kassens tre sidelængder.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Overfladeareal</p>
            <p className="math-formula text-lg">
              O = 2(ab + ac + bc)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kube (terning)</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang</p>
            <p className="math-formula text-lg">V = a³</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Overfladeareal</p>
            <p className="math-formula text-lg">O = 6a²</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prisme</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang</p>
            <p className="math-formula text-lg">
              V = G &middot; h
            </p>
            <p className="text-sm text-muted mt-1">
              G = grundfladens areal, h = højde.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Cylinder</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang</p>
            <p className="math-formula text-lg">
              V = &pi; &middot; r² &middot; h
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Overfladeareal</p>
            <p className="math-formula text-lg">
              O = 2 &middot; &pi; &middot; r² + 2 &middot; &pi; &middot; r &middot; h
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kegle</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang</p>
            <p className="math-formula text-lg">
              V = ⅓ &middot; &pi; &middot; r² &middot; h
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Overfladeareal</p>
            <p className="math-formula text-lg">
              O = &pi; &middot; r² + &pi; &middot; r &middot; s
            </p>
            <p className="text-sm text-muted mt-1">
              s = sidelinje (slant height), s = &radic;(r² + h²).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Pyramide</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang</p>
            <p className="math-formula text-lg">
              V = ⅓ &middot; G &middot; h
            </p>
            <p className="text-sm text-muted mt-1">
              G = grundfladens areal, h = højde.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kugle</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Rumfang</p>
            <p className="math-formula text-lg">
              V = ⁴⁄₃ &middot; &pi; &middot; r³
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Overfladeareal</p>
            <p className="math-formula text-lg">
              O = 4 &middot; &pi; &middot; r²
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Rumfangsberegner" description="Vælg en figur, indtast mål, og se rumfang og overfladeareal beregnet med det samme. Sammenlign forskellige figurer med hinanden." icon="📦" type="calculator" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/rumlige-figurer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Rumlige figurer &rarr;
          </Link>
          <Link
            href="/emner/geometri/areal-og-omkreds"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Areal og omkreds &rarr;
          </Link>
          <Link
            href="/emner/geometri/maaleenheder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Måleenheder &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
