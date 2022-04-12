function getDuplicateElements(arr) {
	// write your code here
	darr = [], duplicates = [];

for(var i = 0; i < arr.length; i++){
  if(darr.includes(arr[i]) && !duplicates.includes(arr[i]))
    duplicates.push(arr[i])
  else
    darr.push(arr[i]);

}
return duplicates
}


console.log(getDuplicateElements([10,3,10,3]))
console.log(getDuplicateElements([1,2,3,3]))
console.log(getDuplicateElements([-4,4,-4,5]))
console.log(getDuplicateElements([2,18]))