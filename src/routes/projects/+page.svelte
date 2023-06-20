<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import { PROJECTS } from './projects';
</script>

<svelte:head>
    <title>Projects | jtai.ca</title>
</svelte:head>

<div class="text">
    <h1>Projects</h1>
</div>

{#each PROJECTS as project (project.name)}
    <ProjectCard {project} />
{/each}
