/**
 * Mapping from technologies to their colors.
 */
export const TECHNOLOGIES = {
    // Languages
    // Colors from programming languages are adapted from
    // https://github.com/github-linguist/linguist/blob/b5432ebc7e78f25415b98d48c2fbacddbf8df317/lib/linguist/languages.yml
    // licensed under the MIT license.
    C: '#555555',
    'C++': '#f34b7d',
    CMake: '#DA3434',
    CSS: '#563d7c',
    GDScript: '#355570',
    Groovy: '#4298b8',
    HTML: '#e34c26',
    Java: '#b07219',
    JavaScript: '#f1e05a',
    Kotlin: '#A97BFF',
    Makefile: '#427819',
    MATLAB: '#e16737',
    PostCSS: '#dc3a0c',
    Processing: '#0096D8',
    Python: '#3572A5',
    Rust: '#dea584',
    Shell: '#89e051',
    SQL: '#e38c00',
    Svelte: '#ff3e00',
    Swift: '#F05138',
    TOML: '#9c4221',
    Tcl: '#e4cc98',
    TeX: '#3D6117',
    TypeScript: '#3178c6',
    YAML: '#cb171e',

    // Software, libraries, etc.
    DaisyUI: '#641ae6',
    Docker: '#384d54',
    Expo: '#fbfbfb',
    Godot: '#355570',
    Git: '#f44d27',
    Gradle: '#02303a',
    GraphQL: '#e10098',
    Graphviz: '#2596be',
    'Node.js': '#5fa04e',
    PostgreSQL: '#206491',
    React: '#00defb',
    'React Native': '#00defb',
    Redis: '#f40021',
    SQLite: '#0099da',
    SvelteKit: '#ff3e00',
    'Tailwind CSS': '#38bdf8',
    tRPC: '#398ccb',
    TypeORM: '#ff0009',
    nginx: '#009639',
    npm: '#cb3837',

    // Services, environments, etc.
    Cloudflare: '#f6821f',
    iOS: '#000000',
    PWA: '#7900c9',
};

export type Technology = keyof typeof TECHNOLOGIES;

export interface Project {
    name: string;
    href?: string;
    description: string;
    date: [number, number];
    /** Technologies used in the project */
    technologies: Technology[];
    /** More technologies used in the project */
    moreTechnologies: Technology[];
}

export const PROJECTS: Project[] = [
    {
        name: 'ComMaid',
        href: 'https://commaid.jtai.ca',
        description: 'Communication aid for Deaf and non-Deaf people',
        date: [2024, 2025],
        technologies: ['Rust', 'TypeScript', 'SvelteKit', 'Tailwind CSS'],
        moreTechnologies: [
            'Cloudflare',
            'Svelte',
            'Node.js',
            'PostCSS',
            'CSS',
            'HTML',
            'JavaScript',
        ],
    },

    {
        name: 'SongMaid',
        href: 'https://songmaid.jtai.ca',
        description: 'Self-hosted music streaming service',
        date: [2024, 2025],
        technologies: ['Rust', 'SQLite', 'GraphQL', 'TypeScript', 'SvelteKit', 'Tailwind CSS'],
        moreTechnologies: [
            'nginx',
            'Cloudflare',
            'Svelte',
            'Node.js',
            'PostCSS',
            'CSS',
            'HTML',
            'JavaScript',
            'SQL',
        ],
    },

    {
        name: 'Nexus',
        href: 'https://nexus.jtai.ca',
        description: 'Super simple single-sign-on (SSO) system',
        date: [2024, 2024],
        technologies: ['Rust', 'SQLite', 'GraphQL', 'TypeScript', 'SvelteKit', 'Tailwind CSS'],
        moreTechnologies: [
            'Cloudflare',
            'Svelte',
            'Node.js',
            'PostCSS',
            'CSS',
            'HTML',
            'JavaScript',
            'SQL',
        ],
    },

    {
        name: 'pigeon',
        href: 'https://git.jtai.ca/jtai/pigeon',
        description: 'Versatile command-line email sender',
        date: [2024, 2024],
        technologies: ['Rust', 'HTML', 'YAML'],
        moreTechnologies: [],
    },

    {
        name: 'Home',
        href: 'https://home.jtai.ca',
        description: 'Personal home dashboard and search engine',
        date: [2017, 2023],
        technologies: ['SvelteKit', 'TypeScript', 'Rust', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
        moreTechnologies: [
            // More:
            'Python',
            'DaisyUI',
            'tRPC',
            'TypeORM',
            'Cloudflare',
            // Implied:
            'SQL',
            'Svelte',
            'Node.js',
            'npm',
            'PostCSS',
            'CSS',
            'HTML',
            'JavaScript',
            // Formerly used:
            'SQLite',
            'React',
        ],
    },
];
