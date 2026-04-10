import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    host: true,
    allowedHosts: ["camera-basket-boolean-blogs.trycloudflare.com"]
  }
})
