importScripts('/lightsout/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "quanon.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/lightsout/_nuxt/app.e63a1f3890967c576987.js",
    "revision": "1f82310f9263e3acc7959cbb01db3391"
  },
  {
    "url": "/lightsout/_nuxt/layouts/default.da7ae71009a2d39f78d2.js",
    "revision": "845da6ff5748674956a01310e9e6290b"
  },
  {
    "url": "/lightsout/_nuxt/manifest.00131c26f1a55d8396a5.js",
    "revision": "fc01b6f4a199ad5b4d422cd62fa43983"
  },
  {
    "url": "/lightsout/_nuxt/pages/index.252d02aee3ba0db873ae.js",
    "revision": "cc3cbe2a5fef98215d382ea78b06e59d"
  },
  {
    "url": "/lightsout/_nuxt/vendor.3341219949239d887eb4.js",
    "revision": "02f3f37c6001fa8ef20db594f93ac4f5"
  }
])


workboxSW.router.registerRoute(new RegExp('/lightsout/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/lightsout/.*'), workboxSW.strategies.networkFirst({}), 'GET')

