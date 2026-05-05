"use client";

import { useState } from "react";

interface EverydayExplanationProps {
  title: string;
  text: string;
}

export function EverydayExplanation({ title, text }: EverydayExplanationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/10 overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 pt-2.5 pb-0">
        <span className="text-base leading-none">💡</span>
        <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
          Hverdagsforklaring
        </span>
        <span className="group relative ml-0.5">
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-muted/50 text-muted cursor-help text-[9px] font-bold leading-none select-none">
            ?
          </span>
          <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 z-20 hidden group-hover:block bg-foreground text-background text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg">
            Klik for at se, hvordan matematik bruges i hverdagen
          </span>
        </span>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-amber-100/50 dark:hover:bg-amber-900/20 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="text-muted text-xs ml-3 shrink-0">
          {isOpen ? "▲ Luk" : "▼ Vis"}
        </span>
      </button>
      {isOpen && (
        <div className="px-3 pb-3 pt-1 text-sm text-muted leading-relaxed border-t border-amber-200/70 dark:border-amber-900/40">
          {text}
        </div>
      )}
    </div>
  );
}
