function featured(num) {
  num = getFeatured(num);
  console.log(num);
  return num;
}

function getFeatured(num) {
  num = num + 7 - (num % 7);
  if (num % 2 === 0) num += 7;
  while (!isFeatured(num)) {
    num += 14;
    if (num > 9876543201) return "Not possible";
  }
  return num;
}

function isFeatured(num) {
  let str = String(num);
  let arr = str.split('');
  for (let digit of arr) {
    if (str.includes(digit)
      && str.includes(digit, str.indexOf(digit) + 1)) return false;
  }
  return true;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."