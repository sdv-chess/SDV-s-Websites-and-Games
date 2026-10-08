self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
// Always loads from the network, so updates show up straight away. Only adds an offline message.
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(() => new Response("You're offline. Reconnect to open SDV's Websites and Games.", { status: 503, headers: { "Content-Type": "text/plain" } })));
  }
});
