function inputType(value) {
   
    let num = Number(value), double = parseFloat(value);

    if(Number.isInteger(num)) return 'integer'
    else if (Number(double) === double && double % 1 !== 0) return 'double'
    else return 'string'
    
    
  }

  console.log( inputType("123") )
  console.log( inputType("123.0000004") )
  console.log( inputType("sdsdds") )
  console.log( inputType("21.1") )