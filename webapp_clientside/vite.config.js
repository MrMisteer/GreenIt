import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: './webapp_clientside', // Set the correct root directory
  plugins: [vue()],
})
