function letterCaseCount(str) {
  let count = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  str.split('').forEach(char => {
    if (!isAlpha(char)) count.neither += 1;
    else if (char.toLowerCase() === char) count.lowercase += 1;
    else if (char.toUpperCase() === char) count.uppercase += 1;
  });
  return count;
}

function isAlpha(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }