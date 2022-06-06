export function range(size: number, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}
