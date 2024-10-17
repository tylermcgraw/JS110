function closestNumbers(numbers) {
  let closest = [numbers[0], numbers[1]];
  numbers.forEach((num1, idx) => {
    numbers.slice(idx + 1).forEach(num2 => {
      if (Math.abs(num1 - num2) < Math.abs(closest[0] - closest[1])) {
        closest = [num1, num2];
      }
    });
  });
  return closest;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));