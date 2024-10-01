function sum(num) {
  console.log(String(num).split('').reduce(
    (accumulator, digit) => accumulator + Number(digit), 0));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45