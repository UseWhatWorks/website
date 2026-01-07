import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://usewhatworks.dev',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});
