self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
  console.log('Service Worker ativo');
});

self.addEventListener('fetch', () => {});
