const myNums=[1,2,3]

// const Total=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)

const myTotal = myNums.reduce( (acc,currval) => acc+currval,0)

console.log(myTotal)





const shoppingCart = [
    {
        itemname:"mobile dev",
        price:6999,
    },
    {
        itemname:"app dev",
        price:6999,
    },
    {
        itemname:"software dev",
        price:6999,
    },
    {
        itemname:"frontend dev",
        price:6999,
    },
    {
        itemname:"backend dev",
        price:6999,
    },
]
const PriceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(PriceToPay)