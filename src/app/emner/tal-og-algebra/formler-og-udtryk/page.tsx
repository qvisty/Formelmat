import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";

export const metadata = {
  title: "Formler og algebraiske udtryk – Formelmat",
  description:
    "Omskrivninger af flerleddede størrelser, kvadratsætninger og faktorisering.",
};

export default function FormlerOgUdtrykPage() {
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
        <span className="text-foreground">Formler og udtryk</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Formler og algebraiske udtryk
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Algebraiske udtryk er en slags matematisk sprog, hvor bogstaver st&aring;r for tal. Her l&aelig;rer du at samle, gange ud, s&aelig;tte i parentes og forenkle udtryk &ndash; det er n&oslash;glen til at l&oslash;se ligninger og forst&aring; formler.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Grundlæggende regler</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Samle ens led</p>
            <p className="math-formula text-lg">
              3a + 5a = 8a
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Multiplikation</p>
            <p className="math-formula text-lg">
              a &middot; a = a² &nbsp;&nbsp;&nbsp; 2a &middot; 3b = 6ab
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Gange ind i parentes (distributiv lov)
            </p>
            <p className="math-formula text-lg">
              a &middot; (b + c) = ab + ac
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sætte uden for parentes</p>
            <p className="math-formula text-lg">
              ab + ac = a &middot; (b + c)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Gange to parenteser
        </h2>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Generel regel</p>
          <p className="math-formula text-lg">
            (a + b)(c + d) = ac + ad + bc + bd
          </p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-surface mt-4">
          <p className="font-semibold text-foreground mb-2">Eksempel</p>
          <div className="space-y-1">
            <p className="math-formula">
              (x + 3)(x + 5)
            </p>
            <p className="math-formula">
              = x &middot; x + x &middot; 5 + 3 &middot; x + 3 &middot; 5
            </p>
            <p className="math-formula">
              = x² + 5x + 3x + 15
            </p>
            <p className="math-formula">
              = x² + 8x + 15
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Kvadratsætningerne</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">1. kvadratsætning</p>
            <p className="math-formula text-lg">
              (a + b)² = a² + 2ab + b²
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">2. kvadratsætning</p>
            <p className="math-formula text-lg">
              (a &minus; b)² = a² &minus; 2ab + b²
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">3. kvadratsætning (konjugerede)</p>
            <p className="math-formula text-lg">
              (a + b)(a &minus; b) = a² &minus; b²
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Brøker med variable</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forkorte</p>
            <p className="math-formula text-lg">
              (a &middot; c) / (b &middot; c) = a / b &nbsp; (c &ne; 0)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Addere brøker</p>
            <p className="math-formula text-lg">
              a/b + c/d = (ad + bc) / (bd)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Omskrivning af formler</h2>
        <p className="text-muted mb-4">
          At omskrive en formel betyder at isolere en bestemt variabel. Man
          bruger de samme regneregler som ved løsning af ligninger.
        </p>
        <div className="rounded-xl border border-border p-6 bg-surface">
          <p className="font-semibold text-foreground mb-2">Eksempel</p>
          <p className="text-sm text-muted mb-2">
            Isoler b i formlen A = a &middot; b:
          </p>
          <div className="space-y-1">
            <p className="math-formula">A = a &middot; b</p>
            <p className="text-sm text-muted">Divider med a på begge sider:</p>
            <p className="math-formula">b = A / a</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Udtryksforenkling" description="Skriv et algebraisk udtryk og se trin for trin, hvordan det forenkles. Øv dig med parenteser, kvadratsætninger og reducering." icon="✏️" type="visualizer" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/tal-og-algebra/ligninger"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Ligninger &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/funktioner"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Funktioner &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/regnestrategier"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Regnestrategier &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/potenser-og-roedder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Potenser og rødder &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
