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
    /** How notable the project is (higher number is more notable) */
    notability: number;
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
    HTML: '#e34c26',
    Java: '#b07219',
    JavaScript: '#f1e05a',
    Kotlin: '#A97BFF',
    MATLAB: '#e16737',
    Processing: '#0096D8',
    Python: '#3572A5',
    Rust: '#dea584',
    Shell: '#89e051',
    Svelte: '#ff3e00',
    Swift: '#F05138',
    TOML: '#9c4221',
    Tcl: '#e4cc98',
    TeX: '#3D6117',
    TypeScript: '#3178c6',
    YAML: '#cb171e',
    PostCSS: '#dc3a0c',

    // Software, libraries, etc.
    DaisyUI: '#641ae6',
    Docker: '#384d54',
    Godot: '#355570',
    Gradle: '#02303a',
    Graphviz: '#2596be',
    'Node.js': '#5fa04e',
    npm: '#cb3837',
    nginx: '#009639',
    'Tailwind CSS': '#38bdf8',

    // Services
    Cloudflare: '#f6821f',
};

export type Technology = keyof typeof TECHNOLOGIES;
