
function isMirrored(num) {
    // write your code here
    let numArr = String(num).split("")
    if (numArr.length == 1 || (numArr.length == 2 && numArr[0] == numArr[1])) return true
    let end = numArr.length-1
    for(let i=0; i!=end && i < end; i++,end--){
        if (numArr[i] != numArr[end]) return false
    }
    return true
}


console.log(isMirrored(11))
console.log(isMirrored(191))
console.log(isMirrored(112))
console.log(isMirrored(16461))
console.log(isMirrored(166461))
