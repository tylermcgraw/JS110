function runningTotal(arr) {
  let newArr = arr.slice();
  for (let index = 1; index < newArr.length; index++) {
    newArr[index] = arr[index] + newArr[index - 1];
  }
  console.log(newArr);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []