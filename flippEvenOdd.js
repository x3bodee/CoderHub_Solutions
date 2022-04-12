function filpEvenOdd(array) {
	// write your code here
     array.map( (ele) => {
        if ( ele % 2 == 0 ) ele += 1
        else ele -= 1
      })
	return array
}

console.log(filpEvenOdd([24, 13, 14, 18]))