// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="Sai"
tinderUser.isLoggedIn=false

const regularUser={
    email:"Sai@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sai",
            lastname:"Krishna"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)



const users = [
    {
        id: 1,
        email: "SaiKrishna@gmail.com"
    },
    {
        id: 1,
        email: "SaiKrishna@gmail.com"
    },
    {
        id: 1,
        email: "SaiKrishna@gmail.com"
    },
    {
        id: 1,
        email: "SaiKrishna@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

/****************************************************************************************************/

const course = {
    coursename: "DS Alo with Krish",
    price: 99,
    courseInstructor: "Sai"
}

const {courseInstructor: instructor} = course
// console.log(instructor);


/*const navbar = ({company}) => {

}
navbar(company="Sai")*/





// {
//     name:"Sai",
//     coursename: "DSAlgo",
//     price: "free"
// }


[
    {},
    {},
    {}
]