import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // PWA Configurations
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'BRIEFCASE',
        shortname: 'BRIEFCASE',
        description: 'Playground for Investor & Business Owner',
        theme_color: '#27AAE1',
        icons: [
          {
            src: 'briefcase-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'briefcase-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
    // PWA Configurations Ends
  ],
  // if got CNAME or deploying to https://<USERNAME>.github.io/
  base: '/',
  // if deploying to https://<USERNAME>.github.io/<REPO>/
  // base: '/<REPO_NAME>/',
  // base: process.env.NODE_ENV === 'production'
  //         ? './<REPO_NAME>/' // prod
  //         : '/', // dev
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
