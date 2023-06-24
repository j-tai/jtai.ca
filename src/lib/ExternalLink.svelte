<script lang="ts">
    import Launch from 'carbon-icons-svelte/lib/Launch.svelte';

    export let size: 16 | 20 | 24 | 32 = 16;
</script>

<Launch class="inline ml-[0.25em] mb-[2px]" {size} {...$$restProps} />
