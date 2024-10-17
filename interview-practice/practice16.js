/* eslint-disable id-length */
const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5

function distinctMultiples(str) {
  str = str.toLowerCase();
  let repeats = {};
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    repeats[char] = repeats[char] + 1 || 1;
  }
  return Object.values(repeats).filter(count => count > 1).length;
}