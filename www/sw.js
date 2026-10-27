const V = "jamana-v13";
const FICHIERS = ["./", "index.html", "manifest.json", "icon.svg", "data/fr.js", "data/annuaire.js", "data/urgences.js", "data/actualites.js", "data/emploi.js", "data/transport.js", "data/outils.js", "data/en.js", "data/bm.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => Promise.all(FICHIERS.map(f => c.add(f).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(cles => Promise.all(cles.filter(k => k !== V).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Réseau d'abord (toujours la dernière version), cache en secours hors ligne
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copie = r.clone(); caches.open(V).then(c => c.put(e.request, copie)); return r; })
      .catch(() => caches.match(e.request))
  );
});
