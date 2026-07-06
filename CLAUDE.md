# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FastUI is a Next.js 15 + React 19 component library and documentation site built on top of shadcn/ui. The root of the repository is the Next.js app itself. There is also a `packages/cli` workspace for a companion CLI tool.

## Commands

Requires Node >=20 and pnpm >=9 (enforced by the preinstall hook).

```bash
pnpm install           # install deps (pnpm only)

pnpm dev               # dev server with Turbopack at localhost:3000

pnpm build             # full production build
                       # prebuild automatically runs build:docs first

pnpm build:docs        # rebuild content-collections — run after editing MDX files

pnpm lint              # ESLint
pnpm lint:fix          # ESLint with auto-fix
pnpm typecheck         # tsc --noEmit
pnpm check:quality     # typecheck + lint + prettier check combined
pnpm format:write      # prettier auto-format
```

Git hooks (husky) run lint-staged on commit and enforce Conventional Commits via commitlint (`feat:`, `fix:`, `docs:`, etc.). Run `pnpm format:write && pnpm lint:fix` before committing.

## Architecture

### Source layout

```
app/
  (docs)/docs/[[...slug]]/   # Catch-all MDX-driven docs pages
  resources/                 # Resources page
  templates/                 # Templates page
assets/
  globals.css                # CSS variables and Tailwind base styles
  fonts.ts                   # Font definitions
components/
  ui/                        # shadcn/ui primitives used throughout the site
  previews/                  # Demo components rendered inside MDX docs
  mdx-components.tsx         # MDX component map — register new preview components here
config/
  docs.ts                    # Sidebar navigation tree — add new pages here
  site.ts                    # Site metadata
content/
  docs/                      # MDX source for all docs pages
    components/              # One .mdx per component
  pages/                     # Static MDX pages
  showcases/                 # Showcase entries (MDX frontmatter only)
lib/
  utils.ts                   # cn() and other shared utilities
```

### How content flows

1. **MDX content** in `content/docs/` is processed by [content-collections](https://www.content-collections.dev/) (config: `content-collections.ts`). The catch-all route `app/(docs)/docs/[[...slug]]/page.tsx` maps URL slugs to compiled MDX.

2. **Live previews**: Preview components live in `components/previews/`. They must be imported and added to the `components` object in `components/mdx-components.tsx` before they can be used as JSX tags inside MDX files.

3. **Navigation**: `config/docs.ts` defines the full sidebar tree. Every new docs page needs an entry here.

### Adding a new component

1. Create the component in `components/ui/<name>.tsx` (the installable source users will copy).
2. Create a preview demo in `components/previews/<name>-preview.tsx` that imports and renders the component.
3. Register the preview in `components/mdx-components.tsx`:
   - Import at the top with other preview imports: `import YourPreview from '@/components/previews/your-preview';`
   - Add to the `components` object: `YourPreview,`
4. Create `content/docs/components/<name>.mdx` using the MDX template below.
5. Add the entry to `config/docs.ts` under the appropriate sidebar category.

### MDX component docs template

```mdx
---
title: Component Name
description: What this component does.
---

<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview" className="p-10 min-h-[350px] flex items-center justify-center border rounded-md mt-2">
    <YourComponentPreview />
  </TabsContent>
  <TabsContent value="code">

```tsx
// paste the preview component code here
```

  </TabsContent>
</Tabs>

## Installation

<Tabs defaultValue="cli">
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>
  <TabsContent value="cli">

```bash
npx shadcn@latest add your-component
```

  </TabsContent>
  <TabsContent value="manual">

```tsx title="components/ui/your-component.tsx"
// paste the full component source here
```

  </TabsContent>
</Tabs>
```

### Component conventions

- Use `class-variance-authority` (CVA) for variants and `cn()` from `lib/utils.ts` for class merging.
- Use `React.forwardRef` and spread `{...props}` to keep components composable.
- Prefer Radix UI primitives for accessibility-sensitive components.
- Client-interactive components need `"use client"` at the top.

### Styling

Tailwind CSS v4 with PostCSS. Global CSS variables for theming are in `assets/globals.css` and follow the shadcn/ui token convention (`--background`, `--foreground`, `--primary`, `--muted`, etc.). `next-themes` handles dark mode.