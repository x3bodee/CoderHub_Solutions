function mergeSort(node1, node2) {
	// write your code here
	node1.sort((a,b)=> a-b)
	node2.sort((a,b)=> a-b)
	let i = 0,
  j = 0,
  sortedArr = [];

  while(i < node1.length || j < node2.length) {
    if(node1[i] <= node2[j] || (i < node1.length && j >= node2.length)) {
      sortedArr.push(node1[i]);
      i++;
    }

    if(node2[j] <= node1[i] || (j < node2.length && i >= node1.length)) {
      sortedArr.push(node2[j]);
      j++;
    }
  }

    return sortedArr;
}

console.log(mergeSort([5,8,1],[4,6,2]))