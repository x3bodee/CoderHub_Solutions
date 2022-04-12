function convertTime(time) {
    // write your code here
    let val=['',':','','']
    let flag=false
    let firstArr = time.split(':')
    let secondArr = firstArr[1].split(' ')
    if ( time[time.length-1] == "m" ){
        flag=true
        
        if(secondArr[1] == "am" ){
            val[0]=firstArr[0]
            if(firstArr[0] == "12") val[0]="0"
        }else{
            let t=parseInt(firstArr[0])+12
            val[0]=t+''
            
        }
    }else{
        let num = parseInt(firstArr[0])
        if( num == 0 ) {
            val[0]= '12'
            val[3]= 'am'
        }else if (num == 12){
            val[0]= '12'
            val[3]= 'pm'
        }
        else if (num >= 13){
            let t = num - 12
            val[0]= t+''
            val[3]= 'pm'
        }else{
            val[0]= num+''
            val[3]= 'am'
        }
    }

    val[2]= secondArr[0]
    if (flag) return val[0]+val[1]+val[2]
    else return val[0]+val[1]+val[2]+" "+val[3]
  }

  console.log(convertTime("12:00 am"))
  console.log(convertTime("6:20 pm"))
  console.log(convertTime("21:00"))
  console.log(convertTime("5:05"))