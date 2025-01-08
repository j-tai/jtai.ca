import type { Action } from 'svelte/action';

export const onintersect: Action<HTMLElement, (entry: IntersectionObserverEntry) => void> = (
    node,
    action,
) => {
    $effect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    action(entry);
                }
            }
        });
        observer.observe(node);

        return () => observer.disconnect();
    });
};
