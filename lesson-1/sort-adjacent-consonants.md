# Problem
Input: array (array of strings)
Output: array (new array of sorted strings)

Explicit Rules:
  Sort strings based on highest number of adjacent consonants
  Ties resolved based on original ordering
  Adjacent consonant: two consonants that are next to each other, ignoring spaces
  'y' and 'w' are consonants

Implicit Rules:
  Strings can contain multiple words

Questions:
  Are we guaranteed a certain number of strings?
  Are there rules for numbers, punctuation, etc?
  Must the returned array of strings exactly match the original, or can they have different case?

# Examples
None of the examples are empty arrays/strings, but not guaranteed
None of the examples have non-characters (other than spaces), but not guaranteed
The string do match their originals with regard to case, altough the original strings are all lowercase to begin with

# Data Structure
Array - we must return an array so this is a given

# Algorithm
Use the sort method on the original array
  Sort each element based on the number of adjacent consonants it has
    Calculate number of adjacent consonants:
      Create a new string equivalent to the given string
      Create a counter to keep track of the number of adjacent consonants
      Remove spaces, convert to lowercase
      Loop length of the string - 1 number of times
      If character at index equals character at next index, add 1 to counter
      Return counter
Return the sorted array

# Code
see sort-adjacent-consonants.js