function DecimalPlaces(num) {
    // write your code here
    return num.split('.')[1].length || 0
  }

  console.log(DecimalPlaces('4.98'))
  console.log(DecimalPlaces('1.3'))
  console.log(DecimalPlaces('50'))
  console.log(DecimalPlaces('4.942'))