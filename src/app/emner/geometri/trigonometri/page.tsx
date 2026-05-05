import Link from "next/link";
import { InteractiveTriangle } from "@/components/InteractiveTriangle";
import { GeoGebraEmbed } from "@/components/GeoGebraEmbed";
import { ThemedExample } from "@/components/ThemedExample";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Trigonometri – Geometri – Formelmat",
  description:
    "Sinus, cosinus og tangens i den retvinklede trekant med interaktiv visualisering.",
};

export default function GeometriTrigonometriPage() {
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
        <span className="text-foreground">Trigonometri</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Trigonometri
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Trigonometri handler om sammenhængen mellem vinkler og sider i trekanter. Med sinus, cosinus og tangens kan du beregne sider og vinkler, du ikke kender – prøv det selv herunder.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Definitioner</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Sinus</p>
            <p className="math-formula text-lg">
              sin(v) = modstående katete / hypotenuse
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Cosinus</p>
            <p className="math-formula text-lg">
              cos(v) = hosliggende katete / hypotenuse
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Tangens</p>
            <p className="math-formula text-lg">
              tan(v) = modstående katete / hosliggende katete
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Vigtige begreber</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Hypotenuse</h3>
            <p className="text-sm text-muted mt-1">
              Den længste side i den retvinklede trekant &ndash; over for den
              rette vinkel (90°).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Modstående katete
            </h3>
            <p className="text-sm text-muted mt-1">
              Den katete, der ligger over for den vinkel, man kigger på.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Hosliggende katete
            </h3>
            <p className="text-sm text-muted mt-1">
              Den katete, der ligger ved siden af den valgte vinkel (og ikke
              er hypotenusen).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Huskeregel</h3>
            <p className="text-sm text-muted mt-1">
              &quot;SoH-CaH-ToA&quot; &ndash; Sin = Opposite/Hypotenuse,
              Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent.
            </p>
          </div>
        </div>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["trigonometri"][0]} />

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Find en side</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Kender vinkel og hypotenuse &ndash; find modstående katete
            </p>
            <p className="math-formula text-lg">
              modstående = sin(v) &middot; hypotenuse
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Kender vinkel og hypotenuse &ndash; find hosliggende katete
            </p>
            <p className="math-formula text-lg">
              hosliggende = cos(v) &middot; hypotenuse
            </p>
          </div>
        </div>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["trigonometri"][1]} />

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Find en vinkel</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Kender modstående katete og hypotenuse
            </p>
            <p className="math-formula text-lg">
              v = sin⁻¹(modstående / hypotenuse)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Kender hosliggende katete og hypotenuse
            </p>
            <p className="math-formula text-lg">
              v = cos⁻¹(hosliggende / hypotenuse)
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Kender modstående og hosliggende katete
            </p>
            <p className="math-formula text-lg">
              v = tan⁻¹(modstående / hosliggende)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Interaktiv trekant</h2>
        <p className="text-muted mb-4">
          Brug skyderen til at ændre vinklen og se, hvordan sinus, cosinus og
          tangens ændrer sig.
        </p>
        <InteractiveTriangle />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Udforsk i GeoGebra</h2>
        <p className="text-muted mb-4">
          Byg din egen retvinklede trekant og undersøg sammenhængen mellem
          sider og vinkler. Træk i punkterne for at ændre trekanten.
        </p>
        <GeoGebraEmbed
          appName="geometry"
          commands={[
            "A = (0, 0)",
            "B = (5, 0)",
            "C = (5, 3)",
            "Polygon(A, B, C)",
            "a = Segment(B, C)",
            "b = Segment(A, C)",
            "c = Segment(A, B)",
            'SetCaption(a, "modstående")',
            'SetCaption(b, "hypotenuse")',
            'SetCaption(c, "hosliggende")',
            "SetLabelMode(a, 3)",
            "SetLabelMode(b, 3)",
            "SetLabelMode(c, 3)",
            "α = Angle(B, A, C)",
          ]}
          height={450}
          label="Retvinklet trekant – træk i A, B eller C"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Eksempel fra virkeligheden</h2>
        <ThemedExample topic="trigonometri" />
      </section>

      <EverydayExplanation {...hverdagsforklaringer["trigonometri"][2]} />

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/pythagoras"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Pythagoras&apos; sætning &rarr;
          </Link>
          <Link
            href="/emner/geometri/polygoner-og-trekanter"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Polygoner og trekanter &rarr;
          </Link>
          <Link
            href="/emner/trigonometri/retvinklet-trekant"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Den retvinklede trekant &rarr;
          </Link>
          <Link
            href="/fagord#sinus"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Sinus
          </Link>
        </div>
      </section>
    </div>
  );
}
