/* eslint-disable id-length */
/*
Problem
  Input: array of numbers
  Output: array of numbers (representing how many unique
  numbers are smaller than the original)
  Assumptions
    No empty arrays
    Arrays only contain numbers
    Arrays are not sorted
    Output array elements should match with original array elements (indices)

Examples

Data structure
  Given an array
  Create new array for output

Algorithm
  Create new empty array
  Iterate over each number in original array
    Create a second array to keep track of elements smaller than number
      Use a second loop to iterate over other numbers
        If number is less than other number, push to array2
    Push second array to empty array
  Convert array of arrays to array of nums (based on length of inner array)
  Return the new array

Code
*/

function smallerNumbersThanCurrent(numbers) {
  let smallerNums = [];
  numbers.forEach(num1 => {
    let uniqueSmallerNums = [];
    numbers.forEach(num2 => {
      if (num1 > num2 && !uniqueSmallerNums.includes(num2)) {
        uniqueSmallerNums.push(num2);
      }
    });
    smallerNums.push(uniqueSmallerNums);
  });
  return smallerNums.map(arr => arr.length);
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));