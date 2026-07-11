'use client';

import { BlurFade } from '@/components/magicui/blur-fade';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    icon: Icons.FileText,
    title: '50+ Components',
    description:
      'A growing library of free, production-ready React components built on shadcn/ui primitives.',
  },
  {
    icon: Icons.Lock,
    title: 'Fully Type-Safe',
    description:
      'Every component is written in TypeScript with strict types so your IDE always has your back.',
  },
  {
    icon: Icons.Tools,
    title: 'Copy & Own',
    description:
      'No package to install. Copy the source into your project and customise it however you like.',
  },
  {
    icon: Icons.Github,
    title: 'Open Source',
    description:
      'MIT-licensed and community-driven. Contributions, issues, and stars are always welcome.',
  },
  {
    icon: Icons.Laptop,
    title: 'Responsive by Default',
    description:
      'Mobile-first Tailwind CSS classes baked in — components look great on every screen size.',
  },
  {
    icon: Icons.Moon,
    title: 'Dark Mode Ready',
    description:
      'Seamless light / dark mode support via next-themes and CSS custom properties.',
  },
];

export function Features() {
  return (
    <section
      className={cn(
        'w-full border-b',
        'py-20 px-4 lg:px-0',
        'flex flex-col items-center gap-12',
      )}
    >
      <BlurFade delay={0} duration={0.5} inView>
        <hgroup className="text-center flex flex-col gap-3">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Why FastUI
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-[24ch]">
            Everything you need to ship faster
          </h2>
        </hgroup>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full">
        {FEATURES.map((feature, i) => (
          <BlurFade key={feature.title} delay={i * 0.07} duration={0.45} inView>
            <div
              className={cn(
                'flex flex-col gap-3 p-6 rounded-xl border bg-card',
                'hover:bg-accent/40 transition-colors duration-200',
              )}
            >
              <div
                className={cn(
                  'size-10 rounded-lg border flex items-center justify-center',
                  'bg-muted',
                )}
              >
                <feature.icon className="size-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-base">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}