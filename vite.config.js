import { fileURLToPath, URL } from 'node:url'

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: 'assets', // 静态资源目录
  },
  server: {
    routes: {
      beforeEnter(req, res, next) {
        if (/\.js$/.test(req.path)) {
          res.redirect('/');
        } else {
          next();
        }
        if (/\.md$/.test(req.path)) {
          res.redirect('/');
        } else {
          next();
        }
      }  
    }  
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
