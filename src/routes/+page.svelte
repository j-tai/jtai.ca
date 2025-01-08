<script lang="ts">
    import Footer from '$lib/Footer.svelte';
    import IntroAnimation from '$lib/IntroAnimation.svelte';
    import ProjectCarousel from '$lib/ProjectCarousel.svelte';
    import Slogan from '$lib/Slogan.svelte';
    import ThemedImg from '$lib/ThemedImg.svelte';
    import TocBar from '$lib/TocBar.svelte';

    let aboutDiv: HTMLDivElement;
</script>

<svelte:head>
    <title>Jasmine Tai | jtai.ca</title>
</svelte:head>

<TocBar
    items={[
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' },
    ]}
/>

<main>
    <!-- Home -->
    <div id="home">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <IntroAnimation intro="animate-fly-left">
                <Slogan />
            </IntroAnimation>

            <IntroAnimation intro="animate-fade">
                <div class="flex flex-row items-end justify-start">
                    <div class="hidden pl-32 pr-4 min-[480px]:block">
                        <img src="/img/arrow1.svg" alt="loopy arrow pointing right" class="h-24" />
                    </div>
                    <div class="flex-1 min-[480px]:hidden"></div>
                    <div class="flex-none pb-4">
                        <img
                            src="/img/me.jpg"
                            alt="Jasmine's face"
                            class="h-32 flex-none rounded-full"
                        />
                    </div>
                </div>

                <p>
                    Hello! I'm Jasmine (she/her), and I'm a Software Engineering student at the
                    University of Waterloo!
                </p>
            </IntroAnimation>
        </div>
    </div>

    <!-- Scroll down button -->
    <div>
        <button
            type="button"
            class="bottom-0 flex w-full flex-row justify-center p-4"
            aria-label="scroll down"
            onclick={() => aboutDiv.scrollIntoView()}
        >
            <i class="fi fi-rr-angle-down text-2xl"></i>
        </button>
    </div>

    <!-- About -->
    <div bind:this={aboutDiv} id="about">
        <div class="dynamic-grid">
            <IntroAnimation intro="animate-fly-left" class="md:row-start-2">
                <h2 class="heading text-right">WhoAmI</h2>
            </IntroAnimation>
            <IntroAnimation intro="animate-fade" class="md:row-start-1">
                <p>
                    I'm a software engineering student at the University of Waterloo. I'm passionate
                    about everything software and tech, from FPGAs to web development and AI.
                </p>
            </IntroAnimation>

            <IntroAnimation
                intro="animate-fade"
                class="flex h-32 flex-row justify-end gap-12 md:justify-start"
            >
                <ThemedImg
                    lightSrc="/img/website-light.png"
                    darkSrc="/img/website-dark.png"
                    alt="icon of a website"
                />
                <ThemedImg
                    lightSrc="/img/ai-light.png"
                    darkSrc="/img/ai-dark.png"
                    alt="icon of artificial intelligence"
                />
            </IntroAnimation>
            <IntroAnimation intro="animate-fade">
                <p>
                    I first learned to code in 2014, starting with Python, then Java, then a whole
                    bunch of other languages. I've also been running a home Linux server since 2018.
                    My favourite languages are Rust and Python. During my free time, I like to
                    develop web apps, mod video games, play the piano, and crochet.
                </p>
            </IntroAnimation>
        </div>
    </div>

    <!-- Projects -->
    <div id="projects">
        <div class="dynamic-grid-lg">
            <IntroAnimation intro="animate-fly-right" class="lg:col-start-2">
                <h2 class="heading text-right lg:text-left">Projects</h2>
            </IntroAnimation>
            <IntroAnimation intro="animate-fade" class="lg:col-start-2">
                <p>I've made so many projects over the years. Here are some of my highlights!</p>
            </IntroAnimation>

            <IntroAnimation intro="animate-fade" class="lg:row-span-3 lg:row-start-1">
                <ProjectCarousel />
            </IntroAnimation>
        </div>
    </div>

    <!-- Contact -->
    <div id="contact">
        <div class="dynamic-grid">
            <IntroAnimation intro="animate-fly-left">
                <h2 class="heading text-right">Contact</h2>
            </IntroAnimation>

            <IntroAnimation intro="animate-fade">
                <div
                    class="links flex flex-row items-center justify-end gap-6 text-8xl md:justify-start"
                >
                    <a
                        href="https://www.linkedin.com/in/taijasmine/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <i class="fi fi-brands-linkedin"></i>
                    </a>

                    <a href="https://github.com/j-tai" target="_blank" aria-label="GitHub">
                        <i class="fi fi-brands-github"></i>
                    </a>
                </div>
            </IntroAnimation>
        </div>
    </div>
</main>

<Footer />

<style lang="postcss">
    main > div {
        @apply even:bg-surface-100;

        > div {
            @apply container mx-auto gap-x-16 gap-y-16 px-4 py-[calc(max(4rem,_25svh))];

            &.dynamic-grid {
                @apply grid grid-cols-1 md:grid-cols-2;
            }

            &.dynamic-grid-lg {
                @apply grid grid-cols-1 lg:grid-cols-2;
            }
        }

        p {
            @apply text-lg font-semibold sm:text-xl;
        }

        .links a {
            @apply opacity-75 transition-opacity;

            &:hover {
                @apply opacity-100;
            }
        }
    }
</style>
