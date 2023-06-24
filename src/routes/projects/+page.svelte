<script lang="ts">
    import Title from '$lib/Title.svelte';
    import ProjectCard from './ProjectCard.svelte';
    import type { Project } from './project';
    import { PROJECTS } from './projects';

    let search = '';
    $: projects = PROJECTS.filter((project) => projectMatches(project, search));

    function rangeInclusive(start: number, stop: number): number[] {
        return [...Array(stop - start + 1)].map((_, i) => start + i);
    }

    function projectMatches(project: Project, searchString: string): boolean {
        const projectText = [
            ...project.name.split(/\s+/),
            ...project.description.split(/\s+/),
            ...rangeInclusive(project.date[0], project.date[1]).map((year) => year.toString()),
            ...project.technologies.flatMap((tech) => tech.split(/\s+/)),
            ...project.moreTechnologies.flatMap((tech) => tech.split(/\s+/)),
        ].map((word) => word.toLowerCase());
        for (const word of searchString.split(/\s+/)) {
            if (!word) {
                continue;
            }
            const lowercaseWord = word.toLowerCase();
            let matchedWord = false;
            for (const projectWord of projectText) {
                if (projectWord.startsWith(lowercaseWord)) {
                    matchedWord = true;
                    break;
                }
            }
            if (!matchedWord) {
                return false;
            }
        }
        return true;
    }
</script>

<Title value="Projects" />

<label class="label w-full" for="search">
    <span class="label-text">Search</span>
</label>
<input
    id="search"
    type="text"
    placeholder="Enter text, year, or technology name"
    class="input input-bordered w-full"
    bind:value={search}
/>

{#each projects as project (project.name)}
    <ProjectCard {project} />
{/each}
