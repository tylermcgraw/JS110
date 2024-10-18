function mergeSort(arr) {
  if (arr.length === 1) return arr;
  return merge(
    mergeSort(arr.slice(0, arr.length / 2)),
    mergeSort(arr.slice(arr.length / 2))
  );
}

function merge(arr1, arr2) {
  let merged = [];
  let added1 = 0;
  let added2 = 0;
  let len1 = arr1.length;
  let len2 = arr2.length;
  for (let idx = 0; idx < len1 + len2; idx += 1) {
    if (added1 === len1 || arr2[added2] < arr1[added1]) {
      merged.push(arr2[added2]);
      added2 += 1;
    } else if (added2 === len2 || arr1[added1] < arr2[added2]) {
      merged.push(arr1[added1]);
      added1 += 1;
    }
  }
  return merged;
}

console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                     // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));            // [1, 2, 4, 6, 7]
console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1])); // [0, 1, 2, 5, 6, 7, 8, 9])

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort(
  [7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]