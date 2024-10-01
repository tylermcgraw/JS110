function buyFruit(list) {
  let newList = [];
  list.forEach(fruitArr => {
    for (let num = 0; num < fruitArr[1]; num += 1) {
      newList.push(fruitArr[0]);
    }
  });
  return newList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]