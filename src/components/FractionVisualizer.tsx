"use client";

import { useState } from "react";

const MAX_DENOM = 12;

function CircleFraction({
  numerator,
  denominator,
}: {
  numerator: number;
  denominator: number;
}) {
  const cx = 80;
  const cy = 80;
  const r = 65;
  const filled = Math.min(numerator, denominator);

  const slices = [];
  for (let i = 0; i < denominator; i++) {
    const startAngle = (i / denominator) * 2 * Math.PI - Math.PI / 2;
    const endAngle = ((i + 1) / denominator) * 2 * Math.PI - Math.PI / 2;

    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

    const d =
      denominator === 1
        ? `M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0`
        : `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z`;

    slices.push(
      <path
        key={i}
        d={d}
        fill={i < filled ? "#2563eb" : "transparent"}
        stroke="#2563eb"
        strokeWidth="1.5"
        opacity={i < filled ? 0.8 : 0.3}
      />
    );
  }

  return (
    <svg viewBox="0 0 160 160" className="w-full max-w-[160px] mx-auto h-auto">
      <circle cx={cx} cy={cy} r={r} fill="#e8f0fe" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
      {slices}
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="16" fontWeight="700" fill="#1e3a8a">
        {numerator}/{denominator}
      </text>
    </svg>
  );
}

function BarFraction({
  numerator,
  denominator,
}: {
  numerator: number;
  denominator: number;
}) {
  const w = 300;
  const h = 48;
  const sliceW = w / denominator;
  const filled = Math.min(numerator, denominator);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto max-h-[48px]">
      {Array.from({ length: denominator }).map((_, i) => (
        <rect
          key={i}
          x={i * sliceW + 1}
          y={1}
          width={sliceW - 2}
          height={h - 2}
          fill={i < filled ? "#2563eb" : "transparent"}
          stroke="#2563eb"
          strokeWidth="1.5"
          rx="3"
          opacity={i < filled ? 0.75 : 0.3}
        />
      ))}
    </svg>
  );
}

export function FractionVisualizer() {
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(4);
  const [view, setView] = useState<"circle" | "bar">("circle");

  const decimal = numerator / denominator;
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(numerator, denominator);
  const simplified =
    g === denominator
      ? `${numerator / g}`
      : `${numerator / g}/${denominator / g}`;

  return (
    <div className="space-y-5">
      {/* View toggle */}
      <div className="flex rounded-lg border border-border overflow-hidden w-fit mx-auto">
        <button
          onClick={() => setView("circle")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            view === "circle"
              ? "bg-primary text-white"
              : "bg-surface text-muted hover:text-foreground"
          }`}
        >
          Cirkel
        </button>
        <button
          onClick={() => setView("bar")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            view === "bar"
              ? "bg-primary text-white"
              : "bg-surface text-muted hover:text-foreground"
          }`}
        >
          Søjle
        </button>
      </div>

      {/* Visualization */}
      <div className="interactive-canvas flex items-center justify-center min-h-[170px]">
        {view === "circle" ? (
          <CircleFraction numerator={numerator} denominator={denominator} />
        ) : (
          <div className="w-full px-4">
            <BarFraction numerator={numerator} denominator={denominator} />
          </div>
        )}
      </div>

      {/* Sliders */}
      <div className="space-y-4">
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Tæller (over stregen)
            </span>
            <span className="text-sm font-bold text-primary">{numerator}</span>
          </label>
          <input
            type="range"
            min={0}
            max={denominator}
            value={numerator}
            onChange={(e) => setNumerator(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>0</span>
            <span>{denominator}</span>
          </div>
        </div>

        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Nævner (under stregen)
            </span>
            <span className="text-sm font-bold text-primary">{denominator}</span>
          </label>
          <input
            type="range"
            min={1}
            max={MAX_DENOM}
            value={denominator}
            onChange={(e) => {
              const d = Number(e.target.value);
              setDenominator(d);
              if (numerator > d) setNumerator(d);
            }}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>1</span>
            <span>{MAX_DENOM}</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="rounded-lg bg-blue-50 border border-blue-200 p-2 sm:p-3 text-center">
          <p className="text-[10px] sm:text-xs text-muted mb-1">Brøk</p>
          <p className="text-base sm:text-lg font-bold text-blue-700">
            {numerator}/{denominator}
          </p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-200 p-2 sm:p-3 text-center">
          <p className="text-[10px] sm:text-xs text-muted mb-1">Decimaltal</p>
          <p className="text-base sm:text-lg font-bold text-green-700">
            {decimal.toFixed(4).replace(/0+$/, "").replace(/\.$/, "")}
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-2 sm:p-3 text-center">
          <p className="text-[10px] sm:text-xs text-muted mb-1">Forkortet</p>
          <p className="text-base sm:text-lg font-bold text-amber-700">
            {simplified}
          </p>
        </div>
      </div>
    </div>
  );
}
