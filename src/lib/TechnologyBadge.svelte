<script lang="ts">
    import { TECHNOLOGIES, type Technology } from './projects';

    let { technology }: { technology: Technology } = $props();

    let color = $derived(TECHNOLOGIES[technology]);

    let contrastingColor = $derived.by(() => {
        if (!/^#[0-9a-f]{6}$/i.test(color)) {
            throw Error(`invalid color '${color}'`);
        }
        const red = parseInt(color.slice(1, 3), 16);
        const green = parseInt(color.slice(3, 5), 16);
        const blue = parseInt(color.slice(5, 7), 16);
        const luminance = 0.299 * red * red + 0.587 * green * green + 0.114 * blue * blue;
        if (luminance > 22000) {
            return 'black';
        } else {
            return 'white';
        }
    });
</script>

<span class="chip font-semibold" style="background: {color}; color: {contrastingColor}">
    {technology}
</span>
