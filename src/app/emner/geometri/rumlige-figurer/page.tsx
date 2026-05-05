import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Rumlige figurer – Formelmat",
  description:
    "Polyedre, prismer, kuber, cylindere, kegler, kugler, pyramider og de fem regulære polyedre.",
};

export default function RumligeFigurerPage() {
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
        <span className="text-foreground">Rumlige figurer</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Rumlige figurer
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Rumlige figurer har tre dimensioner – længde, bredde og højde. Du kender dem fra hverdagen: en dåse er en cylinder, en bold er en kugle, og en terning er en kube.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Polyedre</h2>
        <p className="text-muted mb-3">
          Et <strong>polyeder</strong> er en rumlig figur, der er begrænset af
          polygoner (flader). Det har hjørner, kanter og sideflader. For alle
          konvekse polyedre gælder:
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Eulers polyederformel</p>
          <p className="math-formula text-lg">
            H + F = K + 2
          </p>
          <p className="text-sm text-muted mt-1">
            H = hjørner, K = kanter, F = flader.
          </p>
        </div>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["rumlige-figurer"][0]} />

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Almindelige rumlige figurer</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Prisme</h3>
            <p className="text-sm text-muted mt-1">
              To kongruente, parallelle grundflader forbundet af rektangler.
              V = G &middot; h, hvor G er grundfladens areal.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Kube (terning)</h3>
            <p className="text-sm text-muted mt-1">
              Alle seks flader er kongruente kvadrater. V = a³, O = 6a².
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Cylinder</h3>
            <p className="text-sm text-muted mt-1">
              To parallelle, cirkulære grundflader.
              V = &pi; &middot; r² &middot; h.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Kegle</h3>
            <p className="text-sm text-muted mt-1">
              Én cirkulær grundflade og en spids.
              V = ⅓ &middot; &pi; &middot; r² &middot; h.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Kugle</h3>
            <p className="text-sm text-muted mt-1">
              Alle punkter på overfladen har samme afstand til centrum.
              V = ⁴⁄₃ &middot; &pi; &middot; r³, O = 4 &middot; &pi; &middot; r².
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Pyramide</h3>
            <p className="text-sm text-muted mt-1">
              Én grundflade og trekantede sideflader, der mødes i en spids.
              V = ⅓ &middot; G &middot; h.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">De fem regulære polyedre</h2>
        <p className="text-muted mb-4">
          Der findes præcis fem regulære polyedre (platoniske legemer), hvor
          alle flader er ens regulære polygoner:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Navn</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Flader</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Fladetype</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Hjørner</th>
                <th className="text-left py-2 font-semibold text-foreground">Kanter</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Tetraeder</td>
                <td className="py-2 pr-4">4</td>
                <td className="py-2 pr-4">Trekanter</td>
                <td className="py-2 pr-4">4</td>
                <td className="py-2">6</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Heksaeder (kube)</td>
                <td className="py-2 pr-4">6</td>
                <td className="py-2 pr-4">Kvadrater</td>
                <td className="py-2 pr-4">8</td>
                <td className="py-2">12</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Oktaeder</td>
                <td className="py-2 pr-4">8</td>
                <td className="py-2 pr-4">Trekanter</td>
                <td className="py-2 pr-4">6</td>
                <td className="py-2">12</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Dodekaeder</td>
                <td className="py-2 pr-4">12</td>
                <td className="py-2 pr-4">Femkanter</td>
                <td className="py-2 pr-4">20</td>
                <td className="py-2">30</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Ikosaeder</td>
                <td className="py-2 pr-4">20</td>
                <td className="py-2 pr-4">Trekanter</td>
                <td className="py-2 pr-4">12</td>
                <td className="py-2">30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="3D-figur-visning" description="Roter og zoom ind på rumlige figurer. Se hjørner, kanter og sideflader, og forstå forskellen mellem de forskellige typer." icon="🎲" type="visualizer" />
      </section>

      <EverydayExplanation {...hverdagsforklaringer["rumlige-figurer"][1]} />

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/rumfang"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Rumfang og overfladeareal &rarr;
          </Link>
          <Link
            href="/emner/geometri/areal-og-omkreds"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Areal og omkreds &rarr;
          </Link>
          <Link
            href="/fagord#polyeder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Polyeder
          </Link>
        </div>
      </section>
    </div>
  );
}
