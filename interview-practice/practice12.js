/* eslint-disable id-length */

function isPangram(str) {
  str = str.toLowerCase();
  let letters = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] >= 'a' && str[idx] <= 'z' && !letters.includes(str[idx])) {
      letters.push(str[idx]);
    }
  }
  return letters.length === 26;
}

const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);