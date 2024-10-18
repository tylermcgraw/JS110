const WORDS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
};

function madlibs(template) {
  return template.split(' ').map(word => {
    let escape1 = word.indexOf('/');
    let escape2 = word.indexOf('/', 1);
    if (escape1 !== -1 && Object.keys(WORDS).includes(word.slice(1, escape2))) {
      let type = word.slice(1, escape2);
      return WORDS[type][
        Math.floor(Math.random() * WORDS[type].length)
      ] + word.slice(escape2 + 1);
    }
    return word;
  }).join(' ');
}

let template1 = 'The /adjective/ brown /noun/ /adverb/ /verb/ the /adjective/ yellow /noun/, who /adverb/ /verb/ his /noun/ and looks around.';
console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

let template2 = "The /noun/ /verb/ the /noun/'s /noun/";
console.log(madlibs(template2));
// The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));
// The "cat" "pats" the "cat"'s "head".

let template3 = "The /noun/ /pronoun/ the /noun/'s /noun/ /n!";
console.log(madlibs(template3));