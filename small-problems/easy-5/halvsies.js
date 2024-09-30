function halvsies(arr) {
  let halvsyArr = [[], []];
  halvsyArr[0] = arr.slice(0, Math.ceil(arr.length / 2));
  halvsyArr[1] = arr.slice(Math.ceil(arr.length / 2));
  console.log(halvsyArr);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]