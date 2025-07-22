// singleton

//Object literals

const mySym = Symbol("key")

const JsUser = {
    name: "Sai Krishna",
    age:20,
    [mySym]: "mykey1",
    location:"Bangalore",
    email: "Sai@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

JsUser.email="sai@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greetingTwo = function(){
    console.log(`Hello,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());