/*
function interleave(arr1, arr2) {
  let combinedArr = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    combinedArr.push(arr1[idx], arr2[idx]);
  }
  return combinedArr;
}

function interleave(arr1, arr2) {
  let combinedArr = [];
  arr1.forEach((el, idx) => {
    combinedArr.push(arr1[idx], arr2[idx]);
  });
  return combinedArr;
}
*/

function interleave(arr1, arr2) {
  return arr1.reduce((accumulator, value, idx) => {
    accumulator.push(value, arr2[idx]);
    return accumulator;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"])