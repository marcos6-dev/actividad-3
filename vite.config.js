import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 9033,
    proxy: {
      '/directus-api': {
        target: 'http://localhost:8055',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/directus-api/, '')
      },
      '/directus-assets': {  // ✅ nuevo proxy para imágenes y modelos 3D
        target: 'http://localhost:8055',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/directus-assets/, '')
      }
    }
  }
})