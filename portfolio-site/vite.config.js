import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Enable polling for file changes
    },
  },
  base: '/react_portfolio_website/',
  plugins: [react()]
})