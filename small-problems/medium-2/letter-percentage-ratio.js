/*
Problem
  Input: string
  Output: object (containing percentage of lowercase, uppercase, and neither)
  Implicit Rules:
    percentages appear to be rounded to 2 decimal places
    percentages appear to be strings, not numbers
  Explicit Rules:
    strings contain at least one character

Examples
  letterPercentages('abCdef 123');
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

  letterPercentages('AbCd +Ef');
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

  letterPercentages('123');
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data Structure
  object (with 3 properties: upper, lower, neither)

Algorithm


Code
  create object (w/ props upper/lower/neither)
  create array of counts (initialize 3 elements to 0, for upper/lower/neither)
  convert string to array of characters
  for each character
    check whether it is upper/lower/neither
    increment the corresponding array elements of counts
  convert array counts to percentages (as a string)
  add percentages to object
*/

function letterPercentages(str) {
  let percentages = {lowercase: "", uppercase: "", neither: ""};
  let counts = [0, 0, 0];
  let arr = str.split('');
  arr.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      counts[0] += 1;
    } else if (char >= 'A' && char <= 'Z') {
      counts[1] += 1;
    } else {
      counts[2] += 1;
    }
  });
  percentages.lowercase = (counts[0] / arr.length * 100).toFixed(2);
  percentages.uppercase = (counts[1] / arr.length * 100).toFixed(2);
  percentages.neither = (counts[2] / arr.length * 100).toFixed(2);
  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }