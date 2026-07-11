'use client';

import { Marquee } from '@/components/magicui/marquee';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';

const COMPONENTS_ROW_1 = [
  { name: 'Alert Dialog', category: 'Overlay' },
  { name: 'Button', category: 'Input' },
  { name: 'Card', category: 'Layout' },
  { name: 'Command Menu', category: 'Navigation' },
  { name: 'Dropdown', category: 'Overlay' },
  { name: 'Input', category: 'Input' },
  { name: 'Modal', category: 'Overlay' },
  { name: 'Select', category: 'Input' },
  { name: 'Tabs', category: 'Navigation' },
  { name: 'Toast', category: 'Feedback' },
];

const COMPONENTS_ROW_2 = [
  { name: 'Accordion', category: 'Disclosure' },
  { name: 'Badge', category: 'Display' },
  { name: 'Calendar', category: 'Input' },
  { name: 'Checkbox', category: 'Input' },
  { name: 'Collapsible', category: 'Disclosure' },
  { name: 'Date Picker', category: 'Input' },
  { name: 'Number Ticker', category: 'Animation' },
  { name: 'Popover', category: 'Overlay' },
  { name: 'Spotlight', category: 'Visual' },
  { name: 'Tooltip', category: 'Overlay' },
];

function ComponentCard({
  name,
  category,
}: {
  name: string;
  category: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1.5 px-5 py-4 rounded-xl border bg-card',
        'min-w-[160px] select-none',
        'hover:border-foreground/30 transition-colors duration-200',
      )}
    >
      <span className="text-xs text-muted-foreground">{category}</span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export function ShowcaseMarquee() {
  return (
    <section
      className={cn(
        'w-full border-b overflow-hidden',
        'py-20',
        'flex flex-col items-center gap-12',
      )}
    >
      <BlurFade delay={0} duration={0.5} inView>
        <hgroup className="text-center flex flex-col gap-3 px-4">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Component Library
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-[24ch]">
            Built for every use case
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-[40ch] mx-auto">
            From simple inputs to complex overlays — everything you need is
            already here.
          </p>
        </hgroup>
      </BlurFade>

      <div className="w-full flex flex-col gap-4">
        <Marquee pauseOnHover className="[--duration:30s]">
          {COMPONENTS_ROW_1.map((c) => (
            <ComponentCard key={c.name} {...c} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {COMPONENTS_ROW_2.map((c) => (
            <ComponentCard key={c.name} {...c} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}