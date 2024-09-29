let rlSync = require('readline-sync');

let nums = [];
for (let num = 0; num < 6; num++) {
  nums.push(Number(rlSync.question('Enter a number: ')));
}

let target = nums.pop();
let targetAppears = nums.some(num => num === target) ? 'does' : 'does not';
console.log(`The number ${target} ${targetAppears} appear in ${nums.join(', ')}`);