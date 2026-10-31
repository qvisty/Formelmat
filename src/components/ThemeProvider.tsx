"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
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

const THEME_STORAGE_KEY = "formelmat-theme";
const THEME_CHANGE_EVENT = "formelmat-theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

function getStoredTheme(): ThemeId | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
  return stored && themes.some((theme) => theme.id === stored) ? stored : null;
}

function getServerTheme(): ThemeId | null {
  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeId = useSyncExternalStore(
    subscribeToTheme,
    getStoredTheme,
    getServerTheme
  );

  function setTheme(id: ThemeId | null) {
    if (id) {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <ThemeContext value={{ themeId, setTheme }}>
      {children}
    </ThemeContext>
  );
}
