
const digit=['zero','one','two','three','four','five','six','seven','eight','nine']
const digit2=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
const tens=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
const hundred = "hundred"

function numToEng(n) {
  // write your code here
  n+=""
  if (n.length == 1){
    console.log(oneDigit(n))
}else if (n.length == 2){
    console.log(twoDigit(n))
    
}else if (n.length == 3){
      console.log(threeDigit(n))
      
  }else "wrong input"
  
}

function oneDigit(n){
  return digit[parseInt(n)]
}

function twoDigit(n){

    if (n.length == 1) return oneDigit(n)
    let split_ = n.split("")
    if (n < 10) return oneDigit(n.substring(1))
    else if (n < 20) return digit2[parseInt(split_[1])]
    else {
        if (n.split("")[1] == 0) return tens[parseInt(split_[0])-2]
        else return tens[parseInt(split_[0])-2] +"-"+ oneDigit(parseInt(split_[1]))
    }
}

function threeDigit(n){
    if(n.substring(1) == "00") return oneDigit(n.substring(0,1))+" "+hundred
    else return oneDigit(n.substring(0,1))+" "+hundred+" "+twoDigit(n.substring(1))
}


for (let i=0; i<1000;i++){
    console.log(i+": ")
    numToEng(i)

}