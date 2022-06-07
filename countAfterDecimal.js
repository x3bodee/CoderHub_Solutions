function DecimalPlaces(num) {
    // write your code here
    // return num.split('.')[1].length || 0
    return  ( num.indexOf('.') != -1 ) ? num.length - num.indexOf('.')-1 : 0
  }


  console.log(DecimalPlaces('45.98'))
  console.log(DecimalPlaces('100000.3'))
  console.log(DecimalPlaces('50'))
  console.log(DecimalPlaces('4421.942'))