"use client";

import { useState } from "react";

export function LinearFunctionDemo() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);

  const width = 300;
  const height = 300;
  const mid = width / 2;
  const scale = 30;

  const x1 = -5;
  const x2 = 5;
  const y1 = a * x1 + b;
  const y2 = a * x2 + b;

  const toSvgX = (x: number) => mid + x * scale;
  const toSvgY = (y: number) => mid - y * scale;

  return (
    <div className="rounded-xl border border-border p-4 sm:p-6 bg-surface">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-[300px] h-auto border border-border rounded-lg bg-white dark:bg-gray-900"
        >
          {/* Grid */}
          {Array.from({ length: 11 }, (_, i) => i - 5).map((v) => (
            <g key={v}>
              <line
                x1={toSvgX(v)}
                y1={0}
                x2={toSvgX(v)}
                y2={height}
                stroke="currentColor"
                strokeOpacity={0.08}
              />
              <line
                x1={0}
                y1={toSvgY(v)}
                x2={width}
                y2={toSvgY(v)}
                stroke="currentColor"
                strokeOpacity={0.08}
              />
            </g>
          ))}
          {/* Axes */}
          <line
            x1={0}
            y1={mid}
            x2={width}
            y2={mid}
            stroke="currentColor"
            strokeOpacity={0.3}
            strokeWidth={1}
          />
          <line
            x1={mid}
            y1={0}
            x2={mid}
            y2={height}
            stroke="currentColor"
            strokeOpacity={0.3}
            strokeWidth={1}
          />
          {/* Axis labels */}
          <text x={width - 12} y={mid - 6} fontSize={11} fill="currentColor" opacity={0.5}>
            x
          </text>
          <text x={mid + 6} y={12} fontSize={11} fill="currentColor" opacity={0.5}>
            y
          </text>
          {/* Function line */}
          <line
            x1={toSvgX(x1)}
            y1={toSvgY(y1)}
            x2={toSvgX(x2)}
            y2={toSvgY(y2)}
            stroke="#3b82f6"
            strokeWidth={2.5}
          />
          {/* y-intercept point */}
          <circle cx={toSvgX(0)} cy={toSvgY(b)} r={4} fill="#3b82f6" />
          <text
            x={toSvgX(0) + 8}
            y={toSvgY(b) - 8}
            fontSize={11}
            fill="#3b82f6"
          >
            (0, {b})
          </text>
        </svg>
        <div className="flex-1 space-y-4">
          <div className="formula-box">
            <p className="text-sm text-muted mb-1">Forskrift</p>
            <p className="math-formula text-lg">
              y = {a}x {b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Hældningstal (a): {a}
            </label>
            <input
              type="range"
              min={-5}
              max={5}
              step={0.5}
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Skæring med y-aksen (b): {b}
            </label>
            <input
              type="range"
              min={-5}
              max={5}
              step={0.5}
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <p className="text-sm text-muted">
            Træk i skyderne for at se, hvordan a og b påvirker den rette linje.
          </p>
        </div>
      </div>
    </div>
  );
}
