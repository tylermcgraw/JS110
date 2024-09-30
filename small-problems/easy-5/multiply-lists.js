function multiplyList(arr1, arr2) {
  return arr1.reduce((accumulator, value, idx) => {
    accumulator.push(value * arr2[idx]);
    return accumulator;
  }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])