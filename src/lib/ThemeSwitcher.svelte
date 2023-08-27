<script lang="ts">
    import { onMount } from 'svelte';
    import BrightnessContrast from 'carbon-icons-svelte/lib/BrightnessContrast.svelte';
    import Dropdown from './Dropdown.svelte';

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

<Dropdown class="dropdown-end" buttonClass="btn-ghost" dropClass="w-24 text-base-content">
    <BrightnessContrast slot="button" size={24} title="Theme" />
    {#each THEMES as [theme, name] (theme)}
        <li>
            <button class:active={theme === currentTheme} on:click={() => chooseTheme(theme)}>
                {name}
            </button>
        </li>
    {/each}
</Dropdown>
