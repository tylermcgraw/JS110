/* eslint-disable id-length */

function unscramble(str1, str2) {
  let arr1 = str1.split('');
  for (let idx = 0; idx < str2.length; idx += 1) {
    if (arr1.includes(str2[idx])) {
      arr1.splice(arr1.indexOf(str2[idx]), 1);
    } else {
      return false;
    }
  }
  return true;
}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);