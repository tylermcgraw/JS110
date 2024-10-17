function countLetters(sentence) {
  let chars = {};
  for (let idx = 0; idx < sentence.length; idx += 1) {
    let char = sentence[idx];
    if (char >= 'a' && char <= 'z') {
      chars[sentence[idx]] = (
        chars[sentence[idx]] === undefined ? 1 : chars[sentence[idx]] + 1
      );
    }
  }
  return chars;
}

// eslint-disable-next-line id-length
const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

let expected = {w: 1, o: 2, e: 3, b: 1, g: 1, n: 1};
p(objeq(countLetters('woebegone'), expected));

expected = {l: 1, o: 1, w: 1, e: 4, r: 2,
  c: 2, a: 2, s: 2, u: 1, p: 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {u: 1, o: 1, i: 1, s: 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {x: 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));