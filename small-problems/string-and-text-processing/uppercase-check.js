function isUppercase(str) {
  return str.split('').every(char => isUpperChar(char) || !isAlpha(char));
}

function isUpperChar(char) {
  return char >= 'A' && char <= 'Z';
}

function isAlpha(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));