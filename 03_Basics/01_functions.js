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
console.log(loginUserMessage("sai"));
console.log(loginUserMessage());