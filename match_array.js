function match_array(array1,array2){
    
    if ( array1.length !== array2.length ) return false
    
    array2 = array2.sort()
    array1 = array1.sort()
    
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false
        
    }
    return true

}

console.log(match_array(["word1", "wo", "word2"],["word2", "word1", "wo"]))
// console.log(match_array(["32", "hello", "there"],["hello", "there", "23"]))