import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Suprime advertencias de dependencias
        silenceDeprecations: ['import', 'global-builtin', 'color-functions']
      }
    }
  }
})

