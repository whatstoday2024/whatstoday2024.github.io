import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.vue', '.js']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/scss/customVar.scss";
        @import "@/scss/_mixins.scss";
        `
      }
    }
  }
})
