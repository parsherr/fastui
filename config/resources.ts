export interface ResourceItem {
    title: string;
    description: string;
    href: string;
    image?: string;
    tags?: string[];
}

export interface ResourceCategory {
    title: string;
    items: ResourceItem[];
}

export const resourcesConfig: ResourceCategory[] = [
    {
        title: 'UI Libraries',
        items: [
            {
                title: 'Magic UI',
                description: 'A collection of React components to build beautiful landing pages.',
                href: 'https://magicui.design/',
                tags: ['React', 'Tailwind', 'Framer Motion'],
            },
            {
                title: 'v0',
                description: 'Generative UI system by Vercel.',
                href: 'https://v0.app/',
                tags: ['AI', 'Generator', 'React'],
            },
            {
                title: 'React Bits',
                description: 'A collection of animated React components.',
                href: 'https://www.reactbits.dev/',
                tags: ['React', 'Animation'],
            },
            {
                title: 'Aceternity UI',
                description: 'Copy paste the most trending components and use them in your websites without having to worry about styling and animations.',
                href: 'https://ui.aceternity.com/',
                tags: ['React', 'Tailwind', 'Framer Motion'],
            },
            {
                title: 'Shadcn UI',
                description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
                href: 'https://ui.shadcn.com/',
                tags: ['React', 'Tailwind', 'Radix UI'],
            },
            {
                title: '21st.dev',
                description: 'A community for sharing and discovering UI components.',
                href: 'https://21st.dev/community/components?tab=components&sort=recommended',
                tags: ['Community', 'Components'],
            },
            {
                title: 'OriginUI',
                description: 'Beautiful UI components built with Tailwind CSS and React.',
                href: 'https://originui.com',
                tags: ['React', 'Tailwind'],
            },
            {
                title: 'MVPBlocks',
                description: 'Copy-paste Tailwind CSS blocks for your next project.',
                href: 'https://blocks.mvp-subha.me',
                tags: ['Tailwind', 'Blocks'],
            },
            {
                title: 'SHSF UI',
                description: 'A collection of modern UI components.',
                href: 'https://shsfui.com',
                tags: ['Components', 'UI'],
            },
            {
                title: 'Kibo UI',
                description: 'A collection of accessible and customizable UI components.',
                href: 'https://kibo-ui.com',
                tags: ['React', 'Tailwind', 'Accessible'],
            },
            {
                title: 'Skiper UI',
                description: 'A modern UI library for building web applications.',
                href: 'https://skiper-ui.com',
                tags: ['UI', 'Components'],
            },
            {
                title: 'Float UI',
                description: 'Tailwind CSS components and templates for building SaaS applications.',
                href: 'https://floatui.com/',
                tags: ['Tailwind', 'SaaS'],
            },
            {
                title: 'Tremor',
                description: 'The React library to build dashboards fast.',
                href: 'https://www.tremor.so/',
                tags: ['React', 'Dashboard', 'Analytics'],
            },
            {
                title: 'CUI (Codux UI)',
                description: 'A minimal and clean UI library.',
                href: 'https://cui.sh/',
                tags: ['Minimal', 'UI'],
            },
            {
                title: 'HyperUI',
                description: 'Free Tailwind CSS components for marketing and eCommerce websites.',
                href: 'https://www.hyperui.dev/',
                tags: ['Tailwind', 'Marketing', 'eCommerce'],
            },
            {
                title: 'Tailblocks',
                description: 'Ready-to-use Tailwind CSS blocks.',
                href: 'https://tailblocks.cc/',
                tags: ['Tailwind', 'Blocks'],
            },
            {
                title: 'Kutty',
                description: 'A plugin for Tailwind CSS that makes building web applications faster.',
                href: 'https://kutty.netlify.app/',
                tags: ['Tailwind', 'Headless UI'],
            },
            {
                title: 'Meraki UI',
                description: 'Beautiful Tailwind CSS components that support RTL languages.',
                href: 'https://merakiui.com/',
                tags: ['Tailwind', 'RTL'],
            },
            {
                title: 'Flowbite',
                description: 'Build websites even faster with components on top of Tailwind CSS.',
                href: 'https://flowbite.com/',
                tags: ['Tailwind', 'Components'],
            },
            {
                title: 'Preline UI',
                description: 'Open-source Tailwind CSS components.',
                href: 'https://preline.co/',
                tags: ['Tailwind', 'Components'],
            },
            {
                title: 'BlueprintJS',
                description: 'A React-based UI toolkit for the web.',
                href: 'https://blueprintjs.com/',
                tags: ['React', 'Data-dense'],
            },
        ],
    },
    {
        title: 'Animations & 3D',
        items: [
            {
                title: 'Anime.js',
                description: 'A lightweight JavaScript animation library with a simple, yet powerful API.',
                href: 'https://animejs.com/',
                tags: ['JavaScript', 'Animation'],
            },
            {
                title: 'Three.js',
                description: 'JavaScript 3D library.',
                href: 'https://threejs.org/',
                tags: ['JavaScript', '3D', 'WebGL'],
            },
            {
                title: 'Spline',
                description: 'A design tool for 3D web experiences.',
                href: 'https://spline.design/',
                tags: ['3D', 'Design', 'No-code'],
            },
            {
                title: 'Motion.dev',
                description: 'A modern animation library for React.',
                href: 'https://motion.dev/',
                tags: ['React', 'Animation'],
            },
            {
                title: 'Framer Motion',
                description: 'A production-ready motion library for React.',
                href: 'https://www.framer.com/motion/',
                tags: ['React', 'Animation'],
            },
            {
                title: 'GSAP',
                description: 'Professional-grade JavaScript animation for the modern web.',
                href: 'https://gsap.com/',
                tags: ['JavaScript', 'Animation'],
            },
            {
                title: 'LottieFiles',
                description: 'Lightweight, scalable animations for your websites and apps.',
                href: 'https://lottiefiles.com/',
                tags: ['Animation', 'JSON'],
            },
            {
                title: 'Animista',
                description: 'On-demand CSS animations library.',
                href: 'https://animista.net/',
                tags: ['CSS', 'Animation'],
            },
            {
                title: 'Keyframes',
                description: 'Create CSS @keyframe animations with a visual timeline editor.',
                href: 'https://keyframes.app/',
                tags: ['CSS', 'Animation', 'Tool'],
            },
            {
                title: 'Rive',
                description: 'Build interactive animations that run anywhere.',
                href: 'https://rive.app/',
                tags: ['Animation', 'Interactive'],
            },
            {
                title: 'Zdog',
                description: 'Round, flat, designer-friendly pseudo-3D engine for canvas & SVG.',
                href: 'https://zzz.dog/',
                tags: ['3D', 'Canvas', 'SVG'],
            },
            {
                title: 'PixiJS',
                description: 'The HTML5 Creation Engine.',
                href: 'https://pixijs.com/',
                tags: ['WebGL', '2D', 'Renderer'],
            },
            {
                title: 'React Three Fiber',
                description: 'A React renderer for Three.js.',
                href: 'https://docs.pmnd.rs/react-three-fiber/getting-started',
                tags: ['React', 'Three.js', '3D'],
            },
            {
                title: 'UIverse',
                description: 'Open-Source UI elements for any project.',
                href: 'https://uiverse.io/',
                tags: ['Micro-interactions', 'CSS'],
            },
        ],
    },
    {
        title: 'Tools & Generators',
        items: [
            {
                title: 'Hero Patterns',
                description: 'A collection of repeatable SVG background patterns.',
                href: 'https://heropatterns.com/',
                tags: ['SVG', 'Patterns'],
            },
            {
                title: 'Gradient Generator',
                description: 'A free tool to create css gradients.',
                href: 'https://cssgradient.io/',
                tags: ['CSS', 'Gradient'],
            },
            {
                title: 'Glassy',
                description: 'CSS Glassmorphism Generator.',
                href: 'https://ui.glass/generator/',
                tags: ['CSS', 'Glassmorphism'],
            },
            {
                title: 'Haikei',
                description: 'A web app to generate unique SVG shapes, backgrounds, and patterns.',
                href: 'https://haikei.app/',
                tags: ['SVG', 'Generator'],
            },
            {
                title: 'Cool Backgrounds',
                description: 'Collection of tools to create compelling, colorful images.',
                href: 'https://coolbackgrounds.io/',
                tags: ['Backgrounds', 'Generator'],
            },
            {
                title: 'BGJar',
                description: 'Free SVG background generator for your websites.',
                href: 'https://bgjar.com/',
                tags: ['SVG', 'Backgrounds'],
            },
            {
                title: 'Pattern.css',
                description: 'CSS only library to fill your empty background with beautiful patterns.',
                href: 'https://bansal.io/pattern-css',
                tags: ['CSS', 'Patterns'],
            },
            {
                title: 'tweakcn',
                description: 'Customize shadcn/ui themes and copy the generated CSS/Tailwind config. theme editor for shadcn.',
                href: 'https://tweakcn.com/',
                tags: ['Shadcn', 'Theme', 'Generator'],
            },
            {
                title: 'Shadcn Studio',
                description: 'Visual theme editor for shadcn ui with real-time preview.',
                href: 'https://shadcnstudio.com/',
                tags: ['Shadcn', 'Theme', 'Editor'],
            },
            {
                title: 'Shadcn Theme Generator',
                description: 'Generate custom themes for shadcn/ui. theme editor for shadcn.',
                href: 'https://shadcn.io/',
                tags: ['Shadcn', 'Theme', 'Generator'],
            },
        ],
    },
    {
        title: 'Icons & Assets',
        items: [
            {
                title: 'Lucide',
                description: 'Beautiful & consistent icon toolkit made by the community.',
                href: 'https://lucide.dev/',
                tags: ['Icons', 'SVG'],
            },
            {
                title: 'Phosphor Icons',
                description: 'A flexible icon family for interfaces, diagrams, presentations.',
                href: 'https://phosphoricons.com/',
                tags: ['Icons', 'SVG'],
            },
            {
                title: 'Heroicons',
                description: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
                href: 'https://heroicons.com/',
                tags: ['Icons', 'SVG', 'Tailwind'],
            },
            {
                title: 'Tabler Icons',
                description: 'Over 5200 pixel-perfect icons for web design.',
                href: 'https://tablericons.com/',
                tags: ['Icons', 'SVG'],
            },
        ],
    },
    {
        title: 'Inspiration',
        items: [
            {
                title: 'StackSorted',
                description: 'A curated library of design elements.',
                href: 'https://stacksorted.com/',
                tags: ['Inspiration', 'Design'],
            },
            {
                title: 'Mobbin',
                description: 'Discover the latest mobile design patterns.',
                href: 'https://mobbin.com/',
                tags: ['Mobile', 'Inspiration'],
            },
            {
                title: 'UI Design Daily',
                description: 'Weekly FREE UI resources straight to your inbox.',
                href: 'https://uidesigndaily.com/',
                tags: ['UI', 'Inspiration'],
            },
            {
                title: 'PageCollective',
                description: 'The best landing page design inspiration from around the web.',
                href: 'https://pagecollective.com/',
                tags: ['Landing Page', 'Inspiration'],
            },
            {
                title: 'Collect UI',
                description: 'Daily inspiration collected from daily ui archive and beyond.',
                href: 'https://collectui.com/',
                tags: ['UI', 'Inspiration'],
            },
            {
                title: 'Landingfolio',
                description: 'The best landing page design inspiration, templates and more.',
                href: 'https://www.landingfolio.com/',
                tags: ['Landing Page', 'Inspiration'],
            },
            {
                title: 'Cleveroad Blog',
                description: 'How to make a video editing app (and other tech articles).',
                href: 'https://www.cleveroad.com/blog/how-to-make-a-video-editing-app/',
                tags: ['Article', 'Development'],
            },
        ],
    },
];
