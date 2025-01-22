export function mangle(text: string): string {
    let accumulator = 0x5f;
    return mapCodePoints(text, (n) => {
        const m = (n - accumulator + 128) % 128;
        accumulator = (accumulator + n * 31) % 109;
        return m;
    });
}

export function demangle(mangled: string): string {
    let accumulator = 0x5f;
    return mapCodePoints(mangled, (n) => {
        const m = (n + accumulator) % 128;
        accumulator = (accumulator + m * 31) % 109;
        return m;
    });
}

function mapCodePoints(input: string, fn: (code: number) => number): string {
    return String.fromCharCode(...[...input].map((ch) => fn(ch.charCodeAt(0))));
}
