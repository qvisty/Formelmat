"use client";

import { useTheme } from "./ThemeProvider";
import { themes } from "@/data/themes";

export function ThemeSelector() {
  const { themeId, setTheme } = useTheme();

  return (
    <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
      <h3 className="font-semibold text-foreground text-sm mb-1">
        Vælg dit tema
      </h3>
      <p className="text-xs text-muted mb-3">
        Alle eksempler tilpasses dit tema, så matematikken handler om det, du
        interesserer dig for.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {themes.map((theme) => {
          const isActive = themeId === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => setTheme(isActive ? null : theme.id)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-all ${
                isActive
                  ? "border-2 shadow-sm"
                  : "border-border hover:border-gray-300 active:bg-gray-50"
              }`}
              style={
                isActive
                  ? { borderColor: theme.color, backgroundColor: `${theme.color}10` }
                  : undefined
              }
            >
              <span className="text-xl flex-shrink-0">{theme.icon}</span>
              <div className="min-w-0">
                <p
                  className="font-medium truncate"
                  style={isActive ? { color: theme.color } : undefined}
                >
                  {theme.name}
                </p>
                <p className="text-[10px] text-muted truncate">
                  {theme.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
      {themeId && (
        <button
          onClick={() => setTheme(null)}
          className="mt-2 text-xs text-muted hover:text-foreground transition-colors"
        >
          Nulstil tema
        </button>
      )}
    </div>
  );
}
