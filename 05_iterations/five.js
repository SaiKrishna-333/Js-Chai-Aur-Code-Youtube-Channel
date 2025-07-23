//for each

const coding = ["js","cpp","rb","oops"]
// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach((item) =>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr)
// })


const myCoding=[
    {
        languageNme:"Javascript",
        languagefilename:"js"
    },
    {
        languageNme:"java",
        languagefilename:"java"
    },
    {
        languageNme:"ruby",
        languagefilename:"rb"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languagefilename)
})