// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/wonder4/Desktop/MYWORKS/whatstoday2024.github.io/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/wonder4/Desktop/MYWORKS/whatstoday2024.github.io/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/wonder4/Desktop/MYWORKS/whatstoday2024.github.io/vite.config.js";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [".vue", ".js"]
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
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3b25kZXI0XFxcXERlc2t0b3BcXFxcTVlXT1JLU1xcXFx3aGF0c3RvZGF5MjAyNC5naXRodWIuaW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdvbmRlcjRcXFxcRGVza3RvcFxcXFxNWVdPUktTXFxcXHdoYXRzdG9kYXkyMDI0LmdpdGh1Yi5pb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvd29uZGVyNC9EZXNrdG9wL01ZV09SS1Mvd2hhdHN0b2RheTIwMjQuZ2l0aHViLmlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuICBwbHVnaW5zOiBbdnVlKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbJy52dWUnLCAnLmpzJ11cbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxuICAgICAgICBAaW1wb3J0IFwiQC9zY3NzL2N1c3RvbVZhci5zY3NzXCI7XG4gICAgICAgIEBpbXBvcnQgXCJAL3Njc3MvX21peGlucy5zY3NzXCI7XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlXLFNBQVMsZUFBZSxXQUFXO0FBRTVZLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUhxTixJQUFNLDJDQUEyQztBQU10UixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsSUFDQSxZQUFZLENBQUMsUUFBUSxLQUFLO0FBQUEsRUFDNUI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSWxCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
