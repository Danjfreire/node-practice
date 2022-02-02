export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i-1;
    while((j >=0) && current < array[j]) {
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = current;
  }
  return array;
}
