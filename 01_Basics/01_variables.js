const accountId = 144553
let accountEmail = "sai@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId=2; //Not allowed as const type

accountEmail = "krish@gmail.com"
accountPassword = "12333"
accountCity = "Hyd"

console.log(accountId);

/*Prefer not to use var because of issue in the blog scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])