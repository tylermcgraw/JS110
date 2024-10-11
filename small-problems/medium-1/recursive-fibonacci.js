function fibonacci(index) {
  if (index === 1 || index === 2) return 1;
  return fibonacci(index - 1) + fibonacci(index - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));