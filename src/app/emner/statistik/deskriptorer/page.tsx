import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { ThemedExample } from "@/components/ThemedExample";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Deskriptorer – Formelmat",
  description:
    "Typetal, middeltal, median, variationsbredde og kvartilsæt. Beregning og eksempler.",
};

export default function DeskriptorerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Forside
        </Link>
        <span>/</span>
        <Link
          href="/emner/statistik"
          className="hover:text-primary transition-colors"
        >
          Statistik og sandsynlighed
        </Link>
        <span>/</span>
        <span className="text-foreground">Deskriptorer</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Deskriptorer
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Deskriptorer er nøgletal, der giver dig et hurtigt overblik over et datasæt – fx gennemsnittet, medianen og variationsbredden. I stedet for at kigge på alle tallene, kan du beskrive dem med få vigtige værdier.
      </p>

      {/* Eksempel-datasæt */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel-datasæt</h2>
        <p className="text-muted mb-3">
          Vi bruger dette datasæt med 11 observationer i alle eksemplerne nedenfor:
        </p>
        <p className="font-mono text-sm text-foreground bg-surface rounded-lg p-3 border border-border">
          2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 12
        </p>
        <p className="text-sm text-muted mt-2">
          Datasættet er allerede ordnet fra mindste til største.
        </p>
      </section>

      {/* Typetal */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Typetal</h2>
        <p className="text-muted mb-3">
          <strong>Typetallet</strong> er den værdi, der forekommer flest gange
          (har den største hyppighed). Et datasæt kan have flere typetal.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Typetal</p>
          <p className="math-formula text-lg">
            Den værdi med størst hyppighed
          </p>
        </div>
        <p className="text-muted text-sm">
          <strong>Eksempel:</strong> Værdien 5 forekommer 3 gange &ndash; mere end nogen anden værdi.
          Typetallet er <strong>5</strong>.
        </p>
      </section>

      {/* Middeltal */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Middeltal (gennemsnit)</h2>
        <p className="text-muted mb-3">
          <strong>Middeltallet</strong> beregnes ved at lægge alle værdier sammen
          og dividere med antallet af observationer.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Middeltal</p>
          <p className="math-formula text-lg">
            middeltal = (x₁ + x₂ + ... + xₙ) / n
          </p>
        </div>
        <p className="text-muted text-sm">
          <strong>Eksempel:</strong> (2 + 3 + 4 + 4 + 5 + 5 + 5 + 6 + 7 + 8 + 12) / 11 = 61 / 11 &asymp; <strong>5,5</strong>
        </p>
      </section>

      {/* Median */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Median</h2>
        <p className="text-muted mb-3">
          <strong>Medianen</strong> er den midterste værdi, når datasættet er
          ordnet. Ved et lige antal observationer er medianen gennemsnittet af de
          to midterste værdier.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Median (ulige antal n)</p>
          <p className="math-formula text-lg">
            median = observation nr. (n + 1) / 2
          </p>
        </div>
        <p className="text-muted text-sm">
          <strong>Eksempel:</strong> Med 11 observationer er medianen den 6.
          observation: <strong>5</strong>.
        </p>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["deskriptorer"][0]} />

      {/* Størsteværdi, mindsteværdi, variationsbredde */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Størsteværdi, mindsteværdi og variationsbredde</h2>
        <p className="text-muted mb-3">
          <strong>Størsteværdien</strong> er den største observation, og{" "}
          <strong>mindsteværdien</strong> er den mindste.{" "}
          <strong>Variationsbredden</strong> er forskellen mellem dem.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Variationsbredde</p>
          <p className="math-formula text-lg">
            variationsbredde = størsteværdi &minus; mindsteværdi
          </p>
        </div>
        <p className="text-muted text-sm">
          <strong>Eksempel:</strong> Størsteværdi = 12, mindsteværdi = 2.
          Variationsbredde = 12 &minus; 2 = <strong>10</strong>.
        </p>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["deskriptorer"][1]} />

      {/* Kvartilsæt */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kvartilsæt</h2>
        <p className="text-muted mb-3">
          <strong>Kvartilsættet</strong> består af tre tal &ndash; Q1, medianen
          og Q3 &ndash; der deler det ordnede datasæt i fire lige store dele.
        </p>
        <div className="space-y-3 mb-4">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Nedre kvartil (Q1)</p>
            <p className="math-formula text-lg">
              Medianen af den nedre halvdel af datasættet
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Øvre kvartil (Q3)</p>
            <p className="math-formula text-lg">
              Medianen af den øvre halvdel af datasættet
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Kvartilbredde</p>
            <p className="math-formula text-lg">
              kvartilbredde = Q3 &minus; Q1
            </p>
          </div>
        </div>
        <p className="text-muted text-sm mb-2">
          <strong>Eksempel:</strong> Datasæt: 2, 3, 4, 4, 5, <strong>5</strong>, 5, 6, 7, 8, 12
        </p>
        <ul className="text-muted text-sm list-disc list-inside space-y-1">
          <li>Median = 5 (den 6. observation)</li>
          <li>Nedre halvdel: 2, 3, 4, 4, 5 &rarr; Q1 = <strong>4</strong></li>
          <li>Øvre halvdel: 5, 6, 7, 8, 12 &rarr; Q3 = <strong>7</strong></li>
          <li>Kvartilsæt: (4, 5, 7)</li>
          <li>Kvartilbredde: 7 &minus; 4 = <strong>3</strong></li>
        </ul>
      </section>

      {/* Oversigt */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Oversigt over eksemplet</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Deskriptor</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Værdi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Typetal</td>
                <td className="text-center py-2 px-3">5</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Middeltal</td>
                <td className="text-center py-2 px-3">&asymp; 5,5</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Median</td>
                <td className="text-center py-2 px-3">5</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Mindsteværdi</td>
                <td className="text-center py-2 px-3">2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Størsteværdi</td>
                <td className="text-center py-2 px-3">12</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Variationsbredde</td>
                <td className="text-center py-2 px-3">10</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Q1</td>
                <td className="text-center py-2 px-3">4</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Q3</td>
                <td className="text-center py-2 px-3">7</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Kvartilbredde</td>
                <td className="text-center py-2 px-3">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="statistik" />
      </section>

      {/* Prøv selv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Deskriptor-beregner" description="Skriv dine tal, og se typetal, middeltal, median, kvartilsæt og variationsbredde beregnet med det samme. Inkl. boksplot." icon="📊" type="calculator" />
      </section>

      {/* Se også */}
      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/statistik/datasaet"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Datasæt og tabeller &rarr;
          </Link>
          <Link
            href="/emner/statistik/diagrammer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Diagrammer &rarr;
          </Link>
          <Link
            href="/fagord#typetal"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Typetal
          </Link>
          <Link
            href="/fagord#middeltal"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Middeltal
          </Link>
          <Link
            href="/fagord#kvartilsæt"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Kvartilsæt
          </Link>
        </div>
      </section>
    </div>
  );
}
