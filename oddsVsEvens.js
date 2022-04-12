function oddsVsEvens(num) {
    // write your code here
    let numSt = num+''
    let odd=0
    let even=0
    numSt = numSt.split('')
    numSt.forEach(ele => {
        let j = parseInt(ele)
        if(j % 2 == 0)even+=j
        else odd+=j
        
    })

    if ( even === odd ) return 'equal'
    else if ( even > odd ) return 'even'
    else  return 'odd'
  }

  console.log(oddsVsEvens(561))
  console.log(oddsVsEvens(132))
  console.log(oddsVsEvens(463))
  console.log(oddsVsEvens(121))
