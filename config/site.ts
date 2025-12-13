import { version } from "os";

export const siteConfig = {
  name: 'fastui',
  url: 'https://fastui.site',
  description:
    'A free, open-source collection of reusable React components you can use in ur websites',
  links: {
    github: 'https://github.com/parsherr/fastui',
  },
  authorUrl: 'https://github.com/parsherr',
  keywords: [
    'React',
    'Next.js',
    'Hooks',
    'TypeScript',
    'Type-safe',
    'Component Library',
    'Template Library',
  ],
  version: 'v0.05',
  ogImage: 'https://fastui.site/og.webp',
};

export type SiteConfig = typeof siteConfig;
