function diamond(size) {
  for (let rows = 0; rows < size; rows += 1) {
    let numSpaces = Math.abs(Math.floor(size / 2) - rows);
    let strSpaces = '';
    for (let spaces = 0; spaces < numSpaces; spaces += 1) {
      strSpaces += ' ';
    }
    let strStars = '';
    for (let stars = 0; stars < size - (2 * numSpaces); stars += 1) {
      strStars += '*';
    }
    console.log(strSpaces + strStars);
  }
}

diamond(9);