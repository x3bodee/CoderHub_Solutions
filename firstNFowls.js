function firstNVowels(phrase, n) {
    // write your code here
    if (n > phrase.length) return 'invalid'
    
    let regex = /[aeouiAEOUI]/g;
    let match = phrase.match(regex);

    console.log(match)
    if (match == null ) return 'invalid'
    if (n > match.length) return 'invalid'
    
    // print the n match
    if (n == match.length)
    return match.join('')
    
    let result =''
    if (n < match.length){
        for (let i =0 ;i<n;i++)
        result+=match[i]
    }
    
    return result
  }

  console.log(firstNVowels('Sharpening skills',3))
  console.log(firstNVowels('major league',5))
  console.log(firstNVowels('hostess',5))
  console.log(firstNVowels('ProgrAmmEr',3))