import { visit } from 'unist-util-visit';

const DISCUSS_REGEX = /\{discuss:(\d+)\}/g;

export function remarkDiscuss() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const matches = [...node.value.matchAll(DISCUSS_REGEX)];

      if (matches.length === 0) return;

      const children = [];
      let lastIndex = 0;

      for (const match of matches) {
        const [fullMatch, discussionId] = match;
        const startIndex = match.index;

        // Add text before the match
        if (startIndex > lastIndex) {
          children.push({
            type: 'text',
            value: node.value.slice(lastIndex, startIndex),
          });
        }

        // Add the discuss link as HTML
        children.push({
          type: 'html',
          value: `<a href="https://github.com/orgs/UseWhatWorks/discussions/${discussionId}" target="_blank" rel="noopener" class="discuss-link" title="Discuss on GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></a>`,
        });

        lastIndex = startIndex + fullMatch.length;
      }

      // Add remaining text
      if (lastIndex < node.value.length) {
        children.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        });
      }

      // Replace the node with the new children
      parent.children.splice(index, 1, ...children);
    });
  };
}
