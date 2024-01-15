// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/Vue%E9%A1%B9%E7%9B%AE/Markblog/markblog/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Vue%E9%A1%B9%E7%9B%AE/Markblog/markblog/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import copy from "file:///E:/Vue%E9%A1%B9%E7%9B%AE/Markblog/markblog/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
import AutoImport from "file:///E:/Vue%E9%A1%B9%E7%9B%AE/Markblog/markblog/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/Vue%E9%A1%B9%E7%9B%AE/Markblog/markblog/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///E:/Vue%E9%A1%B9%E7%9B%AE/Markblog/markblog/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///E:/Vue%E9%A1%B9%E7%9B%AE/Markblog/markblog/vite.config.js";
var vite_config_default = defineConfig({
  build: {
    assetsDir: "assets"
    // 静态资源目录
  },
  server: {
    routes: {
      beforeEnter(req, res, next) {
        if (/\.js$/.test(req.path)) {
          res.redirect("/");
        } else {
          next();
        }
        if (/\.md$/.test(req.path)) {
          res.redirect("/");
        } else {
          next();
        }
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxWdWVcdTk4NzlcdTc2RUVcXFxcTWFya2Jsb2dcXFxcbWFya2Jsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFZ1ZVx1OTg3OVx1NzZFRVxcXFxNYXJrYmxvZ1xcXFxtYXJrYmxvZ1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovVnVlJUU5JUExJUI5JUU3JTlCJUFFL01hcmtibG9nL21hcmtibG9nL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgY29weSBmcm9tICdyb2xsdXAtcGx1Z2luLWNvcHknXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NzZFRVx1NUY1NVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICByb3V0ZXM6IHtcbiAgICAgIGJlZm9yZUVudGVyKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGlmICgvXFwuanMkLy50ZXN0KHJlcS5wYXRoKSkge1xuICAgICAgICAgIHJlcy5yZWRpcmVjdCgnLycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1xcLm1kJC8udGVzdChyZXEucGF0aCkpIHtcbiAgICAgICAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gIFxuICAgIH0gIFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLFNBQVMsZUFBZSxXQUFXO0FBRzNULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFSK0gsSUFBTSwyQ0FBMkM7QUFXcE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sWUFBWSxLQUFLLEtBQUssTUFBTTtBQUMxQixZQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksR0FBRztBQUMxQixjQUFJLFNBQVMsR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFDTCxlQUFLO0FBQUEsUUFDUDtBQUNBLFlBQUksUUFBUSxLQUFLLElBQUksSUFBSSxHQUFHO0FBQzFCLGNBQUksU0FBUyxHQUFHO0FBQUEsUUFDbEIsT0FBTztBQUNMLGVBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
