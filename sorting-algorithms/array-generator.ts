export function generateArray(length : number) : number[] {
    const MIN = 0;
    const MAX = 100000;
    const array = [];
    for (let index = 0; index < length; index++) {
        array.push(Math.floor(Math.random() * (MAX - MIN) + MIN))
    }
    return array;
}