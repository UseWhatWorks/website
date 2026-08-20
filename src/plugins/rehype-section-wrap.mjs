/**
 * Wraps each heading and the content that follows it in a <section class="content-section">,
 * so a link to a heading anchor can highlight the whole block it points at.
 *
 * Sections nest by heading level: an <h3> section lives inside the <h2> section above it.
 */

const HEADING = /^h([1-6])$/;

export function rehypeSectionWrap() {
  return (tree) => {
    const root = { children: [] };
    // Stack of open sections, innermost last. Each entry: { level, node }.
    const open = [];

    const container = () => (open.length ? open[open.length - 1].node : root);

    for (const node of tree.children) {
      const match = node.type === 'element' ? HEADING.exec(node.tagName) : null;

      if (!match) {
        container().children.push(node);
        continue;
      }

      const level = Number(match[1]);

      // Close any sections at the same or deeper level than this heading.
      while (open.length && open[open.length - 1].level >= level) {
        open.pop();
      }

      const section = {
        type: 'element',
        tagName: 'section',
        properties: { className: ['content-section'] },
        children: [node],
      };

      container().children.push(section);
      open.push({ level, node: section });
    }

    tree.children = root.children;
  };
}
