import Link from "next/link";
import { InteractivePlaceholder } from "@/components/InteractivePlaceholder";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Uligheder – Formelmat",
  description:
    "Lineære uligheder, løsningsmetoder, grafisk fremstilling på tallinje og i koordinatsystem.",
};

export default function UlighederPage() {
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
        <span className="text-foreground">Uligheder</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Uligheder</h1>

      <p className="text-muted mb-6 max-w-2xl">
        En ulighed minder om en ligning, men i stedet for at to sider er ens,
        fortæller den, at den ene side er større eller mindre end den anden. Du
        bruger uligheder, når du fx vil vide &quot;hvor mange timer skal jeg
        arbejde for at tjene mindst 500 kr?&quot;
      </p>

      {/* Symboler */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Symboler</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <p className="math-formula text-lg mb-1">a &lt; b</p>
            <p className="text-sm text-muted">a er mindre end b</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="math-formula text-lg mb-1">a &gt; b</p>
            <p className="text-sm text-muted">a er større end b</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="math-formula text-lg mb-1">a &le; b</p>
            <p className="text-sm text-muted">a er mindre end eller lig med b</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="math-formula text-lg mb-1">a &ge; b</p>
            <p className="text-sm text-muted">a er større end eller lig med b</p>
          </div>
        </div>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["uligheder"][0]} />

      {/* Regneregler */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Regneregler for uligheder</h2>
        <p className="text-muted mb-3">
          Du løser en ulighed næsten som en ligning &ndash; men der er én vigtig
          forskel: <strong>tegnet vendes, når du ganger eller dividerer med et
          negativt tal</strong>.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Addere/subtrahere (tegnet bevares)</p>
            <p className="math-formula text-lg">
              a &lt; b &rArr; a + c &lt; b + c
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Gange/dividere med positivt tal (tegnet bevares)</p>
            <p className="math-formula text-lg">
              a &lt; b og c &gt; 0 &rArr; a &middot; c &lt; b &middot; c
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Gange/dividere med negativt tal (tegnet vendes!)
            </p>
            <p className="math-formula text-lg">
              a &lt; b og c &lt; 0 &rArr; a &middot; c &gt; b &middot; c
            </p>
          </div>
        </div>
      </section>

      {/* Eksempel */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel: Løs en ulighed</h2>
        <div className="rounded-lg border border-border p-4 bg-surface space-y-2">
          <p className="text-sm text-muted">
            <strong>Opgave:</strong> Løs 3x &minus; 5 &lt; 7
          </p>
          <p className="text-sm text-muted">
            Trin 1: Addér 5 på begge sider &rArr; 3x &lt; 12
          </p>
          <p className="text-sm text-muted">
            Trin 2: Dividér med 3 &rArr; x &lt; 4
          </p>
          <p className="text-sm text-muted">
            <strong>Løsning:</strong> Alle tal under 4. På tallinjen: åben cirkel ved 4, pil mod venstre.
          </p>
        </div>
      </section>

      {/* Eksempel med negativt tal */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel: Tegnet vendes</h2>
        <div className="rounded-lg border border-border p-4 bg-surface space-y-2">
          <p className="text-sm text-muted">
            <strong>Opgave:</strong> Løs &minus;2x + 3 &ge; 9
          </p>
          <p className="text-sm text-muted">
            Trin 1: Subtraher 3 &rArr; &minus;2x &ge; 6
          </p>
          <p className="text-sm text-muted">
            Trin 2: Dividér med &minus;2 (vend tegnet!) &rArr; x &le; &minus;3
          </p>
          <p className="text-sm text-muted">
            <strong>Løsning:</strong> Alle tal fra &minus;3 og nedefter. Lukket cirkel ved &minus;3.
          </p>
        </div>
      </section>

      {/* Dobbeltuligheder */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Dobbeltuligheder</h2>
        <p className="text-muted mb-3">
          En dobbeltulighed angiver et interval &ndash; fx &quot;x ligger mellem 2 og 7&quot;.
        </p>
        <div className="formula-box mb-3">
          <p className="text-sm text-muted mb-1">Notation</p>
          <p className="math-formula text-lg">
            a &le; x &le; b
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-surface">
          <p className="text-sm text-muted">
            <strong>Eksempel:</strong> 1 &lt; 2x &minus; 3 &le; 9. Addér 3: 4 &lt; 2x &le; 12.
            Dividér med 2: 2 &lt; x &le; 6.
          </p>
        </div>
      </section>

      {/* Grafisk fremstilling */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Grafisk fremstilling</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">På tallinje</h3>
            <p className="text-sm text-muted mt-1">
              Åben cirkel (&#9675;) for &lt; og &gt;. Lukket cirkel (&#9679;) for &le; og &ge;.
              Pil viser retningen.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">I koordinatsystem</h3>
            <p className="text-sm text-muted mt-1">
              Tegn linjen y = ax + b. Skravér det område, der opfylder uligheden.
              Stiplet linje for &lt; og &gt;, fuldt optrukken for &le; og &ge;.
            </p>
          </div>
        </div>
      </section>

      {/* Interaktiv */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Prøv selv</h2>
        <InteractivePlaceholder
          title="Uligheds-løseren"
          description="Indtast en ulighed og se løsningen trin for trin med visualisering på tallinje."
          icon="↔️"
          type="calculator"
        />
      </section>

      <EverydayExplanation {...hverdagsforklaringer["uligheder"][1]} />

      {/* Se også */}
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
            href="/emner/geometri/koordinatsystem"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Koordinatsystem &rarr;
          </Link>
          <Link
            href="/fagord#ulighed"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Ulighed
          </Link>
        </div>
      </section>
    </div>
  );
}
