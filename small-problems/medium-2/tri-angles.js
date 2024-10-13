function triangle(angle1, angle2, angle3) {
  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0
    || angle1 + angle2 + angle3 !== 180) return "invalid";
  else if (angle1 < 90 && angle2 < 90 && angle3 < 90) return "acute";
  else if (angle1 === 90 || angle2 === 90 || angle3 === 90) return "right";
  else return "obtuse";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"