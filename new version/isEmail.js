
function isEmail(email) {
    // write your code here
    let pattern = /^[a-zA-Z][\w\-.]*@[a-zA-Z]+\.[a-zA-Z]{2,}/g
    return pattern.test(email);

}

//  ان لا يبدأ النص برقم أو برمز
// ان يحتوي الجزء الأول على خانه على الأقل
//  ان يحتوي النص على الرمز @
//  أن يتبع رمز @ حرف على الأقل ثم . ثم حرفين على الأقل
// لا مانع من أن يحتوي الجزء الذي يسبق @ على الرموز التالية _ . - فقط

// function isEmail(email) {
//         // write your code here
//         let pattern = /[\w\-.]*/
//         let pattern2 = /[a-zA-Z]+\.[a-zA-Z]{2,}/
//         let arr1 = email.split("@")
//         if ( arr1.length != 2 ) return false
//         let arr2 = arr1[1].split(".")
//         if ( arr2.length != 2 ) return false
        
//         if ( arr1[0].toUpperCase().charCodeAt(0) < 65 || arr1[0].toUpperCase().charCodeAt(0) > 90 ) return false
//         if ( arr1[0].length < 1 || arr1[1].length <= 3 ) return false
//         if ( !pattern.test(arr1[0]) ) return false
//         if ( !pattern.test(arr1[1]) ) return false
//         if ( !pattern2.test(arr1[1]) ) return false
//         return true

//     }

console.log(isEmail('example@example.com'))
console.log(isEmail('@example.com'))
console.log(isEmail('example@com'))
console.log(isEmail('example@example.'))

console.log('--------------------------------')

console.log(isEmail('2jjd@example.com'))
console.log(isEmail('_exampl1e@com'))
console.log(isEmail('ex_ample32@exa.c'))
console.log(isEmail('ex.ample12@example.'))
console.log(isEmail('ex-a22mple@ex.sa'))
console.log(isEmail('e@ex.sa'))
console.log(isEmail('e_@ex.sa'))
console.log(isEmail('e_@e.sa'))
console.log(isEmail('e_@e.s'))
console.log(isEmail('e_@.s'))
console.log(isEmail('_@.s'))