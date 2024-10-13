function triangle(side1, side2, side3) {
  let max = Math.max(side1, side2, side3);
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) console.log("invalid");
  else if (max > (side1 + side2 + side3) - max) console.log("invalid");
  else if (side1 === side2 && side1 === side3) console.log("equilateral");
  else if (side1 === side2 || side2 === side3 || side1 === side3) console.log("isosceles");
  else console.log("scalene");
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"