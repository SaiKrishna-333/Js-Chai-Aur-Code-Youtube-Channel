//for
/*for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is best number");
    }
    console.log(element)
}*/




/*for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop Value : ${i}`)
    for(let j=0;j<10;j++){
            console.log(`Inner Loop Value : ${j}`)
    }
    console.log("\n")
}*/







/*for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop Value : ${i}`)
    for(let j=1;j<=10;j++){
            console.log(i+" * "+j+' = '+i*j)
    }
    console.log("\n")
}*/







let myArray = ["flash","spiderman","superman"]
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}











//break and continue
for (let index = 1; index <=20 ; index++) {
    if (index==5) {
        console.log("Detected Value is 5")
        break;
    }
    console.log(`Value is : ${index}`)    
}

console.log("\n")
console.log("\n")
console.log("\n")
console.log("\n")


//break and continue
for (let index = 1; index <=20 ; index++) {
    if (index==5) {
        console.log("Detected Value is 5")
        continue;
    }
    console.log(`Value is : ${index}`)    
}