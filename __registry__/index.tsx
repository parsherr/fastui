import type { Registry } from 'shadcn/registry';

// UI component registry
export const registry: Registry = {
  'accordion': {
    name: 'accordion',
    type: 'components:ui',
    registryDependencies: [],
    files: [
      {
        name: 'accordion.tsx',
        type: 'components:ui',
        path: 'registry/ui/accordion.tsx',
        target: 'components/ui/accordion.tsx'
      }
    ]
  }
};
