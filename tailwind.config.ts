import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

const COMMON_COLORS = {
    primary: '#9333EA',
    secondary: '#F472B6',
};

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: { extend: {} },
    plugins: [typography, daisyui],
    daisyui: {
        themes: [
            // Themes are modified to improve contrast
            {
                light: {
                    ...themes['[data-theme=light]'],
                    'base-content': '#000000',
                    'primary-content': '#ffffff',
                    ...COMMON_COLORS,
                },
            },
        ],
        logs: false,
    },
} satisfies Config;
