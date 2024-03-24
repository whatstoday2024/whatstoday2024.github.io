// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'file:///C:/Users/User/Desktop/vue%E8%AA%B2/whatstoday2024.github.io/node_modules/vite/dist/node/index.js'
import vue from 'file:///C:/Users/User/Desktop/vue%E8%AA%B2/whatstoday2024.github.io/node_modules/@vitejs/plugin-vue/dist/index.mjs'
const __viteInjectedOriginalImportMetaUrl = 'file:///C:/Users/User/Desktop/vue%E8%AA%B2/whatstoday2024.github.io/vite.config.js'
const viteConfigDefault = defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', __viteInjectedOriginalImportMetaUrl))
    },
    extensions: ['.vue', '.js']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/scss/customVar.scss";
        `
      }
    }
  }
})
export {
  viteConfigDefault as default
}
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcdnVlXHU4QUIyXFxcXHdoYXRzdG9kYXkyMDI0LmdpdGh1Yi5pb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHZ1ZVx1OEFCMlxcXFx3aGF0c3RvZGF5MjAyNC5naXRodWIuaW9cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VzZXIvRGVza3RvcC92dWUlRTglQUElQjIvd2hhdHN0b2RheTIwMjQuZ2l0aHViLmlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCIvXCIsXHJcbiAgcGx1Z2luczogW3Z1ZSgpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZScsICcuanMnXVxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxyXG4gICAgICAgIEBpbXBvcnQgXCJAL3Njc3MvY3VzdG9tVmFyLnNjc3NcIjtcclxuICAgICAgICBgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1YsU0FBUyxlQUFlLFdBQVc7QUFFbFksU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSHlNLElBQU0sMkNBQTJDO0FBTTFRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxJQUNBLFlBQVksQ0FBQyxRQUFRLEtBQUs7QUFBQSxFQUM1QjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLE1BR2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
