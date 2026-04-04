"use client";

import { useTheme } from "./ThemeProvider";
import { themedExamples, themes } from "@/data/themes";

interface ThemedExampleProps {
  /** The topic key matching themedExamples[].topic */
  topic: string;
}

export function ThemedExample({ topic }: ThemedExampleProps) {
  const { themeId } = useTheme();

  const entry = themedExamples.find((e) => e.topic === topic);
  if (!entry) return null;

  // If no theme selected, show default (fodbold as fallback)
  const activeId = themeId || "fodbold";
  const example = entry.examples[activeId];
  const theme = themes.find((t) => t.id === activeId);
  if (!example || !theme) return null;

  return (
    <div
      className="rounded-lg border p-4 sm:p-5"
      style={{
        borderColor: `${theme.color}40`,
        backgroundColor: `${theme.color}08`,
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0 mt-0.5">{theme.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground leading-relaxed">
            {example.text}
          </p>
          {example.calculation && (
            <div
              className="mt-2 rounded-md px-3 py-2 text-sm font-mono"
              style={{ backgroundColor: `${theme.color}12` }}
            >
              <span className="text-muted text-xs block mb-0.5">Beregning:</span>
              <span
                className="font-semibold"
                style={{ color: theme.color }}
              >
                {example.calculation}
              </span>
            </div>
          )}
          {!themeId && (
            <p className="mt-2 text-[11px] text-muted">
              💡 Vælg dit tema på forsiden for at se eksempler, der passer til
              dine interesser.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
