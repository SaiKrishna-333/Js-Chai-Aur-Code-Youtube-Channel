// var c=300
let a = 300

if(true) {
    let a=10;
    const b=30;
    var c=30;
    // console.log("INNER:",a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// for(int =0;i<Array.length;i++){
//     const element = array[i]
// }



function one(){
    const username="sai"

    function two(){
        const website="amazon"
        // console.log(username);
    }
    // console.log(website);

    two()
}
// one()





if(true){
    const username="krish"
    if(username=="krish"){
        const website="amazon"
        // console.log(username+website);
    }
    // console.log(website)
}
// console.log(username)












/*************************************************************/

function addone(num){
    return num+1
}
console.log(addone(5))




const addTwo=function (num){
    return num+1
}
console.log(addTwo(5))