<script module lang="ts">
    export interface TocItem {
        id: string;
        name: string;
    }
</script>

<script lang="ts">
    import { onMount } from 'svelte';

    let { items }: { items: TocItem[] } = $props();
    let activeId = $state('');

    function update() {
        for (let i = items.length - 1; i >= 0; --i) {
            const item = items[i];
            const element = document.getElementById(item.id);
            if (element && element.offsetTop - 200 <= window.scrollY) {
                activeId = item.id;
                return;
            }
        }
        activeId = '';
    }

    onMount(update);
</script>

<svelte:document onscroll={update} />

<nav class="sticky top-0 overflow-x-auto bg-surface-200">
    <div class="mx-auto flex w-fit flex-row justify-center px-4">
        {#each items as item (item.id)}
            <a
                href="#{item.id}"
                class="px-4 py-3 text-2xl lowercase"
                class:current={item.id === activeId}
            >
                {item.name}
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
