function sumTwoSmallestNums(arr) {
	// write your code here
    if(arr.length == 0) return 0
	if (arr.length <= 1) return arr[0]
	arr = arr.sort((a,b)=> a-b)
	return arr[0]+arr[1]
}

console.log(sumTwoSmallestNums([20,9,3,2]))
console.log(sumTwoSmallestNums([1,3,55,8]))
console.log(sumTwoSmallestNums([3,3,4,5]))
console.log(sumTwoSmallestNums([8,9,22,40]))
console.log(sumTwoSmallestNums([3]))