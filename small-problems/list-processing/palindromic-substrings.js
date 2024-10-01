function substrings(str) {
  return str.split('').map((_, idx) => leadingSubstrings(str.slice(idx))).flat();
}

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

function isPalindrome(str) {
  for (let idx = 0; idx < str.length / 2; idx += 1) {
    if (str.charAt(idx) !== str.charAt(str.length - 1 - idx)) return false;
  }
  return true;
}

function palindromes(str) {
  return substrings(str).filter(substr =>
    isPalindrome(substr) && substr.length > 1);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]