<script lang="ts">
    import Launch from 'carbon-icons-svelte/lib/Launch.svelte';

    export let size: 16 | 20 | 24 | 32 = 16;
</script>

<Launch class="inline ml-[0.25em] inline-icon" {size} {...$$restProps} />

<style lang="postcss">
    :global(.inline-icon) {
        vertical-align: baseline;
        transform: translateY(0.2rem);
    }
</style>
