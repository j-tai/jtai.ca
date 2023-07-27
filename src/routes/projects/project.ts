/**
 * A project.
 */
export interface Project {
    name: string;
    url?: string;
    description: string;
    date: [number, number];
    /** Technologies used in the project */
    technologies: Technology[];
    /** More technologies used in the project */
    moreTechnologies: Technology[];
}

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
