import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { ThemedExample } from "@/components/ThemedExample";

export const metadata = {
  title: "Økonomi – Formelmat",
  description:
    "Sammensat rente, opsparing, lån, ydelse og valutakurs. Formler og eksempler.",
};

export default function OekonomiPage() {
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
        <span className="text-foreground">Økonomi</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Økonomi</h1>

      <p className="text-muted mb-6 max-w-2xl">
        Matematik i &oslash;konomi handler om penge &ndash; opsparing, l&aring;n og renter. Med formlen for sammensat rente kan du fx beregne, hvor meget dine penge vokser over tid, eller hvad et l&aring;n reelt koster dig.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Sammensat rente</h2>
        <p className="text-muted mb-4">
          Når man ændrer en størrelse flere gange med samme procentdel, bruger
          man formlen for sammensat rente (renters rente).
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Formel</p>
          <p className="math-formula text-xl">
            K<sub>n</sub> = K<sub>0</sub> &middot; (1 + r/100)<sup>n</sup>
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              K<sub>n</sub>
            </h3>
            <p className="text-sm text-muted mt-1">
              Kapitalen efter n terminer (slutværdi).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              K<sub>0</sub>
            </h3>
            <p className="text-sm text-muted mt-1">
              Startkapitalen (begyndelsesværdi).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">r</h3>
            <p className="text-sm text-muted mt-1">
              Renten i procent pr. termin.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">n</h3>
            <p className="text-sm text-muted mt-1">Antal terminer.</p>
          </div>
        </div>

        <div className="rounded-xl border border-border p-6 bg-surface mt-4">
          <p className="font-semibold text-foreground mb-2">Eksempel</p>
          <p className="text-muted mb-2">
            Du sætter 10.000 kr. i banken til 3% i rente om året i 5 år:
          </p>
          <div className="space-y-1">
            <p className="math-formula">
              K<sub>5</sub> = 10.000 &middot; (1 + 3/100)<sup>5</sup>
            </p>
            <p className="math-formula">
              K<sub>5</sub> = 10.000 &middot; 1,03<sup>5</sup>
            </p>
            <p className="math-formula">
              K<sub>5</sub> = 10.000 &middot; 1,1593 &asymp; 11.593 kr.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Fremskrivningsfaktor</h2>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Definition</p>
          <p className="math-formula text-lg">
            Fremskrivningsfaktor = 1 + r/100
          </p>
          <p className="text-sm text-muted mt-1">
            Ved stigning: fx 5% giver faktor 1,05. Ved fald: fx 5% giver faktor 0,95.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Opsparing med fast indskud</h2>
        <p className="text-muted mb-4">
          Når man indbetaler et fast beløb b pr. termin med rente r:
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Opsparingsformel</p>
          <p className="math-formula text-lg">
            K<sub>n</sub> = b &middot; ((1 + r/100)<sup>n</sup> &minus; 1) / (r/100)
          </p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-surface mt-4">
          <p className="font-semibold text-foreground mb-2">Eksempel</p>
          <p className="text-muted mb-2">
            Du sparer 500 kr. op om måneden i 10 år til 0,3% om måneden:
          </p>
          <p className="math-formula">
            K<sub>120</sub> = 500 &middot; (1,003<sup>120</sup> &minus; 1) / 0,003 &asymp; 69.871 kr.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Lån og ydelse</h2>
        <p className="text-muted mb-4">
          Et annuitetslån tilbagebetales med en fast ydelse pr. termin:
        </p>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">Ydelsesformel</p>
          <p className="math-formula text-lg">
            y = K<sub>0</sub> &middot; (r/100) / (1 &minus; (1 + r/100)<sup>&minus;n</sup>)
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">y</h3>
            <p className="text-sm text-muted mt-1">
              Ydelse pr. termin (afdrag + rente).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              K<sub>0</sub>
            </h3>
            <p className="text-sm text-muted mt-1">
              Lånebeløbet (hovedstol).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vigtige begreber</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Termin</h3>
            <p className="text-sm text-muted mt-1">
              En periode mellem to rentetilskrivninger (fx 1 måned eller 1 år).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Rente</h3>
            <p className="text-sm text-muted mt-1">
              Den procentdel, kapitalen vokser med pr. termin.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Hovedstol</h3>
            <p className="text-sm text-muted mt-1">
              Det oprindelige lånebeløb eller startkapital.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">ÅOP</h3>
            <p className="text-sm text-muted mt-1">
              Årlige Omkostninger i Procent. Inkluderer rente og gebyrer.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="oekonomi" />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder title="Renteberegner" description="Indtast et startbeløb, en rentesats og antal år – og se hvordan din opsparing vokser år for år. Sammenlign forskellige rentesatser." icon="🏦" type="calculator" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
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
        </div>
      </section>
    </div>
  );
}
