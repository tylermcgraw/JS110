/* eslint-disable id-length */

function longestVowelSubstring(str) {
  let longestVowel = 0;
  let vowelCounter = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (['a','e','i','o','u'].includes(str[idx])) {
      vowelCounter += 1;
      if (vowelCounter > longestVowel) longestVowel = vowelCounter;
    } else {
      if (vowelCounter > longestVowel) longestVowel = vowelCounter;
      vowelCounter = 0;
    }
  }
  return longestVowel;
}

const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);