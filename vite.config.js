import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}/` : '/',
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    includeAssets: ['offline.html'],
    manifest: {
      name: 'फैशन टेलर कवर्धा', short_name: 'फैशन टेलर', description: 'Fashion tailoring in Kawardha, Chhattisgarh.', start_url: './', scope: './', display: 'standalone', background_color: '#f8faf8', theme_color: '#176b68', orientation: 'portrait-primary', lang: 'hi-IN', icons: [{ src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
    },
    workbox: { navigateFallback: '/offline.html', globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'] },
  })],
})
