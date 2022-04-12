function date_format(date) {
    // write your code here 
    let dateArr = date.split('/')
    
    return date+" | "+dateArr[0]+"-"+dateArr[1]+"-"+dateArr[2]+" | "+dateArr[1]+"/"+dateArr[2]+"/"+dateArr[0]
  }

  // console.log(date_format('2020/1/1'))
  // console.log(date_format('2010/1/21'))
  // console.log(date_format('2019/2/14'))

