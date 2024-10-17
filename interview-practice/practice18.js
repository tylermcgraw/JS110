/* eslint-disable id-length */
const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);

function equalSumIndex(numbers) {
  let index = -1;
  numbers.forEach((_, idx) => {
    if (sum(numbers.slice(0, idx)) === sum(numbers.slice(idx + 1))
      && index === -1) index = idx;
  });
  return index;
}

function sum(numbers) {
  if (numbers.length < 1) return 0;
  return numbers.reduce((sum, num) => sum + num);
}