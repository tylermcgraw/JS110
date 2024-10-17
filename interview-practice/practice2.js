/* eslint-disable id-length */
/*
Problem
  Input: array of integers
  Output: integer or null (min sum of 5 consecutive numbers)
  Assumptions
    No empty arrays/non arrays as input
    Negative numbers ok
    Return null if no min sum (<5 elements)

Examples
  Pasted below

Data structure
  Array input
  Number (integer) output
  Array to store all possible sums?

Algorithm
  If array length < 5, return null
  Loop over array length - 4 times
    Calculate sum of numbers starting at index and ending at index + 4
    Push sum to new array
  Return minimum of new array

Code
*/

function minimumSum(numbers) {
  if (numbers.length < 5) return null;
  let sums = [];
  for (let idx = 0; idx < numbers . length - 4; idx += 1) {
    sums[idx] = 0;
    for (let offset = 0; offset < 5; offset += 1) {
      sums[idx] += numbers[idx + offset];
    }
  }
  return Math.min(...sums);
}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);