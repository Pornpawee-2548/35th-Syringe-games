const CACHE_NAME = 'my-syringe-games-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Emergency.html',
  '/css/styles.css',
  '/scripts/app.js',
  '/image/logo.png',
  '/image/sos.png',
  '/image/icon-192x192.png',
  '/image/icon-512x512.png',
  '/image/Top-bg.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});