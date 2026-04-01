"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📘</span>
            <span className="text-xl font-bold text-foreground">
              Formelmat
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/emner/tal-og-algebra"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Tal og algebra
            </Link>
            <Link
              href="/emner/geometri"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Geometri
            </Link>
            <Link
              href="/emner/statistik"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Statistik
            </Link>
            <Link
              href="/fagord"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Fagord
            </Link>
          </nav>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted hover:border-primary transition-colors"
          >
            <svg
              className="h-4 w-4"
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
            <span className="hidden sm:inline">Søg...</span>
            <kbd className="hidden sm:inline-block rounded bg-white px-1.5 py-0.5 text-xs font-mono border border-border">
              Ctrl+K
            </kbd>
          </button>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
