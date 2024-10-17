/* eslint-disable id-length */
const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([4]));
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99]));
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]));
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]));
p(oddFellow([0, 0, 0]) === 0);
p(oddFellow([0, 0, 0]));

function oddFellow(numbers) {
  let counts = {};
  numbers.forEach(num => {
    counts[num] = counts[num] + 1 || 1;
  });
  for (let num in counts) {
    if (counts[num] % 2 === 1) return Number(num);
  }
  return null;
}