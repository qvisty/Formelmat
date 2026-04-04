import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { ThemedExample } from "@/components/ThemedExample";

export const metadata = {
  title: "Måleenheder – Formelmat",
  description:
    "Enhedstabeller for længde, areal, rumfang og masse. Massefylde og fart.",
};

export default function MaaleenhederPage() {
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
        <span className="text-foreground">Måleenheder</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Måleenheder
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Måleenheder bruger du hele tiden – meter, kilo, liter. Her finder du alle omregningerne mellem enheder for længde, areal, rumfang og masse, plus formlerne for massefylde og fart.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Længdeenheder</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Enhed</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Forkortelse</th>
                <th className="text-left py-2 font-semibold text-foreground">Omregning</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kilometer</td>
                <td className="py-2 pr-4">km</td>
                <td className="py-2">1 km = 1.000 m</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Meter</td>
                <td className="py-2 pr-4">m</td>
                <td className="py-2">1 m = 10 dm = 100 cm</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Decimeter</td>
                <td className="py-2 pr-4">dm</td>
                <td className="py-2">1 dm = 10 cm</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Centimeter</td>
                <td className="py-2 pr-4">cm</td>
                <td className="py-2">1 cm = 10 mm</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Millimeter</td>
                <td className="py-2 pr-4">mm</td>
                <td className="py-2">1 mm = 0,001 m</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted mt-2">
          Faktor 10 mellem hver enhed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Arealenheder</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Enhed</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Forkortelse</th>
                <th className="text-left py-2 font-semibold text-foreground">Omregning</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kvadratkilometer</td>
                <td className="py-2 pr-4">km²</td>
                <td className="py-2">1 km² = 100 ha = 1.000.000 m²</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Hektar</td>
                <td className="py-2 pr-4">ha</td>
                <td className="py-2">1 ha = 10.000 m²</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kvadratmeter</td>
                <td className="py-2 pr-4">m²</td>
                <td className="py-2">1 m² = 100 dm²</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kvadratdecimeter</td>
                <td className="py-2 pr-4">dm²</td>
                <td className="py-2">1 dm² = 100 cm²</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Kvadratcentimeter</td>
                <td className="py-2 pr-4">cm²</td>
                <td className="py-2">1 cm² = 100 mm²</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted mt-2">
          Faktor 100 mellem hver enhed (10² = 100).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Rumfangsenheder</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Enhed</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Forkortelse</th>
                <th className="text-left py-2 font-semibold text-foreground">Omregning</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kubikmeter</td>
                <td className="py-2 pr-4">m³</td>
                <td className="py-2">1 m³ = 1.000 dm³ = 1.000 liter</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kubikdecimeter / liter</td>
                <td className="py-2 pr-4">dm³ / L</td>
                <td className="py-2">1 dm³ = 1 L = 1.000 cm³</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kubikcentimeter / milliliter</td>
                <td className="py-2 pr-4">cm³ / mL</td>
                <td className="py-2">1 cm³ = 1 mL</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Centiliter</td>
                <td className="py-2 pr-4">cL</td>
                <td className="py-2">1 cL = 10 mL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted mt-2">
          Faktor 1.000 mellem m³, dm³ og cm³ (10³ = 1.000).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Masseenheder</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Enhed</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Forkortelse</th>
                <th className="text-left py-2 font-semibold text-foreground">Omregning</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Ton</td>
                <td className="py-2 pr-4">t</td>
                <td className="py-2">1 t = 1.000 kg</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Kilogram</td>
                <td className="py-2 pr-4">kg</td>
                <td className="py-2">1 kg = 1.000 g</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Gram</td>
                <td className="py-2 pr-4">g</td>
                <td className="py-2">1 g = 1.000 mg</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Milligram</td>
                <td className="py-2 pr-4">mg</td>
                <td className="py-2">1 mg = 0,001 g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Massefylde</h2>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Massefylde (densitet)</p>
          <p className="math-formula text-lg">
            &rho; = m / V
          </p>
          <p className="text-sm text-muted mt-1">
            &rho; = massefylde (fx kg/dm³), m = masse, V = rumfang.
          </p>
        </div>
        <p className="text-muted mt-3">
          Vands massefylde er ca. 1 kg/dm³ = 1.000 kg/m³.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Fart</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Fart</p>
            <p className="math-formula text-lg">
              fart = afstand / tid
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Omregning km/t til m/s</p>
            <p className="math-formula text-lg">
              1 km/t = 1.000 m / 3.600 s &asymp; 0,278 m/s
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Omregning m/s til km/t</p>
            <p className="math-formula text-lg">
              1 m/s = 3,6 km/t
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="maaleenheder" />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Enhedsomregner" description="Vælg en kategori (længde, areal, rumfang, masse), skriv et tal, og se det omregnet til alle andre enheder med det samme." icon="📏" type="converter" />
      </section>

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
            href="/emner/geometri/rumfang"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Rumfang og overfladeareal &rarr;
          </Link>
          <Link
            href="/fagord#massefylde"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Massefylde
          </Link>
          <Link
            href="/fagord#fart"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Fart
          </Link>
        </div>
      </section>
    </div>
  );
}
