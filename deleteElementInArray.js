function deleteElementInArray(arr, index) {
    // write your code here
    console.log(arr)
    let indexOf = arr.indexOf(index)

    arr.splice(indexOf,1)
    
    return arr
  }

  console.log(deleteElementInArray( [ 2 , 4 , 88 ], 2 ) )
  console.log(deleteElementInArray( [ -3 , 4 , 0 ] , 0 ) )