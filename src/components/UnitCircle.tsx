"use client";

import { useState } from "react";

export function UnitCircle() {
  const [angle, setAngle] = useState(45);
  const rad = (angle * Math.PI) / 180;

  const cx = 200;
  const cy = 200;
  const r = 150;

  const px = cx + r * Math.cos(rad);
  const py = cy - r * Math.sin(rad);

  const sinVal = Math.sin(rad);
  const cosVal = Math.cos(rad);

  // Arc for the angle
  const largeArc = angle > 180 ? 1 : 0;
  const arcEndX = cx + 30 * Math.cos(rad);
  const arcEndY = cy - 30 * Math.sin(rad);

  return (
    <div className="space-y-6">
      <div className="interactive-canvas overflow-hidden">
        <svg viewBox="0 0 400 400" className="w-full h-auto max-h-[400px]">
          {/* Grid lines */}
          <line x1={cx} y1={20} x2={cx} y2={380} stroke="#e2e8f0" strokeWidth="1" />
          <line x1={20} y1={cy} x2={380} y2={cy} stroke="#e2e8f0" strokeWidth="1" />

          {/* Axes */}
          <line x1={cx} y1={30} x2={cx} y2={370} stroke="#94a3b8" strokeWidth="1.5" />
          <line x1={30} y1={cy} x2={370} y2={cy} stroke="#94a3b8" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x={375} y={cy - 8} fontSize="12" fill="#64748b">x</text>
          <text x={cx + 8} y={30} fontSize="12" fill="#64748b">y</text>
          <text x={cx + r + 3} y={cy + 15} fontSize="11" fill="#64748b">1</text>
          <text x={cx - r - 10} y={cy + 15} fontSize="11" fill="#64748b">-1</text>
          <text x={cx + 5} y={cy - r - 3} fontSize="11" fill="#64748b">1</text>
          <text x={cx + 5} y={cy + r + 15} fontSize="11" fill="#64748b">-1</text>

          {/* Unit circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
          />

          {/* Angle arc */}
          <path
            d={`M ${cx + 30},${cy} A 30 30 0 ${largeArc} 0 ${arcEndX} ${arcEndY}`}
            fill="rgba(245, 158, 11, 0.2)"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <text
            x={cx + 38 * Math.cos(rad / 2)}
            y={cy - 38 * Math.sin(rad / 2) + 4}
            fontSize="12"
            fill="#f59e0b"
            fontWeight="600"
          >
            {angle}°
          </text>

          {/* Radius line */}
          <line
            x1={cx}
            y1={cy}
            x2={px}
            y2={py}
            stroke="#1a1a2e"
            strokeWidth="2"
          />

          {/* cos projection (x) */}
          <line
            x1={cx}
            y1={cy}
            x2={px}
            y2={cy}
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="6 3"
          />
          {/* sin projection (y) */}
          <line
            x1={px}
            y1={cy}
            x2={px}
            y2={py}
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeDasharray="6 3"
          />

          {/* Dotted lines to point */}
          <line
            x1={px}
            y1={py}
            x2={px}
            y2={cy}
            stroke="#94a3b8"
            strokeWidth="0.5"
            strokeDasharray="3 3"
          />
          <line
            x1={px}
            y1={py}
            x2={cx}
            y2={py}
            stroke="#94a3b8"
            strokeWidth="0.5"
            strokeDasharray="3 3"
          />

          {/* Point on circle */}
          <circle cx={px} cy={py} r="6" fill="#2563eb" stroke="white" strokeWidth="2" />

          {/* Labels */}
          <text
            x={(cx + px) / 2}
            y={cy + 18}
            fontSize="13"
            fill="#10b981"
            fontWeight="600"
            textAnchor="middle"
          >
            cos = {cosVal.toFixed(3)}
          </text>
          <text
            x={px + 12}
            y={(cy + py) / 2 + 4}
            fontSize="13"
            fill="#ef4444"
            fontWeight="600"
          >
            sin = {sinVal.toFixed(3)}
          </text>

          {/* Coordinate label */}
          <text
            x={px + (px > cx + r / 2 ? -80 : 12)}
            y={py - 12}
            fontSize="12"
            fill="#1a1a2e"
            fontWeight="500"
          >
            ({cosVal.toFixed(2)}, {sinVal.toFixed(2)})
          </text>
        </svg>
      </div>

      {/* Angle slider */}
      <div>
        <label className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Vinkel</span>
          <span className="text-sm font-bold text-primary">{angle}°</span>
        </label>
        <input
          type="range"
          min={0}
          max={360}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>0°</span>
          <span>90°</span>
          <span>180°</span>
          <span>270°</span>
          <span>360°</span>
        </div>
      </div>

      {/* Quick angle buttons */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {[0, 30, 45, 60, 90, 120, 150, 180, 270, 360].map(
          (a) => (
            <button
              key={a}
              onClick={() => setAngle(a)}
              className={`rounded-md px-2.5 py-1.5 sm:py-1 text-xs font-medium border transition-colors min-w-[3rem] ${
                angle === a
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted border-border hover:border-primary active:bg-primary-light"
              }`}
            >
              {a}°
            </button>
          )
        )}
      </div>

      {/* Values */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-green-50 border border-green-200 p-3 text-center">
          <p className="text-xs text-muted mb-1">cos({angle}°)</p>
          <p className="text-lg font-bold text-green-700">
            {cosVal.toFixed(4)}
          </p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-center">
          <p className="text-xs text-muted mb-1">sin({angle}°)</p>
          <p className="text-lg font-bold text-red-600">
            {sinVal.toFixed(4)}
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-surface border border-border p-4 text-sm text-muted">
        <p>
          <strong>Enhedscirklen</strong> har radius 1 og centrum i origo (0, 0).
          Et punkt P på cirklen med vinkel v fra den positive x-akse har
          koordinaterne:
        </p>
        <p className="mt-2 text-center math-formula text-foreground text-base">
          P = (cos(v), sin(v))
        </p>
      </div>
    </div>
  );
}
