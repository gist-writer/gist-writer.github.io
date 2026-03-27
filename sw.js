const CACHE_NAME = 'gist-writer-v4';
const SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-512-maskable.png',
  '/apple-touch-icon.png',
  '/fonts/geist-latin-400.woff2',
  '/fonts/geist-latin-500.woff2',
  '/fonts/geist-latin-700.woff2',
  '/fonts/ia-writer-quattro-latin-400.woff2',
  '/fonts/ia-writer-quattro-latin-400-italic.woff2',
  '/fonts/ia-writer-quattro-latin-700.woff2',
  '/fonts/ia-writer-mono-latin-400.woff2',
  '/fonts/ia-writer-mono-latin-700.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Allow the page to force-activate a waiting SW (used by sw-register.ts)
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Skip API calls entirely — let the browser handle them
  if (event.request.url.includes('api.github.com')) {
    return;
  }

  // Network-first for index.html — ensures users get the latest
  // entry point after deploys (Vite JS/CSS bundles have content
  // hashes so cache-first is fine for those).
  const url = new URL(event.request.url);
  if (url.pathname === '/' || url.pathname === '/index.html') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for everything else (hashed assets, icons, manifest, fonts)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached ?? new Response('', { status: 503 }));

      return cached || fetchPromise;
    })
  );
});
