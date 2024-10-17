/* eslint-disable id-length */
const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);

function whatIsDifferent(numbers) {
  let knownMatch;
  let knownMiss;
  for (let idx = 1; idx < numbers.length; idx += 1) {
    if (knownMatch !== undefined && knownMatch !== numbers[idx]) {
      return numbers[idx];
    } else if (knownMiss !== undefined) {
      return knownMiss[0] === numbers[idx] ? knownMiss[1] : knownMiss[0];
    } else if (numbers[idx] === numbers[idx - 1]) {
      knownMatch = numbers[idx];
    } else {
      knownMiss = [numbers[idx], numbers[idx - 1]];
    }
  }
  return null;
}