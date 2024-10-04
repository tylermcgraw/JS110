function sortStringsByConsonants(strings) {
  return strings.sort((string1, string2) => {
    string1 = string1.replaceAll(' ', '');
    string2 = string2.replaceAll(' ', '');
    return adjacentConsonants(string2) - adjacentConsonants(string1);
  });
}

function adjacentConsonants(string) {
  let numCons = 0;
  for (let idx = 0; idx < string.length - 1; idx++) {
    if (isConsonant(string[idx]) && isConsonant(string[idx + 1])) {
      numCons += 1;
    }
  }
  return numCons;
}

function isConsonant(char) {
  return char.match(/[b-df-hj-np-tv-z]/);
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']