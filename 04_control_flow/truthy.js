const userEmail = "sai.ai"
if (userEmail) {
    // console.log("Got mail");
}else{
    // console.log("Dont have mail")
}

//fallsy value => false,0,-0,undefined,null.BigInt On,"",NaN
//truthy values=>"0",'false'," ",[],{},function(){}


if (userEmail.length===0) {
    // console.log("Empty");
}


const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    // console.log("Empty object")
}


//Nullish Coalescence Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
// console.log(val1);



//Ternary operator
// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("greater than 80"):console.log("less than 80")