
function getBiggestShared(a, b) {
    // write your code here
    let result=0
    a.forEach(e => {
        (b.includes(e) && e>result) ? result=e:""
    });
    return result
}

console.log(getBiggestShared([1,11,4,5],[3,4,7,11]))