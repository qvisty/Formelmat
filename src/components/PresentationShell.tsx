"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function PresentationShell({ children }: { children: React.ReactNode }) {
  const [isPresenting, setIsPresenting] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (event.key === "Escape" && isPresenting) {
        setIsPresenting(false);
      }

      if (!isTyping && event.key.toLowerCase() === "p") {
        event.preventDefault();
        setIsPresenting((current) => !current);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPresenting]);

  useEffect(() => {
    document.body.classList.toggle("presentation-mode", isPresenting);
    return () => document.body.classList.remove("presentation-mode");
  }, [isPresenting]);

  return (
    <>
      {!isPresenting && <Header />}
      <div className="flex flex-1">
        {!isPresenting && <Sidebar />}
        <main
          id="main-content"
          className={`flex-1 min-w-0 overflow-y-auto ${
            isPresenting ? "presentation-content" : ""
          }`}
        >
          <div key={pathname} className="route-content">
            {children}
          </div>
        </main>
      </div>

      <button
        type="button"
        onClick={() => setIsPresenting((current) => !current)}
        className="presentation-toggle fixed bottom-4 right-4 z-50 inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-lg transition hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-pressed={isPresenting}
        aria-label={
          isPresenting
            ? "Afslut præsentationsvisning"
            : "Start præsentationsvisning"
        }
        title={
          isPresenting
            ? "Afslut præsentation (Esc eller P)"
            : "Præsentér siden (P)"
        }
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          {isPresenting ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9 4 4m0 0v4m0-4h4m7 5 5-5m0 0h-4m4 0v4M9 15l-5 5m0 0v-4m0 4h4m7-5 5 5m0 0h-4m4 0v-4" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4m8 0h4v4M4 16v4h4m8 0h4v-4M8 12h8" />
          )}
        </svg>
        <span className={isPresenting ? "inline" : "hidden sm:inline"}>
          {isPresenting ? "Afslut" : "Præsentér"}
        </span>
        {!isPresenting && (
          <kbd className="hidden rounded border border-primary/20 bg-primary-light px-1.5 py-0.5 font-mono text-xs sm:inline-block">
            P
          </kbd>
        )}
      </button>
    </>
  );
}
