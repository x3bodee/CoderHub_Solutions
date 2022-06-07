
function operation(num1, num2) {
    // write your code here
    if( ( num1 + num2 ) == 24) return "added"
  	else if( ( num1 / num2 ) == 24) return "divided"
  	else if( ( num1 * num2 ) == 24) return "multiplied"
  	else if( ( num1 - num2 ) == 24) return "subtracted"
  	else return "None"
}

console.log(operation(6,7))
console.log(operation(20,4))
console.log(operation(3,8))
console.log(operation(24,1))