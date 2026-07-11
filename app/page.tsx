import { Hero } from '@/components/sections/hero';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <section className={cn('flex flex-col overflow-x-hidden')}>
      <Hero />
    </section>
  );
}
