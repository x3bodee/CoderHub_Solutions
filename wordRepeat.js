function wordRepeat(word, n) {
    // write your code here
    let val =''
    for(let i=0;i<n;i++)
      val += word+" "
    return val
  }

  console.log(wordRepeat('good',3))