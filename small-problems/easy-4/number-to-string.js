const NUMBER_TO_STRING = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};

function integerToString(num) {
  let str = '';
  do {
    str = NUMBER_TO_STRING[num % 10] + str;
    num = (num - (num % 10)) / 10;
  } while (num > 0);
  return str;
}

function signedIntegerToString(num) {
  if (Object.is(num, 0)) return '0';
  else if (Object.is(num, -0)) return '-0';
  let sign = '+';
  if (num < 0) {
    sign = '-';
    num *= -1;
  }
  return sign + integerToString(num);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");