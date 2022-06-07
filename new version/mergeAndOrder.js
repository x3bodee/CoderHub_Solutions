
function mergeAndOrder(array1, array2) {
    
  let i = 0, j = 0, k = 0;
  let n1= array1.length, n2=array2.length
  let result= Array(n1 + n2).fill(0);
  while (i < n1 && j < n2) {

      if (array1[i] < array2[j])
        result[k++] = array1[i++];
      else
        result[k++] = array2[j++];
  }

  // Store remaining elements of first array
  while (i < n1)
    result[k++] = array1[i++];

  // Store remaining elements of second array
  while (j < n2)
    result[k++] = array2[j++];
  return result
}

console.log(mergeAndOrder([1,2],[3,4]))
console.log(mergeAndOrder([1,2],[1,5]))
console.log(mergeAndOrder([],[1,4,9]))
console.log(mergeAndOrder([11,13],[3,8,10]))