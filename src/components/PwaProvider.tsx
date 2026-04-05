"use client";

import { useEffect, useState } from "react";

export function PwaProvider({ children }: { children: React.ReactNode }) {
  const [isOffline, setIsOffline] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Registrer service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/", updateViaCache: "none" })
        .catch((err) => console.warn("SW registrering fejlede:", err));
    }

    // Sæt initial online-status
    setIsOffline(!navigator.onLine);

    const handleOffline = () => {
      setIsOffline(true);
      setShowBanner(true);
    };

    const handleOnline = () => {
      setIsOffline(false);
      // Skjul banneret efter 3 sekunder
      setTimeout(() => setShowBanner(false), 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <>
      {showBanner && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium transition-colors duration-300 ${
            isOffline
              ? "bg-amber-500 text-amber-950"
              : "bg-green-500 text-green-950"
          }`}
        >
          <span
            className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${
              isOffline ? "bg-amber-900" : "bg-green-900"
            }`}
            aria-hidden="true"
          />
          {isOffline
            ? "Du er offline – du kan stadig bruge Formelmat"
            : "Forbindelsen er genoprettet"}
        </div>
      )}
      {children}
    </>
  );
}
