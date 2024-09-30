function countOccurrences(arr) {
  let occurrences = {};
  arr.forEach(value => {
    if (occurrences[value]) {
      occurrences[value] += 1;
    } else {
      occurrences[value] = 1;
    }
  });
  console.log(occurrences);
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1