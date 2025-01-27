export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Lic. Ahmed Alfonso',
    subtitle: 'Portafolio',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Github',
            href: 'https://github.com/Hunt3r850'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/ahmed-odlanier-alfonso-garcia-26788779/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/aalfonso850'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/aalfonso850'
        }
    ],
    hero: {
        title: 'Hola & Bienvenido a mi Web!',
        text: "Soy **Ahmed Alfonso**, un apasionado de la tecnología especializado en seguridad informática, administración de redes, inteligencia artificial, aplicaciones móviles y pentester. Mi compromiso con la innovación y la eficiencia me impulsa a desarrollar soluciones tecnológicas que protegen y optimizan la infraestructura de las organizaciones. Siente la libertad de visitarme en <a href='https://github.com/Hunt3r850'>GitHub</a> or follow me on <a href='https://x.com/aalfonso850'>Twitter/X</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Estamos en contacto',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Hunt3r850 Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
