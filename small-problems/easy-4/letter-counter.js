function wordSizes(str) {
  let sizes = {};
  str.split(' ').forEach(word => {
    if (word.length !== 0) {
      if (sizes[word.length] === undefined) {
        sizes[word.length] = 1;
      } else {
        sizes[word.length] += 1;
      }
    }
  });
  console.log(sizes);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}