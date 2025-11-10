import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This proxies any /api requests from our frontend
    // to our backend server on port 5000
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend URL
        changeOrigin: true,
      },
    },
  },
});