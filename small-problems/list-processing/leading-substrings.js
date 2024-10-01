function leadingSubstrings(str) {
  console.log(
    [...str].map((_, idx) => str.slice(0, idx + 1))
  );
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]