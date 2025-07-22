const name="Sai"
const repoCount=50

// console.log(name+repoCount+"Value")

// console.log(`Hello im ${name} and my repocount is ${repoCount}`)

const getName = new String ('hitesh')
// console.log(getName)

// console.log(getName[0]);
// console.log(getName._proto_);

// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(2))
// console.log(getName.indexOf('t'))

const NewName1=getName.substring(0,4);
console.log(NewName1)

const NewName2=getName.slice(-4,-2);
console.log(NewName2)

NewName="   sai     "
console.log(NewName)
console.log(NewName.trim())

const url="https://amazon.com";
console.log(url)
console.log(url.replace('amazon','flipkart'));
console.log(url.includes('amazon'));

console.log(url.split('-'));