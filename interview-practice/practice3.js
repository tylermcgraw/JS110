/* eslint-disable id-length */

function toWeirdCase(sentence) {
  return sentence.split(' ').map((word, idx) => {
    if ((idx + 1) % 3 === 0) return everyOtherCap(word);
    else return word;
  }).join(' ');
}

function everyOtherCap(word) {
  return word.split('').map((char, idx) => {
    if ((idx + 1) % 2 === 0) return char.toUpperCase();
    else return char;
  }).join('');
}

const p = console.log;
let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);
