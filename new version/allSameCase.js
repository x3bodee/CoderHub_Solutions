
function allSameCase(word) {
    // write your code here
    if (word.length < 1) return true
	let isCapital = false
    let result = true
    let arr = word.split("")

    arr[0].charCodeAt(0) < 97 ? isCapital = true : isCapital =false

    for (let i = 1; i < arr.length; i++) {
        if(isCapital && arr[i].charCodeAt(0) < 97) ''
        else if (!isCapital && arr[i].charCodeAt(0) >= 97) ''
        else return false
    }
    return result
}

console.log(allSameCase("fdfdFchar"))
