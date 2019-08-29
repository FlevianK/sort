const heapify = (array, i, heapSize) => {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < heapSize && array[i] < array[l]) {
    largest = l;
  }

  if (r < heapSize && array[largest] < array[r]) {
    largest = r
  }
  // Change root, if needed 
  if (largest !== i) {
    swap(array, i, largest)
    // heapify the Root
    heapify(array, largest, heapSize)
  }
}

const swap = (array, firstItemIndex, lastItemIndex) => {
  let temp = array[firstItemIndex];

  // Swap first and last items in the array.
  array[firstItemIndex] = array[lastItemIndex];
  array[lastItemIndex] = temp;
};

const getMaxHeap = array => {
  // The array here is interchangeably used to refer to our heap.
  // In a complete tree the first index of a non-leaf node is given by this.
  let i = Math.floor(array.length / 2 - 1);
  // Build a max array out of
  // all array elements passed in.
    // Build heap (rearrange array) 
    for (i; i >= 0; i--) {
      heapify(array, i, array.length)
    }
};

const heapSort = array => {
  getMaxHeap(array);

  // Find last element.
  let lastElement = array.length - 1;
  // Continue array sorting until we have
  // just one element left in the array.
  while (lastElement > 0) {
    swap(array, 0, lastElement);
    heapify(array, 0, lastElement--);
  }
  return array;
};


module.exports = heapSort;