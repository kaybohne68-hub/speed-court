const CACHE="speed-court-v1-6";
const ASSETS=["./","./index.html","./manifest.json","./audio/unlock.wav","./audio/test.wav","./audio/cue.wav","./audio/pause.wav","./audio/ready.wav","./audio/finish.wav"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
