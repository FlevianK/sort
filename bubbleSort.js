const bubbleSort = (array) => {
  let n = array.length
  do {
    for(let i=0; i<array.length; i++) {
      if(array[i] > array[i+1]) {
        const temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      }
    }
    
  } while(n--) // implements best case
  return array
}

module.exports = bubbleSort
