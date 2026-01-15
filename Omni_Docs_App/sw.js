// Service Worker for Omni Docs AI PWA
const CACHE_NAME = 'omni-docs-ai-v1';
const urlsToCache = [
  '/omni-docs-ai-app.html',
  '/manifest.json'
];

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when possible, with network fallback
self.addEventListener('fetch', (event) => {
  // For docs.omni.co, always fetch from network to get live content
  if (event.request.url.includes('docs.omni.co')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return new Response(
            '<html><body><h1>Offline</h1><p>Please check your internet connection to access Omni Docs.</p></body></html>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        })
    );
    return;
  }

  // For app resources, use cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Handle messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
