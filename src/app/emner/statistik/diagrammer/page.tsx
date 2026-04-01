import Link from "next/link";

export const metadata = {
  title: "Diagrammer – Formelmat",
  description:
    "Pindediagram, stolpediagram, søjlediagram, cirkeldiagram, stabeldiagram, boksplot, sumkurve og punktdiagram.",
};

export default function DiagrammerPage() {
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
        <span className="text-foreground">Diagrammer</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Diagrammer
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Diagrammer bruges til at vise data grafisk, så man hurtigt kan se
        mønstre, fordelinger og sammenhænge. Valget af diagramtype afhænger af
        datatypen og hvad man vil fremhæve.
      </p>

      {/* Pindediagram */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Pindediagram</h2>
        <p className="text-muted mb-4">
          Et <strong>pindediagram</strong> viser hyppigheden for diskrete
          værdier som lodrette streger (pinde). Bruges når data kun kan antage
          bestemte værdier (fx antal søskende).
        </p>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <svg viewBox="0 0 300 160" className="w-full max-w-sm" role="img" aria-label="Pindediagram eksempel">
            {/* Akser */}
            <line x1="40" y1="130" x2="280" y2="130" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            <line x1="40" y1="130" x2="40" y2="10" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            {/* Y-akse labels */}
            <text x="35" y="130" textAnchor="end" className="text-muted fill-current" fontSize="10">0</text>
            <text x="35" y="100" textAnchor="end" className="text-muted fill-current" fontSize="10">3</text>
            <text x="35" y="70" textAnchor="end" className="text-muted fill-current" fontSize="10">6</text>
            <text x="35" y="40" textAnchor="end" className="text-muted fill-current" fontSize="10">9</text>
            {/* Pinde */}
            <line x1="80" y1="130" x2="80" y2="90" stroke="var(--color-primary, #3b82f6)" strokeWidth="3" strokeLinecap="round" />
            <line x1="130" y1="130" x2="130" y2="40" stroke="var(--color-primary, #3b82f6)" strokeWidth="3" strokeLinecap="round" />
            <line x1="180" y1="130" x2="180" y2="80" stroke="var(--color-primary, #3b82f6)" strokeWidth="3" strokeLinecap="round" />
            <line x1="230" y1="130" x2="230" y2="110" stroke="var(--color-primary, #3b82f6)" strokeWidth="3" strokeLinecap="round" />
            {/* X-akse labels */}
            <text x="80" y="145" textAnchor="middle" className="text-muted fill-current" fontSize="10">0</text>
            <text x="130" y="145" textAnchor="middle" className="text-muted fill-current" fontSize="10">1</text>
            <text x="180" y="145" textAnchor="middle" className="text-muted fill-current" fontSize="10">2</text>
            <text x="230" y="145" textAnchor="middle" className="text-muted fill-current" fontSize="10">3</text>
          </svg>
          <p className="text-xs text-muted mt-2">Pindediagram: antal søskende</p>
        </div>
      </section>

      {/* Stolpediagram */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Stolpediagram</h2>
        <p className="text-muted mb-4">
          Et <strong>stolpediagram</strong> (vandret) viser hyppighederne som
          vandrette stolper. Godt til at sammenligne kategorier med lange navne.
        </p>
      </section>

      {/* Søjlediagram */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Søjlediagram</h2>
        <p className="text-muted mb-4">
          Et <strong>søjlediagram</strong> (lodret) viser hyppighederne som
          lodrette søjler. Bruges til grupperede data, hvor søjlerne rører
          hinanden for at vise, at intervallerne hænger sammen.
        </p>
      </section>

      {/* Cirkeldiagram */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Cirkeldiagram</h2>
        <p className="text-muted mb-4">
          Et <strong>cirkeldiagram</strong> viser fordelingen som udsnit af en
          cirkel. Størrelsen af hvert udsnit svarer til frekvensen. Vinklen
          beregnes som:
        </p>
        <div className="formula-box mb-4">
          <p className="text-sm text-muted mb-1">Vinkel i cirkeldiagram</p>
          <p className="math-formula text-lg">
            vinkel = frekvens &times; 360&deg;
          </p>
        </div>
      </section>

      {/* Stabeldiagram */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Stabeldiagram</h2>
        <p className="text-muted mb-4">
          Et <strong>stabeldiagram</strong> er et søjlediagram, hvor søjlerne er
          delt i farvede lag. Det viser både den samlede størrelse og
          fordelingen inden for hver kategori.
        </p>
      </section>

      {/* Boksplot */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Boksplot</h2>
        <p className="text-muted mb-4">
          Et <strong>boksplot</strong> viser et datasæts <em>mindsteværdi</em>,{" "}
          <em>Q1</em>, <em>median</em>, <em>Q3</em> og <em>størsteværdi</em> i
          ét diagram. Boksen går fra Q1 til Q3, og en streg markerer medianen.
        </p>

        <div className="rounded-lg border border-border p-4 bg-surface mb-4">
          <svg viewBox="0 0 400 100" className="w-full max-w-lg" role="img" aria-label="Boksplot eksempel med datasæt 2,3,4,4,5,5,5,6,7,8,12">
            {/* Tallinje */}
            <line x1="30" y1="70" x2="370" y2="70" stroke="currentColor" strokeWidth="1" className="text-border" />
            {/* Tallinje-mærker */}
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => {
              const x = 30 + ((val - 2) / 10) * 340;
              return (
                <g key={val}>
                  <line x1={x} y1={67} x2={x} y2={73} stroke="currentColor" strokeWidth="1" className="text-border" />
                  <text x={x} y={85} textAnchor="middle" className="text-muted fill-current" fontSize="10">{val}</text>
                </g>
              );
            })}

            {/* Boksplot-elementer: min=2, Q1=4, median=5, Q3=7, max=12 */}
            {/* Whisker venstre: min til Q1 */}
            <line x1={30 + (0/10)*340} y1={40} x2={30 + (2/10)*340} y2={40} stroke="var(--color-primary, #3b82f6)" strokeWidth="2" />
            {/* Min-streg */}
            <line x1={30 + (0/10)*340} y1={32} x2={30 + (0/10)*340} y2={48} stroke="var(--color-primary, #3b82f6)" strokeWidth="2" />
            {/* Boks: Q1 til Q3 */}
            <rect x={30 + (2/10)*340} y={28} width={(5/10)*340} height={24} fill="var(--color-primary, #3b82f6)" fillOpacity="0.15" stroke="var(--color-primary, #3b82f6)" strokeWidth="2" rx="2" />
            {/* Median-streg */}
            <line x1={30 + (3/10)*340} y1={28} x2={30 + (3/10)*340} y2={52} stroke="var(--color-primary, #3b82f6)" strokeWidth="3" />
            {/* Whisker højre: Q3 til max */}
            <line x1={30 + (7/10)*340} y1={40} x2={30 + (10/10)*340} y2={40} stroke="var(--color-primary, #3b82f6)" strokeWidth="2" />
            {/* Max-streg */}
            <line x1={30 + (10/10)*340} y1={32} x2={30 + (10/10)*340} y2={48} stroke="var(--color-primary, #3b82f6)" strokeWidth="2" />

            {/* Labels */}
            <text x={30} y={22} textAnchor="middle" className="text-muted fill-current" fontSize="9">min</text>
            <text x={30 + (2/10)*340} y={22} textAnchor="middle" className="text-muted fill-current" fontSize="9">Q1</text>
            <text x={30 + (3/10)*340} y={22} textAnchor="middle" className="text-muted fill-current" fontSize="9">median</text>
            <text x={30 + (5/10)*340} y={22} textAnchor="middle" className="text-muted fill-current" fontSize="9">Q3</text>
            <text x={30 + (10/10)*340} y={22} textAnchor="middle" className="text-muted fill-current" fontSize="9">max</text>
          </svg>
          <p className="text-xs text-muted mt-2">
            Boksplot for datasæt: 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 12 &mdash;
            min=2, Q1=4, median=5, Q3=7, max=12
          </p>
        </div>
      </section>

      {/* Sumkurve */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Sumkurve</h2>
        <p className="text-muted mb-4">
          En <strong>sumkurve</strong> viser den summerede frekvens for et
          grupperet datasæt. X-aksen viser intervalgrænser, og y-aksen viser den
          summerede frekvens (fra 0 til 1). Kurven er altid stigende.
        </p>
        <p className="text-muted mb-3">
          Fra sumkurven kan man aflæse <strong>medianen</strong> (ved summeret
          frekvens = 0,5), <strong>Q1</strong> (ved 0,25) og{" "}
          <strong>Q3</strong> (ved 0,75).
        </p>
      </section>

      {/* Punktdiagram */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Punktdiagram</h2>
        <p className="text-muted mb-4">
          Et <strong>punktdiagram</strong> (scatter plot) bruges til at vise
          sammenhængen mellem to variable. Hver observation afsættes som et
          punkt med (x, y)-koordinater. Punktdiagrammet kan vise om der er en
          positiv, negativ eller ingen sammenhæng.
        </p>
      </section>

      {/* Oversigt */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Oversigt: Hvornår bruger man hvad?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Diagramtype</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Bruges til</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Pindediagram</td>
                <td className="py-2 px-3">Diskrete data (fx antal)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Stolpediagram</td>
                <td className="py-2 px-3">Kategorier (vandrette stolper)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Søjlediagram</td>
                <td className="py-2 px-3">Grupperede / intervaldata (lodrette søjler)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Cirkeldiagram</td>
                <td className="py-2 px-3">Fordeling i procent / andele</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Stabeldiagram</td>
                <td className="py-2 px-3">Sammenligning med underkategorier</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Boksplot</td>
                <td className="py-2 px-3">Spredning og kvartiler</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Sumkurve</td>
                <td className="py-2 px-3">Summeret frekvens, aflæse median/kvartiler</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">Punktdiagram</td>
                <td className="py-2 px-3">Sammenhæng mellem to variable</td>
              </tr>
            </tbody>
          </table>
        </div>
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
            href="/emner/statistik/deskriptorer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Deskriptorer &rarr;
          </Link>
          <Link
            href="/fagord#boksplot"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Boksplot
          </Link>
          <Link
            href="/fagord#sumkurve"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Sumkurve
          </Link>
        </div>
      </section>
    </div>
  );
}
