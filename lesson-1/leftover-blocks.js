function calculateLeftoverBlocks(blocks) {
  let usedBlocks = 0;
  let level = 1;
  while (true) {
    let levelBlocks = level ** 2;
    if (usedBlocks + levelBlocks > blocks) return blocks - usedBlocks;
    usedBlocks += levelBlocks;
    level += 1;
  }
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true