
function timePeriod(date1, date2) {
    // write your code here
    let d1= new Date(date1)
    let d2= new Date(date2)

    if ( Date.parse(date1) == NaN || Date.parse(date2) == NaN ) return false
    
    if (d2.valueOf() > Date.now() || d1.valueOf() > Date.now()  ) return false

    if( d2.valueOf() < d1.valueOf() ) return false

    return true
    

}

console.log(timePeriod('2017-08-02T00:00:00','2017-08-08T00:00:00'))
console.log(timePeriod('2023-08-02T00:00:00','2017-08-08T00:00:00'))
console.log(timePeriod('2079-08-02T00:00:00','2089-08-19T00:00:00'))
console.log(timePeriod('2022-01-02T00:00:00','2022-01-12T00:00:00'))