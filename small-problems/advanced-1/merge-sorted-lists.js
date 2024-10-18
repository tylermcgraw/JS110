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
  console.log(merged);
  return merged;
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]