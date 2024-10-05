const DIGIT = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

/*
function wordToDigit(sentence) {
  return sentence.split(' ').map(word => DIGIT[word] ?? word).join(' ');
}
*/

function wordToDigit(sentence) {
  for (let word in DIGIT) {
    sentence = sentence.replaceAll(word, DIGIT[word]);
  }
  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."