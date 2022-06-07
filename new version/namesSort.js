
function namesSort(namesArray, order) {
    // write your code here
    
    if (namesArray.length < 2) return namesArray
    
    if (order == "ASC") return namesArray.sort()
    else return namesArray.sort().reverse()
}

console.log(namesSort( ['Ahmed Omar','Yousef Abdullah'],"ASC"))
console.log(namesSort( ['Khaled Bader','Mohammed Yahya','Khaled Bader'],"ASCs"))
console.log(namesSort(  ['Mohammed Yahya','Khaled Bader'],"ASC"))
console.log(namesSort( ['Ahmed Omar','Yousef Abdullah'],"ASCs"))
