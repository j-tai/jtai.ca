import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

export default {
    darkMode: 'class',

    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
    ],

    theme: {
        extend: {
            animation: {
                'fly-above': 'fly-above 1s ease-out',
                'fly-below': 'fly-below 1s ease-out',
                'fly-left': 'fly-left 1s ease-out',
                'fly-right': 'fly-right 1s ease-out',
                fade: 'fade 1s ease-in-out',
            },

            keyframes: (() => {
                const fly = (translation: string) => ({
                    '0%, 15%': {
                        translate: translation,
                        opacity: '0',
                    },
                    to: {
                        translate: '0 0',
                        opacity: '1',
                    },
                });

                return {
                    'fly-above': fly('0 -40svh'),
                    'fly-below': fly('0 40svh'),
                    'fly-left': fly('-40svw 0'),
                    'fly-right': fly('40svw 0'),

                    fade: {
                        '0%, 25%': { opacity: '0' },
                        to: { opacity: '1' },
                    },
                };
            })(),

            screens: {
                xs: '512px',
            },
        },
    },

    plugins: [
        typography,
        forms,
        skeleton({
            themes: { preset: ['skeleton'] },
        }),
    ],
} satisfies Config;
