export interface Project {
    name: string;
    description: string;
    href?: string;
}

export const PROJECTS: Project[] = [
    {
        name: 'ComMaid',
        description: 'Communication aid for Deaf and non-Deaf people',
        href: 'https://commaid.jtai.ca',
    },
    {
        name: 'SongMaid',
        description: 'Self-hosted music streaming service',
        href: 'https://songmaid.jtai.ca',
    },
    {
        name: 'Nexus',
        description: 'Super simple single-sign-on (SSO) system',
        href: 'https://nexus.jtai.ca',
    },
    {
        name: 'pigeon',
        description: 'Versatile command-line email sender',
        href: 'https://git.jtai.ca/jtai/pigeon',
    },
    {
        name: 'Home',
        description: 'Personal home dashboard and search engine',
        href: 'https://home.jtai.ca',
    },
];
