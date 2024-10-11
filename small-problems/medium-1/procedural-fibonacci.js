function fibonacci(index) {
  let lastFib = 1;
  let currentFib = 1;
  let temp;
  for (let count = 2; count < index; count += 1) {
    temp = currentFib;
    currentFib += lastFib;
    lastFib = temp;
  }
  return currentFib;
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));