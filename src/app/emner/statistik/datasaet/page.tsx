import Link from "next/link";

export const metadata = {
  title: "Datasæt og tabeller – Formelmat",
  description:
    "Data, observationer, hyppighed, frekvens, summeret hyppighed, summeret frekvens og grupperede datasæt.",
};

export default function DatasaetPage() {
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
        <span className="text-foreground">Datasæt og tabeller</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Datasæt og tabeller
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Når man laver en statistisk undersøgelse, indsamler man{" "}
        <strong>data</strong>. Hver oplysning kaldes en{" "}
        <strong>observation</strong>, og samlingen af alle observationer kaldes et{" "}
        <strong>datasæt</strong>. Data kan organiseres i tabeller for at give
        overblik.
      </p>

      {/* Hyppighed og frekvens */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Hyppighed og frekvens</h2>
        <p className="text-muted mb-4">
          <strong>Hyppighed</strong> er det antal gange, en bestemt værdi
          forekommer i datasættet. <strong>Frekvens</strong> er hyppigheden
          divideret med det samlede antal observationer &ndash; altså en andel
          mellem 0 og 1.
        </p>

        <div className="space-y-3 mb-6">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Frekvens</p>
            <p className="math-formula text-lg">
              frekvens = hyppighed / antal observationer
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Summeret hyppighed</p>
            <p className="math-formula text-lg">
              Summen af alle hyppigheder op til og med en bestemt værdi
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Summeret frekvens</p>
            <p className="math-formula text-lg">
              summeret frekvens = summeret hyppighed / antal observationer
            </p>
          </div>
        </div>
      </section>

      {/* Eksempel: Hyppighedstabel */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel: Hyppighedstabel</h2>
        <p className="text-muted mb-4">
          En klasse med 20 elever blev spurgt, hvor mange søskende de har.
          Resultaterne er:
        </p>
        <p className="text-muted mb-4 font-mono text-sm">
          0, 1, 1, 2, 1, 0, 3, 1, 2, 1, 0, 1, 2, 1, 1, 2, 0, 1, 3, 2
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Antal søskende</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Hyppighed</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Summeret hyppighed</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Frekvens</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Summeret frekvens</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">0</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">0,20</td>
                <td className="text-center py-2 px-3">0,20</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">1</td>
                <td className="text-center py-2 px-3">9</td>
                <td className="text-center py-2 px-3">13</td>
                <td className="text-center py-2 px-3">0,45</td>
                <td className="text-center py-2 px-3">0,65</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">2</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">18</td>
                <td className="text-center py-2 px-3">0,25</td>
                <td className="text-center py-2 px-3">0,90</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">3</td>
                <td className="text-center py-2 px-3">2</td>
                <td className="text-center py-2 px-3">20</td>
                <td className="text-center py-2 px-3">0,10</td>
                <td className="text-center py-2 px-3">1,00</td>
              </tr>
              <tr className="border-t-2 border-border font-semibold">
                <td className="py-2 px-3">I alt</td>
                <td className="text-center py-2 px-3">20</td>
                <td className="text-center py-2 px-3"></td>
                <td className="text-center py-2 px-3">1,00</td>
                <td className="text-center py-2 px-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Grupperede data */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Grupperede datasæt</h2>
        <p className="text-muted mb-4">
          Når datasættet indeholder mange forskellige værdier (fx højder eller
          tider), kan man opdele data i <strong>intervaller</strong> (grupper).
          Hvert interval angives typisk som fx [150; 160[, hvor den nedre grænse
          er med og den øvre er uden.
        </p>

        <p className="text-muted mb-4">
          <strong>Eksempel:</strong> 25 elevers højde i cm er grupperet i
          intervaller:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Interval (cm)</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Hyppighed</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Summeret hyppighed</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Frekvens</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Summeret frekvens</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">[150; 155[</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">0,12</td>
                <td className="text-center py-2 px-3">0,12</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">[155; 160[</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">8</td>
                <td className="text-center py-2 px-3">0,20</td>
                <td className="text-center py-2 px-3">0,32</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">[160; 165[</td>
                <td className="text-center py-2 px-3">8</td>
                <td className="text-center py-2 px-3">16</td>
                <td className="text-center py-2 px-3">0,32</td>
                <td className="text-center py-2 px-3">0,64</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">[165; 170[</td>
                <td className="text-center py-2 px-3">6</td>
                <td className="text-center py-2 px-3">22</td>
                <td className="text-center py-2 px-3">0,24</td>
                <td className="text-center py-2 px-3">0,88</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">[170; 175]</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">25</td>
                <td className="text-center py-2 px-3">0,12</td>
                <td className="text-center py-2 px-3">1,00</td>
              </tr>
              <tr className="border-t-2 border-border font-semibold">
                <td className="py-2 px-3">I alt</td>
                <td className="text-center py-2 px-3">25</td>
                <td className="text-center py-2 px-3"></td>
                <td className="text-center py-2 px-3">1,00</td>
                <td className="text-center py-2 px-3"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted text-sm">
          Ved grupperede data mister man den præcise information om hver enkelt
          observation, men man får et bedre overblik over fordelingen.
        </p>
      </section>

      {/* Se også */}
      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/statistik/deskriptorer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Deskriptorer &rarr;
          </Link>
          <Link
            href="/emner/statistik/diagrammer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Diagrammer &rarr;
          </Link>
          <Link
            href="/fagord#hyppighed"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Hyppighed
          </Link>
          <Link
            href="/fagord#frekvens"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Frekvens
          </Link>
        </div>
      </section>
    </div>
  );
}
