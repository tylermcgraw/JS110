function union(arr1, arr2) {
  for (let idx = 0; idx < arr1.length; idx++) {
    let arr1Value = arr1[idx];
    if (!arr2.includes(arr1Value)) {
      arr2.push(arr1Value);
    }
  }
  return arr2;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])