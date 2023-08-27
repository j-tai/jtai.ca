<script lang="ts">
    /**
     * Additional CSS classes applied to the outermost `<details>` element.
     * @example 'dropdown-end'
     */
    let classes = '';
    export { classes as class };

    /**
     * Additional CSS classes applied to the `<summary>` that triggers the
     * dropdown.
     * @example 'btn-ghost'
     */
    export let buttonClass = '';

    /**
     * Additional CSS classes applied to the dropdown. You must pass a width
     * here.
     * @example 'w-52'
     */
    export let dropClass: string;

    /**
     * Whether the dropdown is currently open.
     * @default false
     */
    export let open = false;

    let dropdown: HTMLDetailsElement;
    function onFocusOut() {
        setTimeout(() => {
            if (!document.activeElement || !dropdown.contains(document.activeElement)) {
                open = false;
            }
        });
    }

    function close() {
        open = false;
    }
</script>

<!--
@component
A simple [dropdown menu](https://daisyui.com/components/dropdown/) that closes
when the user clicks outside it.

Example usage:

```
<Dropdown class="dropdown-end" buttonClass="join-item" dropClass="w-52" let:close>
    <li><a>Link</a></li>
    <li><button on:click={() => (onClick(), close())}>Button</button></li>
</Dropdown>
```
-->

<details class="dropdown {classes}" bind:this={dropdown} bind:open on:focusout={onFocusOut}>
    <summary class="btn btn-square {buttonClass}">
        <slot name="button" />
    </summary>
    <ul class="p-2 shadow menu dropdown-content z-10 bg-base-200 rounded-box {dropClass}">
        <slot {close} />
    </ul>
</details>
