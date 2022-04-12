function rootCheck(sqr, num) {
	// write your code here
	
	root = Math.pow(num,2)
    console.log("sqr: "+sqr+"   , num: "+num)
	return sqr == root ? num : 0 
}

console.log(rootCheck(8,4))
console.log(rootCheck(36,6))
console.log(rootCheck(81,9))
console.log(rootCheck(16,5))