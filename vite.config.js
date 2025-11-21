import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // node_modules ko alag chunk me daal do
          }
        }
      }
    },
    chunkSizeWarningLimit: 10000,  // warning tab aayegi agar chunk 1000 kB se bada ho
  }
})
