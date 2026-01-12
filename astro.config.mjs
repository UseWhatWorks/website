import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkDiscuss } from './src/plugins/remark-discuss.mjs';

export default defineConfig({
  site: 'https://usewhatworks.dev',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkDiscuss],
  },
  build: {
    assets: 'assets'
  }
});
