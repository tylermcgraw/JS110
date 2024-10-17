/* eslint-disable id-length */

function sevenEleven(num) {
  if (num <= 0) return 0;
  let sum = 0;
  for (let multiple = 1; multiple < num; multiple += 1) {
    if (multiple % 7 === 0 || multiple % 11 === 0) sum += multiple;
  }
  return sum;
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);