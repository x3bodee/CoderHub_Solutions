function largestSmallest(array) {
    let sorted = array.slice().sort((a, b)=> {return a - b} )
    return [ sorted[0] , sorted[sorted.length-1] ]
  }

  console.log(largestSmallest([2 , 4 , 9 , 23 , 435]))