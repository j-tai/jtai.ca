<script lang="ts">
    import { type HTMLAttributes } from 'svelte/elements';
    import { type FlipParams } from 'svelte/animate';
    import { quadInOut } from 'svelte/easing';
    import { partialFlip } from './partial-flip';

    let { class: classes, ...props }: HTMLAttributes<HTMLHeadingElement> = $props();

    let hovering = $state(false);
    let alternate = $state(false);

    let lines = $derived.by(() => {
        if (hovering !== alternate) {
            return [
                { key: 1, words: ['Art', '\u00a0', 'is'] },
                { key: 0, words: ['Software'] },
            ];
        } else {
            return [
                { key: 0, words: ['Software'] },
                { key: 1, words: ['is', '\u00a0', 'Art'] },
            ];
        }
    });

    const flipParams: FlipParams = {
        duration: 750,
        easing: quadInOut,
    };
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<h1
    class="heading text-right {classes}"
    {...props}
    onclick={() => (alternate = !alternate)}
    onpointerenter={(e) => {
        // For touch and stylus, user must click
        if (e.pointerType === 'mouse') {
            hovering = true;
        }
    }}
    onpointerleave={(e) => {
        if (e.pointerType === 'mouse') {
            hovering = false;
            alternate = false;
        }
    }}
>
    {#each lines as line (line.key)}
        <div animate:partialFlip={{ y: true, ...flipParams }}>
            {#each line.words as word (word)}
                <span class="inline-block" animate:partialFlip={{ x: true, ...flipParams }}>
                    {word}
                </span>
            {/each}
        </div>
    {/each}
</h1>
