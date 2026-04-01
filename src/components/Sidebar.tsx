"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics } from "@/data/topics";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-surface overflow-y-auto sticky top-[57px] h-[calc(100vh-57px)]">
      <nav className="p-4 space-y-1">
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
          Emner
        </p>
        {topics.map((topic) => {
          const isActive = pathname.startsWith(topic.href);
          return (
            <div key={topic.id}>
              <Link
                href={topic.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-light text-primary"
                    : "text-foreground hover:bg-gray-100"
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
                        className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                          subActive
                            ? "text-primary font-medium"
                            : "text-muted hover:text-foreground"
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
        <div className="pt-4">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
            Værktøjer
          </p>
          <Link
            href="/fagord"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              pathname === "/fagord"
                ? "bg-primary-light text-primary"
                : "text-foreground hover:bg-gray-100"
            }`}
          >
            <span>📖</span>
            <span>Fagord</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
