function postfixEval( postfixArray ) {
    let stack = [];
    postfixArray=postfixArray.split(' ')

    for( element of postfixArray){
        

        if(isNaN(element)){
            let x = stack.pop();
            let y = stack.pop();
            
            if (element == "+"){
                result = (y+x);
               
                stack.push(y + x);
            } else if (element == '-'){
                stack.push(y - x);
            } else if (element == '*'){
                stack.push(y * x);
            } else if (element == '/'){
                stack.push(y / x);
            }
        } else {
            stack.push( parseFloat(element) );
        }
    }
    //final check for non numbers within the stack
    let returnValue = null;
    while( stack.length > 0 ){
        
        let element = stack.pop();  
        if(isNaN(element)){
            continue;
        } else{
            returnValue = element;
        }
    }
    return returnValue;
}

console.log(postfixEval("2 3 +"))
console.log(postfixEval("3 3 *"))
console.log(postfixEval("2 3 * 1 - 5 /"))
console.log(postfixEval("4 1 - 2 *"))