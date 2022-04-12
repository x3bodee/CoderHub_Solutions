function longestZero(str) {
	// write your code here
    arr = str.split(1).filter(e=>e!='').sort()
    return arr[arr.length-1]
}

console.log(longestZero("1100001010"))