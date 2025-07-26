
const CACHE_NAME = 'munajaat-v2';
const ASSETS_CACHE = 'munajaat-assets-v2';
const API_CACHE = 'munajaat-api-v1';

// Essential files to cache for offline functionality
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  '/src/styles/fonts.css',
  '/indopak.ttf',
  '/lovable-uploads/aff6b74d-10a2-4fa2-8b4b-3df7c73d6f5f.png',
  '/lovable-uploads/a469b1ff-e447-400a-a8f1-bf6f57f28201.png',
  // Google Fonts
  'https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
];

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker installing...');
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        console.log('📦 Caching essential files...');
        return cache.addAll(urlsToCache.slice(0, 6)); // Cache local files first
      }),
      caches.open(ASSETS_CACHE).then((cache) => {
        console.log('🎨 Caching external assets...');
        return Promise.allSettled(
          urlsToCache.slice(6).map(url => 
            fetch(url, { mode: 'cors' })
              .then(response => cache.put(url, response))
              .catch(err => console.log(`Failed to cache ${url}:`, err))
          )
        );
      })
    ]).then(() => {
      console.log('✅ Service Worker installed successfully');
      self.skipWaiting();
    })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== ASSETS_CACHE && cacheName !== API_CACHE) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle API requests
  if (url.pathname.includes('script.google.com') || event.request.url.includes('exec')) {
    event.respondWith(
      caches.open(API_CACHE).then(cache => {
        return fetch(event.request)
          .then(response => {
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => {
            return cache.match(event.request);
          });
      })
    );
    return;
  }

  // Handle font requests
  if (event.request.url.includes('fonts.googleapis.com') || 
      event.request.url.includes('fonts.gstatic.com') ||
      event.request.url.includes('.ttf') ||
      event.request.url.includes('.woff')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request, { mode: 'cors' })
          .then(response => {
            if (response.ok) {
              const responseClone = response.clone();
              caches.open(ASSETS_CACHE).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            console.log('Font request failed, no cache available for:', event.request.url);
          });
      })
    );
    return;
  }

  // Handle all other requests with cache-first strategy
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        })
        .catch(() => {
          // Return offline page or basic response for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        });
    })
  );
});

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('🔄 Background sync triggered');
    event.waitUntil(
      // Attempt to fetch fresh data when connection is restored
      fetch('https://script.google.com/macros/s/AKfycbwnStYTIkgdOipSkxcfs_KlAk0HmZXnl1Dp-qXe8l720nLCOszQXO9TFN63jalq8DGo/exec')
        .then(response => response.json())
        .then(data => {
          return caches.open(API_CACHE).then(cache => {
            cache.put('api-data', new Response(JSON.stringify(data)));
          });
        })
        .catch(err => console.log('Background sync failed:', err))
    );
  }
});
