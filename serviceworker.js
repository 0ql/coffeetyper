/// <reference lib="WebWorker" />

const /** @type {string} */ cacheName = new URL(self.registration.scope).pathname;

self.addEventListener("message", async (/** @type {MessageEvent} */ e) => {
	if (e.data.type === "cacheTheme") {
		const cache = await caches.open(cacheName)
		try {
			cache.add(e.data.url)
			e.source.postMessage("cacheThemeSuccess")
		} catch (err) {
			e.source.postMessage("cacheThemeFail")
		}
	} else if (e.data.type === "updateCache") {
		const cache = await caches.open(cacheName)
		try {
			await cache.addAll([
				'./',
				'./index.html',
				'./fonts.json',
				'./lang/en.txt',
				'./assets/icon.png',
				'./assets/icon.svg',
				'./assets/manifest.webmanifest',
				'./assets/icons/apple-icon-180.png',
				'./assets/icons/manifest-icon-192.maskable.png',
				'./assets/icons/manifest-icon-512.maskable.png',
				'./themes/bliss.css'
			])
			e.source.postMessage("updateSuccess")
		} catch (err) {
			e.source.postMessage("updateFail")
		}
	}
})

self.addEventListener("install", async (/** @type {InstallEvent} */ e) => {
	const cache = await caches.open(cacheName)
	await cache.addAll([
		'./',
		'./index.html',
		'./fonts.json',
		'./lang/en.txt',
		'./assets/icon.png',
		'./assets/icon.svg',
		'./assets/manifest.webmanifest',
		'./assets/icons/apple-icon-180.png',
		'./assets/icons/manifest-icon-192.maskable.png',
		'./assets/icons/manifest-icon-512.maskable.png',
		'./themes/bliss.css'
	])
})

const tryFetch = async (/** @type {Request} */ req) => {
	try {
		const /** @type {Response} */ res = await fetch(req)
		return res
	} catch (err) {
		return null
	}
}

const cacheFirst = async ({ request }) => {
	const res = await caches.match(request) ?? await tryFetch(request) ?? new Response('Network error', { status: 408 })
	return res
}

// cacheFirst
self.addEventListener("fetch", (/** @type {FetchEvent} */ e) => e.respondWith(cacheFirst(e)))
