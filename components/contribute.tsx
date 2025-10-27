import Link from 'next/link';

import { Doc } from 'content-collections';

import { Icons } from '@/components/icons';

import { getGithubFileUrl, getGitHubIssueUrl } from '@/lib/github';
import { cn } from '@/lib/utils';

export function Contribute({ doc }: { doc: Doc }) {
  const contributeLinks = [
    {
      text: 'Report an issue',
      icon: Icons.Bug,
      href: getGitHubIssueUrl({
        owner: 'h3rmel',
        repo: 'guarahooks',
        title: `[bug]: ${doc.slug}`,
        labels: ['bug', 'documentation'],
        template: 'bug_report.md',
      }),
    },
    {
      text: 'Request a feature',
      icon: Icons.Lightbulb,
      href: getGitHubIssueUrl({
        owner: 'h3rmel',
        repo: 'guarahooks',
        title: `[feat]: ${doc.slug}`,
        labels: ['enhancement'],
        template: 'feature_request.md',
      }),
    },
    {
      text: 'Edit this page',
      icon: Icons.Pencil,
      href: getGithubFileUrl(doc.slug),
    },
  ];

  return (
    <div className="space-y-2 pt-4">
      <p className="font-medium text-sm">Contribute</p>
      <ul className="m-0 list-none">
        {contributeLinks.map((link, index) => (
          <li key={index} className="mt-0 pt-2">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center',
                'text-xs text-muted-foreground hover:text-foreground',
                'transition-colors',
              )}
            >
              <link.icon className="mr-2 size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Compact Ad Section at the bottom */}
      <div className="mt-6 flex flex-col items-center">
        <div className="w-[180px] bg-background border rounded-xl shadow-sm flex flex-col items-center overflow-hidden p-0">
          <div className="w-full">
            <img
              src="https://github.com/user-attachments/assets/71cdb374-23af-4053-b583-8076ee6e1e9b"
              alt="Setscript.com"
              className="w-full rounded-t-xl border-b"
              style={{
                aspectRatio: '16/9',
                objectFit: 'cover',
                maxHeight: '110px',
                marginBottom: 0,
              }}
            />
          </div>
          <div className="w-full flex flex-col items-center px-2 pt-2 pb-3">
            <h3 className="font-semibold text-m text-center">Setscript.com</h3>
            <p className="text-[14px] text-muted-foreground text-center leading-tight">
              New gen code share platform.
            </p>
            <a
              href="https://magicui.design/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-2 py-1 rounded bg-primary text-primary-foreground font-medium text-[13px] text-center shadow hover:bg-primary/90 transition w-full"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
