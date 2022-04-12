function date_format(date) {
    // write your code here 
    let dateArr = date.split('/')
    
    return date+" | "+dateArr[0]+"-"+dateArr[1]+"-"+dateArr[2]+" | "+dateArr[1]+"/"+dateArr[2]+"/"+dateArr[0]
  }

  // console.log(date_format('2020/1/1'))
  // console.log(date_format('2010/1/21'))
  // console.log(date_format('2019/2/14'))

  function date_format2(date) {
    // write your code here 
    date = new Date(date)
    
    return date.toString('dd-mm-yyyy')
  }

  console.log(date_format2('2020-02-10'))