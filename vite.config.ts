import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "ServiceQuestApp",
    short_name: "pro-number-app",
    description: "App to generate pro numbers.",
    icons: [
      {
        src: "/APP/ServiceQuestApp/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/APP/ServiceQuestApp/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/APP/ServiceQuestApp/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/APP/ServiceQuestApp/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/APP/ServiceQuestApp/screenshot2.webp",
        sizes: "1367x637",
        type: "image/webp",
        form_factor: "wide",
        label: "List of Awesome Resources available in ProNumberApp",
      },
      {
        src: "/APP/ServiceQuestApp/screenshot2.webp",
        sizes: "1367x637",
        type: "image/webp",
        label: "List of Awesome Resources available in ProNumberApp",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/APP/ServiceQuestApp/",
    start_url: "/APP/ServiceQuestApp/",
    orientation: "portrait",
    id: "/APP/ServiceQuestApp/",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
  plugins: [react(), VitePWA(manifestForPlugin)],
  base: "/APP/ServiceQuestApp/", //"/APP/PRONUMBERAPP/" quitar para mobile
});
