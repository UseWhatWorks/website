import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkDiscuss } from './src/plugins/remark-discuss.mjs';
import { remarkMdLinks } from './src/plugins/remark-md-links.mjs';

export default defineConfig({
  site: 'https://usewhatworks.dev',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkDiscuss, remarkMdLinks],
  },
  build: {
    assets: 'assets'
  }
});
