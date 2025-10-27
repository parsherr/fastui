import { DashboardConfig } from '@/types/docs';

export const docsConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Docs',
      href: '/docs',
    },
    {
      title: 'Showcase',
      href: '/showcase',
    },
  ],
  sidebarNav: [
    {
      title: 'Get Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        },
        {
          title: 'CLI',
          href: '/docs/cli',
          items: [],
        },
        {
          title: 'Resources',
          href: '/docs/resources',
          items: [],
        },
        {
          title: 'Open in v0',
          href: '/docs/v0',
          items: [],
        },
        {
          title: 'Changelog',
          href: '/docs/changelog',
          items: [],
          label: 'New',
        },
      ],
    },
    {
      title: 'Templates',
      items: [
        {
          title: 'Blog Template',
          href: '/docs/templates/blog-template',
          items: [],
        },
      ],
    },
  ],
};
