const BLOCKS = [
  ['B','O'], ['G','T'], ['V','I'],
  ['X','K'], ['R','E'], ['L','Y'],
  ['D','Q'], ['F','S'], ['Z','M'],
  ['C','P'], ['J','W'], ['N','A'],
  ['H','U']
];

function isBlockWord(word) {
  word = word.toUpperCase();
  let availableBlocks = BLOCKS.slice();
  for (let idx = 0; idx < word.length; idx += 1) {
    let foundBlock = false;
    for (let block of availableBlocks) {
      if (block.includes(word[idx])) {
        availableBlocks.splice(availableBlocks.indexOf(block), 1);
        foundBlock = true;
      }
    }
    if (!foundBlock) return false;
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true