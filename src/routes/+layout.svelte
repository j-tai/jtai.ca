<script lang="ts">
    import '../app.css';
    import '@fontsource/ibm-plex-sans';
    import '@fontsource/ibm-plex-mono';
</script>

<header>
    <nav class="navbar bg-primary text-primary-content">
        <a href="/" class="btn btn-ghost">Home</a>
        <a href="/projects" class="btn btn-ghost">Projects</a>
        <a href="/contact" class="btn btn-ghost">Contact</a>
    </nav>
</header>

<main class="my-10 px-4">
    <slot />
</main>

<footer class="bg-base-200 text-base-content">
    <div class="footer p-8">
        <div>
            <span class="footer-title">Links</span>
            <a href="https://github.com/j-tai">GitHub</a>
        </div>
        <div>
            <span class="footer-title">About</span>
            <a href="/contact">Contact</a>
            <a href="https://github.com/j-tai/jtai.ca">Source code</a>
        </div>
        <div>
            <span class="footer-title">Webring</span>
            <a href="https://se-webring.xyz/">SE Webring</a>
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
