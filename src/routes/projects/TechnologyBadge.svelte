<script lang="ts">
    import { TECHNOLOGIES, type Technology } from './project';

    export let technology: Technology;

    $: color = TECHNOLOGIES[technology];
    $: textColor = getContrastingColor(color);

    function getContrastingColor(color: string): string {
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
    }
</script>

<span
    class="badge mx-1 my-[0.35rem]"
    style="background-color:{color};border-color:{color};color:{textColor};"
>
    {technology}
</span>
