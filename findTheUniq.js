function unique(arr) {
    // write your code here
    let darr = [], duplicates = [];

for(var i = 0; i < arr.length; i++){
  if(darr.includes(arr[i]) && !duplicates.includes(arr[i]))
    duplicates.push(arr[i])
  else
    darr.push(arr[i]);
}
return darr
  }

  console.log(unique([1,1,1,2]))
  console.log(unique([]))
  console.log(unique([1,2,2]))
  console.log(unique([1,1,2,2,3]))