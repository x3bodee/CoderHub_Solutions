
function birthDay(dateString) {
    // write your code here
    let fourYears = 126230400000
    let d1= new Date(dateString).valueOf()
    let now = Date.now()

    let fourLimit = now - fourYears // -4
    
    let twoLimit = now - (fourYears * 50) // -200 

    if ( now < d1  ) return false
    if ( fourLimit <= d1 ) return false
    if ( twoLimit >= d1 ) return false


    return true

}



console.log(birthDay('2017-10-21T00:00:00'))
console.log("-----------------------------------")
console.log(birthDay('2099-08-02T00:00:00'))
console.log("-----------------------------------")
console.log(birthDay('3020-01-01T00:00:00'))
console.log("-----------------------------------")
console.log(birthDay('1111-08-29T00:00:00'))
