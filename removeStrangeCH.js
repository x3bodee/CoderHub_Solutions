function removeSpecialCharacters2(str) {
	// write your code here
    return str.replace(/ *[.$!@#?]/g,'');
}

function removeSpecialCharacters(str) {
	// write your code here
	return str.match(/(\w+|\-+|\s)/g).join("")
}

console.log(removeSpecialCharacters2('He good @ tennis!')) // output : He good tennis
console.log(removeSpecialCharacters2('Searching on Twitter #')) // output : Searching on Twitter
console.log(removeSpecialCharacters2('her name is -Sara-??')) // output : her name is -Sara-
console.log(removeSpecialCharacters2('First_challenge!')) // output : First_challenge

console.log("---------------------------------------------------")

console.log(removeSpecialCharacters('He good @ tennis!')) // output : He good  tennis
console.log(removeSpecialCharacters('Searching on Twitter #')) // outpu : Searching on Twitter
console.log(removeSpecialCharacters('her name is -Sara-??')) // output : her name is -Sara-
console.log(removeSpecialCharacters('First_challenge!')) // output : First_challenge

/* 
	as you can see removeSpecialCharacters2 function return "He good tennis"
	while removeSpecialCharacters function return "He good  tennis"
	and the output in the platform is "He good tennis"
	but the platform accept removeSpecialCharacters Solution 
	and don't accept removeSpecialCharacters2 Solution
*/
