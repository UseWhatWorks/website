import { visit } from 'unist-util-visit';

/**
 * Remark plugin to transform .md links to work on the website.
 * - Removes .md extension from relative links
 * - Preserves hash fragments
 * - Ignores external links
 */
export function remarkMdLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const url = node.url;

      // Skip external links and anchors-only
      if (!url || url.startsWith('http://') || url.startsWith('https://') || url.startsWith('#')) {
        return;
      }

      // Transform .md links to remove extension
      if (url.includes('.md')) {
        node.url = url.replace(/\.md(#|$)/, '$1');
      }
    });
  };
}
