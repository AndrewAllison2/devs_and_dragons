import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../devs_and_dragons/client',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
