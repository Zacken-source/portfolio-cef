import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 5173,
    open: true,
    strictPort: false,
    fs: {
      allow: ['.','./node_modules/bootstrap-icons']
    },
  },

  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom'
          ]
        }
      }
    }
  },

  preview: {
    port: 4173
  }
})