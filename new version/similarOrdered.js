
function similarOrdered(word1, word2) {
    // write your code here
    word1 = word1.split("");
    word2 = word2.split("");
    let result = [];
    let i =0,j =0;
    while (word1.length > i && word2.length > j){
        // if (word1.length == 2 || word2.length == 2 ) 
        

        if (word1[i] == word2[j]){
            result.push(word1[i])
        }else{
            result.push(".")
        }
        i++;
        j++;
    }
    return result
}


console.log(similarOrdered('washing','waiting'))
console.log(similarOrdered('me','meet'))
console.log(similarOrdered('abc','bcd'))