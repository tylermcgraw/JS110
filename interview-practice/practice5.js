/* eslint-disable id-length */
function mostCommonChar(sentence) {
  let chars = {};
  sentence = sentence.toLowerCase();
  for (let idx = 0; idx < sentence.length; idx += 1) {
    chars[sentence[idx]] = (
      chars[sentence[idx]] === undefined ? 1 : chars[sentence[idx]] + 1
    );
  }
  let mostCommon = Object.keys(chars)[0];
  for (let char in chars) {
    if (chars[char] > chars[mostCommon]) mostCommon = char;
  }
  return mostCommon;
}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');