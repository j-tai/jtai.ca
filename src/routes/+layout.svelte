<script lang="ts">
    import '../app.css';
    import '@fontsource/ibm-plex-sans';
    import '@fontsource/ibm-plex-sans/700.css';
    import '@fontsource/ibm-plex-mono';
    import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';
    import ExternalLink from '$lib/ExternalLink.svelte';
</script>

<header>
    <!-- Can't put overflow-x-auto here, since that makes the theme switcher
    dropdown get clipped -->
    <nav class="navbar flex-wrap bg-primary text-primary-content">
        <a href="/" class="btn btn-ghost">Home</a>
        <a href="/projects" class="btn btn-ghost">Projects</a>
        <a href="/contact" class="btn btn-ghost">Contact</a>
        <div class="flex-1" />
        <div>
            <ThemeSwitcher />
        </div>
    </nav>
</header>

<main class="my-10 px-4">
    <slot />
</main>

<footer class="bg-base-200 text-base-content">
    <div class="footer p-8">
        <div>
            <span class="footer-title">Links</span>
            <a href="https://github.com/j-tai">GitHub<ExternalLink /></a>
            <a rel="me" href="https://tech.lgbt/@jtai">Mastodon<ExternalLink /></a>
        </div>
        <div>
            <span class="footer-title">About</span>
            <a href="/contact">Contact</a>
            <a href="https://github.com/j-tai/jtai.ca">Source code<ExternalLink /></a>
            <a href="/acknowledgments">Acknowledgments</a>
        </div>
        <div>
            <span class="footer-title">Webring</span>
            <a href="https://se-webring.xyz/">SE Webring<ExternalLink /></a>
        </div>
    </div>
</footer>

<style lang="postcss">
    main,
    footer > div {
        @apply mx-auto;
        max-width: 42rem;
    }

    footer a {
        @apply link link-hover;
    }
</style>
