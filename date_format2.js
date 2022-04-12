function date_format2(date) {
    // write your code here 
    date = new Date(date)
    
    return date.toString('dd-mm-yyyy')
  }

  console.log(date_format2('2020-02-10'))