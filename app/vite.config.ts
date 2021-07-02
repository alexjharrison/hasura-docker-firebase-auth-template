import { defineConfig } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    watch: { usePolling: true },
    proxy: {
      '/api': {
        target: 'http://hasura:8080/',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
