<script lang="ts">
    import ExternalLink from '$lib/ExternalLink.svelte';
    import Title from '$lib/Title.svelte';
    import { onMount } from 'svelte';

    let email = '';

    onMount(() => {
        const key = Math.floor(Math.sin(65) * 0x10000) ^ 0x8080; // 0x532B
        email = [...'AF2Br9_S:\x05Q2']
            .map((char, i) =>
                String.fromCharCode(char.charCodeAt(0) ^ ((key >> ((i % 3) * 4)) & 0xff)),
            )
            .join('');
    });
</script>

<Title value="Contact" />

<div class="text">
    <p>You can contact me by email at <a href="mailto:{email}">{email}</a>.</p>

    <p>You can also visit me on <a href="https://github.com/j-tai/">GitHub<ExternalLink /></a>.</p>
</div>
