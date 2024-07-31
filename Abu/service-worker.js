const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/Black_and_Blue_Airplane_Travel_Logo-removebg-preview (1).png',
    'Black_and_Blue_Airplane_Travel_Logo-removebg-preview (2).png',
    'Black_and_Blue_Airplane_Travel_Logo-removebg-preview (3).png',
    'Black_and_Blue_Airplane_Travel_Logo-removebg-preview.png',
    '3dgifmaker95690.gif'
];

// Install the service worker and cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch resources from cache when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Return the cached resource
                }
                return fetch(event.request); // Fetch from network if not cached
            })
    );
});
