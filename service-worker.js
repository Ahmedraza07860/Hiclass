const CACHE_NAME = "hiclass-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/logo.png",
  "/book.html",
  "/quiz.html",
  "/courses.html",
  "/dashboard.html",
  "/refer.html",
  "/menu.html",
  "/pastpapper.html",
  "/faq.html",
  "/privacy.html",
  "/contact.html",
  "/support.html",
  "/chatbot.html"
];

// Install SW
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Activate new SW
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key);
        }
      }))
    )
  );
});
