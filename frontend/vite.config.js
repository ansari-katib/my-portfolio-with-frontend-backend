import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['express', 'fs', 'path', 'http', 'url', 'events', 'safe-buffer'],  // Exclude server-side modules
    },
  },
});
