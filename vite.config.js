import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const base = process.env.GITHUB_ACTIONS ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    includeAssets: ['offline.html', 'logo.jpg', 'showcase-banner.jpg'],
    manifest: {
      name: 'फ़ैशन टेलर्स कवर्धा - एकमात्र कोट ब्लेजर टेलर', short_name: 'फ़ैशन टेलर्स', description: 'कवर्धा का एकमात्र कोट ब्लेजर टेलर - Fashion Tailors Kawardha', start_url: './', scope: './', display: 'standalone', background_color: '#f8faf8', theme_color: '#176b68', orientation: 'portrait-primary', lang: 'hi-IN', icons: [
        { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        { src: 'logo.jpg', sizes: '772x800', type: 'image/jpeg', purpose: 'any' },
      ],
    },
    workbox: { navigateFallback: `${base}offline.html`, globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'] },
  })],
})
