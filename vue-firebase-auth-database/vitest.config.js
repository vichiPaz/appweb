import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Simula el navegador
    globals: true,        
    setupFiles: [],      
    coverage: {
      reporter: ['text', 'html'], 
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Para que Vitest entienda @/...
    },
  },
})
