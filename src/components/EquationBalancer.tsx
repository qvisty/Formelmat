"use client";

import { useState } from "react";

interface Step {
  left: string;
  right: string;
  action: string;
}

function solveLinear(a: number, b: number, c: number): Step[] {
  // Solve ax + b = c step by step
  const steps: Step[] = [];

  steps.push({
    left: `${a === 1 ? "" : a === -1 ? "−" : a}x${b >= 0 ? ` + ${b}` : ` − ${Math.abs(b)}`}`,
    right: `${c}`,
    action: "Start",
  });

  if (b !== 0) {
    const newRight = c - b;
    steps.push({
      left: `${a === 1 ? "" : a === -1 ? "−" : a}x`,
      right: `${newRight}`,
      action: b > 0 ? `Træk ${b} fra begge sider` : `Læg ${Math.abs(b)} til begge sider`,
    });

    if (a !== 1 && a !== 0) {
      const solution = newRight / a;
      steps.push({
        left: "x",
        right: `${Number.isInteger(solution) ? solution : solution.toFixed(2)}`,
        action: `Divider begge sider med ${a}`,
      });
    }
  } else if (a !== 1 && a !== 0) {
    const solution = c / a;
    steps.push({
      left: "x",
      right: `${Number.isInteger(solution) ? solution : solution.toFixed(2)}`,
      action: `Divider begge sider med ${a}`,
    });
  }

  return steps;
}

export function EquationBalancer() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(5);
  const [c, setC] = useState(20);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = solveLinear(a, b, c);
  const maxStep = steps.length - 1;
  const step = steps[Math.min(currentStep, maxStep)];
  const solution = a !== 0 ? (c - b) / a : NaN;

  return (
    <div className="space-y-5">
      {/* Equation inputs */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-lg">
        <input
          type="number"
          value={a}
          onChange={(e) => { setA(Number(e.target.value)); setCurrentStep(0); }}
          className="w-14 rounded-lg border border-border bg-surface px-2 py-1 text-center text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <span className="font-mono text-foreground">x +</span>
        <input
          type="number"
          value={b}
          onChange={(e) => { setB(Number(e.target.value)); setCurrentStep(0); }}
          className="w-14 rounded-lg border border-border bg-surface px-2 py-1 text-center text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <span className="font-mono text-foreground">=</span>
        <input
          type="number"
          value={c}
          onChange={(e) => { setC(Number(e.target.value)); setCurrentStep(0); }}
          className="w-14 rounded-lg border border-border bg-surface px-2 py-1 text-center text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Balance visualization */}
      <div className="interactive-canvas">
        <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto h-auto">
          {/* Base */}
          <polygon points="200,170 180,150 220,150" fill="currentColor" className="text-border" />
          {/* Beam */}
          <line x1="60" y1="80" x2="340" y2="80" stroke="currentColor" strokeWidth="3" className="text-foreground" />
          {/* Fulcrum */}
          <line x1="200" y1="80" x2="200" y2="150" stroke="currentColor" strokeWidth="3" className="text-foreground" />
          {/* Left pan */}
          <rect x="60" y="85" width="120" height="50" rx="8" fill="var(--color-primary, #3b82f6)" fillOpacity="0.15" stroke="var(--color-primary, #3b82f6)" strokeWidth="2" />
          <text x="120" y="115" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--color-primary, #3b82f6)">
            {step.left}
          </text>
          {/* Right pan */}
          <rect x="220" y="85" width="120" height="50" rx="8" fill="#16a34a" fillOpacity="0.15" stroke="#16a34a" strokeWidth="2" />
          <text x="280" y="115" textAnchor="middle" fontSize="16" fontWeight="700" fill="#16a34a">
            {step.right}
          </text>
          {/* Equals sign */}
          <text x="200" y="68" textAnchor="middle" fontSize="20" fontWeight="700" fill="currentColor" className="text-foreground">=</text>
        </svg>
      </div>

      {/* Step action */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-4 py-1 text-sm font-medium text-amber-800">
          {step.action}
        </span>
      </div>

      {/* Step controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Forrige
        </button>
        <span className="text-sm text-muted">
          Trin {Math.min(currentStep, maxStep) + 1} af {maxStep + 1}
        </span>
        <button
          onClick={() => setCurrentStep(Math.min(maxStep, currentStep + 1))}
          disabled={currentStep >= maxStep}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Næste →
        </button>
      </div>

      {/* Solution box */}
      {currentStep >= maxStep && !isNaN(solution) && (
        <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
          <p className="text-xs text-muted mb-1">Løsning</p>
          <p className="text-2xl font-bold text-green-700">
            x = {Number.isInteger(solution) ? solution : solution.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
