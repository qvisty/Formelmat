"use client";

import { useState, useCallback } from "react";

export function InteractiveTriangle() {
  const [angle, setAngle] = useState(45);

  const toRad = useCallback((deg: number) => (deg * Math.PI) / 180, []);

  const hypotenuse = 200;
  const adjacent = hypotenuse * Math.cos(toRad(angle));
  const opposite = hypotenuse * Math.sin(toRad(angle));

  const sinVal = Math.sin(toRad(angle));
  const cosVal = Math.cos(toRad(angle));
  const tanVal = Math.tan(toRad(angle));

  // SVG coordinates
  const padding = 40;
  const svgW = 440;
  const svgH = 340;
  const originX = padding + 20;
  const originY = svgH - padding;

  const Ax = originX;
  const Ay = originY;
  const Bx = originX + adjacent;
  const By = originY;
  const Cx = originX + adjacent;
  const Cy = originY - opposite;

  // Angle arc
  const arcRadius = 35;
  const arcEndX = originX + arcRadius * Math.cos(toRad(angle));
  const arcEndY = originY - arcRadius * Math.sin(toRad(angle));

  return (
    <div className="space-y-6">
      <div className="interactive-canvas overflow-hidden">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="w-full h-auto max-h-[340px]"
        >
          {/* Triangle fill */}
          <polygon
            points={`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`}
            fill="rgba(37, 99, 235, 0.08)"
            stroke="#2563eb"
            strokeWidth="2.5"
          />

          {/* Right angle marker */}
          <polyline
            points={`${Bx - 15},${By} ${Bx - 15},${By - 15} ${Bx},${By - 15}`}
            fill="none"
            stroke="#64748b"
            strokeWidth="1.5"
          />

          {/* Angle arc */}
          <path
            d={`M ${originX + arcRadius},${originY} A ${arcRadius} ${arcRadius} 0 0 0 ${arcEndX} ${arcEndY}`}
            fill="rgba(245, 158, 11, 0.15)"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <text
            x={originX + arcRadius + 8}
            y={originY - 10}
            fontSize="14"
            fill="#f59e0b"
            fontWeight="600"
          >
            {angle}°
          </text>

          {/* Side labels */}
          {/* Hypotenuse */}
          <text
            x={(Ax + Cx) / 2 - 25}
            y={(Ay + Cy) / 2 - 8}
            fontSize="13"
            fill="#2563eb"
            fontWeight="600"
            transform={`rotate(${-angle}, ${(Ax + Cx) / 2 - 25}, ${(Ay + Cy) / 2 - 8})`}
          >
            hyp = {hypotenuse.toFixed(0)}
          </text>

          {/* Adjacent (hosliggende) */}
          <text
            x={(Ax + Bx) / 2}
            y={Ay + 25}
            fontSize="13"
            fill="#10b981"
            fontWeight="600"
            textAnchor="middle"
          >
            hosl = {adjacent.toFixed(1)}
          </text>

          {/* Opposite (modstående) */}
          <text
            x={Bx + 12}
            y={(By + Cy) / 2}
            fontSize="13"
            fill="#ef4444"
            fontWeight="600"
          >
            mod = {opposite.toFixed(1)}
          </text>

          {/* Vertex labels */}
          <text x={Ax - 5} y={Ay + 20} fontSize="14" fontWeight="700" fill="#1a1a2e">
            A
          </text>
          <text x={Bx + 5} y={By + 20} fontSize="14" fontWeight="700" fill="#1a1a2e">
            B
          </text>
          <text x={Cx + 5} y={Cy - 5} fontSize="14" fontWeight="700" fill="#1a1a2e">
            C
          </text>
        </svg>
      </div>

      {/* Slider */}
      <div>
        <label className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">
            Vinkel v (ved A)
          </span>
          <span className="text-sm font-bold text-primary">{angle}°</span>
        </label>
        <input
          type="range"
          min={5}
          max={85}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>5°</span>
          <span>85°</span>
        </div>
      </div>

      {/* Computed values */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="rounded-lg bg-blue-50 border border-blue-200 p-2 sm:p-3 text-center">
          <p className="text-[10px] sm:text-xs text-muted mb-1">sin({angle}°)</p>
          <p className="text-base sm:text-lg font-bold text-blue-700">{sinVal.toFixed(4)}</p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-200 p-2 sm:p-3 text-center">
          <p className="text-[10px] sm:text-xs text-muted mb-1">cos({angle}°)</p>
          <p className="text-base sm:text-lg font-bold text-green-700">
            {cosVal.toFixed(4)}
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-2 sm:p-3 text-center">
          <p className="text-[10px] sm:text-xs text-muted mb-1">tan({angle}°)</p>
          <p className="text-base sm:text-lg font-bold text-amber-700">
            {angle === 90 ? "∞" : tanVal.toFixed(4)}
          </p>
        </div>
      </div>

      {/* Formulas */}
      <div className="rounded-lg bg-surface border border-border p-3 sm:p-4 space-y-2 text-xs sm:text-sm overflow-x-auto">
        <p>
          <span className="text-blue-600 font-medium">sin({angle}°)</span> ={" "}
          <span className="text-red-500">modstående</span> /{" "}
          <span className="text-blue-600">hypotenuse</span> ={" "}
          {opposite.toFixed(1)} / {hypotenuse} ={" "}
          <strong>{sinVal.toFixed(4)}</strong>
        </p>
        <p>
          <span className="text-green-600 font-medium">cos({angle}°)</span> ={" "}
          <span className="text-green-600">hosliggende</span> /{" "}
          <span className="text-blue-600">hypotenuse</span> ={" "}
          {adjacent.toFixed(1)} / {hypotenuse} ={" "}
          <strong>{cosVal.toFixed(4)}</strong>
        </p>
        <p>
          <span className="text-amber-600 font-medium">tan({angle}°)</span> ={" "}
          <span className="text-red-500">modstående</span> /{" "}
          <span className="text-green-600">hosliggende</span> ={" "}
          {opposite.toFixed(1)} / {adjacent.toFixed(1)} ={" "}
          <strong>{angle === 90 ? "∞" : tanVal.toFixed(4)}</strong>
        </p>
      </div>
    </div>
  );
}
