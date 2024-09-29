function swap(str) {
  console.log(str.split(' ').map(word => {
    return word.length > 1 ?
      word[word.length - 1] + word.slice(1, -1) + word[0] : word;
  }).join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"