// Service worker minimal : ne met rien en cache, sert uniquement de
// signal pour que la page detecte une nouvelle version et se recharge seule.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
