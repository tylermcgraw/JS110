/* eslint-disable id-length */

function repeatedSubstring(str) {
  let factors = getOrderedFactors(str.length);
  for (let num of factors) {
    let substrRepeat = [str.slice(0, num), str.length / num];
    if (str === substrRepeat[0].repeat(substrRepeat[1])) return substrRepeat;
  }
  return null;
}

function getOrderedFactors(num) {
  let factors = [1];
  for (let idx = 2; idx < num; idx += 1) {
    if (num % idx === 0) {
      factors.push(idx);
    }
  }
  factors.push(num);
  return factors;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));