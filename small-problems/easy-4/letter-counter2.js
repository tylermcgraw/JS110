function wordSizes(str) {
  let sizes = {};
  str.split(' ').forEach(word => {
    if (word.length !== 0) {
      word = word.match(/[A-Za-z]/g).join('');
      if (sizes[word.length] === undefined) {
        sizes[word.length] = 1;
      } else {
        sizes[word.length] += 1;
      }
    }
  });
  console.log(sizes);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}