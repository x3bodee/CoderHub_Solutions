function middleChar(word) {
	return word.substr(Math.ceil(word.length / 2 - 1), word.length % 2 === 0 ? 2 : 1);
}

console.log(middleChar("middle"))
console.log(middleChar("art"))
console.log(middleChar("B"))
console.log(middleChar(""))
console.log(middleChar("cook"))
console.log(middleChar("cqwertyuiok"))
