function reverseCase(str) {
    // write your code here
    return str.split('').map(ele=> ( (ele == ele.toUpperCase()) ? ele.toLowerCase() : ele.toUpperCase() ) ).join('')
  }

  console.log(reverseCase('WeLcomE'))