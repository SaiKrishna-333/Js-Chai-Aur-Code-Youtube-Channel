const user={
    username:"sai",
    price:990,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)








// function chai(){
//     let username="sai"
//     console.log(this.username)
// }
// chai()



const chai = () => {
    let username="sai"
    console.log(this)
}
chai()


// const addTwo = (num1,num2_ => {
//     return num1+num2;
// })
const addTwo = (num1,num2) =>  (num1+num2);

console.log(addTwo(3,4))