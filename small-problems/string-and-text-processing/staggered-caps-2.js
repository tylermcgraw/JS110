function staggeredCase(str) {
  let count = 0;
  str = str.split('');
  for (let idx = 0; idx < str.length; idx += 1) {
    if (isAlpha(str[idx])) {
      str[idx] = count % 2 === 0
        ? str[idx].toUpperCase() : str[idx].toLowerCase();
      count += 1;
    }
  }
  return str.join('');
}

function isAlpha(char) {
  return isUpper(char) || isLower(char);
}

function isUpper(char) {
  return char >= 'A' && char <= 'Z';
}

function isLower(char) {
  return char >= 'a' && char <= 'z';
}

console.log(staggeredCase("I Love Launch School!")); // === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS")); // === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers")); // === "IgNoRe 77 ThE 444 nUmBeRs"