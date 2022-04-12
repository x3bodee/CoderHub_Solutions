// function removeSpecialCharacters(str) {
// 	// write your code here
//     // return str.replace(/ *[.$!@#?]/g,'');
//     // str = str.replace(/[^a-zA-Z0-9]/g,'_');
// 	// return str
// 	// return str.replace(/ *[$!@?.#]/g,'');
// 	return str.replace(/ *^[a-zA-Z0-9.-]/g,'');

// }

function removeSpecialCharacters(str) {
	let strange = [".","$","!","@","#","?"]
	let t= str.split('').filter(e=> !strange.includes(e))
	return t
}

console.log(removeSpecialCharacters('He good @ tennis!'))
console.log(removeSpecialCharacters('Searching on Twitter #'))
console.log(removeSpecialCharacters('her name is -Sara-??'))
console.log(removeSpecialCharacters('First_challenge!'))

// function hasSpace(str) {
// 	// write your code here
// 	return str.replace(/ +/g,'#')
// }
// console.log(hasSpace('He good tennis'))


// function hasSpace(str) {
// 	// write your code here
// 	return Math.sqrt(str,3)
// }
// console.log(hasSpace(9))
// console.log(hasSpace(81))