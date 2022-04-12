function DecimalPlaces(num) {
    // write your code here
    // let a= String(num).split('.')[1] || ''
    // return a.length
    return num.split('.')[1].length || String('').length
  }

  console.log(DecimalPlaces('4.98'))
  console.log(DecimalPlaces('1.3'))
  console.log(DecimalPlaces('50'))
  console.log(DecimalPlaces('4.942'))