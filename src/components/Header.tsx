"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SearchModal } from "./SearchModal";
import { topics } from "@/data/topics";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
          {/* Hamburger button - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 -ml-2 rounded-lg hover:bg-surface transition-colors"
            aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

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

      {/* Mobile slide-out menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-[57px] left-0 bottom-0 w-72 max-w-[85vw] bg-white border-r border-border overflow-y-auto overscroll-contain">
            <div className="p-4 space-y-1">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Emner
              </p>
              {topics.map((topic) => {
                const isActive = pathname.startsWith(topic.href);
                return (
                  <div key={topic.id}>
                    <Link
                      href={topic.href}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary-light text-primary"
                          : "text-foreground hover:bg-gray-100 active:bg-gray-100"
                      }`}
                    >
                      <span>{topic.icon}</span>
                      <span>{topic.title}</span>
                    </Link>
                    {isActive && topic.subtopics && topic.subtopics.length > 0 && (
                      <div className="ml-7 mt-1 space-y-0.5">
                        {topic.subtopics.map((sub) => {
                          const subActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                subActive
                                  ? "text-primary font-medium"
                                  : "text-muted hover:text-foreground active:text-foreground"
                              }`}
                            >
                              {sub.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-border mt-4">
                <Link
                  href="/fagord"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    pathname === "/fagord"
                      ? "bg-primary-light text-primary"
                      : "text-foreground hover:bg-gray-100 active:bg-gray-100"
                  }`}
                >
                  <span>📖</span>
                  <span>Fagord</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
