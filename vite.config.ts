import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { plugin } from 'vite-plugin-markdown'
import * as path from 'path'
export default defineConfig({
  base: '/web/',
  plugins: [vue(), plugin({
    mode: ["html", 'toc'],
  })],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }

})
