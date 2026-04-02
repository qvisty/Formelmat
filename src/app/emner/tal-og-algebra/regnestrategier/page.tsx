import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";

export const metadata = {
  title: "Regnestrategier – Formelmat",
  description:
    "De fire regningsarter, regnehierarki, negative tal, brøker og procentregning.",
};

export default function RegnestrategierPage() {
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
        <span className="text-foreground">Regnestrategier</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Regnestrategier
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        De fire regningsarter &ndash; addition, subtraktion, multiplikation og division &ndash; er grundlaget for al matematik. Her finder du reglerne for, i hvilken r&aelig;kkef&oslash;lge du skal regne, og hvordan du regner med negative tal og br&oslash;ker.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">De fire regningsarter</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Addition (+)</p>
            <p className="math-formula text-lg">a + b = summen</p>
            <p className="text-sm text-muted mt-1">
              At lægge tal sammen. Leddene kaldes addender.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Subtraktion (&minus;)</p>
            <p className="math-formula text-lg">a &minus; b = differensen</p>
            <p className="text-sm text-muted mt-1">
              At trække tal fra hinanden.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Multiplikation (&middot;)</p>
            <p className="math-formula text-lg">a &middot; b = produktet</p>
            <p className="text-sm text-muted mt-1">
              At gange tal med hinanden. Tallene kaldes faktorer.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Division (: eller /)</p>
            <p className="math-formula text-lg">a : b = kvotienten</p>
            <p className="text-sm text-muted mt-1">
              At dele tal. Man kan ikke dividere med 0.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Regnehierarkiet</h2>
        <p className="text-muted mb-4">
          Når et udtryk indeholder flere regningsarter, skal man følge denne
          rækkefølge:
        </p>
        <div className="rounded-xl border border-border p-6 bg-surface">
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <p className="font-semibold text-foreground">Parenteser</p>
                <p className="text-sm text-muted">
                  Regn altid det, der står i parenteser, først.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  Potenser og rødder
                </p>
                <p className="text-sm text-muted">
                  Derefter beregnes potenser og rødder.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  Multiplikation og division
                </p>
                <p className="text-sm text-muted">
                  Derefter gange og dividere, fra venstre mod højre.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  Addition og subtraktion
                </p>
                <p className="text-sm text-muted">
                  Til sidst plus og minus, fra venstre mod højre.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="formula-box mt-4">
          <p className="text-sm text-muted mb-1">Eksempel</p>
          <p className="math-formula text-lg">
            2 + 3 &middot; 4 = 2 + 12 = 14
          </p>
          <p className="text-sm text-muted mt-1">
            (Man ganger først, derefter lægger man sammen)
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Regler for negative tal</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Plus og minus</p>
            <p className="math-formula text-lg">
              (+) &middot; (+) = (+) &nbsp;&nbsp; (&minus;) &middot; (&minus;) = (+)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Blanding</p>
            <p className="math-formula text-lg">
              (+) &middot; (&minus;) = (&minus;) &nbsp;&nbsp; (&minus;) &middot; (+) = (&minus;)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Subtraktion af negativt tal</p>
            <p className="math-formula text-lg">
              a &minus; (&minus;b) = a + b
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Brøkregning</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Addition af brøker</p>
            <p className="math-formula text-lg">
              a/b + c/d = (a &middot; d + c &middot; b) / (b &middot; d)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Subtraktion af brøker</p>
            <p className="math-formula text-lg">
              a/b &minus; c/d = (a &middot; d &minus; c &middot; b) / (b &middot; d)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Multiplikation af brøker</p>
            <p className="math-formula text-lg">
              a/b &middot; c/d = (a &middot; c) / (b &middot; d)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Division af brøker</p>
            <p className="math-formula text-lg">
              (a/b) : (c/d) = (a &middot; d) / (b &middot; c)
            </p>
            <p className="text-sm text-muted mt-1">
              Man ganger med den omvendte brøk.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Procentregning</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Finde procent af et tal</p>
            <p className="math-formula text-lg">
              p% af a = a &middot; p/100
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Procentvis stigning</p>
            <p className="math-formula text-lg">
              ny værdi = gammel værdi &middot; (1 + p/100)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Procentvis fald</p>
            <p className="math-formula text-lg">
              ny værdi = gammel værdi &middot; (1 &minus; p/100)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Regnehierarki-visualisering" description="Indtast et regneudtryk og se trin for trin, hvordan det udregnes i den rigtige rækkefølge. Parenteser først, så potenser, så gange/dividere, til sidst plus/minus." icon="🧮" type="visualizer" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/tal-og-algebra/tal"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Tal &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/procent-og-promille"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Procent og promille &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/potenser-og-roedder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Potenser og rødder &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/ligninger"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Ligninger &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
