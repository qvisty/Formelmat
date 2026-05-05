import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { ThemedExample } from "@/components/ThemedExample";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Sandsynlighed – Formelmat",
  description:
    "Statistisk og teoretisk sandsynlighed, udfaldsrum, hændelse, tælletræ og chancetræ.",
};

export default function SandsynlighedPage() {
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
        <span className="text-foreground">Sandsynlighed</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Sandsynlighed
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Hvor stor er chancen for at slå en sekser? Eller at det regner i morgen? Sandsynlighed handler om at sætte tal på, hvor sandsynligt noget er – fra 0 (umuligt) til 1 (helt sikkert).
      </p>

      {/* Grundbegreber */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Grundbegreber</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Udfaldsrum</h3>
            <p className="text-sm text-muted mt-1">
              Mængden af alle mulige udfald i et forsøg. Betegnes ofte U.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Hændelse</h3>
            <p className="text-sm text-muted mt-1">
              En delmængde af udfaldsrummet &ndash; de udfald man er
              interesseret i. Betegnes ofte H.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Gunstige udfald</h3>
            <p className="text-sm text-muted mt-1">
              De udfald i udfaldsrummet, der opfylder den ønskede hændelse.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Mulige udfald</h3>
            <p className="text-sm text-muted mt-1">
              Det samlede antal udfald i udfaldsrummet.
            </p>
          </div>
        </div>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["sandsynlighed"][0]} />

      {/* Statistisk sandsynlighed */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Statistisk sandsynlighed</h2>
        <p className="text-muted mb-4">
          <strong>Statistisk sandsynlighed</strong> bygger på observationer fra
          et eksperiment eller en undersøgelse. Man beregner frekvensen af den
          hændelse, man er interesseret i.
        </p>
        <div className="formula-box mb-4">
          <p className="text-sm text-muted mb-1">Statistisk sandsynlighed</p>
          <p className="math-formula text-lg">
            P(H) = antal gange H indtræffer / antal forsøg
          </p>
        </div>
        <p className="text-muted text-sm">
          <strong>Eksempel:</strong> Man kaster en mønt 100 gange og får plat 47
          gange. Den statistiske sandsynlighed for plat er: P(plat) = 47/100 =
          0,47.
        </p>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["sandsynlighed"][1]} />

      {/* Teoretisk sandsynlighed */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Teoretisk sandsynlighed</h2>
        <p className="text-muted mb-4">
          <strong>Teoretisk sandsynlighed</strong> beregnes ud fra logisk
          ræsonnement, når alle udfald er lige sandsynlige. Man tæller de
          gunstige udfald og dividerer med det samlede antal mulige udfald.
        </p>
        <div className="formula-box mb-4">
          <p className="text-sm text-muted mb-1">Teoretisk sandsynlighed</p>
          <p className="math-formula text-lg">
            P(H) = antal gunstige udfald / antal mulige udfald
          </p>
        </div>
      </section>

      {/* Terningeksempel */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel: Terningkast</h2>
        <p className="text-muted mb-4">
          En almindelig terning har 6 sider med tallene 1&ndash;6. Alle udfald
          er lige sandsynlige.
        </p>
        <div className="space-y-3 mb-4">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Udfaldsrum</p>
            <p className="math-formula text-lg">
              U = &#123;1, 2, 3, 4, 5, 6&#125;
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">P(slå en 4&apos;er)</p>
            <p className="math-formula text-lg">
              P(4) = 1/6 &asymp; 0,167
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">P(slå et lige tal)</p>
            <p className="math-formula text-lg">
              P(lige) = 3/6 = 1/2 = 0,5
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">P(slå mindst 5)</p>
            <p className="math-formula text-lg">
              P(mindst 5) = 2/6 = 1/3 &asymp; 0,333
            </p>
          </div>
        </div>
      </section>

      {/* Mønteksempel */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel: Møntkast</h2>
        <p className="text-muted mb-4">
          En mønt har to sider: krone (K) og plat (P). Begge udfald er lige
          sandsynlige.
        </p>
        <div className="space-y-3 mb-4">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Udfaldsrum</p>
            <p className="math-formula text-lg">
              U = &#123;K, P&#125;
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">P(krone)</p>
            <p className="math-formula text-lg">P(K) = 1/2 = 0,5</p>
          </div>
        </div>
        <p className="text-muted mb-3">
          <strong>To møntkast:</strong> Udfaldsrummet for to kast er:
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Udfaldsrum for to møntkast</p>
          <p className="math-formula text-lg">
            U = &#123;KK, KP, PK, PP&#125;
          </p>
        </div>
        <p className="text-muted text-sm">
          P(mindst &eacute;n krone) = 3/4 = 0,75 &mdash; kun &eacute;t udfald
          (PP) har ingen krone.
        </p>
      </section>

      {/* Tælletræ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Tælletræ</h2>
        <p className="text-muted mb-4">
          Et <strong>tælletræ</strong> er et trædiagram, der bruges til
          systematisk at tælle antallet af mulige og gunstige udfald. Man tegner
          grene for hvert valg.
        </p>
        <div className="rounded-lg border border-border p-4 bg-surface mb-4">
          <svg viewBox="0 0 320 180" className="w-full max-w-sm" role="img" aria-label="Tælletræ for to møntkast">
            {/* Niveau 0 */}
            <circle cx="160" cy="20" r="5" fill="var(--color-primary, #3b82f6)" />
            {/* Grene til niveau 1 */}
            <line x1="160" y1="25" x2="80" y2="70" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            <line x1="160" y1="25" x2="240" y2="70" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            {/* Niveau 1 */}
            <circle cx="80" cy="75" r="5" fill="var(--color-primary, #3b82f6)" />
            <text x="60" y="65" className="text-foreground fill-current" fontSize="11" fontWeight="bold">K</text>
            <circle cx="240" cy="75" r="5" fill="var(--color-primary, #3b82f6)" />
            <text x="248" y="65" className="text-foreground fill-current" fontSize="11" fontWeight="bold">P</text>
            {/* Grene til niveau 2 fra K */}
            <line x1="80" y1="80" x2="40" y2="130" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            <line x1="80" y1="80" x2="120" y2="130" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            {/* Grene til niveau 2 fra P */}
            <line x1="240" y1="80" x2="200" y2="130" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            <line x1="240" y1="80" x2="280" y2="130" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            {/* Niveau 2 blade */}
            <circle cx="40" cy="135" r="4" fill="var(--color-primary, #3b82f6)" />
            <text x="40" y="155" textAnchor="middle" className="text-foreground fill-current" fontSize="10" fontWeight="bold">KK</text>
            <circle cx="120" cy="135" r="4" fill="var(--color-primary, #3b82f6)" />
            <text x="120" y="155" textAnchor="middle" className="text-foreground fill-current" fontSize="10" fontWeight="bold">KP</text>
            <circle cx="200" cy="135" r="4" fill="var(--color-primary, #3b82f6)" />
            <text x="200" y="155" textAnchor="middle" className="text-foreground fill-current" fontSize="10" fontWeight="bold">PK</text>
            <circle cx="280" cy="135" r="4" fill="var(--color-primary, #3b82f6)" />
            <text x="280" y="155" textAnchor="middle" className="text-foreground fill-current" fontSize="10" fontWeight="bold">PP</text>
            {/* Gren-labels niveau 2 */}
            <text x="50" y="112" className="text-muted fill-current" fontSize="9">K</text>
            <text x="108" y="112" className="text-muted fill-current" fontSize="9">P</text>
            <text x="210" y="112" className="text-muted fill-current" fontSize="9">K</text>
            <text x="268" y="112" className="text-muted fill-current" fontSize="9">P</text>
          </svg>
          <p className="text-xs text-muted mt-2">
            Tælletræ for to møntkast &mdash; 4 mulige udfald
          </p>
        </div>
      </section>

      {/* Chancetræ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Chancetræ</h2>
        <p className="text-muted mb-4">
          Et <strong>chancetræ</strong> ligner et tælletræ, men her skriver man
          sandsynlighederne på grenene. Sandsynligheden for et bestemt udfald
          beregnes ved at <strong>gange</strong> sandsynlighederne langs grenene.
        </p>
        <div className="formula-box mb-4">
          <p className="text-sm text-muted mb-1">Multiplikationsreglen</p>
          <p className="math-formula text-lg">
            P(udfald) = P(gren 1) &times; P(gren 2) &times; ...
          </p>
        </div>
        <p className="text-muted mb-4">
          <strong>Eksempel:</strong> To møntkast &ndash; sandsynligheden for
          hvert udfald:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Udfald</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Beregning</th>
                <th className="text-center py-2 px-3 font-semibold text-foreground">Sandsynlighed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3">KK</td>
                <td className="py-2 px-3">1/2 &times; 1/2</td>
                <td className="text-center py-2 px-3">1/4 = 0,25</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">KP</td>
                <td className="py-2 px-3">1/2 &times; 1/2</td>
                <td className="text-center py-2 px-3">1/4 = 0,25</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">PK</td>
                <td className="py-2 px-3">1/2 &times; 1/2</td>
                <td className="text-center py-2 px-3">1/4 = 0,25</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3">PP</td>
                <td className="py-2 px-3">1/2 &times; 1/2</td>
                <td className="text-center py-2 px-3">1/4 = 0,25</td>
              </tr>
              <tr className="border-t-2 border-border font-semibold">
                <td className="py-2 px-3" colSpan={2}>Sum</td>
                <td className="text-center py-2 px-3">1,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Eksempel med terning og mønt */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel: Terning og mønt</h2>
        <p className="text-muted mb-4">
          Man kaster en terning og en mønt. Hvad er sandsynligheden for at slå
          en sekser OG krone?
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Udfaldsrum</p>
            <p className="math-formula text-lg">
              6 &times; 2 = 12 mulige udfald
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">P(6 og krone)</p>
            <p className="math-formula text-lg">
              P(6 og K) = 1/6 &times; 1/2 = 1/12 &asymp; 0,083
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="sandsynlighed" />
      </section>

      {/* Prøv selv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Sandsynlighedssimulator" description="Kast virtuelle terninger og mønter, og se hvordan den eksperimentelle sandsynlighed nærmer sig den teoretiske, jo flere kast du laver." icon="🎲" type="simulator" />
      </section>

      <EverydayExplanation {...hverdagsforklaringer["sandsynlighed"][2]} />

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
            href="/emner/statistik/diagrammer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Diagrammer &rarr;
          </Link>
          <Link
            href="/fagord#sandsynlighed"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Sandsynlighed
          </Link>
          <Link
            href="/fagord#udfaldsrum"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Udfaldsrum
          </Link>
          <Link
            href="/fagord#chancetræ"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Chancetræ
          </Link>
        </div>
      </section>
    </div>
  );
}
