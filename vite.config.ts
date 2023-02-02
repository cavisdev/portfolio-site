import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/components/about/index.html'),
        projects: resolve(__dirname, 'src/components/projects/index.html'),
        contact: resolve(__dirname, 'src/components/contact/index.html'),
      }
    }
  }
})
