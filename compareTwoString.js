function compareTwoWords(s1, s2) {
	// write your code here
	return s1.substring(s1.length-2) == s2.substring(s2.length-2)
}

console.log(compareTwoWords("ssaa","wwdd"))
console.log(compareTwoWords("ssaa","ddaa"))