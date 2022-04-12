function replaceThe(txt) {
	// write your code here
	let arr = txt.split(' ')
    console.log(arr)
	arr.forEach( (ele,i) => {
	  if ( i != 0 && arr[i-1] === 'the' ) {
          console.log(ele)
	    if ( ele.startsWith('u') || ele.startsWith('a') || ele.startsWith('i') || ele.startsWith('e') || ele.startsWith('o') )
	    arr[i-1]= 'an'
	    else arr[i-1]= 'a'
	  }
	})
	return arr.join(' ')
}

console.log(replaceThe('Get the box'))
console.log(replaceThe("What's the use?"))
console.log(replaceThe("I like to go to the park"))