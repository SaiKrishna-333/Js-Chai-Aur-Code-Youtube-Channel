let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

let myCreatedDate=new Date(2025,8,25)
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toISOString());
// console.log(myCreatedDate.toJSON());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleTimeString());

myTimeStamp = Date.now();
// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000));






let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday:"long",
})