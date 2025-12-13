'use client';

import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

import { BlurFade } from '@/components/magicui/blur-fade';
import { ResourceCard } from '@/components/resource-card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { resourcesConfig } from '@/config/resources';
import { cn } from '@/lib/utils';

export default function ResourcesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('all');

    const categories = resourcesConfig.map((c) => c.title);

    const filteredCategories = resourcesConfig
        .map((category) => ({
            ...category,
            items: category.items.filter((item) => {
                const matchesSearch =
                    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.tags?.some((tag) =>
                        tag.toLowerCase().includes(searchQuery.toLowerCase())
                    );

                const matchesTab = activeTab === 'all' || category.title === activeTab;

                return matchesSearch && matchesTab;
            }),
        }))
        .filter((category) => category.items.length > 0);

    return (
        <section
            className={cn(
                'size-full max-w-screen-2xl grow',
                'mx-auto lg:border-x px-3 py-16 lg:px-0',
                'flex flex-col items-center',
            )}
        >
            <hgroup className={cn('mb-12 space-y-2 text-center')}>
                <h2 className={cn('text-5xl font-bold tracking-tighter')}>Resources</h2>
                <h3 className="mx-auto text-balance text-lg font-medium tracking-tight text-muted-foreground">
                    A curated list of resources, tools, and libraries for developers.
                </h3>
            </hgroup>

            <div className="w-full max-w-md mx-auto mb-8 relative">
                <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search resources..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <Tabs
                defaultValue="all"
                className="w-full mb-12"
                onValueChange={setActiveTab}
            >
                <div className="flex justify-center">
                    <TabsList className="flex-wrap h-auto gap-2 bg-transparent">
                        <TabsTrigger
                            value="all"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full"
                        >
                            All
                        </TabsTrigger>
                        {categories.map((cat) => (
                            <TabsTrigger
                                key={cat}
                                value={cat}
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full"
                            >
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
            </Tabs>

            <div className="w-full space-y-16 px-4 md:px-8">
                {filteredCategories.map((category, categoryIdx) => (
                    <div key={category.title} className="space-y-6">
                        <BlurFade delay={0.1 + categoryIdx * 0.1}>
                            <h2 className="text-2xl font-bold tracking-tight">
                                {category.title}
                            </h2>
                        </BlurFade>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {category.items.map((item, idx) => (
                                <BlurFade
                                    key={item.title}
                                    delay={0.2 + categoryIdx * 0.1 + idx * 0.05}
                                >
                                    <ResourceCard {...item} />
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                ))}
                {filteredCategories.length === 0 && (
                    <div className="text-center text-muted-foreground py-12">
                        No resources found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
}
