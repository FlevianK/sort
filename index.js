const assert = require('assert').strict;

// Sorting Algorithms

const quickSort = require('./quickSort');
const mergeSort = require('./mergeSort');
const insertionSort = require('./insertionSort')
const heapSort = require('./heapSort')
const bubbleSort = require('./bubbleSort')

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];

//BubbleSort
assert.deepEqual(bubbleSort([3, 4, 5, 2, 1, 8, 6, 7]), sortedArray);

//Quicksort
assert.deepEqual(quickSort([3, 4, 5, 2, 1, 8, 6, 7]), sortedArray);

//mergeSort
assert.deepEqual(mergeSort([3, 4, 5, 2, 1, 8, 6, 7]), sortedArray);

//insertionSort
assert.deepEqual(insertionSort([3, 4, 5, 2, 1, 8, 6, 7]), sortedArray)

//heapSort
assert.deepEqual(heapSort([3, 6, 2, 4, 1, 7, 8, 5]), sortedArray);