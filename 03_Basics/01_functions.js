function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("I");
}
// sayMyName()

/*
function addTwoNum(number1, number2){
    console.log(number1+number2);
}
addTwoNum(3,4)
addTwoNum(3,"4")
addTwoNum(3,"A")
addTwoNum(3,null)
*/


function addTwoNum(number1, number2){
    /*let result=number1+number2;
    return result*/

    return number1+number2
}
const result=addTwoNum(3,4)
// console.log("Result:",result)





function loginUserMessage(username = "sam"){
    if(!username ){ //=== undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sai"));
// console.log(loginUserMessage());











/*function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))*/




function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,6580))



const user = {
    username: "sai",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username:"sai",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondVaalue(getArray){
    return getArray[1]
}
console.log(returnSecondVaalue(myNewArray))
console.log(returnSecondVaalue([200,400,500,600]))