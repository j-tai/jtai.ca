<script lang="ts">
    import { onMount, type ComponentProps } from 'svelte';
    import { type FlipParams } from 'svelte/animate';
    import { quadInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import Heading from './Heading.svelte';
    import { partialFlip } from './partial-flip';

    let props: Omit<ComponentProps<typeof Heading>, 'children'> = $props();

    let init = $state(false);
    onMount(() => (init = true));

    let hovering = $state(false);
    let clicked = $state(false);

    let lines = $derived.by(() => {
        if (hovering || clicked) {
            return [
                { key: 1, words: ['art', '\u00a0', 'is'] },
                { key: 0, words: ['software'] },
            ];
        } else {
            return [
                { key: 0, words: ['software'] },
                { key: 1, words: ['is', '\u00a0', 'art'] },
            ];
        }
    });

    const flipParams: FlipParams = {
        duration: 750,
        easing: quadInOut,
    };
</script>

<Heading
    align="right"
    {...props}
    onclick={() => (clicked = !clicked)}
    onmouseenter={() => (hovering = true)}
    onmouseleave={() => (hovering = false)}
>
    {#if init}
        {#each lines as line (line.key)}
            <div
                animate:partialFlip={{ y: true, ...flipParams }}
                in:fly|global={{ y: -200, duration: 750 }}
            >
                {#each line.words as word (word)}
                    <span class="inline-block" animate:partialFlip={{ x: true, ...flipParams }}>
                        {word}
                    </span>
                {/each}
            </div>
        {/each}
    {/if}
</Heading>
