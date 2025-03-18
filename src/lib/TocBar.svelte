<script lang="ts">
    import { onMount } from 'svelte';
    import { tl } from './i18n';
    import LanguageSwitcher from './LanguageSwitcher.svelte';

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

<nav class="bg-surface-50 sticky top-0 z-50 overflow-x-auto">
    <div class="mx-auto flex w-fit flex-row items-center justify-center px-4">
        {#each items as item (item)}
            <a
                href="#{item}"
                class="hover:bg-surface-100 border-b-4 px-3 py-2 text-lg lowercase transition-colors sm:px-4 sm:py-3 sm:text-2xl"
                class:border-transparent={item !== activeId}
                class:border-primary-800={item === activeId}
                class:bg-surface-100={item === activeId}
            >
                {tl('toc-' + item)}
            </a>
        {/each}
        <div class="border-b-4 border-transparent px-3 sm:px-4">
            <LanguageSwitcher />
        </div>
    </div>
</nav>
