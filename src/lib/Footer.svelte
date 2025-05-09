<script lang="ts">
    import { tl } from './i18n';
</script>

<footer class="bg-surface-50 flex flex-row flex-wrap justify-center lowercase">
    <a href={tl('footer-pronouns-cc.href')} target="_blank">{tl('footer-pronouns-cc')}</a>
    <a href="https://github.com/j-tai" target="_blank">{tl('footer-github')}</a>
    <a href="https://se-webring.xyz" target="_blank">{tl('footer-webring')}</a>
    <a href="https://github.com/j-tai/jtai.ca" target="_blank">{tl('footer-source')}</a>
</footer>

<style lang="postcss">
    @reference 'tailwindcss';
    @reference '@skeletonlabs/skeleton';

    footer > a {
        @apply hover:bg-surface-100 px-3 py-2 transition-colors;
    }
</style>
