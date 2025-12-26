import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Change 'guitarlessons' to your repository name
  base: '/guitarlessons/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Optimize chunk size for faster loading
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});
