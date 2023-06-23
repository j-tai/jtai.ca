<script lang="ts">
    import { onMount } from 'svelte';
    import BrightnessContrast from 'carbon-icons-svelte/lib/BrightnessContrast.svelte';

    const THEMES = [
        ['', 'System'],
        ['light', 'Light'],
        ['dark', 'Dark'],
    ];

    let currentTheme = '';

    function chooseTheme(theme: string) {
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        currentTheme = theme;
        localStorage.setItem('jtai:theme', theme);
    }

    onMount(() => {
        currentTheme = document.documentElement.getAttribute('data-theme') ?? '';
    });
</script>

<svelte:head>
    <script>
        {
            const theme = localStorage.getItem('jtai:theme');
            if (theme) {
                document.documentElement.setAttribute('data-theme', theme);
            }
        }
    </script>
</svelte:head>

<div class="dropdown dropdown-end">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label tabindex="0" class="btn btn-ghost btn-square"><BrightnessContrast size={24} /></label>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <ul
        tabindex="0"
        class="dropdown-content z-10 menu shadow bg-base-200 rounded-box w-28 text-base-content"
    >
        {#each THEMES as [theme, name] (theme)}
            <li>
                <button class:active={theme === currentTheme} on:click={() => chooseTheme(theme)}>
                    {name}
                </button>
            </li>
        {/each}
    </ul>
</div>
