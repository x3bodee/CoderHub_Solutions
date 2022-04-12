function average(array) {
    let sum=0
    array.forEach(e => sum+=e )
    return sum/array.length
  }

  console.log(average([1,2,3,4,5]))