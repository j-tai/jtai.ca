<script lang="ts">
    import type { Snippet } from 'svelte';
    import { onintersect } from './intersect.svelte';

    let {
        children,
        class: classes = '',
        intro,
    }: {
        children: Snippet;
        class?: string;
        intro: string;
    } = $props();

    let introduced = $state(false);
</script>

<div
    class="{classes} {introduced ? intro : 'offscreen'}"
    use:onintersect={() => (introduced = true)}
>
    {@render children()}
</div>

<style lang="postcss">
    .offscreen {
        opacity: 0;
    }
</style>
