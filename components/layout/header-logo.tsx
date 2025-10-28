import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';
var version = siteConfig.version

const guara = siteConfig.name.slice(0, 5);
const hooks = siteConfig.name.slice(5);

export function HeaderLogo() {
  return (
    <Link href="/" className={cn('flex items-center gap-2 mr-auto lg:mr-0')}>
      <Image
        src="/logo.png"
        alt={`${siteConfig.name}'s logo`}
        width={38}
        height={38}
      />
      <h1 className={cn('text-base tracking-wide', 'font-title')}>
        <span className="font-light">{"fastui"}</span>
        {/* <span className='text-[11px] ml-2'>{version}</span> */}
      </h1>
    </Link>
  );
}
