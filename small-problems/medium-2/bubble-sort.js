function bubbleSort(arr) {
  let swapMade = true;
  while (swapMade) {
    swapMade = false;
    for (let idx = 1; idx < arr.length; idx += 1) {
      if (arr[idx - 1] > arr[idx]) {
        [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
        swapMade = true;
      }
    }
  }
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]