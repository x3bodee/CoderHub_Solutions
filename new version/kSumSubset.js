// function isSubsetSum(numArray, n, k) {
//   if (k == 0) return true;
//   if (n == 0) return false;

//   if (numArray[n - 1] > k) return isSubsetSum(numArray, n - 1, k);

//   return ( isSubsetSum(numArray, n - 1, k) || isSubsetSum(numArray, n - 1, k - numArray[n - 1]) );
// }

// function kSumSubset(numArray, k) {
//   let n = numArray.length;
  
//   if (isSubsetSum(numArray, n, k) == true) return true
//   else return false
// }

// const powerSet = (numArray)=>{
//     const result = [[]]
//     for ( let val of numArray ){
//         const length = result.length
//         for ( let i = 0; i < length;i++ ){
//             let temp = result[i].slice(0)
//             temp.push(val)
//             result.push(temp)
//         }
//     }
// }

const getAllSubSet = numArray =>
    numArray.reduce((subsets,value) =>
    subsets.concat(subsets.map(set=>[value,...set]))
    ,[[]]
    );

function kSumSubset(numArray, k) {
    let flag =false
  let allSubSet = getAllSubSet(numArray)
  console.log(allSubSet)
  for(let i=0;i<allSubSet.length;i++){
      let sum = allSubSet[i].reduce(function(pv, cv) { return pv + cv; }, 0);
      if (sum == k) {
          flag=true
      }
  }
  return flag
}

// console.log(getAllSubSet([7, 3, 2, 5, 8]));
// console.log(getAllSubSet([2, 4, 6, 8]));
// console.log(getAllSubSet([7, 5, 3,1]));
// console.log(getAllSubSet([14, 8, 12, 9]));


console.log(kSumSubset([7, 3, 2, 5, 8], 14));
console.log(kSumSubset([2, 4, 6, 8], 11));
console.log(kSumSubset([7, 5, 3,1], 4));
console.log(kSumSubset([14, 8, 12, 9], 21));