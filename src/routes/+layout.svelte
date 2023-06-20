<script lang="ts">
    import '../app.css';
    import '@fontsource/ibm-plex-sans';
    import '@fontsource/ibm-plex-mono';
</script>

<header>
    <div class="navbar bg-primary text-primary-content">
        <a href="/" class="btn btn-ghost">Home</a>
    </div>
</header>

<main class="max-w-[42rem] mx-auto my-10 px-4">
    <slot />
</main>
