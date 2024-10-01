function sequence(num) {
  let counts = [];
  for (let idx = 0; idx < num; idx++) {
    counts[idx] = idx + 1;
  }
  console.log(counts);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]