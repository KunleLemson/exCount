const staticExCount = "exam-countdown-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/bg.jpg",
  "/favicon.ico",
  "/spinner.gif"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticExCount).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})