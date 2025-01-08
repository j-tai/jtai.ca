<script lang="ts">
    import { PROJECTS } from './projects';
    import TechnologyBadge from './TechnologyBadge.svelte';
    import ThemedImg from './ThemedImg.svelte';

    let carousel: HTMLDivElement;

    function left() {
        const x =
            carousel.scrollLeft === 0
                ? carousel.clientWidth * carousel.childElementCount // loop
                : carousel.scrollLeft - carousel.clientWidth; // step left
        carousel.scroll(x, 0);
    }

    function right() {
        const x =
            carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth
                ? 0 // loop
                : carousel.scrollLeft + carousel.clientWidth; // step right
        carousel.scroll(x, 0);
    }
</script>

<div class="mx-auto grid w-full max-w-xl grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
    <!-- Left button -->
    <button type="button" class="variant-filled btn-icon" onclick={left} aria-label="previous">
        <i class="fi fi-rr-angle-left"></i>
    </button>

    <!-- Entries -->
    <div bind:this={carousel} class="flex snap-x snap-mandatory gap-4 overflow-x-auto">
        {#each PROJECTS as project (project.name)}
            <a
                href={project.href}
                target="_blank"
                class="aspect-square flex-none basis-full snap-center text-surface-100 rounded-container-token"
                style="--light-bg: url(/img/project/{project.name}-light.png);
                       --dark-bg: url(/img/project/{project.name}-dark.png)"
            >
                <div class="flex h-full w-full flex-col justify-end space-y-2 p-4">
                    <h3 class="text-4xl">{project.name}</h3>
                    <p class="text-lg font-semibold">{project.description}</p>
                    <p class="flex flex-row flex-wrap items-start gap-x-2 gap-y-1.5">
                        {#each project.technologies as technology}
                            <TechnologyBadge {technology} />
                        {/each}
                    </p>
                </div>
            </a>
        {/each}
    </div>

    <!-- Right button -->
    <button type="button" class="variant-filled btn-icon" onclick={right} aria-label="next">
        <i class="fi fi-rr-angle-right"></i>
    </button>
</div>

<style lang="postcss">
    a {
        background-image: var(--light-bg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;

        :global(.dark) & {
            background-image: var(--dark-bg);
        }

        > div {
            background: linear-gradient(
                to bottom,
                rgb(var(--color-surface-900) / 0.05) 0%,
                rgb(var(--color-surface-900) / 0.35) 40%,
                rgb(var(--color-surface-900) / 0.65) 60%,
                rgb(var(--color-surface-900) / 0.95) 100%
            );
        }
    }
</style>
