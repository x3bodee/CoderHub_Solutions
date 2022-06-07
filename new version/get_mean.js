
function get_mean(arr) {
   // write your code here
  return arr.reduce((a,b)=> a+b);
}


console.log(get_mean([4,1]))
console.log(get_mean([6,7,8,9]))
console.log(get_mean([10,15]))
console.log(get_mean([1,5,3,6,6]))