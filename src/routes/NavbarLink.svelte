<script lang="ts">
    import { page } from '$app/stores';

    export let href: string;

    $: active = $page.url.pathname === href;
</script>

<a {href} class="btn btn-ghost normal-case text-lg font-heading" class:btn-active={active}>
    <slot />
</a>
