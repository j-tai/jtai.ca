<script lang="ts">
    import Footer from '$lib/Footer.svelte';
    import { tl } from '$lib/i18n';
    import IntroAnimation from '$lib/IntroAnimation.svelte';
    import { demangle } from '$lib/mangle';
    import ProjectCarousel from '$lib/ProjectCarousel.svelte';
    import Slogan from '$lib/Slogan.svelte';
    import ThemedImg from '$lib/ThemedImg.svelte';
    import TocBar from '$lib/TocBar.svelte';
    import { onMount } from 'svelte';

    let aboutDiv: HTMLDivElement;

    let emailAddress = $state('#');
    onMount(() => {
        emailAddress = demangle("\x0E\x027Iply`ZH\x10v\nq_'{'\x14");
    });
</script>

<svelte:head>
    <title>{tl('name')} | {tl('site')}</title>
</svelte:head>

<TocBar items={['home', 'about', 'projects', 'contact']} />

<main>
    <!-- Home -->
    <div id="home">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <IntroAnimation intro="animate-fly-left">
                <Slogan />
            </IntroAnimation>

            <IntroAnimation intro="animate-fade">
                <div class="flex flex-row items-end justify-start">
                    <div class="hidden pr-4 pl-32 min-[480px]:block">
                        <img src="/img/arrow1.svg" alt={tl('image-arrow')} class="h-24" />
                    </div>
                    <div class="flex-1 min-[480px]:hidden"></div>
                    <div class="flex-none pb-4">
                        <img
                            src="/img/me.jpg"
                            alt={tl('image-face')}
                            class="h-32 flex-none rounded-full"
                        />
                    </div>
                </div>

                <p>{tl('hello')}</p>
            </IntroAnimation>
        </div>
    </div>

    <!-- Scroll down button -->
    <div>
        <button
            type="button"
            class="bottom-0 flex w-full flex-row justify-center p-4"
            aria-label={tl('btn-scroll-down')}
            onclick={() => aboutDiv.scrollIntoView()}
        >
            <i class="fi fi-rr-angle-down text-2xl"></i>
        </button>
    </div>

    <!-- About -->
    <div bind:this={aboutDiv} id="about">
        <div class="dynamic-grid">
            <IntroAnimation intro="animate-fly-left" class="md:row-start-2">
                <h2 class="heading text-right">{tl('about')}</h2>
            </IntroAnimation>
            <IntroAnimation intro="animate-fade" class="md:row-start-1">
                <p>{tl('about-1')}</p>
            </IntroAnimation>

            <IntroAnimation
                intro="animate-fade"
                class="flex h-32 flex-row justify-end gap-12 md:justify-start"
            >
                <ThemedImg
                    lightSrc="/img/website-light.png"
                    darkSrc="/img/website-dark.png"
                    alt={tl('image-website')}
                />
                <ThemedImg
                    lightSrc="/img/ai-light.png"
                    darkSrc="/img/ai-dark.png"
                    alt={tl('image-ai')}
                />
            </IntroAnimation>
            <IntroAnimation intro="animate-fade">
                <p>{tl('about-2')}</p>
            </IntroAnimation>
        </div>
    </div>

    <!-- Projects -->
    <div id="projects">
        <div class="dynamic-grid-lg">
            <IntroAnimation intro="animate-fly-left lg:animate-fly-right" class="lg:col-start-2">
                <h2 class="heading text-right lg:text-left">{tl('projects')}</h2>
            </IntroAnimation>
            <IntroAnimation intro="animate-fade" class="lg:col-start-2">
                <p>{tl('projects-1')}</p>
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
                <h2 class="heading text-right">{tl('contact')}</h2>
            </IntroAnimation>

            <IntroAnimation intro="animate-fade">
                <div
                    class="links flex flex-row items-center justify-end gap-6 text-8xl md:justify-start"
                >
                    <a
                        href="https://www.linkedin.com/in/taijasmine/"
                        target="_blank"
                        aria-label={tl('contact-linkedin')}
                    >
                        <i class="fi fi-brands-linkedin"></i>
                    </a>

                    <a
                        href="https://github.com/j-tai"
                        target="_blank"
                        aria-label={tl('contact-github')}
                    >
                        <i class="fi fi-brands-github"></i>
                    </a>

                    <a href={emailAddress} aria-label={tl('contact-email')}>
                        <i class="fi fi-rr-envelope"></i>
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
