function substrings(str) {
  return str.split('').map((_, idx) => leadingSubstrings(str.slice(idx))).flat();
}

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

console.log(substrings('abcde'));

// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */