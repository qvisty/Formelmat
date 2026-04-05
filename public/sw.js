// Formelmat Service Worker – cache-first strategi for offline brug
const CACHE_VERSION = "v1";
const CACHE_NAME = `formelmat-${CACHE_VERSION}`;

// Ressourcer der pre-caches ved installation
const PRECACHE_URLS = ["/", "/emner", "/fagord", "/offline"];

// ---- Install ----
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

// ---- Activate: ryd gamle caches ----
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("formelmat-") && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ---- Fetch: cache-first for navigering og statiske assets ----
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer non-GET og cross-origin requests
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // Ignorer Next.js interne routes og HMR
  if (
    url.pathname.startsWith("/_next/webpack-hmr") ||
    url.pathname.startsWith("/_next/static/development")
  ) {
    return;
  }

  // Cache-first strategi
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);

      if (cached) {
        // Returner cachet version, opdatér i baggrunden (stale-while-revalidate)
        event.waitUntil(
          fetch(request)
            .then((response) => {
              if (response && response.status === 200) {
                cache.put(request, response.clone());
              }
            })
            .catch(() => {
              // Netværket utilgængeligt – det er ok, vi har cachen
            })
        );
        return cached;
      }

      // Ikke i cache – forsøg netværk og gem resultatet
      try {
        const response = await fetch(request);
        if (response && response.status === 200) {
          cache.put(request, response.clone());
        }
        return response;
      } catch {
        // Offline og ikke i cache – vis offline-side for navigering
        if (request.mode === "navigate") {
          const offlineFallback = await cache.match("/offline");
          if (offlineFallback) return offlineFallback;
          // Minimal fallback hvis offline-siden heller ikke er cached
          return new Response(
            "<html><body><h1>Du er offline</h1><p>Åbn Formelmat mens du har internet for at bruge det offline.</p></body></html>",
            { headers: { "Content-Type": "text/html; charset=utf-8" } }
          );
        }
        throw new Error("Netværk utilgængeligt og intet cache-hit");
      }
    })
  );
});
