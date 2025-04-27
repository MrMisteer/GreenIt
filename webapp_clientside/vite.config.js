import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Supprimez la ligne root si elle existe encore
  plugins: [vue()],
  build: {
    outDir: 'dist'
  }
})