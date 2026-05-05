import Link from "next/link";
import { NumberLine } from "@/components/NumberLine";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Tal – Formelmat",
  description:
    "Naturlige tal, hele tal, rationale, irrationale og reelle tal. Tallinjens opbygning og talhierarki.",
};

export default function TalPage() {
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
        <span className="text-foreground">Tal</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Tal</h1>

      <p className="text-muted mb-6 max-w-2xl">
        Her l&aelig;rer du om de forskellige typer tal, du m&oslash;der i matematik &ndash; fra de naturlige t&aelig;lletal til de mystiske irrationale tal som &pi;. N&aring;r du forst&aring;r taltyper, bliver det meget nemmere at vide, hvad du kan g&oslash;re med dem.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Talhierarkiet</h2>
        <div className="rounded-xl border border-border p-6 bg-surface">
          <div className="space-y-3">
            <div className="rounded-lg border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800 p-4">
              <p className="font-semibold text-foreground mb-1">
                Reelle tal (ℝ)
              </p>
              <p className="text-sm text-muted mb-3">
                Alle tal på tallinjen. Omfatter både rationale og irrationale tal.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border-2 border-green-300 bg-green-50 dark:bg-green-950/30 dark:border-green-800 p-4">
                  <p className="font-semibold text-foreground mb-1">
                    Rationale tal (ℚ)
                  </p>
                  <p className="text-sm text-muted mb-3">
                    Tal der kan skrives som brøker a/b, hvor b &ne; 0.
                  </p>
                  <div className="rounded-lg border-2 border-yellow-300 bg-yellow-50 dark:bg-yellow-950/30 dark:border-yellow-800 p-3">
                    <p className="font-semibold text-foreground mb-1">
                      Hele tal (ℤ)
                    </p>
                    <p className="text-sm text-muted mb-3">
                      ..., -3, -2, -1, 0, 1, 2, 3, ...
                    </p>
                    <div className="rounded-lg border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-800 p-3">
                      <p className="font-semibold text-foreground mb-1">
                        Naturlige tal (ℕ)
                      </p>
                      <p className="text-sm text-muted">
                        1, 2, 3, 4, 5, ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border-2 border-purple-300 bg-purple-50 dark:bg-purple-950/30 dark:border-purple-800 p-4">
                  <p className="font-semibold text-foreground mb-1">
                    Irrationale tal
                  </p>
                  <p className="text-sm text-muted">
                    Tal der <strong>ikke</strong> kan skrives som brøker.
                    Fx &radic;2, &radic;3, &pi;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Taltyper</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Naturlige tal (ℕ)</h3>
            <p className="text-sm text-muted mt-1">
              Tælletallene: 1, 2, 3, 4, ... Et naturligt tal, som netop to tal
              går op i (1 og tallet selv), kaldes et <strong>primtal</strong>.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Hele tal (ℤ)</h3>
            <p className="text-sm text-muted mt-1">
              De positive hele tal (de naturlige tal), 0 og de negative hele tal:
              ..., -3, -2, -1, 0, 1, 2, 3, ...
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Rationale tal (ℚ)</h3>
            <p className="text-sm text-muted mt-1">
              Alle tal, der kan skrives som brøker a/b, hvor a og b er hele tal
              og b &ne; 0. Fx 1/2, -3/4, 7 (= 7/1).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Irrationale tal</h3>
            <p className="text-sm text-muted mt-1">
              Tal på tallinjen, der ikke kan skrives som brøker. Fx &radic;2,
              &radic;3, &pi;. Decimalerne fortsætter uendeligt uden gentagelse.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4 sm:col-span-2">
            <h3 className="font-semibold text-foreground">Reelle tal (ℝ)</h3>
            <p className="text-sm text-muted mt-1">
              De rationale tal og de irrationale tal tilsammen. Alle tal på
              tallinjen er reelle tal.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Primtal</h2>
        <p className="text-muted mb-3">
          Et <strong>primtal</strong> er et naturligt tal, som netop to tal går op
          i &ndash; nemlig 1 og tallet selv.
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">De 25 mindste primtal</p>
          <p className="math-formula text-lg">
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
            61, 67, 71, 73, 79, 83, 89, 97
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Tallinjen</h2>
        <div className="rounded-xl border border-border p-6 bg-surface overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="relative h-16 flex items-center">
              <div className="absolute left-0 right-0 h-0.5 bg-foreground/30 top-1/2" />
              {[
                { label: "-3", pos: "5%" },
                { label: "-2", pos: "15%" },
                { label: "-1", pos: "25%" },
                { label: "0", pos: "35%" },
                { label: "1", pos: "45%" },
                { label: "√2", pos: "51.4%" },
                { label: "2", pos: "55%" },
                { label: "π", pos: "64.1%" },
                { label: "3", pos: "65%" },
                { label: "4", pos: "75%" },
                { label: "5", pos: "85%" },
              ].map((tick) => (
                <div
                  key={tick.label}
                  className="absolute flex flex-col items-center"
                  style={{ left: tick.pos, transform: "translateX(-50%)" }}
                >
                  <div className="w-0.5 h-3 bg-foreground/50" />
                  <span className="text-xs text-muted mt-1">{tick.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted mt-2">
          Tallinjen viser alle reelle tal. &radic;2 og &pi; er eksempler på
          irrationale tal placeret mellem de hele tal.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <NumberLine />
      </section>

      <EverydayExplanation items={hverdagsforklaringer["tal"]} />

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
            href="/emner/tal-og-algebra/potenser-og-roedder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Potenser og rødder &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/procent-og-promille"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Procent og promille &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
