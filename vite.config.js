import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
