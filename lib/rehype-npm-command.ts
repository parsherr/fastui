import { visit } from 'unist-util-visit';

import { UnistNode, UnistTree } from '@/types/unist';

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export function rehypeNpmCommand() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.type !== 'element' || node?.tagName !== 'pre') {
        return;
      }

      const raw = str(node.properties?.['__rawString__']);
      if (!raw || !node.properties) return;

      // npm install.
      if (raw.startsWith('npm install')) {
        node.properties['__npmCommand__'] = raw;
        node.properties['__yarnCommand__'] = raw.replace('npm install', 'yarn add');
        node.properties['__pnpmCommand__'] = raw.replace('npm install', 'pnpm add');
        node.properties['__bunCommand__'] = raw.replace('npm install', 'bun add');
      }

      // npx create-.
      if (raw.startsWith('npx create-')) {
        node.properties['__npmCommand__'] = raw;
        node.properties['__yarnCommand__'] = raw.replace('npx create-', 'yarn create ');
        node.properties['__pnpmCommand__'] = raw.replace('npx create-', 'pnpm create ');
        node.properties['__bunCommand__'] = raw.replace('npx', 'bun x --bun');
      }

      // npm create.
      if (raw.startsWith('npm create')) {
        node.properties['__npmCommand__'] = raw;
        node.properties['__yarnCommand__'] = raw.replace('npm create', 'yarn create');
        node.properties['__pnpmCommand__'] = raw.replace('npm create', 'pnpm create');
        node.properties['__bunCommand__'] = raw.replace('npm create', 'bun create');
      }

      // npx (excluding npx create-).
      if (raw.startsWith('npx') && !raw.startsWith('npx create-')) {
        node.properties['__npmCommand__'] = raw;
        node.properties['__yarnCommand__'] = raw;
        node.properties['__pnpmCommand__'] = raw.replace('npx', 'pnpm dlx');
        node.properties['__bunCommand__'] = raw.replace('npx', 'bun x --bun');
      }

      // npm run.
      if (raw.startsWith('npm run')) {
        node.properties['__npmCommand__'] = raw;
        node.properties['__yarnCommand__'] = raw.replace('npm run', 'yarn');
        node.properties['__pnpmCommand__'] = raw.replace('npm run', 'pnpm');
        node.properties['__bunCommand__'] = raw.replace('npm run', 'bun');
      }
    });
  };
}