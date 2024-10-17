/* eslint-disable id-length */
const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);

function nearestPrimeSum(numbers) {
  let sum = numbers.reduce((sum, num) => sum + num);
  return nearestPrime(sum) - sum;
}

function nearestPrime(num) {
  while (true) {
    num += 1;
    if (isPrime(num)) return num;
  }
}

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let factor = 2; factor <= Math.sqrt(num); factor += 1) {
    if (num % factor === 0) return false;
  }
  return true;
}