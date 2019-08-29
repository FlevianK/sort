const mergeSort = array => {
  if (array.length <= 1) return array

  const midpoint = Math.floor(array.length/2),
    leftside = array.slice(0, midpoint),
    rightside = array.slice(midpoint)

  return merge(mergeSort(leftside), mergeSort(rightside))
}

const merge = (leftside, rightside) => {
  let output = [],
    leftpointer = 0,
    rightpointer = 0

  while(leftpointer < leftside.length && rightpointer < rightside.length) {
    if(leftside[leftpointer] < rightside[rightpointer]) {
      output.push(leftside[leftpointer])
      leftpointer ++
    } else {
      output.push(rightside[rightpointer])
      rightpointer ++
    }
  }
  
  return output.concat(leftside.slice(leftpointer), rightside.slice(rightpointer))
}

module.exports = mergeSort