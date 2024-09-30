function repeater(str) {
  let arr1 = str.split('');
  let arr2 = str.split('');
  console.log(interleave(arr1, arr2).join(''));
}

function interleave(arr1, arr2) {
  return arr1.reduce((accumulator, value, idx) => {
    accumulator.push(value, arr2[idx]);
    return accumulator;
  }, []);
}

function doubleConsonants(str) {
  console.log(str.split('').map(char =>
    (isConsonant(char) ? char + char : char)).join(''));
}

function isConsonant(char) {
  return /[b-df-hj-np-tv-z]/.test(char.toLowerCase());
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""