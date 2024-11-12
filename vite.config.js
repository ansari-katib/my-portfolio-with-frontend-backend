import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/Portfolio/', // replace with your actual GitHub repository name
  plugins: [react()],
})
