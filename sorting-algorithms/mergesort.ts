function merge(left: number[], right: number[]) : number[] {
  let array: number[] = [];

  while (left.length > 0 && right.length > 0 ) {
    if (left[0] <= right[0]) {
      array.push(left[0]);
      left.shift();
    } else {
        array.push(right[0])
        right.shift();
    }
  }

  while(left.length > 0) {
      array.push(left[0]);
      left.shift();
  }

  while(right.length > 0) {
    array.push(right[0])
    right.shift();
}

  return array;
}

export function mergeSort(array: number[]) : number[]{
  if (array.length < 2) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex, array.length);
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  return merge(sortedLeft, sortedRight);
}
