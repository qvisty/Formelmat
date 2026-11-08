// Formelmat Service Worker – komplet offline-opslagsværk
// Opdatér versionen ved ændringer i precache-listen eller cache-strategien.
const CACHE_VERSION = "v3";
const CACHE_NAME = `formelmat-${CACHE_VERSION}`;

const PRECACHE_PAGES = [
  "/",
  "/offline",
  "/fagord",
  "/emner/tal-og-algebra",
  "/emner/tal-og-algebra/tal",
  "/emner/tal-og-algebra/procent-og-promille",
  "/emner/tal-og-algebra/potenser-og-roedder",
  "/emner/tal-og-algebra/regnestrategier",
  "/emner/tal-og-algebra/oekonomi",
  "/emner/tal-og-algebra/ligninger",
  "/emner/tal-og-algebra/formler-og-udtryk",
  "/emner/tal-og-algebra/funktioner",
  "/emner/tal-og-algebra/forhold-og-proportionalitet",
  "/emner/tal-og-algebra/talfolger",
  "/emner/tal-og-algebra/uligheder",
  "/emner/tal-og-algebra/maengdelaere",
  "/emner/geometri",
  "/emner/geometri/linjer-og-vinkler",
  "/emner/geometri/polygoner-og-trekanter",
  "/emner/geometri/firkanter-og-cirkler",
  "/emner/geometri/ligedannethed",
  "/emner/geometri/pythagoras",
  "/emner/geometri/trigonometri",
  "/emner/geometri/rumlige-figurer",
  "/emner/geometri/flytninger-og-symmetri",
  "/emner/geometri/koordinatsystem",
  "/emner/geometri/areal-og-omkreds",
  "/emner/geometri/rumfang",
  "/emner/geometri/maaleenheder",
  "/emner/geometri/vektorer",
  "/emner/statistik",
  "/emner/statistik/datasaet",
  "/emner/statistik/deskriptorer",
  "/emner/statistik/diagrammer",
  "/emner/statistik/sandsynlighed",
  "/emner/statistik/kombinatorik",
];

const PRECACHE_ASSETS = ["/manifest.webmanifest", "/icon.svg", "/favicon.ico"];

function referencedAssets(html) {
  const assets = new Set();
  const attributePattern = /(?:href|src)=["']([^"']+)["']/g;
  let match;

  while ((match = attributePattern.exec(html)) !== null) {
    const url = new URL(match[1], self.location.origin);
    if (
      url.origin === self.location.origin &&
      (url.pathname.startsWith("/_next/") || url.pathname.startsWith("/icon"))
    ) {
      assets.add(url.href);
    }
  }

  return assets;
}

async function precacheApp() {
  const cache = await caches.open(CACHE_NAME);
  const assetUrls = new Set(
    PRECACHE_ASSETS.map((path) => new URL(path, self.location.origin).href)
  );

  for (const path of PRECACHE_PAGES) {
    const request = new Request(path, { cache: "reload" });
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Kunne ikke forhåndscache ${path}: ${response.status}`);
    }

    await cache.put(request, response.clone());
    const html = await response.text();
    for (const assetUrl of referencedAssets(html)) assetUrls.add(assetUrl);
  }

  await cache.addAll([...assetUrls]);
}

// ---- Install ----
self.addEventListener("install", (event) => {
  event.waitUntil(precacheApp().then(() => self.skipWaiting()));
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

async function navigationResponse(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch {
    return (
      (await cache.match(request, { ignoreSearch: true })) ||
      (await cache.match("/offline")) ||
      Response.error()
    );
  }
}

async function assetResponse(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) await cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (
    request.method !== "GET" ||
    url.origin !== self.location.origin ||
    url.pathname.startsWith("/_next/webpack-hmr") ||
    url.pathname.startsWith("/_next/static/development")
  ) {
    return;
  }

  event.respondWith(
    request.mode === "navigate"
      ? navigationResponse(request)
      : assetResponse(request)
  );
});
