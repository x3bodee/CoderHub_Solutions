function missingLetter(txt) {
	// write your code here
    for(let i=1; i<txt.length; i++){
        if(txt[i].charCodeAt(0) - txt[i-1].charCodeAt(0) >1)
            return  String.fromCharCode(txt[i-1].charCodeAt(0)+1)
    }

    return "No Missing Letter"
}

console.log(missingLetter('abcef'))
console.log(missingLetter('mnop'))
console.log(missingLetter('tuvxyz'))
console.log(missingLetter('qrs'))
// String.fromCharCode()
// String.charCodeAt(0)