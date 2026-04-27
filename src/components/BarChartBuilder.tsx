"use client";

import { useState } from "react";

type ChartType = "bar" | "pie";

const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316"];

const DEFAULT_DATA = [
  { label: "Hund", value: 8 },
  { label: "Kat", value: 6 },
  { label: "Fisk", value: 3 },
  { label: "Fugl", value: 4 },
  { label: "Kanin", value: 2 },
];

export function BarChartBuilder() {
  const [data, setData] = useState(DEFAULT_DATA);
  const [chartType, setChartType] = useState<ChartType>("bar");

  const maxVal = Math.max(...data.map((d) => d.value), 1);
  const total = data.reduce((sum, d) => sum + d.value, 0);

  function updateValue(idx: number, val: number) {
    setData((prev) => prev.map((d, i) => (i === idx ? { ...d, value: Math.max(0, val) } : d)));
  }

  function updateLabel(idx: number, label: string) {
    setData((prev) => prev.map((d, i) => (i === idx ? { ...d, label } : d)));
  }

  function addRow() {
    if (data.length < 8) {
      setData((prev) => [...prev, { label: `Ny ${prev.length + 1}`, value: 1 }]);
    }
  }

  function removeRow(idx: number) {
    if (data.length > 2) {
      setData((prev) => prev.filter((_, i) => i !== idx));
    }
  }

  // Pie chart helpers
  function pieSlices() {
    let cumAngle = -Math.PI / 2;
    return data.map((d, i) => {
      const angle = total > 0 ? (d.value / total) * 2 * Math.PI : 0;
      const startAngle = cumAngle;
      cumAngle += angle;
      const endAngle = cumAngle;
      const cx = 150, cy = 150, r = 120;
      const x1 = cx + r * Math.cos(startAngle);
      const y1 = cy + r * Math.sin(startAngle);
      const x2 = cx + r * Math.cos(endAngle);
      const y2 = cy + r * Math.sin(endAngle);
      const largeArc = angle > Math.PI ? 1 : 0;
      const path = data.length === 1
        ? `M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0`
        : `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z`;
      // Label position
      const midAngle = startAngle + angle / 2;
      const lx = cx + r * 0.6 * Math.cos(midAngle);
      const ly = cy + r * 0.6 * Math.sin(midAngle);
      return { path, color: COLORS[i % COLORS.length], lx, ly, pct: total > 0 ? ((d.value / total) * 100).toFixed(0) : "0", label: d.label, key: i };
    });
  }

  return (
    <div className="space-y-5">
      {/* Chart type toggle */}
      <div className="flex rounded-lg border border-border overflow-hidden w-fit mx-auto">
        <button
          onClick={() => setChartType("bar")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            chartType === "bar" ? "bg-primary text-white" : "bg-surface text-muted hover:text-foreground"
          }`}
        >
          Søjlediagram
        </button>
        <button
          onClick={() => setChartType("pie")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            chartType === "pie" ? "bg-primary text-white" : "bg-surface text-muted hover:text-foreground"
          }`}
        >
          Cirkeldiagram
        </button>
      </div>

      {/* Chart */}
      <div className="interactive-canvas flex justify-center">
        {chartType === "bar" ? (
          <svg viewBox={`0 0 ${60 + data.length * 60} 220`} className="w-full max-w-lg h-auto">
            {/* Y axis */}
            <line x1="40" y1="10" x2="40" y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />
            <line x1="40" y1="190" x2={50 + data.length * 60} y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />
            {/* Y labels */}
            {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
              const y = 190 - frac * 170;
              const val = Math.round(maxVal * frac);
              return (
                <g key={frac}>
                  <line x1="37" y1={y} x2="40" y2={y} stroke="currentColor" strokeWidth="1" className="text-border" />
                  <text x="34" y={y + 4} textAnchor="end" fontSize="10" className="text-muted fill-current">{val}</text>
                </g>
              );
            })}
            {/* Bars */}
            {data.map((d, i) => {
              const barH = maxVal > 0 ? (d.value / maxVal) * 170 : 0;
              const x = 50 + i * 60;
              return (
                <g key={i}>
                  <rect
                    x={x}
                    y={190 - barH}
                    width="40"
                    height={barH}
                    fill={COLORS[i % COLORS.length]}
                    rx="3"
                    opacity="0.8"
                  />
                  <text x={x + 20} y={185 - barH} textAnchor="middle" fontSize="11" fontWeight="600" fill={COLORS[i % COLORS.length]}>
                    {d.value}
                  </text>
                  <text x={x + 20} y={207} textAnchor="middle" fontSize="10" className="text-muted fill-current">
                    {d.label.length > 6 ? d.label.slice(0, 6) + "…" : d.label}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          <svg viewBox="0 0 300 300" className="w-full max-w-[280px] h-auto">
            {pieSlices().map((s) => (
              <g key={s.key}>
                <path d={s.path} fill={s.color} opacity="0.8" stroke="white" strokeWidth="2" />
                {parseInt(s.pct) > 5 && (
                  <text x={s.lx} y={s.ly} textAnchor="middle" fontSize="12" fontWeight="700" fill="white">
                    {s.pct}%
                  </text>
                )}
              </g>
            ))}
          </svg>
        )}
      </div>

      {/* Legend for pie */}
      {chartType === "pie" && (
        <div className="flex flex-wrap justify-center gap-3">
          {data.map((d, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-muted">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
              <span>{d.label}: {total > 0 ? ((d.value / total) * 100).toFixed(0) : 0}%</span>
            </div>
          ))}
        </div>
      )}

      {/* Data editor */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">Rediger data:</p>
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
            <input
              type="text"
              value={d.label}
              onChange={(e) => updateLabel(i, e.target.value)}
              className="flex-1 min-w-0 rounded border border-border bg-surface px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="number"
              value={d.value}
              onChange={(e) => updateValue(i, Number(e.target.value))}
              className="w-16 rounded border border-border bg-surface px-2 py-1 text-sm text-center text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            {data.length > 2 && (
              <button
                onClick={() => removeRow(i)}
                className="text-red-400 hover:text-red-600 text-sm font-bold px-1"
                aria-label="Fjern"
              >
                ×
              </button>
            )}
          </div>
        ))}
        {data.length < 8 && (
          <button
            onClick={addRow}
            className="rounded-lg border border-dashed border-border px-3 py-1 text-sm text-muted hover:text-foreground hover:border-primary/30 transition-colors"
          >
            + Tilføj kategori
          </button>
        )}
      </div>
    </div>
  );
}
