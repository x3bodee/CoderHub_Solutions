const count = (str,char) => {
    let upper = char.toUpperCase()
    let lower = char.toLowerCase()
    const re = new RegExp(lower +'|'+ upper,'g')
    return ((str || '').match(re) || []).length
}

function arrowDuplicates(word) {
    // write your code here
    let result=""
    let wordArr = word.split("")
    wordArr.forEach((e,i)=>{
        if (count(word,e) > 1) result+="<"
        else result+=">"
    })
    return result
}

console.log(arrowDuplicates("SAFCSP"))
// S A F C S P
// < > > > < >
// < > > > < >

// متكرر 
// <

// غير متكرر 
// >