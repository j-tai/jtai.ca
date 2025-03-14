<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import type { FlipParams } from 'svelte/animate';
    import { quadInOut } from 'svelte/easing';
    import { partialFlip } from './partial-flip';
    import { tl } from './i18n';

    let { class: classes, ...props }: HTMLAttributes<HTMLHeadingElement> = $props();

    let hovering = $state(false);
    let alternate = $state(false);

    let lines = $derived.by(() => {
        if (hovering !== alternate) {
            return [
                { key: 1, words: [tl('slogan-3'), '\u00a0', tl('slogan-2')] },
                { key: 0, words: [tl('slogan-1')] },
            ];
        } else {
            return [
                { key: 0, words: [tl('slogan-1')] },
                { key: 1, words: [tl('slogan-2'), '\u00a0', tl('slogan-3')] },
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
