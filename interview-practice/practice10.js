/* eslint-disable id-length */

function evenSubstrings(str) {
  let count = 0;
  for (let start = 0; start < str.length; start += 1) {
    for (let end = start + 1; end <= str.length; end += 1) {
      if (Number(str.slice(start, end)) % 2 === 0) count += 1;
    }
  }
  return count;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);