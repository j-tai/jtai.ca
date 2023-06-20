<script lang="ts">
    import TechnologyBadge from './TechnologyBadge.svelte';
    import type { Project } from './project';

    export let project: Project;

    let showingMoreTechnologies = false;
    $: technologies = showingMoreTechnologies
        ? [...project.technologies, ...project.moreTechnologies]
        : project.technologies;
</script>

<div class="card card-compact bg-base-200 my-4">
    <div class="card-body">
        <h2 class="card-title">
            {#if project.url}
                <a href={project.url} class="link">{project.name}</a>
            {:else}
                {project.name}
            {/if}
        </h2>
        <p>{project.description}</p>
        <p>
            {#each technologies as technology (technology)}
                <TechnologyBadge {technology} />
            {/each}
            {#if !showingMoreTechnologies && project.moreTechnologies}
                <button class="link" on:click={() => (showingMoreTechnologies = true)}>
                    more...
                </button>
            {/if}
        </p>
    </div>
</div>
