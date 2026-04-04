"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type ThemeId, themes } from "@/data/themes";

interface ThemeContextValue {
  themeId: ThemeId | null;
  setTheme: (id: ThemeId | null) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeId: null,
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("formelmat-theme") as ThemeId | null;
    if (stored && themes.some((t) => t.id === stored)) {
      setThemeId(stored);
    }
    setLoaded(true);
  }, []);

  function setTheme(id: ThemeId | null) {
    setThemeId(id);
    if (id) {
      localStorage.setItem("formelmat-theme", id);
    } else {
      localStorage.removeItem("formelmat-theme");
    }
  }

  if (!loaded) return <>{children}</>;

  return (
    <ThemeContext value={{ themeId, setTheme }}>
      {children}
    </ThemeContext>
  );
}
