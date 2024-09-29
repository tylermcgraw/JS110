const STRING_TO_NUMBER = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToInteger(str) {
  let arr = str.split('').map(char => STRING_TO_NUMBER[char]);
  let num = 0;
  for (let index =  0; index < arr.length; index++) {
    num += arr[index] * (10 ** (arr.length - index - 1));
  }
  return num;
}

function stringToSignedInteger(str) {
  let num;
  if (str[0] === '+' || str[0] === '-') {
    num = stringToInteger(str.slice(1));
  } else {
    num = stringToInteger(str);
  }
  return str[0] === '-' ? -1 * num : num;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true