"use client";

import { useState } from "react";

interface ExplanationItem {
  title: string;
  text: string;
}

interface EverydayExplanationProps {
  items: ExplanationItem[];
}

export function EverydayExplanation({ items }: EverydayExplanationProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">
        <span className="mr-2">💡</span>Hverdagsforklaringer
      </h2>
      <p className="text-muted text-sm mb-3">
        Klik for at se, hvordan matematik bruges i hverdagen.
      </p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-border overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left font-medium hover:bg-surface transition-colors"
              aria-expanded={openIndex === i}
            >
              <span>{item.title}</span>
              <span className="text-muted text-xs ml-4 shrink-0">
                {openIndex === i ? "▲ Luk" : "▼ Vis"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 pt-2 text-muted leading-relaxed border-t border-border text-sm">
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
