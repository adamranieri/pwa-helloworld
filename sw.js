const CACHE_NAME = `AWZOME-CALC`;
const GHPATH = '/pwa-helloworld';
const VERSION = 'v02';
const APP_PREFIX = 'awz_';

const URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`
]

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
    ]);
  })());
});

self.addEventListener('fetch', function (event) {
  // it can be empty if you just want to get rid of that error
});