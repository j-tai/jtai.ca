<!--
    Copyright (c) 2025 Jasmine Tai. All rights reserved.
-->

<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements';

    let {
        lightSrc,
        darkSrc,
        class: classes = '',
        ...props
    }: {
        lightSrc: string;
        darkSrc: string;
    } & HTMLImgAttributes = $props();
</script>

<img src={lightSrc} class="{classes} dark:hidden" {...props} />
<img src={darkSrc} class="{classes} hidden dark:block" {...props} />
