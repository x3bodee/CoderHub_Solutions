function OctToBin(num)
{
    let sum =0
	let binary = num.toString(2).split('')
    console.log(binary)
	binary.forEach(e=> (e === "1")?sum+=1:1)
	return sum
}


console.log(OctToBin(3))
console.log(OctToBin(99))
console.log(OctToBin(0))