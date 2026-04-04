import Link from "next/link";
import { LinearFunctionDemo } from "@/components/LinearFunctionDemo";
import { GeoGebraEmbed } from "@/components/GeoGebraEmbed";
import { ThemedExample } from "@/components/ThemedExample";

export const metadata = {
  title: "Funktioner – Formelmat",
  description:
    "Lineær funktion, andengradsfunktion, omvendt proportionalitet og eksponentiel funktion.",
};

export default function FunktionerPage() {
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
        <span className="text-foreground">Funktioner</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">Funktioner</h1>

      <p className="text-muted mb-6 max-w-2xl">
        En funktion er en regel, der til hvert x-tal giver pr&aelig;cis &eacute;t y-tal. Det lyder m&aring;ske abstrakt, men funktioner beskriver fx sammenh&aelig;ngen mellem tid og afstand, eller antal varer og pris. Her kan du tegne og udforske funktioner.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Lineær funktion (y = ax + b)
        </h2>
        <p className="text-muted mb-4">
          Grafen for en lineær funktion er en ret linje. Tallet <em>a</em> er
          hældningstallet, og <em>b</em> er skæringspunktet med y-aksen.
        </p>
        <LinearFunctionDemo />
        <div className="space-y-3 mt-4">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forskrift</p>
            <p className="math-formula text-lg">y = ax + b</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Hældningstal</p>
            <p className="math-formula text-lg">
              a = (y<sub>2</sub> &minus; y<sub>1</sub>) / (x<sub>2</sub> &minus; x<sub>1</sub>)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Skæring med y-aksen
            </p>
            <p className="math-formula text-lg">
              Punktet (0, b)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Andengradsfunktion (y = ax² + bx + c)
        </h2>
        <p className="text-muted mb-4">
          Grafen for en andengradsfunktion er en <strong>parabel</strong>. Hvis
          a &gt; 0, vender parablen opad. Hvis a &lt; 0, vender den nedad.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forskrift</p>
            <p className="math-formula text-lg">y = ax² + bx + c</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Toppunkt</p>
            <p className="math-formula text-lg">
              T = (&minus;b / (2a), &minus;d / (4a))
            </p>
            <p className="text-sm text-muted mt-1">
              hvor d = b² &minus; 4ac (diskriminanten)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Nulpunkter (rødder)
            </p>
            <p className="math-formula text-lg">
              x = (&minus;b &plusmn; &radic;(b² &minus; 4ac)) / (2a)
            </p>
            <p className="text-sm text-muted mt-1">
              Eksisterer kun, når d = b² &minus; 4ac &ge; 0.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Omvendt proportionalitet
        </h2>
        <p className="text-muted mb-4">
          Når to størrelser er omvendt proportionale, er deres produkt
          konstant. Grafen er en hyperbel.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forskrift</p>
            <p className="math-formula text-lg">
              y = k / x &nbsp;&nbsp; (eller x &middot; y = k)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Egenskab</p>
            <p className="math-formula text-lg">
              Når x fordobles, halveres y.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Eksponentiel funktion
        </h2>
        <p className="text-muted mb-4">
          En eksponentiel funktion vokser (eller aftager) med en fast procent
          pr. skridt. Grafen er en kurve, der stiger eller falder hurtigt.
        </p>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forskrift</p>
            <p className="math-formula text-lg">
              y = b &middot; a<sup>x</sup>
            </p>
            <p className="text-sm text-muted mt-1">
              b og a er positive tal. b er begyndelsesværdien, a er
              fremskrivningsfaktoren.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Vækst vs. henfald</p>
            <p className="math-formula text-lg">
              a &gt; 1: vækst &nbsp;&nbsp; 0 &lt; a &lt; 1: henfald
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Fordoblings- / halveringskonstant</p>
            <p className="math-formula text-lg">
              T<sub>2</sub> = log(2) / log(a) &nbsp;&nbsp;
              T<sub>½</sub> = log(½) / log(a)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Udforsk i GeoGebra</h2>
        <p className="text-muted mb-4">
          Tegn og sammenlign funktioner i GeoGebras grafregner. Prøv fx at
          skrive <code className="bg-surface px-1 rounded text-sm">f(x) = x^2 - 2x + 1</code> eller{" "}
          <code className="bg-surface px-1 rounded text-sm">g(x) = 2^x</code>.
        </p>
        <GeoGebraEmbed
          appName="graphing"
          showAlgebraInput={true}
          showToolBar={true}
          commands={[
            "f(x) = x^2 - 2x - 3",
          ]}
          height={450}
          label="GeoGebra grafregner – skriv dine egne funktioner"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="funktioner" />
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
            href="/emner/tal-og-algebra/oekonomi"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Økonomi &rarr;
          </Link>
          <Link
            href="/emner/tal-og-algebra/potenser-og-roedder"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Potenser og rødder &rarr;
          </Link>
          <Link
            href="/emner/geometri/koordinatsystem"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📐 Koordinatsystem &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
