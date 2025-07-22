// Primitive
// 7types : String , Number , Boolean , null , undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId)


// const bigNumber = 123456789987654321n


//Referrence (Non primitive)

//Arrays , Objects , Functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name : "Sai",
    age : 22,
}

const myFunction = function(){
    console.log("Hello Worls")
}

console.log(typeof myFunction)

/********************************************************************************** */
//Stack(Primitive), Heap(Non-Proimitive)

let myYoutubeName="saidotcom"

let anotherName="Krishna"
anotherName="krishdotcom"

console.log(myYoutubeName)
console.log(anotherName)


let UserOne={
    email:"sai@com",
    upi:"7406axis",
}

let UserTwo = UserOne

UserTwo.email="krish@com"

console.log(UserOne.email)
console.log(UserTwo.email)