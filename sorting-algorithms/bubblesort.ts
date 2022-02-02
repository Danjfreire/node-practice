export function bubbleSort(array : number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[i]) {
                let temp = array[j]
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}