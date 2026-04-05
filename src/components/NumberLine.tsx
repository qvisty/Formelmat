"use client";

import { useState, useRef, useCallback } from "react";

const MIN = -5;
const MAX = 5;
const SVG_W = 500;
const SVG_H = 120;
const PADDING = 40;
const AXIS_Y = 60;

const TRACK_W = SVG_W - PADDING * 2;

function valToX(val: number) {
  return PADDING + ((val - MIN) / (MAX - MIN)) * TRACK_W;
}

function xToVal(x: number) {
  const raw = MIN + ((x - PADDING) / TRACK_W) * (MAX - MIN);
  return Math.round(Math.max(MIN, Math.min(MAX, raw)) * 10) / 10;
}

const SPECIAL = [
  { label: "√2", value: Math.sqrt(2) },
  { label: "π", value: Math.PI },
  { label: "-√2", value: -Math.sqrt(2) },
];

export function NumberLine() {
  const [markerVal, setMarkerVal] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);

  const getValFromEvent = useCallback(
    (clientX: number): number => {
      const svg = svgRef.current;
      if (!svg) return 0;
      const rect = svg.getBoundingClientRect();
      const scaleX = SVG_W / rect.width;
      const x = (clientX - rect.left) * scaleX;
      return xToVal(x);
    },
    []
  );

  const onMouseDown = useCallback(() => {
    dragging.current = true;
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (!dragging.current) return;
      setMarkerVal(getValFromEvent(e.clientX));
    },
    [getValFromEvent]
  );

  const onMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  const onTouchStart = useCallback(
    (e: React.TouchEvent<SVGCircleElement>) => {
      dragging.current = true;
      setMarkerVal(getValFromEvent(e.touches[0].clientX));
    },
    [getValFromEvent]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      if (!dragging.current) return;
      e.preventDefault();
      setMarkerVal(getValFromEvent(e.touches[0].clientX));
    },
    [getValFromEvent]
  );

  const onTouchEnd = useCallback(() => {
    dragging.current = false;
  }, []);

  const onSvgClick = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (dragging.current) return;
      setMarkerVal(getValFromEvent(e.clientX));
    },
    [getValFromEvent]
  );

  const markerX = valToX(markerVal);

  const ticks = [];
  for (let i = MIN; i <= MAX; i++) {
    ticks.push(i);
  }

  // Determine what type of number the current value is
  const isInteger = Number.isInteger(markerVal);
  const isRational = !isInteger; // simplified: non-integer decimals we set via slider
  let taltype = "Helt tal (ℤ)";
  if (!isInteger) taltype = "Rationalt tal (ℚ)";

  return (
    <div className="space-y-4">
      <div className="interactive-canvas overflow-hidden cursor-pointer">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full h-auto max-h-[120px] select-none"
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={onSvgClick}
          style={{ touchAction: "none" }}
        >
          {/* Axis line */}
          <line
            x1={PADDING - 10}
            y1={AXIS_Y}
            x2={SVG_W - PADDING + 10}
            y2={AXIS_Y}
            stroke="#94a3b8"
            strokeWidth="2"
          />
          {/* Arrow right */}
          <polygon
            points={`${SVG_W - PADDING + 10},${AXIS_Y} ${SVG_W - PADDING + 2},${AXIS_Y - 5} ${SVG_W - PADDING + 2},${AXIS_Y + 5}`}
            fill="#94a3b8"
          />

          {/* Ticks and labels */}
          {ticks.map((t) => (
            <g key={t}>
              <line
                x1={valToX(t)}
                y1={AXIS_Y - 6}
                x2={valToX(t)}
                y2={AXIS_Y + 6}
                stroke="#64748b"
                strokeWidth={t === 0 ? 2 : 1.5}
              />
              <text
                x={valToX(t)}
                y={AXIS_Y + 22}
                textAnchor="middle"
                fontSize="13"
                fill="#64748b"
                fontWeight={t === 0 ? "700" : "400"}
              >
                {t}
              </text>
            </g>
          ))}

          {/* Special irrational markers */}
          {SPECIAL.map((s) => (
            <g key={s.label}>
              <line
                x1={valToX(s.value)}
                y1={AXIS_Y - 4}
                x2={valToX(s.value)}
                y2={AXIS_Y + 4}
                stroke="#a855f7"
                strokeWidth="1.5"
                strokeDasharray="3,2"
              />
              <text
                x={valToX(s.value)}
                y={AXIS_Y - 10}
                textAnchor="middle"
                fontSize="11"
                fill="#a855f7"
              >
                {s.label}
              </text>
            </g>
          ))}

          {/* Marker shadow */}
          <circle
            cx={markerX}
            cy={AXIS_Y}
            r={16}
            fill="rgba(37,99,235,0.10)"
          />
          {/* Draggable marker */}
          <circle
            cx={markerX}
            cy={AXIS_Y}
            r={10}
            fill="#2563eb"
            stroke="white"
            strokeWidth="2.5"
            style={{ cursor: "grab" }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          />
          {/* Marker value label */}
          <text
            x={markerX}
            y={AXIS_Y - 18}
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#2563eb"
          >
            {markerVal}
          </text>
        </svg>
      </div>

      <p className="text-sm text-center text-muted">
        Klik eller træk markøren for at placere et tal på tallinjen
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 text-center">
          <p className="text-xs text-muted mb-1">Valgt tal</p>
          <p className="text-xl font-bold text-blue-700">{markerVal}</p>
        </div>
        <div className="rounded-lg bg-purple-50 border border-purple-200 p-3 text-center">
          <p className="text-xs text-muted mb-1">Taltype</p>
          <p className="text-sm font-bold text-purple-700">{taltype}</p>
        </div>
      </div>

      <div className="rounded-lg bg-surface border border-border p-3 text-sm text-muted">
        <p>
          <span className="text-purple-600 font-medium">Lilla streger</span>{" "}
          viser irrationale tal: &radic;2 &asymp; 1,414 og &pi; &asymp; 3,142.
          De kan ikke skrives præcist som brøker.
        </p>
      </div>
    </div>
  );
}
