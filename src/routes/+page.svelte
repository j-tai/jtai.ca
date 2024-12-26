<script lang="ts">
    import Slogan from '$lib/Slogan.svelte';

    let aboutDiv: HTMLDivElement;
</script>

<main>
    <!-- Home -->
    <div id="home" class="row my-12 grid grid-cols-1 lg:grid-cols-2">
        <div class="animate-fly-left">
            <Slogan />
        </div>

        <p class="animate-fade">
            Hello! I'm Jasmine (she/her), and I'm a Software Engineering student at the University
            of Waterloo!
        </p>
    </div>

    <!-- Scroll down button -->
    <button
        type="button"
        class="flex w-full animate-fade flex-row justify-center bg-surface-100 p-4"
        aria-label="scroll down"
        onclick={() => aboutDiv.scrollIntoView()}
    >
        <i class="fi fi-rr-angle-down text-2xl"></i>
    </button>

    <!-- About -->
    <div bind:this={aboutDiv} id="about" class="row-grid">
        <div class="animate-fly-left md:row-start-2">
            <h2 class="heading text-right">WhoAmI</h2>
        </div>
        <p class="animate-fade md:row-start-1">
            I'm a software engineering student at the University of Waterloo. I'm passionate about
            everything software and tech, from FPGAs to web development and AI.
        </p>

        <div class="animate-fade">[image]</div>
        <p class="animate-fade">
            I first learned to code in 2014, starting with Python, then Java, then a whole bunch of
            other languages. I've also been running a home Linux server since 2018. My favourite
            languages are Rust and Python. During my free time, I like to develop web apps, mod
            video games, play the piano, and crochet.
        </p>
    </div>

    <!-- Projects -->
    <div id="projects" class="row-grid">
        <div class="animate-fly-right md:col-start-2">
            <h2 class="heading text-right md:text-left">Projects</h2>
        </div>

        <div class="animate-fade md:row-start-1">[projects]</div>
    </div>

    <!-- Contact -->
    <div id="contact" class="row-grid">
        <div class="animate-fly-left">
            <h2 class="heading text-right">Contact</h2>
        </div>

        <div class="animate-fade">[icons]</div>
    </div>
</main>

<style lang="postcss">
    .row {
        @apply container mx-auto gap-x-16 gap-y-16 px-4 py-12;
    }

    .row-grid {
        @apply row grid grid-cols-1 md:grid-cols-2;
    }

    p {
        @apply text-lg;
    }
</style>
