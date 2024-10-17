/* eslint-disable id-length */
const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6

function greatestProduct(str) {
  let finalProduct = 0;
  for (let idx = 0; idx < str - 3; idx += 1) {
    let testProduct = 1;
    for (let num = idx; num < idx + 4; num += 1) {
      testProduct *= Number(str[num]);
    }
    if (testProduct > finalProduct) finalProduct = testProduct;
  }
  return finalProduct;
}