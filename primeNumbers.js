function primesNums(array) {
    // write your code here
    return array.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
}

  console.log(primesNums([2,3,4,5,6,7,8,9]) )