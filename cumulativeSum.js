function cumulativeSum(arr) {
	// write your code here
	let sum =0
    arr.forEach((element,i) => {
     element+=sum
     arr[i]= element
     sum=element  
    });
    return arr
}

console.log(cumulativeSum([1,-2,3]))