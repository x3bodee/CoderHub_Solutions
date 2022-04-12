function stringCheck(value) {
    // write your code here
    value.sort((a,b)=> a-b)
    for(i=1;i<=value.length-1;i++){
        console.log(value[i])
        console.log(value[i-1])
      if ( value[i] != value[i-1]) return false
    }
    return true
  }

  console.log(stringCheck([ 'a','a','a' ]))
  console.log(stringCheck([ 'a','a','b' ]))