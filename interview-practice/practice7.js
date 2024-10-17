/* eslint-disable id-length */
function pairs(numbers) {
  if (numbers.length < 2) return 0;
  let numbersCopy = numbers.slice();
  return numbers.reduce(
    (pairs, num, idx) => {
      let pair = numbersCopy.slice(idx + 1).indexOf(num);
      if (pair === -1) return pairs;
      numbersCopy.splice(pair, 1);
      return pairs + 1;
    },
    0
  );
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);