'use client';

import * as React from 'react';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

import { siteConfig } from '@/config/site';

export function GithubLink() {
  const [stars, setStars] = React.useState<number | null>(null);

  React.useEffect(() => {
    let mounted = true;

    async function fetchStars() {
      try {
        const res = await fetch('https://api.github.com/repos/parsher/fastui');
        if (!res.ok) return;
        const data = await res.json();
        if (mounted && typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      } catch (e) {
        // ignore - keep null fallback
      }
    }

    fetchStars();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Button asChild size="sm" variant="ghost" className="shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.Github />
        {stars == null ? (
          <Skeleton className="h-4" />
        ) : (
          <span className="text-muted-foreground text-xs tabular-nums">
            {stars >= 1000
              ? `${(stars / 1000).toFixed(1)}k`
              : stars.toLocaleString()}
          </span>
        )}
      </Link>
    </Button>
  );
}
