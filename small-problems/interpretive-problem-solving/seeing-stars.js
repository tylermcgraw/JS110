/*
Problem
  Input: size of grid (# rows/cols)
  Output: 8 pointed star fitting grid
  Assumptions
    Middle row is completely filled
    Other rows have 3 asterisks each

Algorithm
  Loop N times for each row
  Print N *'s for the middle row
  Print 3 *'s for other rows
    # spaces before first * starts at 0 and increases by 1
    until middle row, then flips
    # leading spaces = 3 - Math.abs(row - 3)
    # spaces between *'s starts at (N - 3) / 2 and decreases by 1
    until middle row, then flips
    # spaces between = Math.abs(row - 3) - 1
*/

function star(size) {
  let middle = Math.floor(size / 2);
  for (let row = 0; row < size; row += 1) {
    if (row === middle) {
      console.log('*'.repeat(size));
      continue;
    }
    let leadingSpaces = ' '.repeat(middle - Math.abs(row - middle));
    let starSpaces = ('*' + ' '.repeat(Math.abs(row - middle) - 1)).repeat(3);
    console.log(leadingSpaces + starSpaces);
  }
}

star(21);