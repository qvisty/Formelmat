"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

const datasets = {
  lineær: [18, 30, 42, 54, 66, 78],
  eksponentiel: [8, 12, 19, 31, 50, 82],
};

const rejectedLibraries = [
  ["Three.js / Babylon.js", "3D giver ekstra kompleksitet uden at styrke de viste 2D-forklaringer."],
  ["PixiJS / Phaser", "Canvas- og spilmotorer er for tunge til grafer, formler og små øvelser."],
  ["p5.js", "Godt til kreative skitser, men mindre naturligt i Formelmat-komponenter og design."],
  ["Rive", "Kræver særskilte animationsfiler og passer bedre til illustration end matematikdata."],
  ["GSAP", "Stærkt til tidslinjer, men Motion dækker prototypens rolige React-animationer enklere."],
];

function DemoCard({
  number,
  title,
  before,
  children,
}: {
  number: string;
  title: string;
  before: string;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="border-b border-border bg-surface px-4 py-4 sm:px-6">
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            {number}
          </span>
          <div>
            <h2 className="text-lg font-bold text-foreground">{title}</h2>
            <p className="mt-1 text-sm text-muted">
              <strong className="font-semibold text-foreground">Før:</strong> {before}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </article>
  );
}

function AnimatedGraph({ reduceMotion }: { reduceMotion: boolean }) {
  const [kind, setKind] = useState<keyof typeof datasets>("lineær");
  const points = datasets[kind];
  const path = points.map((y, index) => `${index === 0 ? "M" : "L"} ${30 + index * 52} ${120 - y}`).join(" ");

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(14rem,0.65fr)] lg:items-center">
      <div className="interactive-canvas relative overflow-hidden p-2">
        <svg viewBox="0 0 320 150" className="h-auto w-full" role="img" aria-label={`${kind} graf med seks datapunkter`}>
          {[30, 60, 90, 120].map((y) => (
            <line key={y} x1="28" y1={y} x2="300" y2={y} stroke="#e2e8f0" />
          ))}
          <line x1="28" y1="12" x2="28" y2="122" stroke="#64748b" strokeWidth="1.5" />
          <line x1="28" y1="122" x2="300" y2="122" stroke="#64748b" strokeWidth="1.5" />
          <motion.path
            key={kind}
            d={path}
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
          />
          {points.map((y, index) => (
            <motion.circle
              key={`${kind}-${index}`}
              cx={30 + index * 52}
              cy={120 - y}
              r="5"
              fill="#f59e0b"
              stroke="white"
              strokeWidth="2"
              initial={reduceMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.06 }}
            />
          ))}
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">Sammenlign udviklingen</p>
        <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label="Vælg graftype">
          {(Object.keys(datasets) as Array<keyof typeof datasets>).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setKind(option)}
              aria-pressed={kind === option}
              className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-semibold capitalize transition-colors ${kind === option ? "border-primary bg-primary text-white" : "border-border bg-white text-foreground hover:border-primary"}`}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">Motion tegner ændringen roligt, så du kan følge grafens form i stedet for at få et pludseligt skift.</p>
      </div>
    </div>
  );
}

function GeometryDemo({ reduceMotion }: { reduceMotion: boolean }) {
  const [height, setHeight] = useState(68);
  const area = Math.round((8 * height) / 20) / 2;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)] lg:items-center">
      <div className="interactive-canvas overflow-hidden p-3">
        <svg viewBox="0 0 320 190" className="h-auto w-full" role="img" aria-label={`Trekant med grundlinje 8 og højde ${Math.round(height / 10)}`}>
          <line x1="35" y1="155" x2="285" y2="155" stroke="#64748b" strokeWidth="2" />
          <motion.polygon
            points={`55,155 265,155 210,${155 - height}`}
            fill="rgba(37,99,235,.12)"
            stroke="#2563eb"
            strokeWidth="3"
            animate={{ points: `55,155 265,155 210,${155 - height}` }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          />
          <line x1="210" y1={155 - height} x2="210" y2="155" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 4" />
          <text x="151" y="177" textAnchor="middle" fill="#64748b" fontSize="13">grundlinje = 8</text>
          <text x="219" y={120 - height / 2} fill="#b45309" fontSize="13">h = {Math.round(height / 10)}</text>
        </svg>
      </div>
      <div>
        <label htmlFor="triangle-height" className="text-sm font-semibold text-foreground">Træk højden: {Math.round(height / 10)}</label>
        <input id="triangle-height" className="mt-2" type="range" min="30" max="120" value={height} onChange={(event) => setHeight(Number(event.target.value))} />
        <div className="formula-box mt-4" aria-live="polite">
          <p className="math-formula">A = ½ · 8 · {Math.round(height / 10)} = {area}</p>
        </div>
        <p className="text-sm text-muted">Et direkte håndtag kan senere bygges med Motion-drag. Skyderen bevarer præcis tastaturstyring og et stort touch-mål.</p>
      </div>
    </div>
  );
}

function FeedbackDemo({ reduceMotion }: { reduceMotion: boolean }) {
  const [answer, setAnswer] = useState<"idle" | "correct" | "wrong">("idle");

  return (
    <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,.7fr)] sm:items-center">
      <div>
        <p className="text-sm text-muted">Hvilken værdi har x, når 2x + 3 = 11?</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[3, 4, 7].map((value) => (
            <motion.button
              key={value}
              type="button"
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              onClick={() => setAnswer(value === 4 ? "correct" : "wrong")}
              className="min-h-12 rounded-xl border border-border bg-white text-base font-bold text-foreground hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {value}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="min-h-24" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {answer !== "idle" && (
            <motion.div
              key={answer}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
              className={`rounded-xl border p-4 ${answer === "correct" ? "border-emerald-300 bg-emerald-50 text-emerald-900" : "border-amber-300 bg-amber-50 text-amber-950"}`}
            >
              <p className="font-bold">{answer === "correct" ? "Ja – x = 4!" : "Prøv én gang til"}</p>
              <p className="mt-1 text-sm">{answer === "correct" ? "2 · 4 + 3 giver 11." : "Træk først 3 fra på begge sider."}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function VisualLibraryPrototype() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = useMemo(() => Boolean(prefersReducedMotion), [prefersReducedMotion]);

  return (
    <main className="min-h-screen bg-surface px-4 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900">Isoleret prototype</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">Ikke del af navigationen</span>
          </div>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Når bevægelse gør matematik lettere at se</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">Du kan her afprøve tre små idéer, hvor bevægelse forklarer en ændring, understøtter din handling eller giver rolig feedback. Målet er læring – ikke pynt.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Ét nyt bibliotek", "Respekt for reduced motion", "Native SVG som fundament"].map((item) => (
              <div key={item} className="rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-foreground shadow-sm">✓ {item}</div>
            ))}
          </div>
        </header>

        <section className="mt-8 rounded-2xl border-2 border-primary bg-white p-5 sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Anbefaling</p>
              <h2 className="mt-1 text-2xl font-bold text-foreground">Vælg Motion – og behold SVG/CSS til resten</h2>
              <p className="mt-2 max-w-3xl text-muted">Motion passer direkte ind i React, kan begrænses til de interaktive øer og understøtter graftegning, drag og diskret feedback. D3 er stærkere til avancerede dataskalaer, og Konva til komplekse canvas-editorer, men ingen af delene er nødvendige for disse elevopgaver.</p>
            </div>
            <div className="rounded-xl bg-primary-light px-5 py-4 text-center">
              <p className="text-2xl font-bold text-primary">Motion</p>
              <p className="text-xs text-muted">prototypevalg</p>
            </div>
          </div>
        </section>

        <div className="mt-8 space-y-6">
          <DemoCard number="1" title="En graf, du kan følge" before="Grafen skifter øjeblikkeligt, så ændringens retning kan være svær at aflæse.">
            <AnimatedGraph reduceMotion={reduceMotion} />
          </DemoCard>
          <DemoCard number="2" title="Geometri, du selv ændrer" before="En statisk figur viser formlen, men ikke hvad der sker, når højden ændres.">
            <GeometryDemo reduceMotion={reduceMotion} />
          </DemoCard>
          <DemoCard number="3" title="Feedback uden støj" before="Et svar giver tekstfeedback, men handling og resultat føles adskilt.">
            <FeedbackDemo reduceMotion={reduceMotion} />
          </DemoCard>
        </div>

        <section className="mt-8 rounded-2xl border border-border bg-white p-5 sm:p-7">
          <h2 className="text-xl font-bold text-foreground">Hvad vi bevidst fravælger</h2>
          <p className="mt-2 text-sm text-muted">Et bibliotek skal løse et konkret elevproblem. De følgende valg tilfører mere vægt eller workflow, end denne type 2D-indhold har brug for.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {rejectedLibraries.map(([name, reason]) => (
              <div key={name} className="rounded-xl border border-border bg-surface p-4">
                <h3 className="font-bold text-foreground">{name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-muted">Prototype til sammenligning · Produktionssider og navigation er uændrede</footer>
      </div>
    </main>
  );
}
