self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('phyto-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/app.js',
          '/manifest.json',
          '/icon-192.jpg',
          '/icon-512.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((res) => res || fetch(event.request))
    );
  });
  