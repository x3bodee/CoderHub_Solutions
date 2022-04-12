function sortByLength(txt) {
	// write your code here
	let arr = txt.split(' ')
	return arr.sort((a,b)=> a.length - b.length).join(" ")
}