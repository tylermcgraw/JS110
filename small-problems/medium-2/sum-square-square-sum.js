function sumSquareDifference(num) {
  let sumSquared = 0;
  let squaresSummed = 0;
  for (let idx = 1; idx <= num; idx += 1) {
    sumSquared += idx;
    squaresSummed += idx ** 2;
  }
  return (sumSquared ** 2) - squaresSummed;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150