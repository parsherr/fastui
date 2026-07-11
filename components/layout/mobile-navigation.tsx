import { GithubLink } from '@/components/layout/github-link';
import { MobileLinks } from '@/components/layout/mobile-links';
import { ThemeToggle } from '@/components/theme/theme-toggle';

import { buildSidebarNav } from '@/lib/sidebar';
import { cn } from '@/lib/utils';

export function MobileNavigation() {
  const sidebarNav = buildSidebarNav();

  return (
    <section
      className={cn(
        'relative flex lg:hidden',
        'w-full h-16',
        'px-3',
        'items-center justify-between',
      )}
    >
      <MobileLinks sidebarNav={sidebarNav} />
      <div className={cn('flex items-center gap-4')}>
        <GithubLink />
        <hr className="h-6 border-l" />
        <ThemeToggle />
      </div>
    </section>
  );
}
