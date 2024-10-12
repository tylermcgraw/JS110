function swapCase(str) {
  return str.split('').map(char => {
    if (isUpper(char)) return char.toLowerCase();
    else if (isLower(char)) return char.toUpperCase();
    return char;
  }).join('');
}

function isUpper(char) {
  return char >= 'A' && char <= 'Z';
}

function isLower(char) {
  return char >= 'a' && char <= 'z';
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"