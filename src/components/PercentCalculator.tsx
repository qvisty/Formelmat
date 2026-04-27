"use client";

import { useState } from "react";

type Mode = "find_percent" | "find_part" | "change";

export function PercentCalculator() {
  const [mode, setMode] = useState<Mode>("find_percent");
  const [inputA, setInputA] = useState("60");
  const [inputB, setInputB] = useState("15");

  const a = parseFloat(inputA) || 0;
  const b = parseFloat(inputB) || 0;

  let result = "";
  let explanation = "";

  if (mode === "find_percent") {
    // What percent is b of a?
    if (a !== 0) {
      const pct = (b / a) * 100;
      result = `${pct.toFixed(2).replace(/\.?0+$/, "")}%`;
      explanation = `${b} ud af ${a}: (${b} / ${a}) × 100 = ${pct.toFixed(2).replace(/\.?0+$/, "")}%`;
    }
  } else if (mode === "find_part") {
    // What is b% of a?
    const part = a * (b / 100);
    result = part.toFixed(2).replace(/\.?0+$/, "");
    explanation = `${b}% af ${a}: ${a} × ${b}/100 = ${result}`;
  } else {
    // Percent change from a to b
    if (a !== 0) {
      const change = ((b - a) / a) * 100;
      const dir = change >= 0 ? "stigning" : "fald";
      result = `${change.toFixed(2).replace(/\.?0+$/, "")}%`;
      explanation = `Fra ${a} til ${b}: ((${b} − ${a}) / ${a}) × 100 = ${change.toFixed(2).replace(/\.?0+$/, "")}% ${dir}`;
    }
  }

  const modes: { key: Mode; label: string }[] = [
    { key: "find_percent", label: "Find procent" },
    { key: "find_part", label: "Find del" },
    { key: "change", label: "Ændring" },
  ];

  const labels: Record<Mode, [string, string]> = {
    find_percent: ["Hele (det samlede tal)", "Del (den del du vil finde procent af)"],
    find_part: ["Hele (tallet du vil finde en del af)", "Procentsats (%)"],
    change: ["Gammel værdi", "Ny værdi"],
  };

  return (
    <div className="space-y-5">
      {/* Mode toggle */}
      <div className="flex rounded-lg border border-border overflow-hidden w-fit mx-auto">
        {modes.map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
              mode === m.key
                ? "bg-primary text-white"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            {labels[mode][0]}
          </label>
          <input
            type="number"
            value={inputA}
            onChange={(e) => setInputA(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            {labels[mode][1]}
          </label>
          <input
            type="number"
            value={inputB}
            onChange={(e) => setInputB(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Result */}
      <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 text-center">
        <p className="text-xs text-muted mb-1">Resultat</p>
        <p className="text-2xl sm:text-3xl font-bold text-blue-700">{result || "–"}</p>
      </div>

      {/* Explanation */}
      {explanation && (
        <div className="rounded-lg border border-border p-3 bg-surface">
          <p className="text-xs text-muted mb-1">Udregning</p>
          <p className="text-sm font-mono text-foreground">{explanation}</p>
        </div>
      )}

      {/* Visual bar */}
      {mode === "find_percent" && a > 0 && (
        <div className="space-y-1">
          <div className="h-6 rounded-full bg-blue-100 border border-blue-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${Math.min((b / a) * 100, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      )}
      {mode === "find_part" && a > 0 && (
        <div className="space-y-1">
          <div className="h-6 rounded-full bg-blue-100 border border-blue-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${Math.min(b, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      )}
    </div>
  );
}
