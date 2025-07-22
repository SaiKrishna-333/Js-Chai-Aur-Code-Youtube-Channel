//Arrays

const myArray = [0,1,2,3,4]
console.log(myArray)
console.log(myArray[0])

const myHeros = ["shaktiman","nagraj"]
console.log(myHeros)
console.log(myHeros[0])

const myArray2 = new Array(1,2,3)
console.log(myArray2)
console.log(myArray2[0])

const myArray3 = new Array()
myArray3.push(6)
console.log(myArray3)
myArray3.push(7)
console.log(myArray3)
myArray3.push(9)
console.log(myArray3)
myArray3.pop()
console.log(myArray3)

myArray3.unshift(10)
console.log(myArray3)
myArray3.shift()
console.log(myArray3)

console.log(myArray3.includes(6))
console.log(myArray3.indexOf(6))

const joinArray = myArray3.join()
console.log(joinArray);

//Slice,splice

console.log("A ",myArray3);

const myn1 = myArray3.slice(1,3)
console.log(myn1)

console.log("B ",myArray3);
