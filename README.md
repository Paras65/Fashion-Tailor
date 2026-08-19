# Siyai Tailor Manager

An offline-first React + Vite PWA for Siyai, a fashion tailor and boutique in Kawardha, Chhattisgarh. The promotional interface supports English, Hindi, and Chhattisgarhi and includes regional terminology such as Siyai, Chaniya Choli, Lugra, Saree Blouse, and Kurta Salwar.

## Run locally

```bash
npm install
npm run dev
```

Build and preview the installable PWA:

```bash
npm run build
npm run preview
```

The service worker is generated during `npm run build`; service-worker behavior is not available from a `file://` URL. Use the Vite preview server to test offline mode.

To send bookings directly to the boutique WhatsApp account, copy `.env.example` to `.env` and replace `VITE_WHATSAPP_NUMBER` with the full country-code number, for example `919876543210`. Without it, the app opens WhatsApp's share composer with the booking message ready.

For social profiles, copy `.env.social.example` values into `.env` and replace the placeholder URLs with the real Instagram, Facebook, and YouTube profile links. The social buttons are shown on the homepage engagement section.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` deploys the app automatically whenever `main` receives a push. In the GitHub repository, open **Settings → Pages**, choose **GitHub Actions** as the source, then push to `main`. The Vite base path is derived from `GITHUB_REPOSITORY`, and the workflow creates a `404.html` SPA fallback for direct page navigation.

## Architecture

```text
src/
  components/
    Dashboard.jsx          Order summary, stats, and responsive recent orders
    FestivalBanner.jsx     Upcoming Chhattisgarh festival alert
    MeasurementForm.jsx    Customer, delivery, outfit, and measurement entry
    StatusPill.jsx         Localized order-status display
  data/
    festivals.js           Regional festival dates and metadata
  hooks/
    useOrders.js           Reactive order state and online/offline status
  i18n/
    translations.js        English/Hindi terminology and labels
  services/
    storage.js             IndexedDB persistence through localforage
  App.jsx                  Shell, navigation, language switch, PWA status
  App.css                  Responsive visual system
  index.css                Tailwind CSS entry point
  main.jsx                 React bootstrap and service-worker registration
public/
  manifest.json            Browser install metadata
  offline.html             Network navigation fallback
vite.config.js              React, Tailwind, and vite-plugin-pwa setup
```

## Offline behavior

Orders are written to IndexedDB immediately through `localforage`, including while offline. The header reflects connectivity and counts locally created orders waiting for a future sync. The generated Workbox service worker precaches the application shell and routes navigations to `offline.html` when the network is unavailable.

## Extending sync

`src/hooks/useOrders.js` is the boundary for adding a backend sync queue. Replace the `synced` flag update with an API client there, and reconcile server IDs after a successful upload. The local store can remain the source of truth for the UI during intermittent connectivity.
