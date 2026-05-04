import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";

export const metadata = {
  title: "Kombinatorik – Formelmat",
  description:
    "Tælleprincipper, produktreglen, permutationer, kombinationer og fakultet.",
};

export default function KombinatorikPage() {
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
        <span className="text-foreground">Kombinatorik</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Kombinatorik</h1>

      <p className="text-muted mb-6 max-w-2xl">
        Kombinatorik handler om at tælle &ndash; hvor mange måder kan du vælge,
        ordne eller sammensætte ting på? Det er grundlaget for
        sandsynlighedsregning og dukker op overalt fra koder til holdopstillinger.
      </p>

      {/* Produktreglen */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Produktreglen (multiplikationsprincippet)</h2>
        <p className="text-muted mb-3">
          Hvis du har <em>m</em> muligheder i første valg og <em>n</em> muligheder
          i andet valg, er der i alt <em>m &middot; n</em> kombinerede muligheder.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Produktreglen</p>
          <p className="math-formula text-lg">
            Antal muligheder = m<sub>1</sub> &middot; m<sub>2</sub> &middot; &hellip; &middot; m<sub>k</sub>
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> Du vælger en is med 3 smagsvarianter og
            2 slags vafler. Antal muligheder: 3 &middot; 2 = 6.
          </p>
        </div>
      </section>

      {/* Additionsreglen */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Additionsreglen</h2>
        <p className="text-muted mb-3">
          Hvis du vælger <em>enten</em> fra gruppe A (m muligheder) <em>eller</em> fra
          gruppe B (n muligheder), og grupperne ikke overlapper, er der m + n muligheder.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Additionsreglen</p>
          <p className="math-formula text-lg">
            Antal muligheder = m + n
          </p>
        </div>
      </section>

      {/* Fakultet */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Fakultet</h2>
        <p className="text-muted mb-3">
          <strong>n!</strong> (n fakultet) er produktet af alle hele tal fra 1 til n.
          Det tæller antallet af måder at ordne n ting på.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Fakultet</p>
          <p className="math-formula text-lg">
            n! = n &middot; (n &minus; 1) &middot; (n &minus; 2) &middot; &hellip; &middot; 2 &middot; 1
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse mt-3">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">n</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">n!</th>
              </tr>
            </thead>
            <tbody>
              {[
                [0, 1], [1, 1], [2, 2], [3, 6], [4, 24], [5, 120], [6, 720], [7, 5040], [10, 3628800],
              ].map(([n, f]) => (
                <tr key={n} className="border-b border-border">
                  <td className="py-2 px-3">{n}</td>
                  <td className="text-center py-2 px-3">{f?.toLocaleString("da-DK")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted mt-2">
          Per definition er 0! = 1.
        </p>
      </section>

      {/* Permutationer */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Permutationer (ordnede valg)</h2>
        <p className="text-muted mb-3">
          En <strong>permutation</strong> er en ordnet udvælgelse. Rækkefølgen
          har betydning &ndash; ABC er ikke det samme som BAC.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Permutationer: vælg r fra n (ordnet)</p>
          <p className="math-formula text-lg">
            P(n, r) = n! / (n &minus; r)!
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> Hvor mange måder kan 3 personer stille sig
            i kø ud af 5? P(5, 3) = 5! / 2! = 120 / 2 = 60.
          </p>
        </div>
      </section>

      {/* Kombinationer */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kombinationer (uordnede valg)</h2>
        <p className="text-muted mb-3">
          En <strong>kombination</strong> er en uordnet udvælgelse. Rækkefølgen
          er ligegyldig &ndash; &#123;A, B, C&#125; er det samme som &#123;C, A, B&#125;.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Kombinationer: vælg r fra n (uordnet)</p>
          <p className="math-formula text-lg">
            K(n, r) = n! / (r! &middot; (n &minus; r)!)
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> Hvor mange grupper på 2 kan laves af 5
            personer? K(5, 2) = 5! / (2! &middot; 3!) = 120 / 12 = 10.
          </p>
        </div>
      </section>

      {/* Permutation vs kombination */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Hvornår permutation vs. kombination?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Brug permutation</h3>
            <p className="text-sm text-muted mt-1">
              Når rækkefølgen betyder noget: koder, placeringer, rækkefølge i kø.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Brug kombination</h3>
            <p className="text-sm text-muted mt-1">
              Når rækkefølgen er ligegyldig: hold, grupper, udvalg, lotteri.
            </p>
          </div>
        </div>
      </section>

      {/* Interaktiv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder
          title="Kombinatorik-beregner"
          description="Indtast n og r, og se permutationer og kombinationer beregnet med mellemregninger."
          icon="🎲"
          type="calculator"
        />
      </section>

      {/* Se også */}
      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/statistik/sandsynlighed"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Sandsynlighed &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/maengdelaere"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Mængdelære &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/talfolger"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Talfølger &rarr;
          </Link>
          <Link
            href="/fagord#fakultet"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Fakultet
          </Link>
        </div>
      </section>
    </div>
  );
}
