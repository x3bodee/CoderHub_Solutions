// /^[A-Z]*$/
function capSpace(txt) {
    // write your code here
    let val=''
    let arr = txt.split('')
    arr.forEach(ele=>{
        if (ele == ele.toUpperCase()) val = val+" "+ele.toLowerCase()
        else val+=ele
    })
    return val
  }

  console.log(capSpace("iLoveMyFriend"))