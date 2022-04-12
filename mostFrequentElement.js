function mostFrequentElement(arr) {

    let counter = {};

    arr.forEach(name => counter[name] ? counter[name]++ : counter[name] = 1);

    let max = Math.max(...Object.values(counter));

    let highest = Object.entries(counter).filter(([name, reps]) => reps === max);

    return highest[0][0]
}
console.log(mostFrequentElement([1,2,3,2,1,1,3,1]))