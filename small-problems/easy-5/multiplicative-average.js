function multiplicativeAverage(arr) {
  console.log((arr.reduce((acc, val) => acc * val) / arr.length).toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"