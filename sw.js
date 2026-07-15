// Service worker minimal : ne met rien en cache, sert uniquement de
// signal pour que la page detecte une nouvelle version et se recharge seule.
// Le handler fetch (simple passe-plat reseau) est requis par certains
// navigateurs pour considerer l'application comme installable (PWA).
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
