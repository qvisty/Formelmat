import Link from "next/link";
import { EquationBalancer } from "@/components/EquationBalancer";
import { ThemedExample } from "@/components/ThemedExample";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Ligninger – Formelmat",
  description:
    "Regneregler for ligninger, grafisk løsning, to ligninger med to ubekendte og uligheder.",
};

export default function LigningerPage() {
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
        <span className="text-foreground">Ligninger</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Ligninger</h1>

      <p className="text-muted mb-6 max-w-2xl">
        En ligning er som en v&aelig;gt i balance &ndash; det, der st&aring;r p&aring; den ene side af lighedstegnet, skal v&aelig;re lige s&aring; meget v&aelig;rd som den anden side. Her l&aelig;rer du at finde den ubekendte (ofte x) ved at holde balancen.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Regneregler for ligninger</h2>
        <p className="text-muted mb-4">
          Man må gøre det samme på begge sider af lighedstegnet:
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Lægge til / trække fra</p>
            <p className="math-formula text-lg">
              Hvis a = b, så er a + c = b + c
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Gange / dividere</p>
            <p className="math-formula text-lg">
              Hvis a = b, så er a &middot; c = b &middot; c &nbsp; (c &ne; 0)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Opløfte i potens / tage rod</p>
            <p className="math-formula text-lg">
              Hvis a = b, så er a² = b²
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel: Løs en ligning</h2>
        <div className="rounded-xl border border-border p-6 bg-surface">
          <div className="space-y-2">
            <p className="math-formula">3x + 5 = 20</p>
            <p className="text-sm text-muted">Træk 5 fra på begge sider:</p>
            <p className="math-formula">3x = 15</p>
            <p className="text-sm text-muted">Divider med 3 på begge sider:</p>
            <p className="math-formula">x = 5</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Grafisk løsning</h2>
        <p className="text-muted mb-4">
          En ligning kan løses grafisk ved at tegne grafen for hvert udtryk og
          aflæse skæringspunktet.
        </p>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground">Fremgangsmåde</h3>
          <ol className="text-sm text-muted mt-2 space-y-1 list-decimal list-inside">
            <li>Omskriv ligningen, så der kun er x på den ene side.</li>
            <li>Tegn graferne for venstresiden og højresiden.</li>
            <li>
              Aflæs x-værdien i skæringspunktet &ndash; det er løsningen.
            </li>
          </ol>
        </div>
        <div className="formula-box mt-3">
          <p className="text-sm text-muted mb-1">Eksempel</p>
          <p className="math-formula text-lg">
            2x + 1 = 7 &nbsp;&rArr;&nbsp; Tegn y = 2x + 1 og y = 7
          </p>
          <p className="text-sm text-muted mt-1">
            Skæringspunktet (3, 7) giver løsningen x = 3.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          To ligninger med to ubekendte
        </h2>
        <p className="text-muted mb-4">
          Et ligningssystem med to ligninger og to ubekendte kan løses ved
          substitution, lige store koefficienters metode eller grafisk.
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Generelt ligningssystem</p>
          <p className="math-formula text-lg">
            a<sub>1</sub>x + b<sub>1</sub>y = c<sub>1</sub>
          </p>
          <p className="math-formula text-lg">
            a<sub>2</sub>x + b<sub>2</sub>y = c<sub>2</sub>
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Substitution</h3>
            <p className="text-sm text-muted mt-1">
              Isoler den ene ubekendte i den ene ligning og indsæt udtrykket i
              den anden ligning.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Lige store koefficienter
            </h3>
            <p className="text-sm text-muted mt-1">
              Gang ligningerne med tal, så en ubekendt har samme koefficient,
              og træk ligningerne fra hinanden.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4 sm:col-span-2">
            <h3 className="font-semibold text-foreground">Grafisk løsning</h3>
            <p className="text-sm text-muted mt-1">
              Tegn graferne for begge ligninger. Skæringspunktet er løsningen
              (x, y).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Uligheder</h2>
        <p className="text-muted mb-4">
          En ulighed er som en ligning, men med &lt;, &gt;, &le; eller &ge; i
          stedet for =. De fleste regneregler gælder stadig, men:
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Vigtig regel</p>
          <p className="math-formula text-lg">
            Når man ganger eller dividerer med et negativt tal, vendes
            ulighedstegnet.
          </p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-surface mt-4">
          <p className="font-semibold text-foreground mb-2">Eksempel</p>
          <div className="space-y-2">
            <p className="math-formula">&minus;2x &gt; 6</p>
            <p className="text-sm text-muted">
              Divider med &minus;2 (og vend tegnet):
            </p>
            <p className="math-formula">x &lt; &minus;3</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="ligninger" />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <EquationBalancer />
      </section>

      <EverydayExplanation items={hverdagsforklaringer["ligninger"]} />

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
            href="/emner/tal-og-algebra/formler-og-udtryk"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Formler og udtryk &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/regnestrategier"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Regnestrategier &rarr;
          </Link>
          <Link
            href="/emner/geometri/koordinatsystem"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📐 Koordinatsystem &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
