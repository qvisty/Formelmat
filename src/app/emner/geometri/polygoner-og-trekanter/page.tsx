import Link from "next/link";
import { GeoGebraEmbed } from "@/components/GeoGebraEmbed";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Polygoner og trekanter – Formelmat",
  description:
    "Polygoner, trekanttyper, vinkelsummen i trekanter og linjer ved trekanter.",
};

export default function PolygonerOgTrekanterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Forside
        </Link>
        <span>/</span>
        <Link
          href="/emner/geometri"
          className="hover:text-primary transition-colors"
        >
          Geometri
        </Link>
        <span>/</span>
        <span className="text-foreground">Polygoner og trekanter</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Polygoner og trekanter
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Polygoner er figurer med rette sider – trekanter, firkanter, femkanter og så videre. Trekanter er de simpleste, men de har masser af spændende egenskaber. Prøv at bygge dine egne i GeoGebra herunder.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Polygontyper</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Trekant</h3>
            <p className="text-sm text-muted mt-1">3 sider. Vinkelsummen er 180°.</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Firkant</h3>
            <p className="text-sm text-muted mt-1">4 sider. Vinkelsummen er 360°.</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Femkant (pentagon)</h3>
            <p className="text-sm text-muted mt-1">5 sider. Vinkelsummen er 540°.</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Sekskant (heksagon)</h3>
            <p className="text-sm text-muted mt-1">6 sider. Vinkelsummen er 720°.</p>
          </div>
        </div>
        <div className="formula-box mt-4">
          <p className="text-sm text-muted mb-1">Vinkelsummen i en polygon med n sider</p>
          <p className="math-formula text-lg">(n &minus; 2) &middot; 180°</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Trekanttyper</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Ligebenet trekant</h3>
            <p className="text-sm text-muted mt-1">
              Mindst to sider er lige lange. De tilhørende vinkler er også lige
              store.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Ligesidet trekant</h3>
            <p className="text-sm text-muted mt-1">
              Alle tre sider er lige lange, og alle tre vinkler er 60°.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Retvinklet trekant</h3>
            <p className="text-sm text-muted mt-1">
              Har én vinkel på 90°. Her gælder Pythagoras&apos; sætning.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Stumpvinklet trekant</h3>
            <p className="text-sm text-muted mt-1">
              Har én vinkel, der er større end 90°.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vinkelsummen i en trekant</h2>
        <div className="formula-box">
          <p className="text-sm text-muted mb-1">
            Summen af de tre vinkler i en trekant
          </p>
          <p className="math-formula text-lg">A + B + C = 180°</p>
        </div>
        <EverydayExplanation {...hverdagsforklaringer["polygoner-og-trekanter"][0]} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Linjer i trekanter</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Højde</h3>
            <p className="text-sm text-muted mt-1">
              En linje fra et hjørne vinkelret ned på den modstående side
              (grundlinjen). De tre højder skærer hinanden i ét punkt
              (højdeskæringspunktet).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Median</h3>
            <p className="text-sm text-muted mt-1">
              En linje fra et hjørne til midtpunktet af den modstående side. De
              tre medianer skærer hinanden i tyngdepunktet.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Midtnormal</h3>
            <p className="text-sm text-muted mt-1">
              Vinkelret på en side i midtpunktet. De tre midtnormaler skærer
              hinanden i centrum for den omskrevne cirkel.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Vinkelhalveringslinje
            </h3>
            <p className="text-sm text-muted mt-1">
              Deler en vinkel i to lige store vinkler. De tre
              vinkelhalveringslinjer skærer hinanden i centrum for den
              indskrevne cirkel.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Udforsk i GeoGebra</h2>
        <p className="text-muted mb-4">
          Konstruér trekanter og polygoner. Mål vinkler og sider, og
          undersøg trekantens linjer (højde, median, midtnormal).
        </p>
        <GeoGebraEmbed
          appName="geometry"
          height={450}
          label="GeoGebra geometri – tegn og mål figurer"
        />
      </section>

      <EverydayExplanation {...hverdagsforklaringer["polygoner-og-trekanter"][1]} />

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/linjer-og-vinkler"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Linjer og vinkler &rarr;
          </Link>
          <Link
            href="/emner/geometri/areal-og-omkreds"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Areal og omkreds &rarr;
          </Link>
          <Link
            href="/emner/geometri/pythagoras"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Pythagoras&apos; sætning &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
