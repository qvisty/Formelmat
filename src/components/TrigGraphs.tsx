"use client";

import { useState } from "react";

type TrigFunc = "sin" | "cos" | "tan";

export function TrigGraphs() {
  const [activeFunc, setActiveFunc] = useState<TrigFunc>("sin");
  const [amplitude, setAmplitude] = useState(1);
  const [period, setPeriod] = useState(1);

  const svgW = 600;
  const svgH = 300;
  const cx = svgW / 2;
  const cy = svgH / 2;
  const scaleX = 80; // pixels per π/2
  const scaleY = 80;

  function evalFunc(x: number): number | null {
    const arg = period * x;
    switch (activeFunc) {
      case "sin":
        return amplitude * Math.sin(arg);
      case "cos":
        return amplitude * Math.cos(arg);
      case "tan": {
        const val = Math.tan(arg);
        if (Math.abs(val) > 10) return null;
        return amplitude * val;
      }
    }
  }

  // Generate path
  const step = 0.02;
  let pathD = "";
  let drawing = false;

  for (let x = -Math.PI * 2.5; x <= Math.PI * 2.5; x += step) {
    const y = evalFunc(x);
    if (y === null) {
      drawing = false;
      continue;
    }
    const sx = cx + x * scaleX / (Math.PI / 2);
    const sy = cy - y * scaleY;
    if (!drawing) {
      pathD += `M ${sx} ${sy} `;
      drawing = true;
    } else {
      pathD += `L ${sx} ${sy} `;
    }
  }

  const funcColors = {
    sin: "#2563eb",
    cos: "#10b981",
    tan: "#f59e0b",
  };

  const funcNames = {
    sin: "Sinus",
    cos: "Cosinus",
    tan: "Tangens",
  };

  // Grid lines
  const gridLinesX = [-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2];
  const gridLinesY = [-2, -1, 1, 2];

  return (
    <div className="space-y-6">
      {/* Function selector */}
      <div className="flex gap-2">
        {(["sin", "cos", "tan"] as TrigFunc[]).map((fn) => (
          <button
            key={fn}
            onClick={() => setActiveFunc(fn)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeFunc === fn
                ? "text-white"
                : "bg-surface text-muted border border-border hover:border-primary"
            }`}
            style={
              activeFunc === fn
                ? { backgroundColor: funcColors[fn] }
                : undefined
            }
          >
            {funcNames[fn]}
          </button>
        ))}
      </div>

      <div className="interactive-canvas overflow-hidden">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto">
          {/* Grid */}
          {gridLinesX.map((gx) => {
            const sx = cx + gx * scaleX;
            return (
              <line
                key={`gx${gx}`}
                x1={sx}
                y1={10}
                x2={sx}
                y2={svgH - 10}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
            );
          })}
          {gridLinesY.map((gy) => {
            const sy = cy - gy * scaleY;
            return (
              <line
                key={`gy${gy}`}
                x1={10}
                y1={sy}
                x2={svgW - 10}
                y2={sy}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
            );
          })}

          {/* Axes */}
          <line x1={10} y1={cy} x2={svgW - 10} y2={cy} stroke="#94a3b8" strokeWidth="1.5" />
          <line x1={cx} y1={10} x2={cx} y2={svgH - 10} stroke="#94a3b8" strokeWidth="1.5" />

          {/* Axis labels */}
          {[-2, -1, 1, 2].map((n) => {
            const sx = cx + n * scaleX;
            return (
              <text key={`xl${n}`} x={sx} y={cy + 18} fontSize="10" fill="#94a3b8" textAnchor="middle">
                {n > 0 ? `${n}π/2` : `${n}π/2`}
              </text>
            );
          })}
          {[-2, -1, 1, 2].map((n) => {
            const sy = cy - n * scaleY;
            return (
              <text key={`yl${n}`} x={cx - 16} y={sy + 4} fontSize="10" fill="#94a3b8" textAnchor="end">
                {n}
              </text>
            );
          })}

          {/* Function curve */}
          <path
            d={pathD}
            fill="none"
            stroke={funcColors[activeFunc]}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Sliders */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Amplitude (a)</span>
            <span className="text-sm font-bold text-primary">{amplitude.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min={0.1}
            max={3}
            step={0.1}
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Frekvens (b)</span>
            <span className="text-sm font-bold text-primary">{period.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min={0.1}
            max={4}
            step={0.1}
            value={period}
            onChange={(e) => setPeriod(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="formula-box">
        <p className="math-formula text-lg">
          f(x) = {amplitude !== 1 ? `${amplitude.toFixed(1)} · ` : ""}
          {activeFunc}({period !== 1 ? `${period.toFixed(1)} · ` : ""}x)
        </p>
      </div>

      <div className="rounded-lg bg-surface border border-border p-4 text-sm text-muted space-y-2">
        <p>
          <strong>Amplitude (a):</strong> Bestemmer hvor høj/lav grafen er.
          Amplitude = |a| = {amplitude.toFixed(1)}.
        </p>
        <p>
          <strong>Frekvens (b):</strong> Bestemmer hvor hurtigt funktionen
          svinger. Periode = 2π/b = {((2 * Math.PI) / period).toFixed(2)}.
        </p>
      </div>
    </div>
  );
}
