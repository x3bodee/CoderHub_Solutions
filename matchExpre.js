function mathExpr(expr) {
    // write your code here
        // write your code here
      let regex = /[aeoui]/g;
      let regex2 = /[a-zA-z]/g;
      let isMathmatic = expr.match(regex);
      let isNotNumber = expr.match(regex2);
      console.log(isMathmatic)
      console.log(isNotNumber)
      if( isMathmatic == null || isNotNumber != null ) return false
      else return true
  }

  console.log(mathExpr("aeouiiii"))
  console.log(mathExpr("4+d"))
  console.log(mathExpr("4%2"))
 