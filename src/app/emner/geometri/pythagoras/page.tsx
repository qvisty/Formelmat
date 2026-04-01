"use client";

import Link from "next/link";
import { useState } from "react";
import { GeoGebraEmbed } from "@/components/GeoGebraEmbed";

// export const metadata = {
//   title: "Pythagoras' sætning – Formelmat",
//   description: "Pythagoras' sætning: a² + b² = c². Interaktiv beregner.",
// };

function PythagorasCalculator() {
  const [a, setA] = useState<string>("3");
  const [b, setB] = useState<string>("4");

  const aNum = parseFloat(a) || 0;
  const bNum = parseFloat(b) || 0;
  const c = Math.sqrt(aNum * aNum + bNum * bNum);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="font-semibold text-foreground mb-4">
        Interaktiv Pythagoras-beregner
      </h3>
      <p className="text-sm text-muted mb-4">
        Indtast de to kateter (a og b) for at beregne hypotenusen (c).
      </p>
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Katete a
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="w-24 rounded-lg border border-border bg-background px-3 py-2 text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Katete b
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="w-24 rounded-lg border border-border bg-background px-3 py-2 text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Hypotenuse c
          </label>
          <div className="w-24 rounded-lg border border-border bg-background/50 px-3 py-2 text-foreground font-semibold">
            {aNum > 0 && bNum > 0 ? c.toFixed(2) : "–"}
          </div>
        </div>
      </div>
      {aNum > 0 && bNum > 0 && (
        <div className="text-sm text-muted">
          <p>
            {aNum}² + {bNum}² = {(aNum * aNum).toFixed(2)} +{" "}
            {(bNum * bNum).toFixed(2)} = {(aNum * aNum + bNum * bNum).toFixed(2)}
          </p>
          <p>
            c = &radic;{(aNum * aNum + bNum * bNum).toFixed(2)} ={" "}
            {c.toFixed(4)}
          </p>
        </div>
      )}

      {/* Visual representation */}
      {aNum > 0 && bNum > 0 && (
        <div className="mt-6 flex justify-center">
          <svg viewBox="0 0 260 200" className="w-full max-w-xs" aria-label="Retvinklet trekant med kateter a og b og hypotenuse c">
            {/* Triangle */}
            <polygon
              points="30,170 230,170 30,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground"
            />
            {/* Right angle marker */}
            <polyline
              points="30,150 50,150 50,170"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-muted"
            />
            {/* Labels */}
            <text x="130" y="190" textAnchor="middle" className="text-sm fill-current text-primary font-semibold" fontSize="14">
              a = {aNum}
            </text>
            <text x="12" y="105" textAnchor="middle" className="text-sm fill-current text-primary font-semibold" fontSize="14">
              b = {bNum}
            </text>
            <text x="148" y="92" textAnchor="middle" className="text-sm fill-current text-accent font-semibold" fontSize="14" transform="rotate(-35, 148, 92)">
              c = {c.toFixed(2)}
            </text>
          </svg>
        </div>
      )}
    </div>
  );
}

export default function PythagorasPage() {
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
        <span className="text-foreground">Pythagoras&apos; sætning</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Pythagoras&apos; sætning
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        <strong>Pythagoras&apos; sætning</strong> gælder i alle retvinklede
        trekanter. Den beskriver sammenhængen mellem de tre sider: summen af
        kateternes kvadrater er lig med kvadratet på hypotenusen.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Formlen</h2>
        <div className="space-y-3">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Pythagoras&apos; sætning</p>
            <p className="math-formula text-lg">a² + b² = c²</p>
            <p className="text-sm text-muted mt-2">
              hvor <em>a</em> og <em>b</em> er kateterne, og <em>c</em> er
              hypotenusen (den længste side, over for den rette vinkel).
            </p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Find hypotenusen</p>
            <p className="math-formula text-lg">c = &radic;(a² + b²)</p>
          </div>
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Find en katete</p>
            <p className="math-formula text-lg">a = &radic;(c² &minus; b²)</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Forklaring</h2>
        <p className="text-muted mb-3">
          Sætningen siger, at arealet af kvadratet bygget på hypotenusen er
          lig med summen af arealerne af de to kvadrater bygget på kateterne.
        </p>
        <p className="text-muted mb-3">
          Eksempel: En retvinklet trekant med kateter 3 og 4 har hypotenusen
          c = &radic;(3² + 4²) = &radic;(9 + 16) = &radic;25 = 5. Dette er
          det berømte 3-4-5-trekant.
        </p>
        <p className="text-muted">
          Andre kendte pythagoræiske tripler er (5, 12, 13), (8, 15, 17) og
          (7, 24, 25).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Beregner</h2>
        <PythagorasCalculator />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Udforsk i GeoGebra</h2>
        <p className="text-muted mb-4">
          Se Pythagoras&apos; sætning visuelt. Træk i hjørnerne og se, hvordan
          arealerne af kvadraterne ændrer sig – de to små vil altid tilsammen
          give det store.
        </p>
        <GeoGebraEmbed
          appName="geometry"
          commands={[
            "A = (0, 0)",
            "B = (4, 0)",
            "C = (4, 3)",
            "poly1 = Polygon(A, B, C)",
            "a_seg = Segment(B, C)",
            "b_seg = Segment(A, C)",
            "c_seg = Segment(A, B)",
            "sq_a = Polygon(B, C, 4)",
            "sq_b = Polygon(A, C, 4)",
            "sq_c = Polygon(A, B, 4)",
            'text1 = Text("a² = " + round(Length(a_seg)^2, 2), (5.5, 1.5))',
            'text2 = Text("b² = " + round(Length(b_seg)^2, 2), (1, 4))',
            'text3 = Text("c² = " + round(Length(c_seg)^2, 2), (1, -2))',
          ]}
          height={500}
          label="Pythagoras visuelt – træk i hjørnerne"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/trigonometri"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Trigonometri &rarr;
          </Link>
          <Link
            href="/emner/geometri/polygoner-og-trekanter"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Polygoner og trekanter &rarr;
          </Link>
          <Link
            href="/fagord#pythagoras--sætning"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Pythagoras&apos; sætning
          </Link>
        </div>
      </section>
    </div>
  );
}
