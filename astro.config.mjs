import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkDiscuss } from './src/plugins/remark-discuss.mjs';
import { remarkMdLinks } from './src/plugins/remark-md-links.mjs';

export default defineConfig({
  site: 'https://usewhatworks.dev',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkDiscuss, remarkMdLinks],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'prepend',
        properties: { class: 'heading-anchor', ariaHidden: true, tabIndex: -1 },
        content: {
          type: 'element',
          tagName: 'span',
          properties: { class: 'anchor-icon' },
          children: [{ type: 'text', value: '#' }],
        },
      }],
    ],
  },
  build: {
    assets: 'assets'
  }
});
