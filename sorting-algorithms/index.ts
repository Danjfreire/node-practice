import { insertionSort } from "./insertionsort";
import { bubbleSort } from "./bubblesort";
import { mergeSort } from "./mergesort";
import { generateArray } from "./array-generator";

console.log("Super Small Sample - length = 10");
console.log("");
console.log("");

const superSmallSample = generateArray(10);


console.time("bubble-sort-super-small");
const bubbleres = bubbleSort([...superSmallSample]);
console.timeEnd("bubble-sort-super-small");

console.time("insertion-sort-super-small");
insertionSort([...superSmallSample]);
console.timeEnd("insertion-sort-super-small");

console.time("merge-sort-super-small");
mergeSort([...superSmallSample]);
console.timeEnd("merge-sort-super-small");


console.time("default-sort-super-small");
superSmallSample.sort((a, b) => a-b);
console.timeEnd("default-sort-super-small");
console.log("-----------------------------------------");


console.log("Small Sample - length = 100");
console.log("");
console.log("");

const smallSample = generateArray(100);

console.time("bubble-sort-small");
bubbleSort([...smallSample]);
console.timeEnd("bubble-sort-small");

console.time("insertion-sort-small");
insertionSort([...smallSample]);
console.timeEnd("insertion-sort-small");

console.time("merge-sort-small");
mergeSort([...smallSample]);
console.timeEnd("merge-sort-small");

console.time("default-sort-small");
smallSample.sort((a, b) => a-b);
console.timeEnd("default-sort-small");


console.log("-----------------------------------------");


console.log("Medium Sample - length = 1000");
console.log("");
console.log("");

const mediumSample = generateArray(1000);

console.time("bubble-sort-medium");
bubbleSort([...mediumSample]);
console.timeEnd("bubble-sort-medium");

console.time("insertion-sort-medium");
insertionSort([...mediumSample]);
console.timeEnd("insertion-sort-medium");

console.time("merge-sort-medium");
mergeSort([...mediumSample]);
console.timeEnd("merge-sort-medium");

console.time("default-sort-medium");
mediumSample.sort((a, b) => a-b);
console.timeEnd("default-sort-medium");

console.log("-----------------------------------------");



console.log("Big Sample - length = 1000000");
console.log("");
console.log("");

const bigSample = generateArray(1000000);

console.time("bubble-sort-big");
bubbleSort([...bigSample]);
console.timeEnd("bubble-sort-big");

console.time("insertion-sort-big");
insertionSort([...bigSample]);
console.timeEnd("insertion-sort-big");

console.time("merge-sort-big");
mergeSort([...bigSample]);
console.timeEnd("merge-sort-big");

console.time("default-sort-big");
bigSample.sort((a, b) => a-b);
console.timeEnd("default-sort-big");

console.log("-----------------------------------------");
