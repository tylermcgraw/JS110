# P - Problem
Input - number (integer number of cubes)
Output - number (integer number of leftover blocks)

Explicit Rules:
  Building blocks are cubes
  Structure is built in layers
  Top layer is a single block
  A block in an upper layer must be supported by four blocks in a lower layer
  A block in a lower layer can support more than one block in an upper layer
  No gaps between blocks

Implicit Rules:
  Valid vs invalid structures/layers

Questions:
  What does it mean for a block to "support" another block?
  Do blocks have to be positioned directly on top of other blocks?
  Are "layers" horizontal?
  Is this a 3 dimensional stucture, or 2d?

# E - Examples
0 -> 0
1 -> 0
2 -> 1
4 -> 3
5 -> 0
6 -> 1
14 -> 0

# D - Data Structure
We could use an array to store the number of blocks in each row
This might not be necessary - we could just keep a running tally of used blocks
and subtract this from the startin number to find the leftover number

# A - Algorithm
Define a variable to keep track of the number of used blocks
Define a counter starting at 1, representing the current level
Repeat if number of blocks used is less than the total number of blocks
  Check what happens if current level ^ 2 is added to the number of used blocks
    If it is greater than the total number of blocks, return the total number - used number
    If is less than or equal to the total number of blocks, add the current level ^2 to the used number

# C - Code
See leftover-blocks.js