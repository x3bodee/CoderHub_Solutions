function middleChar(word) {
	// write your code here
    // if (word == '') return word
	// if ( word.length == 1) return word
	// else if(word.length % 2 == 0) return word[word.length/2]+word[word.length/2-1]+""
	// else return word[Math.floor(word.length/2)]+""
	return word.substr(Math.ceil(word.length / 2 - 1), word.length % 2 === 0 ? 2 : 1);
}

console.log(middleChar("middle"))
console.log(middleChar("art"))
console.log(middleChar("B"))
console.log(middleChar(""))
console.log(middleChar("cook"))
console.log(middleChar("cqwertyuiok"))

// console.log(window)

let t= [1,2,3,4]
t.unshift(5,6)
console.log(t)