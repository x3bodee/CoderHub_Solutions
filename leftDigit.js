function leftDigit(str) {
	// write your code here
    let val = 0
    let arr = str.split('')
    for (let index = 0; index < arr.length; index++) {
        if (isNumber(arr[index])){
            val = arr[index]
            return val;
        }
    }
    
    return val;
}

function isNumber(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    if (char.trim() === '') {
      return false;
    }
  
    return !isNaN(char);
  }

console.log( leftDigit("sss") )