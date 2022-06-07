
function getPrimesBetween(a, b) {
    // write your code here
    let result =[];
    for (a; a <= b; a++) {
        if ( a == 1) continue;
        if ( a > 1 ) {
            let isPrime = true;
            for( let j = 2; j < b; j++){
                if (a % j == 0 && a != j){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) result.push(a);
        }
    }
    return result;
}

console.log(getPrimesBetween(1,10)) // [2,3,5,7]
console.log(getPrimesBetween(20,50)) // [23,29,31,37,41,43,47]
console.log(getPrimesBetween(90,95)) // []
console.log(getPrimesBetween(10,20)) // [11,13,17,19]
console.log(getPrimesBetween(2,13)) // [2,3,5,7,11,13]
