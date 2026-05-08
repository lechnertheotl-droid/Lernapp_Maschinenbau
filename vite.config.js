import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

const appBase = process.env.GITHUB_PAGES === 'true' ? '/Lernapp_Maschinenbau/' : '/'

export default defineConfig({
  base: appBase,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/*.png'],
      manifest: {
        name: 'Lernapp Maschinenbau TU Wien',
        short_name: 'Lernapp MB',
        description: 'Interaktive Lern-App für das Maschinenbaustudium an der TU Wien',
        lang: 'de',
        theme_color: '#003DA5',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: appBase,
        scope: appBase,
        icons: [
          { src: `${appBase}icons/icon-192.png`, sizes: '192x192', type: 'image/png' },
          { src: `${appBase}icons/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024, // 3 MiB — Topic-Chunks via manualChunks gesplittet (siehe build.rollupOptions)
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const norm = id.replace(/\\/g, '/')

          // Pro Topic-Slug ein Chunk: mathematics/<slug>/* und subgoal_tasks/<slug>.js
          // landen zusammen in `content-<slug>`. So fällt jedes Topic separat aus dem
          // Main-Bundle und bleibt klein genug fürs PWA-Workbox-Cache-Limit.
          let m = norm.match(/\/src\/content\/(?:mathematics|engineering|programming)\/([^/]+)\//)
          if (m) return `content-${m[1]}`

          m = norm.match(/\/src\/content\/subgoal_tasks\/([^/.]+)\.js/)
          if (m) return `content-${m[1]}`

          if (norm.includes('/src/content/practice/')) return 'content-practice'
          if (norm.includes('/src/content/engineering/maschinenbau')) return 'content-maschinenbau'
        },
      },
    },
  },
})
