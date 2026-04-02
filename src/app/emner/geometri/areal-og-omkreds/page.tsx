import Link from "next/link";
import { GeoGebraEmbed } from "@/components/GeoGebraEmbed";

export const metadata = {
  title: "Areal og omkreds – Formelmat",
  description:
    "Arealformler for trekanter, rektangler, parallelogrammer, trapezer, romber og cirkler. Herons formel.",
};

export default function ArealOgOmkredsPage() {
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
        <span className="text-foreground">Areal og omkreds</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Areal og omkreds
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Areal fortæller dig, hvor stor en flade er – fx hvor meget maling du skal bruge til en væg. Omkreds er længden hele vejen rundt om en figur. Her finder du formlerne til de vigtigste figurer.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Trekant</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Areal af trekant (grundlinje og højde)
            </p>
            <p className="math-formula text-lg">
              A = ½ &middot; g &middot; h
            </p>
            <p className="text-sm text-muted mt-1">
              g = grundlinje, h = højde (vinkelret på grundlinjen).
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Herons formel (kun sidelængder)
            </p>
            <p className="math-formula text-lg">
              A = &radic;(s(s &minus; a)(s &minus; b)(s &minus; c))
            </p>
            <p className="text-sm text-muted mt-1">
              hvor s = (a + b + c) / 2 (halve omkredsen).
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Omkreds af trekant</p>
            <p className="math-formula text-lg">O = a + b + c</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Rektangel</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Areal</p>
            <p className="math-formula text-lg">
              A = l &middot; b
            </p>
            <p className="text-sm text-muted mt-1">
              l = længde, b = bredde.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Omkreds</p>
            <p className="math-formula text-lg">
              O = 2 &middot; (l + b)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Parallelogram</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Areal</p>
            <p className="math-formula text-lg">
              A = g &middot; h
            </p>
            <p className="text-sm text-muted mt-1">
              g = grundlinje, h = højde (vinkelret på grundlinjen).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Trapez</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Areal</p>
            <p className="math-formula text-lg">
              A = ½ &middot; (a + b) &middot; h
            </p>
            <p className="text-sm text-muted mt-1">
              a og b er de to parallelle sider, h er højden.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Rombe</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">
              Areal (med diagonaler)
            </p>
            <p className="math-formula text-lg">
              A = ½ &middot; d₁ &middot; d₂
            </p>
            <p className="text-sm text-muted mt-1">
              d₁ og d₂ er de to diagonaler.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Cirkel</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Areal</p>
            <p className="math-formula text-lg">
              A = &pi; &middot; r²
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Omkreds</p>
            <p className="math-formula text-lg">
              O = 2 &middot; &pi; &middot; r = &pi; &middot; d
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Cirkelsektor (areal)</p>
            <p className="math-formula text-lg">
              A = (v / 360°) &middot; &pi; &middot; r²
            </p>
            <p className="text-sm text-muted mt-1">
              v er centrumvinklen i grader.
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Cirkelbue (længde)</p>
            <p className="math-formula text-lg">
              b = (v / 360°) &middot; 2 &middot; &pi; &middot; r
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Udforsk i GeoGebra</h2>
        <p className="text-muted mb-4">
          Tegn figurer og mål deres areal og omkreds direkte i GeoGebra.
          Brug polygon-værktøjet og areal-måling.
        </p>
        <GeoGebraEmbed
          appName="geometry"
          commands={[
            "A = (0, 0)",
            "B = (4, 0)",
            "C = (4, 3)",
            "D = (0, 3)",
            "poly1 = Polygon(A, B, C, D)",
            'text1 = Text("Areal = " + Area(poly1), (1, 1.5))',
            'text2 = Text("Omkreds = " + Perimeter(poly1), (1, 0.8))',
          ]}
          height={400}
          label="Mål areal og omkreds – træk i hjørnerne"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/rumfang"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Rumfang og overfladeareal &rarr;
          </Link>
          <Link
            href="/emner/geometri/firkanter-og-cirkler"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Firkanter og cirkler &rarr;
          </Link>
          <Link
            href="/fagord#herons-formel"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Herons formel
          </Link>
        </div>
      </section>
    </div>
  );
}
