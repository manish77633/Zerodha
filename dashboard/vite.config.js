import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    historyApiFallback: true, // ✅ This fixes 404 on dashboard reload
  },
  preview: {
    port: 5173,
    historyApiFallback: true, // ✅ This fixes 404 in production build
  }
})