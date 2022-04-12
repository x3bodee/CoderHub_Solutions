function raduis(circumference) {
	// write your code here
    let t =2*3.14
    let b =circumference/t
	// return parseFloat(b.toString().substring(0,4)).toFixed(2);
    return b
}

console.log(raduis(4))
console.log(raduis(6.5))
console.log(raduis(0))
console.log(raduis(4.7))