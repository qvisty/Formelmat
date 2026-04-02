import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";

export const metadata = {
  title: "Procent og promille – Formelmat",
  description:
    "Procent, promille, procentpoint og omregning med eksempler.",
};

export default function ProcentOgPromillePage() {
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
        <span className="text-foreground">Procent og promille</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Procent og promille
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Du bruger procent hele tiden &ndash; n&aring;r du handler p&aring; udsalg, ser valgresultater eller l&aelig;ser om renter. Her l&aelig;rer du at regne med procent og promille, s&aring; du altid kan finde ud af, hvad tingene egentlig koster.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Procent</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sammenhæng</p>
            <p className="math-formula text-lg">
              p% = p/100
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 25% = 25/100 = 0,25
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Finde procent af et tal</p>
            <p className="math-formula text-lg">
              p% af a = a &middot; p/100
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 20% af 350 = 350 &middot; 0,20 = 70
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Finde procentdelen</p>
            <p className="math-formula text-lg">
              p = (del / hele) &middot; 100%
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 15 ud af 60: p = (15/60) &middot; 100% = 25%
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Procentvis stigning</p>
            <p className="math-formula text-lg">
              ny værdi = gammel værdi &middot; (1 + p/100)
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 10% stigning af 200: 200 &middot; 1,10 = 220
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Procentvis fald</p>
            <p className="math-formula text-lg">
              ny værdi = gammel værdi &middot; (1 &minus; p/100)
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 25% rabat af 400: 400 &middot; 0,75 = 300
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Procentpoint</h2>
        <div className="rounded-lg border border-border p-4">
          <p className="text-muted">
            <strong>Procentpoint</strong> bruges til at angive en forskel
            mellem to procentstørrelser.
          </p>
          <div className="formula-box mt-3">
            <p className="text-sm text-muted mb-1">Eksempel</p>
            <p className="math-formula text-lg">
              Stigning fra 10% til 15% er 5 procentpoint
            </p>
            <p className="text-sm text-muted mt-1">
              Men den procentvise stigning er (15 &minus; 10) / 10 &middot; 100% = 50%.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Promille</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sammenhæng</p>
            <p className="math-formula text-lg">
              p&permil; = p/1000
            </p>
            <p className="text-sm text-muted mt-1">
              Fx 5&permil; = 5/1000 = 0,005
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Omregning mellem procent og promille
            </p>
            <p className="math-formula text-lg">
              1% = 10&permil; &nbsp;&nbsp; 1&permil; = 0,1%
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Oversigt</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">
                  Begreb
                </th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">
                  Tegn
                </th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">
                  Brøk
                </th>
                <th className="text-left py-2 font-semibold text-foreground">
                  Eksempel
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Procent</td>
                <td className="py-2 pr-4">%</td>
                <td className="py-2 pr-4">Hundrededele</td>
                <td className="py-2">25% = 0,25</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Promille</td>
                <td className="py-2 pr-4">&permil;</td>
                <td className="py-2 pr-4">Tusindedele</td>
                <td className="py-2">5&permil; = 0,005</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Procentpoint</td>
                <td className="py-2 pr-4">pp</td>
                <td className="py-2 pr-4">Forskel</td>
                <td className="py-2">Fra 10% til 15% = 5 pp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Procentberegner" description="Indtast et tal og en procentsats, og se resultatet med det samme. Prøv også at beregne procentvis stigning og fald." icon="💰" type="calculator" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/tal-og-algebra/regnestrategier"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Regnestrategier &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/oekonomi"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Økonomi &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/tal"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Tal &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
