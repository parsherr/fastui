#!/usr/bin/env node
/**
 * Scaffold a new component or template for FastUI.
 *
 * Usage:
 *   pnpm generate component <name>   — creates preview, MDX doc, wires mdx-components + sidebar
 *   pnpm generate template <name>    — creates MDX doc, wires sidebar
 *
 * <name> is kebab-case (e.g. "data-table", "badge").
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// ── helpers ────────────────────────────────────────────────────────────────

const toKebab  = str => str.toLowerCase().replace(/\s+/g, '-');
const toPascal = kebab => kebab.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
const toTitle  = kebab => kebab.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

/** Insert `text` immediately after the last regex match in `content`. Returns null if no match. */
function insertAfterLast(content, pattern, text) {
  const matches = [...content.matchAll(new RegExp(pattern, 'g'))];
  if (!matches.length) return null;
  const last = matches[matches.length - 1];
  const pos = last.index + last[0].length;
  return content.slice(0, pos) + text + content.slice(pos);
}

// ── CLI ────────────────────────────────────────────────────────────────────

const [,, type, rawName] = process.argv;

if (!type || !rawName || !['component', 'template'].includes(type)) {
  console.error('Usage:');
  console.error('  pnpm generate component <name>   # e.g. pnpm generate component badge');
  console.error('  pnpm generate template  <name>   # e.g. pnpm generate template  dashboard');
  process.exit(1);
}

const name   = toKebab(rawName);
const Pascal = toPascal(name);
const Title  = toTitle(name);

// ── component ──────────────────────────────────────────────────────────────

if (type === 'component') {
  // 1. Preview stub
  const previewPath = join(ROOT, 'components/previews', `${name}-preview.tsx`);
  if (existsSync(previewPath)) {
    console.error(`Already exists: components/previews/${name}-preview.tsx`);
    process.exit(1);
  }

  const previewSrc = `"use client";

import { ${Pascal} } from "@/components/ui/${name}";

export default function ${Pascal}Preview() {
  return <${Pascal}>Hello World</${Pascal}>;
}
`;
  writeFileSync(previewPath, previewSrc);
  console.log(`✓ Created  components/previews/${name}-preview.tsx`);

  // 2. MDX doc
  const mdxPath = join(ROOT, 'content/docs/components', `${name}.mdx`);
  if (existsSync(mdxPath)) {
    console.error(`Already exists: content/docs/components/${name}.mdx`);
    process.exit(1);
  }

  const mdxSrc = `---
title: ${Title}
description: TODO: describe what this component does.
---

<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview" className="p-10 min-h-[350px] flex items-center justify-center border rounded-md mt-2">
    <${Pascal}Preview />
  </TabsContent>
  <TabsContent value="code">

\`\`\`tsx
${previewSrc.trimEnd()}
\`\`\`

  </TabsContent>
</Tabs>

## Installation

<Tabs defaultValue="cli">
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>
  <TabsContent value="cli">

\`\`\`bash
npx shadcn@latest add ${name}
\`\`\`

  </TabsContent>
  <TabsContent value="manual">

  1. Install the following dependencies:

\`\`\`bash
npm install TODO: list-dependencies-here
\`\`\`

  2. Copy and paste the following code into your project.

\`\`\`tsx title="components/ui/${name}.tsx"
// TODO: paste the full ${Title} component source here
\`\`\`

  </TabsContent>
</Tabs>
`;
  writeFileSync(mdxPath, mdxSrc);
  console.log(`✓ Created  content/docs/components/${name}.mdx`);

  // 3. Register preview in mdx-components.tsx
  const mdxComponentsPath = join(ROOT, 'components/mdx-components.tsx');
  let src = readFileSync(mdxComponentsPath, 'utf8');
  const importLine  = `import ${Pascal}Preview from '@/components/previews/${name}-preview';`;
  const exportEntry = `  ${Pascal}Preview,`;

  if (!src.includes(importLine)) {
    const updated = insertAfterLast(src, "import \\w+Preview from '@/components/previews/[^']+';", `\n${importLine}`);
    if (updated) src = updated;
    else console.warn(`  ⚠ Could not auto-insert import — add manually:\n    ${importLine}`);
  }

  if (!src.includes(exportEntry)) {
    const updated = insertAfterLast(src, '  \\w+Preview,', `\n${exportEntry}`);
    if (updated) src = updated;
    else console.warn(`  ⚠ Could not auto-insert entry — add manually to the components object:\n    ${exportEntry}`);
  }

  writeFileSync(mdxComponentsPath, src);
  console.log(`✓ Updated  components/mdx-components.tsx`);

  // 4. Add sidebar entry in config/docs.ts
  const docsPath = join(ROOT, 'config/docs.ts');
  let docs = readFileSync(docsPath, 'utf8');
  const sidebarEntry = `        {\n          title: '${Title}',\n          href: '/docs/components/${name}',\n          items: [],\n        },`;

  if (!docs.includes(`'/docs/components/${name}'`)) {
    docs = docs.replace(
      /(title: 'Components',[\s\S]*?items: \[[\s\S]*?)(      \],)/,
      `$1${sidebarEntry}\n$2`,
    );
  }

  writeFileSync(docsPath, docs);
  console.log(`✓ Updated  config/docs.ts`);

  console.log(`
✅ "${Title}" component scaffolded!

TODOs (search for "TODO" in the generated files):
  • components/ui/${name}.tsx           — implement the component (if not done)
  • components/previews/${name}-preview.tsx  — update the demo
  • content/docs/components/${name}.mdx — fill in description, deps, full source

Then run:  pnpm build:docs`);
}

