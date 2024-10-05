function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length < 2) return arr;
  let newArr = [];
  for (let idx = 1; idx < arr.length; idx++) {
    newArr[idx - 1] = arr[idx];
  }
  newArr[arr.length - 1] = arr[0];
  //console.log(newArr);
  return newArr;
}

function rotateRightmostDigits(num, digits) {
  let left = String(num).slice(0, -digits);
  let right = String(num).slice(-digits);
  right = rotateArray(right.split('')).join('');
  //console.log(Number(left + right));
  return Number(left + right);
}

function maxRotation(num) {
  for (let idx = String(num).length; idx > 1; idx -= 1) {
    num = rotateRightmostDigits(num, idx);
  }
  console.log(num);
  return num;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845