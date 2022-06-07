function tribonacci(num) {
    // write your code here
  	let result = []
	for( let i = 0 ; i < num ; i++ ){
      	if ( result.length < 3 ){
        	if ( i == 1 || i == 2 || i == 0 ) result.push(1)
            continue;
        }else{
            result.push( result[i-3] + result[i-2] + result[i-1]   )
        }
    	
    }
    return result
}


console.log(tribonacci(5)) // [1,1,1,3,5]
console.log(tribonacci(6)) // [1,1,1,3,5,9]
console.log(tribonacci(2)) // [1,1]
console.log(tribonacci(9)) // [1,1,1,3,5,9,17,31,57]
