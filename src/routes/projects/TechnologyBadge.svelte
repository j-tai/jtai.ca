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
        if (red + green > 255) {
            return '#000000';
        } else {
            return '#ffffff';
        }
    }
</script>

<span
    class="badge mx-1 my-[0.35rem]"
    style="background-color:{color};border-color:{color};color:{textColor};"
>
    {technology}
</span>
