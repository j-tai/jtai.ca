<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import { PROJECTS } from './projects';
</script>

{#each PROJECTS as project (project.name)}
    <ProjectCard {project} />
{/each}
