import { allDocs } from 'content-collections';

import type { SidebarNavItem } from '@/types/docs';

export function buildSidebarNav(): SidebarNavItem[] {
  const docs = allDocs.filter(
    (doc) =>
      doc.published &&
      doc.sidebar_group !== undefined &&
      doc.sidebar_order !== undefined,
  );

  const groupMap = new Map<string, { order: number; items: { item: SidebarNavItem; order: number }[] }>();

  for (const doc of docs) {
    const group = doc.sidebar_group!;
    const groupOrder = doc.sidebar_group_order ?? 999;

    if (!groupMap.has(group)) {
      groupMap.set(group, { order: groupOrder, items: [] });
    }

    groupMap.get(group)!.items.push({
      item: {
        title: doc.title,
        href: doc.slug,
        items: [],
        ...(doc.sidebar_label ? { label: doc.sidebar_label } : {}),
      },
      order: doc.sidebar_order!,
    });
  }

  return [...groupMap.entries()]
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([title, { items }]) => ({
      title,
      href: undefined,
      items: items
        .sort((a, b) => a.order - b.order)
        .map(({ item }) => item),
    }));
}