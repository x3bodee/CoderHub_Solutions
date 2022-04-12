function addStrNums(num1) {
    // write your code here
    let regex = /[-+%]/g;
    let found = num1.match(regex);
    let found2 = num2.match(regex);

    if( found != null || found2 != null) return -1
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    return num1 + num2 + ''
}

console.log(addStrNums('1', '2'))
console.log(addStrNums('3', '55'))
console.log(addStrNums('1', '2e'))