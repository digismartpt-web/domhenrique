import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:4321', // Définir l'URL du site pour éviter les erreurs "Invalid URL"
    integrations: [tailwind()],
});
