const cacheName = 'v1-gra';
const assets = ['index.html', 'manifest.json'];

// Instalacja - pobieranie plików do pamięci
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// Serwowanie plików z pamięci, gdy nie ma internetu
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
