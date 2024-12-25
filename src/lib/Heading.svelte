<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';

    let {
        align = 'left',
        children,
        class: classes = '',
        ...rest
    }: {
        align?: 'left' | 'right';
        children: Snippet;
        class?: string;
    } & HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h1 class="text-8xl font-thin {classes}" class:text-right={align === 'right'} {...rest}>
    {@render children()}
</h1>
