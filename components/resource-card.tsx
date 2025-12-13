import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface ResourceCardProps {
    title: string;
    description: string;
    href: string;
    image?: string;
    tags?: string[];
}

export function ResourceCard({
    title,
    description,
    href,
    tags,
}: ResourceCardProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full cursor-pointer flex-col gap-2 rounded-xl border bg-background p-6 transition-all duration-200 hover:bg-muted/50"
        >
            <div className="flex flex-col gap-2">
                <div className="group inline-flex cursor-pointer items-center justify-start gap-1 text-xl font-semibold text-neutral-700 duration-200 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200">
                    {title}
                    <Icons.Chevron.Right className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-neutral-400 line-clamp-2">{description}</p>
            </div>
            {tags && tags.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}
        </Link>
    );
}
