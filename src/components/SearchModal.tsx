"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchContent } from "@/data/topics";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const resultsId = useId();
  const router = useRouter();

  const results = searchContent(query);

  useEffect(() => {
    if (open) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
      previouslyFocusedRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (open) {
          setQuery("");
          setActiveIndex(-1);
          onClose();
        } else {
          // Parent handles opening
        }
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setQuery("");
        onClose();
      }
      if (e.key === "Tab" && open) {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'input, button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function closeModal() {
    setQuery("");
    setActiveIndex(-1);
    onClose();
  }

  function navigateTo(href: string) {
    router.push(href);
    closeModal();
  }

  const typeLabels = {
    topic: "Emne",
    subtopic: "Underemne",
    glossary: "Fagord",
  };

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
    } else if (event.key === "ArrowUp" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? results.length - 1 : current - 1));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      navigateTo(results[activeIndex].href);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[5vh] sm:pt-[15vh]">
      <div className="absolute inset-0 bg-black/40" onClick={closeModal} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative w-full max-w-lg mx-2 sm:mx-4 bg-white rounded-xl shadow-2xl border border-border overflow-hidden"
      >
        <h2 id={titleId} className="sr-only">Søg i Formelmat</h2>
        <p id={descriptionId} className="sr-only">
          Søg efter formler, fagord og emner. Brug piletasterne til at vælge et resultat.
        </p>
        <div className="flex items-center gap-3 px-3 sm:px-4 py-3 border-b border-border">
          <svg
            className="h-5 w-5 text-muted flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={handleInputKeyDown}
            aria-label="Søg efter formler, fagord og emner"
            aria-controls={resultsId}
            aria-activedescendant={activeIndex >= 0 ? `${resultsId}-${activeIndex}` : undefined}
            aria-autocomplete="list"
            aria-expanded={results.length > 0}
            role="combobox"
            placeholder="Søg i formler, fagord og emner..."
            className="flex-1 text-base outline-none placeholder:text-muted"
          />
          <kbd className="rounded bg-surface px-2 py-0.5 text-xs font-mono border border-border text-muted">
            Esc
          </kbd>
        </div>
        <div
          id={resultsId}
          role={results.length > 0 ? "listbox" : undefined}
          aria-label="Søgeresultater"
          className="max-h-[60vh] sm:max-h-80 overflow-y-auto p-2"
        >
          {query && results.length === 0 && (
            <p className="py-8 text-center text-sm text-muted">
              Ingen resultater for &ldquo;{query}&rdquo;
            </p>
          )}
          {results.map((result, i) => (
            <button
              key={i}
              id={`${resultsId}-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              tabIndex={-1}
              onClick={() => navigateTo(result.href)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`w-full flex items-start gap-3 rounded-lg px-3 py-3 sm:py-2.5 text-left hover:bg-surface active:bg-surface transition-colors ${
                i === activeIndex ? "bg-surface" : ""
              }`}
            >
              <span className="mt-0.5 rounded bg-primary-light px-1.5 py-0.5 text-xs font-medium text-primary">
                {typeLabels[result.type]}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {result.title}
                </p>
                <p className="text-xs text-muted truncate mt-0.5">
                  {result.description}
                </p>
              </div>
            </button>
          ))}
          {!query && (
            <p className="py-8 text-center text-sm text-muted">
              Skriv for at søge i formelsamlingen...
            </p>
          )}
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {query
            ? `${results.length} ${results.length === 1 ? "resultat" : "resultater"} fundet.`
            : "Skriv for at søge i formelsamlingen."}
        </p>
      </div>
    </div>
  );
}
