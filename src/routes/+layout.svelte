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

<main class="max-w-[48rem] mx-auto my-6">
    <slot />
</main>
