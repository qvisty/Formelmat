import Link from "next/link";
import { UnitCircle } from "@/components/UnitCircle";

export const metadata = {
  title: "Enhedscirklen – Formelmat",
  description:
    "Interaktiv visualisering af sinus og cosinus på enhedscirklen.",
};

export default function EnhedscirklenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Forside
        </Link>
        <span>/</span>
        <Link
          href="/emner/trigonometri"
          className="hover:text-primary transition-colors"
        >
          Trigonometri
        </Link>
        <span>/</span>
        <span className="text-foreground">Enhedscirklen</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Enhedscirklen
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        <strong>Enhedscirklen</strong> er en cirkel med radius 1 og centrum i
        origo. Den bruges til at udvide definitionen af sinus og cosinus til alle
        vinkler – ikke kun vinkler i en retvinklet trekant. Et punkt P på
        cirklen med vinkel v har koordinaterne (cos v, sin v).
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Interaktiv enhedscirkel</h2>
        <UnitCircle />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vigtige sammenhænge</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Punkt på enhedscirklen</p>
            <p className="math-formula text-lg">P = (cos(v), sin(v))</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Grundrelationen (Pythagoras på enhedscirklen)
            </p>
            <p className="math-formula text-lg">cos²(v) + sin²(v) = 1</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Tangens via enhedscirklen</p>
            <p className="math-formula text-lg">
              tan(v) = sin(v) / cos(v)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">De fire kvadranter</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              1. kvadrant (0° – 90°)
            </h3>
            <p className="text-sm text-muted mt-1">
              sin &gt; 0, cos &gt; 0. Begge koordinater er positive.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              2. kvadrant (90° – 180°)
            </h3>
            <p className="text-sm text-muted mt-1">
              sin &gt; 0, cos &lt; 0. x er negativ, y er positiv.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              3. kvadrant (180° – 270°)
            </h3>
            <p className="text-sm text-muted mt-1">
              sin &lt; 0, cos &lt; 0. Begge koordinater er negative.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              4. kvadrant (270° – 360°)
            </h3>
            <p className="text-sm text-muted mt-1">
              sin &lt; 0, cos &gt; 0. x er positiv, y er negativ.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vigtige vinkler</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-3 text-left font-semibold">Vinkel</th>
                <th className="py-2 px-3 text-left font-semibold">
                  Radianer
                </th>
                <th className="py-2 px-3 text-left font-semibold">sin(v)</th>
                <th className="py-2 px-3 text-left font-semibold">cos(v)</th>
                <th className="py-2 px-3 text-left font-semibold">tan(v)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { deg: "0°", rad: "0", sin: "0", cos: "1", tan: "0" },
                {
                  deg: "30°",
                  rad: "π/6",
                  sin: "1/2",
                  cos: "√3/2",
                  tan: "1/√3",
                },
                {
                  deg: "45°",
                  rad: "π/4",
                  sin: "√2/2",
                  cos: "√2/2",
                  tan: "1",
                },
                {
                  deg: "60°",
                  rad: "π/3",
                  sin: "√3/2",
                  cos: "1/2",
                  tan: "√3",
                },
                {
                  deg: "90°",
                  rad: "π/2",
                  sin: "1",
                  cos: "0",
                  tan: "udef.",
                },
                {
                  deg: "180°",
                  rad: "π",
                  sin: "0",
                  cos: "-1",
                  tan: "0",
                },
                {
                  deg: "270°",
                  rad: "3π/2",
                  sin: "-1",
                  cos: "0",
                  tan: "udef.",
                },
                {
                  deg: "360°",
                  rad: "2π",
                  sin: "0",
                  cos: "1",
                  tan: "0",
                },
              ].map((row) => (
                <tr key={row.deg} className="border-b border-border/50">
                  <td className="py-2 px-3 font-medium">{row.deg}</td>
                  <td className="py-2 px-3 math-formula">{row.rad}</td>
                  <td className="py-2 px-3 math-formula">{row.sin}</td>
                  <td className="py-2 px-3 math-formula">{row.cos}</td>
                  <td className="py-2 px-3 math-formula">{row.tan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/trigonometri/retvinklet-trekant"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Den retvinklede trekant →
          </Link>
          <Link
            href="/emner/trigonometri/trigonometriske-funktioner"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Trigonometriske funktioner →
          </Link>
          <Link
            href="/fagord#radianer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Radianer
          </Link>
        </div>
      </section>
    </div>
  );
}
