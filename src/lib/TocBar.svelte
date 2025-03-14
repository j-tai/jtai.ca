<script lang="ts">
    import { onMount } from 'svelte';
    import { tl } from './i18n';

    let { items }: { items: string[] } = $props();
    let activeId = $state('');

    function update() {
        for (let i = items.length - 1; i >= 0; --i) {
            const item = items[i];
            const element = document.getElementById(item);
            if (element && element.offsetTop - 200 <= window.scrollY) {
                activeId = item;
                return;
            }
        }
        activeId = '';
    }

    onMount(update);
</script>

<svelte:document onscroll={update} />

<nav class="sticky top-0 z-50 overflow-x-auto bg-surface-200">
    <div class="mx-auto flex w-fit flex-row justify-center px-4">
        {#each items as item (item)}
            <a
                href="#{item}"
                class="px-3 py-2 text-lg lowercase sm:px-4 sm:py-3 sm:text-2xl"
                class:current={item === activeId}
            >
                {tl('toc-' + item)}
            </a>
        {/each}
    </div>
</nav>

<style lang="postcss">
    a {
        @apply border-b-4 border-transparent transition-colors;

        &:hover {
            @apply bg-surface-300;
        }

        &.current {
            @apply border-primary-800 bg-surface-300;
        }
    }
</style>
