function convertTime(s) {
    // write your code here
    //       00     22     44
    let val=['',':','',':','']
    let firstArr = s.split(':')
    console.log(firstArr)
    val[2] = firstArr[1]
    val[4] = firstArr[2].split(/[a-zA-Z]/g)[0]
    if ( s[s.length-1].toUpperCase() == "M" ){
        
        if(s[s.length-2].toUpperCase() == "A" ){
            val[0]=firstArr[0]
            if(firstArr[0] == "12") val[0]="00"
        }else{
            if(firstArr[0] == "12") val[0]="12"
            else{
                let t=parseInt(firstArr[0])+12
                val[0]=t+''
            }
            
        }
    }
    return val[0]+val[1]+val[2]+val[3]+val[4]
  }

  console.log(convertTime("12:45:54PM"))
  console.log(convertTime("12:00:22am"))
  console.log(convertTime("6:20:12pm"))
