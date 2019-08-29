const insertionSort = array => {
  for(let i = 0; i < array.length; i++) {
    const value = array[i]
    let j = i - 1

    for (j; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = value
  }

  return array
}

module.exports = insertionSort
