"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchContent } from "@/data/topics";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = searchContent(query);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (open) {
          onClose();
        } else {
          // Parent handles opening
        }
      }
      if (e.key === "Escape" && open) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function navigateTo(href: string) {
    router.push(href);
    onClose();
  }

  const typeLabels = {
    topic: "Emne",
    subtopic: "Underemne",
    glossary: "Fagord",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[5vh] sm:pt-[15vh]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-2 sm:mx-4 bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
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
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Søg i formler, fagord og emner..."
            className="flex-1 text-base outline-none placeholder:text-muted"
          />
          <kbd className="rounded bg-surface px-2 py-0.5 text-xs font-mono border border-border text-muted">
            Esc
          </kbd>
        </div>
        <div className="max-h-[60vh] sm:max-h-80 overflow-y-auto p-2">
          {query && results.length === 0 && (
            <p className="py-8 text-center text-sm text-muted">
              Ingen resultater for &ldquo;{query}&rdquo;
            </p>
          )}
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => navigateTo(result.href)}
              className="w-full flex items-start gap-3 rounded-lg px-3 py-3 sm:py-2.5 text-left hover:bg-surface active:bg-surface transition-colors"
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
      </div>
    </div>
  );
}