// ── template ───────────────────────────────────────────────────────────────

if (type === 'template') {
  // 1. MDX doc
  const mdxPath = join(ROOT, 'content/docs/templates', `${name}.mdx`);
  if (existsSync(mdxPath)) {
    console.error(`Already exists: content/docs/templates/${name}.mdx`);
    process.exit(1);
  }

  const mdxSrc = `---
title: ${Title}
description: TODO: describe this template.
---

TODO: Add a one-paragraph description here.

<video
  src="TODO: add-video-url-here"
  autoPlay
  loop
  muted
  playsInline
  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
  className="mt-6 block w-full overflow-hidden rounded-lg border shadow-sm"
/>

<div className="mt-4 flex gap-4">
  <a
    href="TODO: github-repo-url"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-1 items-center justify-center gap-2 rounded-lg border bg-black px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
  >
    Download
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
    </svg>
  </a>
  <a
    href="TODO: live-preview-url"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-background text-foreground hover:bg-accent flex flex-1 items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition"
  >
    Live Preview
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  </a>
</div>

## Dependencies

- Next.js 15
- React 19
- TypeScript 5
- TailwindCSS 4
`;
  writeFileSync(mdxPath, mdxSrc);
  console.log(`✓ Created  content/docs/templates/${name}.mdx`);

  // 2. Add sidebar entry in config/docs.ts
  const docsPath = join(ROOT, 'config/docs.ts');
  let docs = readFileSync(docsPath, 'utf8');
  const sidebarEntry = `        {\n          title: '${Title}',\n          href: '/docs/templates/${name}',\n          items: [],\n        },`;

  if (!docs.includes(`'/docs/templates/${name}'`)) {
    docs = docs.replace(
      /(title: 'Templates',[\s\S]*?items: \[[\s\S]*?)(      \],)/,
      `$1${sidebarEntry}\n$2`,
    );
  }

  writeFileSync(docsPath, docs);
  console.log(`✓ Updated  config/docs.ts`);

  console.log(`
✅ "${Title}" template scaffolded!

TODOs (search for "TODO" in the generated file):
  • content/docs/templates/${name}.mdx — fill in description, video URL, GitHub/preview links

Then run:  pnpm build:docs`);
}