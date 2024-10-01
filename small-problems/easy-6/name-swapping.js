function swapName(name) {
  return name.slice(name.indexOf(' ') + 1) + ', ' + name.slice(0, name.indexOf(' '));
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"