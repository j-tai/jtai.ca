import { flip, type AnimationConfig, type FlipParams } from 'svelte/animate';

export interface PartialFlipParams extends FlipParams {
    x?: boolean;
    y?: boolean;
    width?: boolean;
    height?: boolean;
}

export function partialFlip(
    node: Element,
    { from, to }: { from: DOMRect; to: DOMRect },
    params: PartialFlipParams = {},
): AnimationConfig {
    if (!params.x) from.x = to.x;
    if (!params.y) from.y = to.y;
    if (!params.width) from.width = to.width;
    if (!params.height) from.height = to.height;

    return flip(node, { from, to }, params);
}
