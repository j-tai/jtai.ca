<script lang="ts">
    import ExternalLink from '$lib/ExternalLink.svelte';
    import TechnologyBadge from './TechnologyBadge.svelte';
    import type { Project } from './project';

    export let project: Project;

    let showingMoreTechnologies = false;
    $: technologies = showingMoreTechnologies
        ? [...project.technologies, ...project.moreTechnologies]
        : project.technologies;

    $: startYear = project.date[0];
    $: endYear = project.date[1];
</script>

<div class="card card-compact bg-base-200 my-4">
    <div class="card-body relative">
        <h2 class="card-title">
            {#if project.url}
                <a href={project.url} target="_blank" class="link">{project.name}<ExternalLink /></a
                >
            {:else}
                {project.name}
            {/if}
        </h2>
        <p class="absolute top-4 right-4">
            {#if startYear === endYear}
                {startYear}
            {:else}
                {startYear} &ndash; {endYear}
            {/if}
        </p>
        <p>{project.description}</p>
        <p>
            {#each technologies as technology (technology)}
                <TechnologyBadge {technology} />
            {/each}
            {#if !showingMoreTechnologies && project.moreTechnologies.length}
                <button class="link" on:click={() => (showingMoreTechnologies = true)}>
                    more...
                </button>
            {/if}
        </p>
    </div>
</div>
