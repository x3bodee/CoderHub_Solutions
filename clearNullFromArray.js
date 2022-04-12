function cleanArray(arr) {
	// write your code here
	return arr.filter(n=> n!=null)
}

console.log(cleanArray([1,2,null,3]))
console.log(cleanArray([null,null,null,null]))
console.log(cleanArray([]))
console.log(cleanArray([3,2,null,null,1]))