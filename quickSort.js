const quickSort = array => {
  if (array.length <= 1) return array

  let result = [],
    leftside = [],
    rightside = [],
    pivot = array.pop()

  for (let i = 0; i < array.length;  i++) {
    array[i] < pivot ?
      leftside.push(array[i])
    :
      rightside.push(array[i])
  }
  return result.concat(quickSort(leftside), pivot, quickSort(rightside))
  
}

module.exports = quickSort
