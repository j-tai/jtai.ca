import type { Project } from './project';

export const PROJECTS: Project[] = [
    {
        name: 'jtai.ca',
        url: 'https://github.com/j-tai/jtai.ca',
        description: 'Personal website',
        date: [2023, 2023],
        technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Cloudflare'],
        moreTechnologies: ['Svelte', 'Node.js', 'npm', 'PostCSS', 'CSS', 'HTML', 'JavaScript'],
    },

    {
        name: 'homepage',
        description:
            'Personal home dashboard and search engine, including a to-do list, ' +
            'notes app, music player, and more',
        date: [2017, 2023],
        technologies: ['SvelteKit', 'TypeScript', 'SQLite', 'Redis', 'Tailwind CSS', 'DaisyUI'],
        moreTechnologies: [
            'Python',
            'SQL',
            'tRPC',
            'TypeORM',
            'Cloudflare',
            'React',
            'Rust',
            'Svelte',
            'Node.js',
            'npm',
            'PostCSS',
            'CSS',
            'HTML',
            'JavaScript',
        ],
    },

    {
        name: 'TieFix',
        url: 'https://github.com/j-tai/TieFix',
        description: 'Minecraft mod that fixes some annoying bugs in the game',
        date: [2020, 2023],
        technologies: ['Java', 'Gradle', 'Groovy'],
        moreTechnologies: [],
    },

    {
        name: 'packager',
        description: 'Generate Debian and Arch Linux packages from simple scripts written in YAML',
        date: [2022, 2023],
        technologies: ['Python', 'Shell', 'YAML', 'Git'],
        moreTechnologies: [],
    },

    {
        name: 'CME Assistant Tiger',
        description: 'Stat calculator for Call Me Emperor game',
        date: [2020, 2022],
        technologies: ['React Native', 'React', 'iOS', 'TypeScript'],
        moreTechnologies: ['Expo', 'JavaScript'],
    },

    {
        name: 'getargs',
        url: 'https://github.com/j-tai/getargs',
        description: 'A super fast argument parser for Rust',
        date: [2019, 2022],
        technologies: ['Rust'],
        moreTechnologies: [],
    },

    {
        name: 'chess',
        description: 'Chess game with GUI, including an AI with 4 difficulty levels',
        date: [2022, 2022],
        technologies: ['C++', 'Rust', 'Makefile'],
        moreTechnologies: [],
    },

    {
        name: 'Accelerando',
        description: 'Rhythm game with an emphasis on player-created levels',
        date: [2020, 2020],
        technologies: ['Godot', 'GDScript', 'iOS'],
        moreTechnologies: [],
    },

    {
        name: 'minesweeper-ce',
        url: 'https://github.com/j-tai/minesweeper-ce',
        description: 'Minesweeper game for TI-84 Plus CE graphing calculators',
        date: [2019, 2020],
        technologies: ['C', 'Makefile'],
        moreTechnologies: [],
    },

    {
        name: 'promptress',
        url: 'https://github.com/j-tai/promptress',
        description: 'Lightning fast terminal prompt',
        date: [2019, 2020],
        technologies: ['Rust', 'Git'],
        moreTechnologies: [],
    },

    {
        name: 'pcalc',
        url: 'https://github.com/j-tai/pcalc',
        description: 'Command-line calculator with a hand-written parser',
        date: [2020, 2020],
        technologies: ['Rust'],
        moreTechnologies: [],
    },

    {
        name: 'dot.sh',
        url: 'https://github.com/j-tai/dot.sh',
        description: 'Dotfiles manager',
        date: [2018, 2019],
        technologies: ['Shell'],
        moreTechnologies: [],
    },
];
