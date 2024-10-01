function isBalanced(str) {
  let balanced = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str.charAt(idx) === '(') balanced += 1;
    else if (str.charAt(idx) === ')') {
      balanced -= 1;
      if (balanced < 0) return false;
    }
  }
  return balanced === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);