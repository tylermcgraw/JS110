function isRealPalindrome(str) {
  let strippedStr = str.toLowerCase().match(/[a-z,0-9]/g).join('');
  return isPalindrome(strippedStr);
}

function isPalindrome(str) {
  for (let char = 0; char < str.length / 2; char++) {
    if (str[char] !== str[str.length - 1 - char]) {
      return false;
    }
  }
  return true;
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // false (case matters)
console.log(isRealPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false