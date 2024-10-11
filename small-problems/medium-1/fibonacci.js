function findFibonacciByLength(digits) {
  let index = 2n;
  let fib1 = 1n;
  let fib2 = 1n;
  let temp;
  while (getDigits(fib2) < digits) {
    temp = fib2;
    fib2 += fib1;
    fib1 = temp;
    index += 1n;
  }
  return index;
}

function getDigits(num) {
  return String(num).length;
}

console.log(findFibonacciByLength(2n));
console.log(findFibonacciByLength(3n));
console.log(findFibonacciByLength(10n));
console.log(findFibonacciByLength(16n));
console.log(findFibonacciByLength(100n));
console.log(findFibonacciByLength(1000n));
console.log(findFibonacciByLength(10000n));